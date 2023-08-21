// Constants that repeat multiple times
const totalAmount = document.getElementById("total");
const discountField = document.getElementById("discount");
const grandTotalAmount = document.getElementById("grand-total");
const entryPoint = document.getElementById("item-list");
const makePurchaseBtn = document.getElementById("make-purchase");
const cuponCodeInput = document.getElementById("cupon-code-input");
const applyButton = document.getElementById("btn-apply");

// Adding to Item list function
let entryCounter = 1;
function addToItemList(itemID) {
  const itemName = document
    .getElementById(itemID)
    .querySelector("h2").innerText;
  const entry = document.createElement("div");
  entry.innerText = `${entryCounter}. ${itemName}`;
  entryCounter++;
  entryPoint.appendChild(entry);
}

// Calculation Function

function calculation(itemID) {
  const itemValue = parseFloat(
    document.getElementById(itemID).querySelector("span").innerText
  );

  //   calculation
  const newTotal = itemValue + parseFloat(totalAmount.innerText);
  const newGrandTotal = itemValue + parseFloat(grandTotalAmount.innerText);
  // output
  totalAmount.innerText = newTotal.toFixed(2);
  grandTotalAmount.innerText = newGrandTotal.toFixed(2);

  //   Activating apply button
  if (parseFloat(totalAmount.innerText) > 200) {
    applyButton.removeAttribute("disabled");
  }

  // Activating the Make purchase button

  if (parseFloat(totalAmount.innerText) > 0) {
    makePurchaseBtn.removeAttribute("disabled");
  }
}

// Apply button click

function cuponApply() {
  const cuponCode = cuponCodeInput.value;
  const totalAmount = document.getElementById("total").innerText;

  // Cupon validation
  if (cuponCode === "SELL200") {
    const discount = parseFloat(totalAmount) * 0.2;
    discountField.innerText = discount.toFixed(2);
    grandTotalAmount.innerText =
      parseFloat(grandTotalAmount.innerText) - discount;

    // Clear the coupon code input
    cuponCodeInput.value = "";

    return;
  } else if (cuponCode === "") {
    alert("Please enter the Promo Code.");
    return;
  } else {
    alert("Please enter a VALID Promo Code.");
    return;
  }
}

// Modal close Function

function goHome() {
  totalAmount.innerText = "00.00";
  discountField.innerText = "00.00";
  grandTotalAmount.innerText = "00.00";
  entryPoint.innerHTML = "";
  makePurchaseBtn.setAttribute("disabled", "true");
  applyButton.setAttribute("disabled", "true");
}

// Sell 200 button click

function promo() {
  cuponCodeInput.value = "SELL200";
}
