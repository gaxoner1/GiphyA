import React from "react";
import ReactDOM from "react-dom";

//import App from "./App";
import RecipeApp from "./Recipe";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <RecipeApp />
  </React.StrictMode>,
  rootElement
);
