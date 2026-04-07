import { toast } from 'react-toastify';
import { useEffect, useState, useCallback  } from 'react';

import 'react-toastify/dist/ReactToastify.css';
import {getNotes,createNote,updateNote,deleteNote} from '../services/noteService.js';
import { validateNote, validateId } from '../utils/Validation';
import {useCategories} from './useCategories';

export const useNotes = () => {

    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useState('');

    const [showAddModal, setShowAddModal] = useState(false);

    const [showDetailModal, setShowDetailModal] = useState(null);
    
    const [newTitle, setnewTitle] = useState('');
    const [newContent, setnewContent] = useState('');

    const [editTitle, seteditTitle] = useState('');
    const [editContent, seteditContent] = useState('');

    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [noteToDelete, setNoteToDelete] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const notesPerPage = 7;

    const indexOfLastNote = currentPage * notesPerPage;
    const indexOfFirstNote = indexOfLastNote - notesPerPage;
    const currentNotes = Array.isArray(notes)
                        ? notes.slice(indexOfFirstNote, indexOfLastNote)
                        : [];

    const {categories, setcategories} = useCategories();
    const [newcategoryId, setNewCategoryID] = useState('');
    const [editcategoryId, setEditCategoryID] = useState('');
    
    //Fitur Pagination
    const getPaginationItems = () => {
        const totalPages = Math.ceil(notes.length / notesPerPage);
        const maxVisible = 5;
        let start = Math.max(currentPage - Math.floor(maxVisible / 2), 1);
        let end = start + maxVisible - 1;

        if (end > totalPages) {
        end = totalPages;
        start = Math.max(end - maxVisible + 1, 1);
        }

        const pages = [];

        // Tombol pertama (jika start > 1 dan tombol pertama belum termasuk)
        if (start > 1) {
        pages.push(1);
        }

        // Ellipsis kiri
        if (start > 2) {
        pages.push("left-ellipsis");
        }

        // Tombol tengah
        for (let i = start; i <= end; i++) {
        pages.push(i);
        }

        // Ellipsis kanan
        if (end < totalPages - 1) {
        pages.push("right-ellipsis");
        }

        // Tombol terakhir (hanya jika end < totalPages dan tombol terakhir belum termasuk)
        if (end < totalPages && !pages.includes(totalPages)) {
        pages.push(totalPages);
        }

        return pages;
    };

    const fetchNotes = useCallback(async () => {
        try {
            const res = await getNotes(search);
            if (Array.isArray(res.data)) {
                if(res.data.length >= 1)
                {
                    toast.success("Data berhasil dimuat");
                    setNotes(res.data);
                }
                else
                {
                    toast.info("Data Tidak ditemukan");
                    setNotes([]);
                }            
            }
        } catch (error) {
            console.error("Fetch error:", error);
        }
    }, [search]);


    const handleAddNote = async () => {
    try {
        const errors = validateNote({
            title: newTitle,
            content: newContent,
            
        });

        if (errors.length > 0) {
            errors.forEach(err => toast.error(err));
            return;
        }

        
        await createNote({
            title: newTitle,
            content: newContent,
            category_id: newcategoryId
        });

        toast.success("Note berhasil ditambahkan 👍");

        //Reset Data
        setnewTitle('');
        setnewContent('');
        //Close ShowModal
        setShowAddModal(false);
        //Reset list Note
        fetchNotes();
        } catch (error) {
        const message = error.response?.data?.message
        toast.error(message);
        }
    };

    const handleEditNote = async () => {
    try {
        //Cek Id
        if (!showDetailModal.id) {
            console.error("Note id missing!");
            return;
        }
        //Validasi title dan content
        const errors = validateNote({
            title: editTitle,
            content: editContent
        });

        if (errors.length > 0) {
            errors.forEach(err => toast.error(err));
            return;
        }


        await updateNote( showDetailModal.id,
        {
            title: editTitle,
            content: editContent,
            category_id: editcategoryId
        });

        toast.success("Note berhasil diubah 👍");
        //Close Modal Detail
        setShowDetailModal(null);
        //Reset List Note
        fetchNotes();
    } catch (error) {
        console.error(error);
    }
    };

    const handleDeleteNote = async (id) => {
    try {
        if(!validateId(id)) return;

        await deleteNote(noteToDelete);

        toast.success("Note berhasil Dihapus 👍");

        //Close confirm Modal
        setShowConfirmModal(false);
        //Reset Variabel Note to Delete
        setNoteToDelete(null);
        //Close Detail Modal
        setShowDetailModal(null);
        //Reset List Notes
        fetchNotes(); 
    } catch (error) {
        console.error(error);
    }
    }

    const openDetailNoteNodal = (note) => {
        setShowDetailModal(note);
        //set data textbox default Value
        seteditTitle(note.title);
        seteditContent(note.content);
        setEditCategoryID(note.categories_id)
    };

    const confirmDeleteNote = (id) => {
        setNoteToDelete(id);        
        setShowConfirmModal(true);
    };

    useEffect(() => { 
        //Reset halaman Pagination ke 1
        setCurrentPage(1);
        //menjalankan fungsi fetchnotes setiap 3 detik
        const timeout = setTimeout(() => {
            fetchNotes();
        }, 300);
        return () => clearTimeout(timeout);
        
    }, [search,fetchNotes ]);

    return{
        notes,
        search,
        setSearch,

        showAddModal,
        setShowAddModal,
        showDetailModal,
        setShowDetailModal,
        showConfirmModal,
        setShowConfirmModal,

        newTitle,
        setnewTitle,
        newContent,
        setnewContent,

        editTitle,
        seteditTitle,
        editContent,
        seteditContent,

        handleAddNote,
        handleEditNote,
        handleDeleteNote,
        openDetailNoteNodal,
        confirmDeleteNote,

        currentNotes,
        currentPage,
        notesPerPage,
        setCurrentPage,

        getPaginationItems,

        categories, setcategories,
        newcategoryId, setNewCategoryID,
        editcategoryId, setEditCategoryID
    };
}