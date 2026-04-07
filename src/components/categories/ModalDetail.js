import ColorPicker from "../common/ColorPicker";
import '../../styles/modal.css';
import '../../styles/button.css';

function DetailCategoriesmodal({show, editName, setEditName, editColor, setEditColor ,onEditNote, onDeleteNote , onClose})
{
    
    if(!show) return null;
    return (
        <div className="modal-overlay">
        <div className="modal">
            <h2 className='modal-title'>Detail Kategori</h2>

            <input
                type="text"
                placeholder="Nama"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
            />

            <ColorPicker 
                color={editColor} 
                setColor={setEditColor}
            />
            <p>Warna terpilih: <strong> {editColor} </strong></p>
           

            <div className="modal-actions">
                <button className="btn-edit" onClick={onEditNote}>
                    Ubah
                </button>
                <button className="btn-delete" onClick={onDeleteNote}>Hapus</button>
                <button className="btn-close" onClick={onClose}>Batal</button>
            </div>
        </div>
        </div>
    )
}

export default DetailCategoriesmodal;