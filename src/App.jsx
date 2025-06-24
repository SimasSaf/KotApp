import { useState } from "react";
import "./App.css";
import CardForm from "./pages/CardForm";
import DataList from "./pages/DataList"; // adjust path if needed

function App() {
  const [showList, setShowList] = useState(false);

  return (
    <div className="App">
      <button
        className="navigationButton"
        onClick={() => setShowList((prev) => !prev)}
      >
        {showList ? "📋" : "📝"}
      </button>

      {showList ? <DataList /> : <CardForm />}
    </div>
  );
}

export default App;
