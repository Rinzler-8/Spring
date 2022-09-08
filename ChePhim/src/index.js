import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import storeRedux from "./Redux/Store/storeRedux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeRedux}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
