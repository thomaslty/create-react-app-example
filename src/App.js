import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import bg from "./asset/background.png";

const App = () => {
  const [testMsg, setTestMsg] = useState("");
  useEffect(() => {
    setTestMsg("testmsg2");
  }, [setTestMsg]);
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      <div>
        <p>{testMsg}</p>
        <img src={bg} alt="bg" />
      </div>
    </>
  );
};

export default App;
