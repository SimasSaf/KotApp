export async function DeleteFromTxt(index) {
  try {
    const response = await fetch(
      "https://kot-app-back.vercel.app/api/get-delete-data",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ index }), // delete by reverse index (0 = latest)
      }
    );

    const result = await response.json(); // assuming JSON response
    console.log("Delete response:", result);
    return result;
  } catch (error) {
    console.error("Error deleting row from Google Sheet:", error);
    return { status: "error", message: error.message };
  }
}
