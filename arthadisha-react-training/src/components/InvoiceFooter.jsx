import React from "react";

const InvoiceFooter = ({totals}) => {
  const totalsStyle = {
    maxWidth: '300px',
    marginLeft: 'auto',
  }
  const totalsDiv = {
    display: 'flex',
    justifyContent: 'space-between',
    margiBnottom: '8px',
  }
  const grantTotal = {
    fontWeight: 'bold',
    fontSize: '1.1rem',
  }
  return (
    <div>
      <div style={totalsStyle}>
        <div style={totalsDiv}>
          <span>Subtotal</span>
          <span id="subtotal">₹{(totals?.subtotal ?? 0).toFixed(2)}</span>
        </div>
        <div style={totalsDiv}>
          <span>GST (18%)</span>
          <span id="gst">₹{(totals?.gst ?? 0).toFixed(2)}</span>
        </div>
        <div className="grand-total" style={totalsDiv}>
          <span style={grantTotal}>Grand Total</span>
          <span style={grantTotal} id="grandTotal">₹{(totals?.grandTotal ?? 0).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default InvoiceFooter;
