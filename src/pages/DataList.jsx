import { useEffect, useState } from "react";
import { GetFromTxt } from "../communication/Get"; // adjust path if needed

function DataList() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const result = await GetFromTxt();
      if (result.status === "success") {
        setEntries(result.entries);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading data...</p>;

  if (!entries.length) return <p>No data found.</p>;

  return (
    <div className="dataList">
      <h2>Saved Entries</h2>
      <ul>
        {entries.map((entry, i) => (
          <li key={i}>
            <strong>Date:</strong> {entry[0]} | <strong>Dienos dalis:</strong>{" "}
            {entry[1]} | <strong>Simptomai:</strong> {entry[4]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataList;
