import React from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
        <Forecast />
      </header>
    </div>
  );
}

export default App;
