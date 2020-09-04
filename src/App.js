import React from "react";
import logo from "./logo.svg";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello world...yeah!!! It's 2020</h1>
        <Weather city="London" />
      </header>
    </div>
  );
}

export default App;
