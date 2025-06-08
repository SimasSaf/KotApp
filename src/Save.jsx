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
    "https://script.google.com/macros/s/AKfycbwo0_I7EhT-J8BdHICj-Hiz9zUW-Ok98g2phEmw81PKCCa6yDsFpRPocbn5-PxjaQr2dA/exec",
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
