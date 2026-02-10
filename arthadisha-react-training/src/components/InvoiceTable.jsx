import React, { useEffect, useState } from "react";

const InvoiceTable = ({ setTotals }) => {
  const tableThTd = {
    border: "1px solid #ddd",
    padding: "10px",
    textAlign: "center",
  };

  const tableTh = {
    background: "#f0f0f0",
  };

  const inputStyle = {
    width: "100%",
    padding: "5px",
    textAlign: "center",
  };

  const Th = ({ children }) => (
    <th style={{ ...tableThTd, ...tableTh }}>{children}</th>
  );

  const Td = ({ children }) => <td style={tableThTd}>{children}</td>;

  const [rows, setRows] = useState([
    { item: "Service A", qty: 1, rate: 1000 },
    { item: "Service B", qty: 2, rate: 500 },
    { item: "Service C", qty: 1, rate: 750 },
    { item: "Service D", qty: 3, rate: 300 },
    { item: "Service E", qty: 1, rate: 450 },
  ]);

  useEffect(() => {
    const subtotal = rows.reduce(
      (sum, row) => sum + row.qty * row.rate,
      0
    );
    const gst = subtotal * 0.18;
    const grandTotal = subtotal + gst;

    setTotals({ subtotal, gst, grandTotal });
  }, [rows, setTotals]);

  const handleChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = Math.max(0, Number(value));
    setRows(updatedRows);
  };

  return (
    <div>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "20px",
        }}
      >
        <thead>
          <tr>
            <Th>Item</Th>
            <Th>Qty</Th>
            <Th>Rate (₹)</Th>
            <Th>Amount (₹)</Th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <Td>{row.item}</Td>

              <Td>
                <input
                  type="number"
                  min="0"
                  value={row.qty}
                  style={inputStyle}
                  onChange={(e) =>
                    handleChange(index, "qty", e.target.value)
                  }
                />
              </Td>

              <Td>
                <input
                  type="number"
                  min="0"
                  value={row.rate}
                  style={inputStyle}
                  onChange={(e) =>
                    handleChange(index, "rate", e.target.value)
                  }
                />
              </Td>

              <Td>{(row.qty * row.rate).toFixed(2)}</Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceTable;
