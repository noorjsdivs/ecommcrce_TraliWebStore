import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import "rsuite/styles/index.less";
import "react-toastify/dist/ReactToastify.css";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
