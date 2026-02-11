import React, { useEffect, useState } from "react";

const LiveClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    });
    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTime = (time) => {
    return time.toLocaleTimeString();
  };

  const box = {
    border: "white 2px solid",
    textAlign: "center",
    gap: "13px",
    margin: "30px",
    padding: "10px",
    borderRadius: "10px",
  };
  
  return (
    <div style={box}>
      <h2 style={{ textAlign: "left" }}>Task 2B</h2>
      <div>
        <h2>Live Clock</h2>
        <h3>{formatTime(time)}</h3>
      </div>
    </div>
  );
};

export default LiveClock;
