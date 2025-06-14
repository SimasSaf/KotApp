export async function GetFromTxt() {
  try {
    const response = await fetch(
      "https://kot-app-back.vercel.app/api/get-delete-data",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await response.json(); // assuming the response is JSON
    console.log("Fetched entries:", result);
    return result;
  } catch (error) {
    console.error("Error fetching data from Google Sheet:", error);
    return { status: "error", message: error.message };
  }
}
