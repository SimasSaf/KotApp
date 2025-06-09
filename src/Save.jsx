export async function WriteToTxt(state) {
  console.log("WriteToTxt was called with state:", state);

  if (state.rytas) {
    await sendToGoogleSheet("rytas", state);
    state = clearSideEffects(state);
  }
  if (state.diena) {
    await sendToGoogleSheet("diena", state);
    state = clearSideEffects(state);
  }
  if (state.vakaras) {
    await sendToGoogleSheet("vakaras", state);
    state = clearSideEffects(state);
  }
}

function clearSideEffects(state) {
  return {
    ...state,
    sportas: false,
    alkoholis: false,
    kava: false,
    dusas: false,
  };
}

async function sendToGoogleSheet(dienosDalis, state) {
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

  try {
    const response = await fetch(
      "https://kot-app-back.vercel.app/api/communicate-with-sheets",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      }
    );

    const result = await response.text();
    console.log("Server response:", result);
    return result;
  } catch (error) {
    console.error("Error sending data to Google Sheet:", error);
    return { status: "error", message: error.message };
  }
}
