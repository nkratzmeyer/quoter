/* jshint esversion : 9 */
let quoteTotal = 0.0;

document.getElementById("btn-print").addEventListener("click", function() {
  window.print();
});

document.getElementById("btn-add-item").addEventListener("click", function() {
  const desc = document.getElementById("input-item-description").value;
  const price = document.getElementById("input-item-price").value;
  const qty = document.getElementById("input-item-qty").value;

  console.log(desc);
  addItem(desc, price, qty);
});

function addItem(desc, price, qty) {
  const row = document.createElement("tr");

  //Description
  const itmDesc = document.createElement("td");
  const descText = document.createTextNode(desc);
  itmDesc.appendChild(descText);
  row.appendChild(itmDesc);

  //Price
  const itmPrice = document.createElement("td");
  const priceText = document.createTextNode(price);
  itmPrice.appendChild(priceText);
  row.appendChild(itmPrice);

  //Quantity
  const itmQty = document.createElement("td");
  const qtyText = document.createTextNode(qty);
  itmQty.appendChild(qtyText);
  row.appendChild(itmQty);

  //Total
  const lineTotal = parseFloat(price) * parseInt(qty);

  const itmTotal = document.createElement("td");
  const totalText = document.createTextNode("$" + lineTotal);
  itmTotal.appendChild(totalText);
  row.appendChild(itmTotal);

  document.getElementById("line-items").appendChild(row);

  quoteTotal += lineTotal;
  document.getElementById("quote-total").textContent = "$" + quoteTotal;
}

$(function() {
  $("#toggler").change(function() {
    console.log(this.checked);
    if (this.checked) {
      document.getElementById("document-type").textContent = "Work Estimate";
    } else {
      document.getElementById("document-type").textContent = "Invoice";
    }
  });
});
