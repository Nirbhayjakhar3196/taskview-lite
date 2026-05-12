import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// Wrap <App /> with BrowserRouter from react-router-dom

ReactDOM.createRoot(document.getElementById("root")).render(
  // Wrap <App /> with BrowserRouter from react-router-dom
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
