import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Context from "./context/Context.jsx";

import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Context>
        <App />
    </Context>
);
