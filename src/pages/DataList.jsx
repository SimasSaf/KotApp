import { useEffect, useState, useRef } from "react";
import { GetFromTxt } from "../communication/Get";
import { DeleteFromTxt } from "../communication/Delete";
import { AlertMessage } from "../components/AlertMessage";
import "./DataList.css";

function formatDate(isoDate) {
  const date = new Date(isoDate);
  return date.toLocaleDateString("lt-LT", {
    month: "2-digit",
    day: "2-digit",
  });
}

function formatSimptomai(value) {
  if (value === true) return "T";
  if (value === false) return "0";
  return value;
}

function DataList() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState(null);
  const itemRefs = useRef({});

  useEffect(() => {
    async function fetchData() {
      const dataFromSheet = await GetFromTxt();

      if (dataFromSheet.status === "success") {
        setEntries(dataFromSheet.entries.slice(0, -1));
      }

      setLoading(false);
    }

    fetchData();
  }, []);

  const requestDelete = (reverseIndex) => {
    setAlert({
      message: "Are you sure you want to delete this entry?",
      type: "confirm",
      onConfirm: async () => {
        const result = await DeleteFromTxt(reverseIndex);
        if (result.status === "success") {
          setEntries(result.entries.slice(0, -1));
          setAlert({ message: "Entry deleted.", type: "success" });
          setTimeout(() => setAlert(null), 3000);
        } else {
          setAlert({ message: result.message, type: "error" });
          setTimeout(() => setAlert(null), 3000);
        }
      },
      onCancel: () => setAlert(null),
    });
  };

  if (loading) return <p>Loading data...</p>;
  if (!entries.length) return <p>No data found.</p>;

  return (
    <div className="dataList">
      <ul className="dataList-list">
        {entries.map((entry, i) => {
          return (
            <li
              key={i}
              ref={(el) => (itemRefs.current[i] = el)}
              className="dataList-item"
            >
              <div className="dataList-summary">
                <strong>{formatDate(entry[0])}</strong> |{" "}
                <strong>Simptomai:</strong> {formatSimptomai(entry[4])}
              </div>

              <div className="dataList-details">
                {entry[1].charAt(0).toUpperCase() + entry[1].slice(1)}
                {[...Array(Number(entry[2]))].map((_, i) => (
                  <strong key={i}>💊</strong>
                ))}

                {[...Array(Number(entry[3]))].map((_, i) => {
                  <strong key={i}>⚪</strong>;
                })}
                {entry[5] ? "🏋️‍♀️" : ""}
                {entry[6] ? "🍺" : ""}
                {entry[7] ? "☕" : ""}
                {entry[8] ? "🚿" : ""}
                {entry[9] ? "🌶️" : ""}
                {entry[10] ? "🍋" : ""}
                {entry[11] ? "🍑" : ""}
                {entry[12] ? "🩸" : ""}
                <p>{entry[13] ? `Notes: ${entry[13]}` : ""}</p>

                <button
                  className="delete-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    requestDelete(i);
                  }}
                >
                  ❌
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      {alert && (
        <AlertMessage
          message={alert.message}
          type={alert.type}
          onConfirm={alert.onConfirm}
          onCancel={alert.onCancel}
        />
      )}
    </div>
  );
}

export default DataList;
