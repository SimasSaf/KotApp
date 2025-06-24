import "./AlertMessage.css";

export function AlertMessage({ message, type, onConfirm, onCancel }) {
  if (!message) return null;

  const isConfirm = type === "confirm";

  return (
    <div
      className={`alert-overlay ${
        type === "success"
          ? "alert--success"
          : type === "error"
          ? "alert--error"
          : "alert--confirm"
      }`}
    >
      <p>{message}</p>

      {isConfirm && (
        <div className="alert-actions">
          <button onClick={onConfirm} className="alert-button yes">
            Yes
          </button>
          <button onClick={onCancel} className="alert-button no">
            No
          </button>
        </div>
      )}
    </div>
  );
}
