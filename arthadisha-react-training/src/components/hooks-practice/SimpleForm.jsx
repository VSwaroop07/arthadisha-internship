import React, { useState } from "react";

const SimpleForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const BtnStyle = {
    margin: "10px",
    padding: "10px",
    borderRadius: "5px",
    marginTop: "10px",
  };
  const box = {
    border: "white 2px solid",
    textAlign: "center",
    gap: "13px",
    margin: "30px",
    padding: "10px",
    borderRadius: "10px",
  };
  const inp = {
    margin: "10px",
    padding: "10px",
  };
  const labelStyle = {
    width: "80px",
  };
  const formRow = {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    justifyContent: "center",
  };
  const handleSubmit = () => {
  alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  setName("");
  setEmail("");
  setMessage("");
};
  return (
    <div style={box}>
      <h2 style={{ textAlign: "left" }}>Task 1D</h2>
      <div>
        <div style={formRow}>
          <label style={labelStyle}>Name :</label>
          <input
            type="text"
            placeholder="Enter name"
            style={inp}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div style={formRow}>
          <label style={labelStyle}>Email :</label>
          <input
            type="email"
            placeholder="Enter email"
            style={inp}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={formRow}>
          <label style={labelStyle}>Message :</label>
          <textarea
            placeholder="Message"
            style={inp}
            rows={2}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button style={BtnStyle} onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default SimpleForm;
