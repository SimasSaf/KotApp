import "./AlertMessage.css";

export function AlertMessage({ message, type }) {
  if (!message) return null;

  return (
    <div
      className={`alert-overlay ${
        type === "success" ? "alert--success" : "alert--error"
      }`}
    >
      {message}
    </div>
  );
}
