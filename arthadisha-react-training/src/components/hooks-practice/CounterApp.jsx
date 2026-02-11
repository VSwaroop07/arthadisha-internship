import React, { useState } from "react";

const CounterApp = () => {
  const [counter, setCounter] = useState(0);
  const BtnStyle = {
    margin: "10px",
    padding: "10px",
    borderRadius: "5px",
  };
  const box = {
    border: "white 2px solid",
    textAlign: "center",
    gap: "13px",
    margin: "30px",
    padding: "10px",
    borderRadius: "10px",
  };
  const decrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <div style={box}>
      <h2 style={{textAlign: 'left'}}>Task 1A</h2>
      <h1>{counter}</h1>
      <button
        type="button"
        onClick={() => setCounter(counter + 1)}
        style={BtnStyle}
      >
        +1
      </button>
      <button type="button" onClick={decrease} style={BtnStyle}>
        -1
      </button>
    </div>
  );
};

export default CounterApp;
