import '../../styles/modal.css';
import '../../styles/button.css';

function AddNotemodal({show, newjudul, setNewJudul, newisi_konten, setNewIsi_Konten, categories, newcategoryId, setNewCategoryId ,onSave, onClose})
{
    if(!show) return null;
    return (
        <div className="modal-overlay">
        <div className="modal">
            <h2 className='modal-title'>Tambah Note</h2>

            <input
            type="text"
            placeholder="Judul"
            value={newjudul}
            onChange={(e) => setNewJudul(e.target.value)}
            />

            <textarea className="textArea_Content"
                placeholder="Isi catatan"
                value={newisi_konten}
                onChange={(e) => setNewIsi_Konten(e.target.value)}
            ></textarea>

             <div className="noteCategory_dropdownlist">
                <label className="form-label">Kategori</label>
                <select className="form-select" id="noteCategory" value={newcategoryId} onChange={(e) => setNewCategoryId(e.target.value)}>
                    <option key={"0"} disabled value="">Pilih Kategori...</option>
                        {categories?.map(category => (
                            <option key={categories.id} value={category.id}>{category.name}</option>
                        ))}
                </select>
            </div>

            <div className="modal-actions">
            <button className='btn-save' onClick={onSave}>Simpan</button>
            <button className='btn-close'onClick={onClose}>Batal</button>
            </div>
        </div>
        </div>
    )
}

export default AddNotemodal;