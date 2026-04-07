import '../App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Component
import SearchBar from '../components/common/SearchBar';
import NoteCard from '../components/notes/NoteCard';
import AddNotemodal from '../components/notes/ModalAdd';
import ConfirmDeleteModal from '../components/common/ModalConfirmasi';
import DetailNoteModal from '../components/notes/ModalDetail';
import Pagination from '../components/common/Pagination';
import {useNotes} from '../hooks/useNotes';

const NotesPage = () =>
{
    const{
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
        
        setCurrentPage,

        getPaginationItems,

        categories,
        newcategoryId, setNewCategoryID,
        editcategoryId, setEditCategoryID
  } = useNotes();
  
  return (
    
    <div className="Body">
      <SearchBar
        search={search}
        setSearch={setSearch}
        button = {"Tambah Note"}
        onAddclick={() => setShowAddModal(true)}
      />

      {currentNotes?.map(note => (
        <NoteCard
          id={note.id}
          title={note.title}
          content={note.content}
          code_color ={categories.find((cat) => cat.id === note.categories_id)?.code_color}
          updated_at={note.updated_at}
          onOpenModal = {() => openDetailNoteNodal(note)}
        />  
      ))}

      <Pagination
        currentPage={currentPage}
        
        onPageChange= {setCurrentPage}
        tes = {getPaginationItems()}
      />

      <AddNotemodal
        show= {showAddModal}
        newjudul={newTitle}
        setNewJudul={setnewTitle}
        newisi_konten={newContent}
        setNewIsi_Konten={setnewContent}
        categories= {categories}
        newcategoryId = {newcategoryId}
        setNewCategoryId = {setNewCategoryID}
        onSave={handleAddNote}
        onClose={() => setShowAddModal(false)}
      />

      <DetailNoteModal
        show={showDetailModal}
        editTitle = {editTitle}
        seteditTitle={seteditTitle}
        editContent={editContent}
        seteditContent={seteditContent}
        categories= {categories}
        editcategoryId = {editcategoryId}
        setEditCategoryID = {setEditCategoryID}
        onEditNote={handleEditNote}
        onDeleteNote = {() => confirmDeleteNote(showDetailModal.id)}
        onClose={() => setShowDetailModal(null)}
      />

      <ConfirmDeleteModal
        show={showConfirmModal}
        tabel={"Catatan"}
        OnConfirm={handleDeleteNote}
        OnCancel={() => setShowConfirmModal(false)}
      />

       <ToastContainer/>
    </div>
  );
}

export default NotesPage;