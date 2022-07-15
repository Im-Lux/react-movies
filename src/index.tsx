import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { ModalInfoContextProvider } from "./context/modal-info-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ModalInfoContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ModalInfoContextProvider>
  </React.StrictMode>
);
