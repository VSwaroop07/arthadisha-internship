import React, { useRef, useState } from "react";

const StopWatch = () => {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setSeconds(0);
  };
  const box = {
    border: "white 2px solid",
    textAlign: "center",
    gap: "13px",
    margin: "30px",
    padding: "10px",
    borderRadius: "10px",
  };
  const BtnStyle = {
    margin: "10px",
    padding: "10px",
    borderRadius: "5px",
  };
  return (
    <div style={box}>
      <h2 style={{ textAlign: "left" }}>Task 4B</h2>

      <h2>Stopwatch</h2>
      <h3>{seconds} seconds</h3>

      <button onClick={handleStart} style={BtnStyle}>Start</button>
      <button onClick={handleStop} style={BtnStyle}>Stop</button>
      <button onClick={handleReset} style={BtnStyle}>Reset</button>
    </div>
  );
};

export default StopWatch;
