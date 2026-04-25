import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

// [Aaditya]: React starts here by mounting the root App component.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* [Aaditya]: BrowserRouter enables client-side routing for the project. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
