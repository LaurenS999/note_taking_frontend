import ColorPicker from "../common/ColorPicker";
import '../../styles/modal.css';
import '../../styles/button.css';

function AddCategoriesmodal({show, newNama, setNewNama, newColor, setNewColor ,onSave, onClose})
{
    
    if(!show) return null;
    return (
        <div className="modal-overlay">
        <div className="modal">
            <h2 className='modal-title'>Tambah Note</h2>

            <input
                type="text"
                placeholder="Nama"
                value={newNama}
                onChange={(e) => setNewNama(e.target.value)}
            />

            <ColorPicker 
                color={newColor} 
                setColor={setNewColor}
            />
            <p>Warna terpilih: <strong> {newColor} </strong></p>
           

            <div className="modal-actions">
                <button className="btn-save" onClick={onSave}>Simpan</button>
                <button className="btn-close" onClick={onClose}>Batal</button>
            </div>
        </div>
        </div>
    )
}

export default AddCategoriesmodal;