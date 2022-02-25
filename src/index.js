import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//método render recibe dos parámetros. Primero va lo que queremos insertar y el segundo es dónde lo insertaremos (montar).
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
