import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { Board } from "./components/Board.jsx";
// import PrimeraApp from './PrimeraApp'
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

// console.log(divRoot);

root.render(<Board row={6} col={6} size={{ value: 80, margin: 4 }} />);
