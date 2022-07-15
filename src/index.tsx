import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { ModalInfoContextProvider } from "./context/modal-info-context";
import { FavoritesContextProvider } from "./context/favorites-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ModalInfoContextProvider>
      <FavoritesContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FavoritesContextProvider>
    </ModalInfoContextProvider>
  </React.StrictMode>
);
