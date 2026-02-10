import "./App.css";
import CompanyHeader from "./components/CompanyHeader";
import ClientInfo from "./components/ClientInfo";
import InvoiceTable from "./components/InvoiceTable";
import InvoiceFooter from "./components/InvoiceFooter";
import { useState } from "react";
function App() {
  const date = new Date();
  const invoiceStyle = {
    maxWidth: "900px",
    margin: "auto",
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    marginBottom: '20px',
  };
  const [totals, setTotals] = useState({
    subtotal: 0,
    gst: 0,
    grandTotal: 0,
  });
  const [totals1, setTotals1] = useState({
    subtotal: 0,
    gst: 0,
    grandTotal: 0,
  });
  return (
    <>
      <div
        className="App"
        style={{ backgroundColor: "lightslategray", borderRadius: "20px" }}
      >
        <div style={{ textAlign: "center" }}>
          <h1>Swaroop Vyawahare</h1>
          <h2>Current Date and Time: {date.toLocaleString()}</h2>
          <p>
            <b>"Don't Give Up Great Things Take Time."</b>
            <br />
            This is a motivational quote, The quote tells us that if your doing
            something 'BIG', <br />
            It will take time to complete so don't lose hope if the thing is
            taking more time then expected just keep doing the work.
          </p>
          <img
            src="logo512.png"
            alt="React Logo"
            height={200}
            width={200}
          ></img>
        </div>
      </div>
      <div style={invoiceStyle}>
        <CompanyHeader />
        <ClientInfo clientName = 'Customer1' clientEmail='client@gmail.com' 
        clientNumber='1234567890'
        clientAddress='Nashik, Maharashtra.' />
        <InvoiceTable setTotals={setTotals} />
        <InvoiceFooter totals={totals} />
      </div>
      <div style={invoiceStyle}>
        <CompanyHeader />
        <ClientInfo clientName = 'Customer2' clientEmail='client2@gmail.com' 
        clientNumber='0987654321'
        clientAddress='Pune, Maharashtra.' />
        <InvoiceTable setTotals={setTotals1} />
        <InvoiceFooter totals={totals1} />
      </div>
    </>
  );
}

export default App;
