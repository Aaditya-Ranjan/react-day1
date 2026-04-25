import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// [Aaditya]: React starts here by mounting the root App component.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
