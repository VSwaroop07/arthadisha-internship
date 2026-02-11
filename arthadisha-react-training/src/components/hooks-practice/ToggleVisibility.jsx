import React, { useState } from "react";

const ToggleVisibility = () => {
  const [visibility, setvisibility] = useState(true);
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
      <h2 style={{ textAlign: "left" }}>Task 1B</h2>
      
        {visibility && <p style={{ width: "1000px", margin: "auto" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nesciunt
        neque repudiandae, minima eius ad reprehenderit porro. Culpa vel
        molestiae at distinctio iusto unde et architecto neque totam odio
        reprehenderit libero soluta, earum veniam omnis nostrum voluptatibus
        atque porro minima maxime sunt inventore illo molestias. Ab accusantium
        aliquid laboriosam repellat?</p>}
      
      <button
        type="button"
        onClick={() => setvisibility(true)}
        style={BtnStyle}
      >
        Show
      </button>
      <button
        type="button"
        onClick={() => setvisibility(false)}
        style={BtnStyle}
      >
        Hide
      </button>
    </div>
  );
};

export default ToggleVisibility;
