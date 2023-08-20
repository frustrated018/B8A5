// Adding to Item list function
let entryCounter = 1;
function addToItemList(itemID) {
    const itemName = document.getElementById(itemID).querySelector('h2').innerText;
    const entryPoint = document.getElementById('item-list');
    const entry = document.createElement('div');
    entry.innerText = `${entryCounter}. ${itemName}`;
    entryCounter++;
    entryPoint.appendChild(entry);
}


// Calculation Function

function calculation(itemID) {
    const itemValue = parseFloat(document.getElementById(itemID).querySelector('span').innerText);
    const totalAmount = document.getElementById('total');
    const grandTotalAmount = document.getElementById('grand-total');

    const newTotal = itemValue + parseFloat(totalAmount.innerText);
    const newGrandTotal = itemValue + parseFloat(grandTotalAmount.innerText);


    totalAmount.innerText = newTotal.toFixed(2); 
    grandTotalAmount.innerText = newGrandTotal.toFixed(2);
}

