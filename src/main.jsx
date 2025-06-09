import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const hour = new Date().getHours();
const isDay = hour <= 20 && hour >= 9;

if (isDay) {
  document.documentElement.classList.add("day-theme"); // document.documentElement is <html>
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
