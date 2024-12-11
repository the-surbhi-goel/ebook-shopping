import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./context-reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FilterProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FilterProvider>
  </React.StrictMode>
);
