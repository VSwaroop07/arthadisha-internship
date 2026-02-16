function calculateTotals() {
  let subtotal = 0;
  const rows = document.querySelectorAll("tbody tr");

  rows.forEach(row => {
    let qty = parseFloat(row.querySelector(".qty").value);
    let rate = parseFloat(row.querySelector(".rate").value);

    // Safety net
    qty = isNaN(qty) || qty < 0 ? 0 : qty;
    rate = isNaN(rate) || rate < 0 ? 0 : rate;

    row.querySelector(".qty").value = qty;
    row.querySelector(".rate").value = rate;

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
document.querySelectorAll(".qty, .rate").forEach(input => {
  input.addEventListener("input", () => {
    if (input.value < 0) {
      input.value = 0;
    }
    calculateTotals();
  });
});
