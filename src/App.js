import React, { useState } from "react";
import "./App.css";
import { Line } from "rc-progress";

const App = () => {
  const [percentage, setPercentage] = useState(0);
  return (
    <div className="App">
      <div className="App-intro-container">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      <div className="App-button">
        <button
          type="button"
          className="btn1"
          onclick={setPercentage(
            percentage + 10 >= 100 ? percentage + 10 : percentage
          )}
        >
          +10
        </button>
      </div>
      <div className="App-progress-bar">
        <Line percent={percentage} strokeWidth="4" strokeColor="#D3D3D3" />
      </div>
    </div>
  );
};

export default App;
