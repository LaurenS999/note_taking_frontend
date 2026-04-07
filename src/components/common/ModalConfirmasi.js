function ConfirmDeleteModal({show, tabel ,OnConfirm, OnCancel})
{
  if(!show) return null;
  return (
      <div className="modal-overlay">
        <div className="modal">
          <h3>Konfirmasi Hapus</h3>
          <p>Apakah Anda yakin ingin menghapus {tabel} ini?</p>

          <div className="modal-actions">
            <button onClick={OnConfirm}>Ya, Hapus</button>
            <button onClick={OnCancel}>Batal</button>
          </div>
        </div>
      </div>
    )
}

export default ConfirmDeleteModal;