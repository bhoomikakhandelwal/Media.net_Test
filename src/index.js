import React from "react";
import ReactDOM from "react-dom";
import MainPageLayout from "../components/MainPageLayout";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <MainPageLayout />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
