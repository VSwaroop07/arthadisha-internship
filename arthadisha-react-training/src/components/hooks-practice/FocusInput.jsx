import React, { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };
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
  return (
    <div style={box}>
        <h2 style={{ textAlign: "left" }}>Task 4A</h2>
      <div style={{ padding: "20px" }}>
        <input
          type="text"
          placeholder="Click button to focus"
          ref={inputRef}
          style={{ padding: "8px", marginRight: "10px" }}
        />

        <button onClick={handleFocus} style={BtnStyle}>Focus Input</button>
      </div>
    </div>
  );
};

export default FocusInput;
