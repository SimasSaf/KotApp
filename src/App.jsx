import { useState } from "react";
import "./App.css";
import CardForm from "./pages/CardForm";
import DataList from "./pages/DataList"; // adjust path if needed

function App() {
  const [showList, setShowList] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShowList((prev) => !prev)}>
        {showList ? "Back to Form" : "View Entries"}
      </button>

      {showList ? <DataList /> : <CardForm />}
    </div>
  );
}

export default App;
