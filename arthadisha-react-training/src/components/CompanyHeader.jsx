import React from "react";
const CompanyHeader = () => {
    const HeaderStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      marginBottom: '20px',
    }
    const Logo = {
      width: '100px',
      height: '60px',
      background: '#ddd',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#666',
      borderRadius: '4px',
    }
  return (
    <div>
      <div style={HeaderStyle}>
        <div>
          <h1 style={{color: '#333'}}>ArthaDisha</h1>
          <p>7, Natraj Plaza, College Road.</p>
          <p>Nashik, Maharashtra, India</p>
        </div>
        <div style={Logo}>
          <img
            src="/Logo.png"
            alt="ArthaDisha Logo"
            height="80"
            width="100"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default CompanyHeader;
