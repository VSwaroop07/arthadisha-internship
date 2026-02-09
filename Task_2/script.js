function calculateTotals() {
      let subtotal = 0;
      const rows = document.querySelectorAll("tbody tr");

      rows.forEach(row => {
        const qty = row.querySelector(".qty").value;
        const rate = row.querySelector(".rate").value;
        const amount = qty * rate;
        row.querySelector(".amount").innerText = amount.toFixed(2);
        subtotal += amount;
      });

      const gst = subtotal * 0.18;
      const grandTotal = subtotal + gst;

      document.getElementById("subtotal").innerText = "₹" + subtotal.toFixed(2);
      document.getElementById("gst").innerText = "₹" + gst.toFixed(2);
      document.getElementById("grandTotal").innerText = "₹" + grandTotal.toFixed(2);
    }

    document.querySelectorAll("input").forEach(input => {
      input.addEventListener("input", calculateTotals);
    });

    calculateTotals();