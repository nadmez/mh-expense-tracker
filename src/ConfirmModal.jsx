import './ConfirmModal.css'

function ConfirmModal({ onConfirm, onCancel }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>Are you sure you want to delete this transaction?</p>
        <div className="modal-actions">
          <button className="btn-confirm" onClick={onConfirm}>Delete</button>
          <button className="btn-cancel" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
