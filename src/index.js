import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store/store";
ReactDom.render(
    <React.StrictMode>
        <Provider store={store}></Provider>
        <App></App>
    </React.StrictMode>,
    document.getElementById("root")
);
reportWebVitals();
