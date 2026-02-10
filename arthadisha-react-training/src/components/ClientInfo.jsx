import React from "react";

const ClientInfo = ({clientName, clientEmail, clientNumber, clientAddress}) => {

  return (
    <div>
      <div style={{marginBottom: '20px',}}>
        <h3 style={{marginBottom: '8px', color: '#444',}}>Bill To:</h3>
        <p>Name: {clientName}</p>
        <p>Email: {clientEmail}</p>
        <p>Phone: +91 {clientNumber}</p>
        <p>Address: {clientAddress}</p>
      </div>
    </div>
  );
};

export default ClientInfo;
