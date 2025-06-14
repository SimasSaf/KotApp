import { useState } from "react";
import "./CardForm.css";
import { WriteToTxt } from "./Save";

function CardForm() {
  const uvaminButtonNumber = 3;
  const angocingButtonNumber = 7;

  const today = new Date().toISOString().split("T")[0];

  const [date, setDate] = useState(today);

  const [isRytas, setRytas] = useState(false);
  const [isDiena, setDiena] = useState(false);
  const [isVakaras, setVakaras] = useState(false);

  const [uvamin, setUvamin] = useState("1");
  const [angocin, setAngocin] = useState("0");

  const [simptomai, setSimptomai] = useState(0);

  const [sportas, setSportas] = useState(false);
  const [alkoholis, setAlkoholis] = useState(false);
  const [kava, setKava] = useState(false);
  const [dusas, setDusas] = useState(false);
  const [spicy, setSpicy] = useState(false);
  const [citrina, setCitrina] = useState(false);
  const [fun, setFun] = useState(false);

  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    var state = {
      date: date,
      rytas: isRytas,
      diena: isDiena,
      vakaras: isVakaras,
      uvamin: uvamin,
      angocin: angocin,
      simptomai: simptomai,
      sportas: sportas,
      alkoholis: alkoholis,
      kava: kava,
      dusas: dusas,
      spicy: spicy,
      citrina: citrina,
      fun: fun,
      notes: notes,
    };

    if (state.rytas || state.diena || state.vakaras) {
      WriteToTxt(state);

      alert("Submitted");

      ResetEverything();
      // window.location.reload();
    } else {
      alert("Please select time of day");
    }
  };

  return (
    <div className="wholeForm">
      <input
        className="datePicker"
        type="date"
        onChange={(e) => setDate(e.target.value)}
        defaultValue={today}
      />
      <div className="timeOfDayWrapper">
        <button
          onClick={() => setRytas((prev) => !prev)}
          className={`rytas ${isRytas ? "rytas--selected" : ""}`}
        >
          Rytas
        </button>
        <button
          onClick={() => setDiena((prev) => !prev)}
          className={`diena ${isDiena ? "diena--selected" : ""}`}
        >
          Diena
        </button>
        <button
          onClick={() => setVakaras((prev) => !prev)}
          className={`vakaras ${isVakaras ? "vakaras--selected" : ""}`}
        >
          Vakaras
        </button>
      </div>
      <div className="drugWrapper">
        <div className="drug">
          <p>Uvamin</p>
          {Array.from({ length: uvaminButtonNumber }).map((_, i) => {
            const value = String(i);
            return (
              <button
                key={i}
                value={value}
                onClick={(e) => setUvamin(e.target.value)}
                className={`drugButton ${
                  uvamin === value ? "drugButton--selected" : ""
                }`}
              >
                {value}
              </button>
            );
          })}
        </div>
        <div className="drug">
          <p>Angocin</p>
          {Array.from({ length: angocingButtonNumber }).map((_, i) => {
            const value = String(i);
            return (
              <button
                key={i}
                value={value}
                onClick={(e) => setAngocin(e.target.value)}
                className={`drugButton ${
                  angocin === value ? "drugButton--selected" : ""
                }`}
              >
                {value}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <p className="simptomai">Simptomai</p>

        <button
          className={`slider-left ${
            simptomai >= 0 ? "slider-left--selected" : ""
          } ${simptomai === 0 ? "slider-left--selected-equal" : ""}`}
          onClick={() => setSimptomai(0)}
        >
          0
        </button>

        <button
          className={`slider-middle ${
            simptomai >= 1 ? "slider-middle--selected" : ""
          } ${simptomai === 1 ? "slider-middle--selected-equal" : ""}`}
          onClick={() => setSimptomai(1)}
        >
          1
        </button>

        <button
          className={`slider-middle ${
            simptomai >= 2 ? "slider-middle--selected" : ""
          } ${simptomai === 2 ? "slider-middle--selected-equal" : ""}`}
          onClick={() => setSimptomai(2)}
        >
          2
        </button>

        <button
          className={`slider-middle ${
            simptomai >= 3 ? "slider-middle--selected" : ""
          } ${simptomai === 3 ? "slider-middle--selected-equal" : ""}`}
          onClick={() => setSimptomai(3)}
        >
          3
        </button>

        <button
          className={`slider-middle ${
            simptomai >= 4 ? "slider-middle--selected" : ""
          } ${simptomai === 4 ? "slider-middle--selected-equal" : ""}`}
          onClick={() => setSimptomai(4)}
        >
          4
        </button>

        <button
          className={`slider-right ${
            simptomai >= 5 ? "slider-right--selected" : ""
          } ${simptomai === 5 ? "slider-right--selected-equal" : ""}`}
          onClick={() => setSimptomai(5)}
        >
          5
        </button>
      </div>

      <div className="sideEffectWrapper">
        <button
          className={`sideButton ${
            sportas === true ? "sideButton--selected" : ""
          }`}
          onClick={() => setSportas((prev) => !prev)}
        >
          🏋️‍♀️
        </button>
        <button
          className={`sideButton ${
            alkoholis === true ? "sideButton--selected" : ""
          }`}
          onClick={() => setAlkoholis((prev) => !prev)}
        >
          🍺
        </button>
        <button
          className={`sideButton ${
            kava === true ? "sideButton--selected" : ""
          }`}
          onClick={() => setKava((prev) => !prev)}
        >
          ☕
        </button>
        <button
          className={`sideButton ${
            dusas === true ? "sideButton--selected" : ""
          }`}
          onClick={() => setDusas((prev) => !prev)}
        >
          🚿
        </button>
        <button
          className={`sideButton ${
            spicy === true ? "sideButton--selected" : ""
          }`}
          onClick={() => setSpicy((prev) => !prev)}
        >
          🌶️
        </button>
        <button
          className={`sideButton ${
            citrina === true ? "sideButton--selected" : ""
          }`}
          onClick={() => setCitrina((prev) => !prev)}
        >
          🍋
        </button>
        <button
          className={`sideButton ${fun === true ? "sideButton--selected" : ""}`}
          onClick={() => setFun((prev) => !prev)}
        >
          🍑
        </button>
      </div>
      <div className="notes">
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Notes Notes Notes Notes Notes Notes Notes Notes Notes Notes Notes Notes Notes Notes Notes"
          rows={3}
          cols={40}
        />
      </div>
      <button className="submitButton" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );

  function ResetEverything() {
    setDate(today);

    setRytas(false);
    setDiena(false);
    setVakaras(false);

    setUvamin("1");
    setAngocin("0");

    setSimptomai(0);

    setSportas(false);
    setAlkoholis(false);
    setKava(false);
    setDusas(false);
    setSpicy(false);
    setCitrina(false);
    setFun(false);

    setNotes("");
  }
}

export default CardForm;
