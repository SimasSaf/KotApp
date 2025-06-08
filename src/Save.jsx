export function WriteToTxt(state) {
  if (state.rytas) {
    sendToGoogleSheet("rytas", state);
  }
  if (state.diena) {
    sendToGoogleSheet("diena", state);
  }
  if (state.vakaras) {
    sendToGoogleSheet("vakaras", state);
  }
}

function sendToGoogleSheet(dienosDalis, state) {
  const dataToSend = {
    data: state.date,
    dienosDalis: dienosDalis,
    uvamin: state.uvamin,
    angocin: state.angocin,
    simptomai: state.simptomai,
    sportas: state.sportas,
    alkoholis: state.alkoholis,
    kava: state.kava,
    dusas: state.dusas,
    pastabos: state.notes,
  };

  fetch(
    "https://script.google.com/macros/s/AKfycbx-3b9s4NMIn4_nM-3TYq6nwzByoBqLhNuD0R2ifRK9hFE3QwvXoP0qHBDpeqtKZFoyIw/exec",
    {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    }
  );
}
