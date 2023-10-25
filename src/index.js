import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { App } from "./components";

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App/>);