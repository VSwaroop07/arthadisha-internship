import React, { useState } from "react";

const SimpleFormObject = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
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
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = () => {
    alert(`Name:${formData.name}\nEmail:${formData.email}\nMessage:${formData.message}`);
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };
  return (
    <div style={box}>
      <h2 style={{ textAlign: "left" }}>Task 1D State Object</h2>
      <div>
        <div style={formRow}>
          <label style={labelStyle}>Name :</label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            style={inp}
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div style={formRow}>
          <label style={labelStyle}>Email :</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            style={inp}
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div style={formRow}>
          <label style={labelStyle}>Message :</label>
          <textarea
            placeholder="Message"
            name="message"
            style={inp}
            rows={2}
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button style={BtnStyle} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default SimpleFormObject;
