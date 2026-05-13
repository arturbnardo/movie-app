import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext.tsx";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <MovieProvider>
        <App />
      </MovieProvider>
    </Router>
  </StrictMode>,
);
