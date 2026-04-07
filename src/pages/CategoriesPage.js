import '../App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Component
import SearchBar from '../components/common/SearchBar';
import AddCategoriesmodal from '../components/categories/ModalAdd';
import CategoryCard from '../components/categories/CategoryCard';
import ConfirmDeleteModal from '../components/common/ModalConfirmasi';
import DetailCategoriesmodal from '../components/categories/ModalDetail';
import { useCategories } from '../hooks/useCategories';

const CategoriesPage = () =>
{   
  const{
      categories,
      search,
      setSearch,

      showAddModal,setShowAddModal,
      showDetailModal,setShowDetailModal,
      showConfirmModal,setShowConfirmModal,

      newName, 
      setNewName,
      newColor, 
      setNewColor,

      editName, setEditName,
      editColor, setEditColor,

      handleAddCategory,
      handleEditCategory,
      handleDeleteCategory,
      openDetailCategoryModal,
      confirmDeleteCategory,
    } = useCategories();
  
  return (  
     <div className="Body">
      <SearchBar
        search={search}
        setSearch={setSearch}
        button={"Tambah Kategori"}
        onAddclick={() => setShowAddModal(true)}
      />

      <AddCategoriesmodal
        show={showAddModal}
        newNama={newName}
        setNewNama={setNewName}
        newColor={newColor}
        setNewColor={setNewColor}
        onSave={handleAddCategory}
        onClose={() => setShowAddModal(false)}
      />
      <div className="category_grid">
        {categories.map(category => (
            <CategoryCard
              id={category.id}
              name={category.name}
              code_color={category.code_color}
              onOpenModal={() =>openDetailCategoryModal(category)}
            />
        ))}
      </div>
      
      <DetailCategoriesmodal
        show={showDetailModal}
        editName={editName}
        setEditName={setEditName}
        editColor={editColor}
        setEditColor={setEditColor}
        onEditNote={handleEditCategory}
        onDeleteNote={() => confirmDeleteCategory(showDetailModal.id)}
        onClose={() =>setShowDetailModal(null)}

      />

      <ConfirmDeleteModal
        show={showConfirmModal}
        tabel={"Catatan"}
        OnConfirm={handleDeleteCategory}
        OnCancel={() => setShowConfirmModal(false)}
      />


       <ToastContainer/>
    </div>
  );
}

export default CategoriesPage;