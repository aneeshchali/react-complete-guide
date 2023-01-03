import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";
import DemoOutput from "./components/UI/Button/Demo/DemoOutput";

function App() {
  const [showParagraph, setshowParagraph] = useState(false);
  const [AllowToggle, setAllowToggle] = useState(false);

  console.log("app running");
  const toggleHandler = useCallback(() => {
    if (AllowToggle) {
      setshowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [AllowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle((prevShowParagraph) => !prevShowParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}></DemoOutput>
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <br></br>
      <Button onClick={toggleHandler}>Toggle</Button>
    </div>
  );
}

export default App;
