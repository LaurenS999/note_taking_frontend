import { useEffect, useState, useCallback  } from 'react';
import { toast } from 'react-toastify';

import { getCategories, createCategories, updateCategories, deleteCategories } from '../services/categoriService';
import { validateCategories, validateId } from '../utils/Validation';


export const useCategories = () => {
    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState('');

    const [showAddModal, setShowAddModal] = useState(false);
    const [showDetailModal, setShowDetailModal] = useState(null);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const [newName, setNewName] = useState('');
    const [newColor, setNewColor] = useState('#000000');

    const [editName, setEditName] = useState('');
    const [editColor, setEditColor] = useState('#FFFFFF');
    const [categoryToDelete, setCategoryToDelete] = useState(null);

  const fetchCategories = useCallback(async () => {
      try {
          const res = await getCategories(search);
          if (Array.isArray(res.data)) {
              if(res.data.length >= 1)
              {
                  toast.success("Kategori berhasil dimuat");
                  setCategories(res.data);
              }
              else
              {
                  toast.info("Kategori Tidak ditemukan");
                  setCategories([]);
              }            
          }
      } catch (error) {
          toast.info("Terjadi Error : ", error);
      }
  }, [search]);

  const handleAddCategory = async () => {
      try {
          const errors = validateCategories({
              name: newName,
              code_color: newColor
          });
  
          if (errors.length > 0) {
              errors.forEach(err => toast.error(err));
              return;
          }
  
          
          const response = await createCategories({
              name: newName,
              code_color: newColor
          });
  
          toast.success(response?.data?.message + " 👍");
          fetchCategories();
          setNewName('');
          setNewColor('');
  
          setShowAddModal(false);
  

          } catch (error) {
            const message = error.response?.data?.message
            toast.error(message);
          }
      };

    const handleEditCategory = async () => {
        try {
            if (!showDetailModal.id) {
            console.error("Note id missing!");
            return;
            }
    
            const errors = validateCategories({
                name: editName,
                code_color: editColor
            });
    
            if (errors.length > 0) {
            errors.forEach(err => toast.error(err));
            return;
            }
    
    
            await updateCategories( showDetailModal.id,
            {
                name: editName,
                code_color: editColor
            });
    
            toast.success("Kategori berhasil diubah 👍");
            
            setShowDetailModal(null);
            fetchCategories();

        } catch (error) {
            console.error(error);
        }
      };
    
      const handleDeleteCategory = async (id) => {
        try {
            if(!validateId(id)) return;
    
            await deleteCategories(categoryToDelete);
    
            toast.success("Note berhasil Dihapus 👍");
    
            setShowConfirmModal(false);
            setCategoryToDelete(null);
            setShowDetailModal(null);
            fetchCategories();
            
        } catch (error) {
            console.error(error);
        }
      }

      const openDetailCategoryModal = (category) => {
        setShowDetailModal(category);
        setEditName(category.name);
        setEditColor(category.code_color);
      };

      const confirmDeleteCategory = (id) => {
        setCategoryToDelete(id);        // simpan id note yang ingin dihapus
        setShowConfirmModal(true);  // tampilkan modal
      };

    useEffect(() => { 
      const timeout = setTimeout(() => {
          fetchCategories();
      }, 300);
      return () => clearTimeout(timeout);
      
  }, [search, fetchCategories ]);

    return{
        categories,
        search,
        setSearch,

        showAddModal,setShowAddModal,
        showDetailModal,setShowDetailModal,
        showConfirmModal,setShowConfirmModal,

        newName, setNewName,
        newColor, setNewColor,

        editName, setEditName,
        editColor, setEditColor,

        handleAddCategory,
        handleEditCategory,
        handleDeleteCategory,
        openDetailCategoryModal,
        confirmDeleteCategory,
    };
}