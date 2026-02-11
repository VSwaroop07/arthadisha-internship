import React, { useState } from 'react'

const BackgroundColorChanger = () => {
    const [color, setColor] = useState("red");
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
        <h2 style={{textAlign: 'left'}}>Task 1C</h2>
      <div style={{height: '300px', width: '300px', backgroundColor: color, margin: 'auto'}}>
      </div>
      <h4>Current Color : {color}</h4>
      <button
        type="button"
        onClick={() => setColor("red")}
        style={BtnStyle}
      >
        red
      </button>
      <button
        type="button"
        onClick={() => setColor("blue")}
        style={BtnStyle}
      >
        blue
      </button>
      <button
        type="button"
        onClick={() => setColor("green")}
        style={BtnStyle}
      >
        green
      </button>
      <button
        type="button"
        onClick={() => setColor("#FFD700")}
        style={BtnStyle}
      >
        yellow
      </button>
      <button
        type="button"
        onClick={() => setColor("purple")}
        style={BtnStyle}
      >
        purple
      </button>
    </div>
  )
}

export default BackgroundColorChanger
