import '../../styles/modal.css';
import '../../styles/button.css';

function DetailNoteModal({show, editTitle, seteditTitle, editContent, seteditContent, onEditNote, categories ,editcategoryId, setEditCategoryID ,onDeleteNote, onClose})
{
    if(!show) return null;
    return (
        <div className="modal-overlay">
            <div className="modal">
            <h2 className='modal-title'>Detail Note</h2>

            <input
                type="text"
                placeholder="Judul"
                value={editTitle}
                onChange={(e) => seteditTitle(e.target.value)}
            />

            <textarea className="textArea_Content"
                placeholder="Isi catatan"
                
                value={editContent}
                onChange={(e) => seteditContent(e.target.value)}
            ></textarea>

            <div className="noteCategory_dropdownlist">
                <label className="form-label">Kategori</label>
                <select className="form-select" id="noteCategory" value={editcategoryId} onChange={(e) => setEditCategoryID(e.target.value)}>
                        {categories?.map(category => (
                            <option key={categories.id} value={category.id}>{category.name}</option>
                            
                        ))}
                </select>
            </div>

            <div className="modal-actions">
                <button className='btn-edit' onClick={onEditNote}>
                    Ubah
                </button>
                <button className='btn-delete' onClick={onDeleteNote}>Hapus</button>
                <button className='btn-close'onClick={onClose}>Batal</button>
            </div>
            </div>
        </div>
    )
}
export default DetailNoteModal;