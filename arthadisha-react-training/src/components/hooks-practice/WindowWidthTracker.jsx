import React, { useEffect, useState } from "react";

const WindowWidthTracker = () => {
  const [windowsize, setWindowsize] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowsize(window.innerWidth);
  };
  const box = {
    border: "white 2px solid",
    textAlign: "center",
    gap: "13px",
    margin: "30px",
    padding: "10px",
    borderRadius: "10px",
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  let deviceType = "";

  if (windowsize < 768) {
    deviceType = "Mobile";
  } else if (windowsize <= 1024) {
    deviceType = "Tablet";
  } else {
    deviceType = "Desktop";
  }
  return (
    <div style={box}>
      <h2 style={{ textAlign: "left" }}>Task 2C</h2>
      <p>Current browser window width: {windowsize}px</p>
      <p>Device Type: {deviceType}</p>
    </div>
  );
};

export default WindowWidthTracker;
