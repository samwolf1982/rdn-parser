import React from 'react';
import { MaterialUIControllerProvider } from "./src/context";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./src/App";
ReactDOM.render(
    <BrowserRouter>
        <MaterialUIControllerProvider>
            <App />
        </MaterialUIControllerProvider>
    </BrowserRouter>,
    document.getElementById("appAdmin")
);
