document.getElementById('moneyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const activity = document.getElementById('activity').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount greater than 0.");
        return;
    }

    // Create a new entry object
    const expenseEntry = {
        activity: activity,
        amount: amount
    };

    // Add the entry to the list
    addExpenseToList(expenseEntry);

    // Update the total amount spent
    updateTotalExpense(amount);

    // Clear the form fields
    document.getElementById('moneyForm').reset();
});

let totalSpent = 0;

function addExpenseToList(entry) {
    const expenseList = document.getElementById('expenseList');
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${entry.activity}</strong>: $${entry.amount.toFixed(2)}`;
    expenseList.appendChild(listItem);
}

function updateTotalExpense(amount) {
    totalSpent += amount;
    document.getElementById('totalAmount').textContent = totalSpent.toFixed(2);
}
