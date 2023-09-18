// Dummy customer data (you should replace this with real database operations)
const customers = [
    { id: 1, name: 'Customer 1', balance: 1000 },
    { id: 2, name: 'Customer 2', balance: 2000 },
    { id: 3, name: 'Customer 3', balance: 3000 },
    { id: 4, name: 'Customer 3', balance: 4000 },
];

// Function to populate customer list in HTML
function populateCustomerList(selectElement) {
    for (const customer of customers) {
        const option = document.createElement('option');
        option.value = customer.id;
        option.textContent = `${customer.name} (Balance: $${customer.balance})`;
        selectElement.appendChild(option);
    }
}

// Function to handle form submission (dummy operation)
function transferMoney(event) {
    event.preventDefault();
    const senderId = document.getElementById('sender').value;
    const receiverId = document.getElementById('receiver').value;
    const amount = parseFloat(document.getElementById('amount').value);

    // Dummy operation (subtract from sender and add to receiver)
    const sender = customers.find((customer) => customer.id === parseInt(senderId));
    const receiver = customers.find((customer) => customer.id === parseInt(receiverId));

    if (sender && receiver && amount > 0 && sender.balance >= amount) {
        sender.balance -= amount;
        receiver.balance += amount;
        alert(`Transaction successful. New balance for ${sender.name}: $${sender.balance}, ${receiver.name}: $${receiver.balance}`);
    } else {
        alert('Transaction failed. Please check the input values.');
    }
}

// Populate customer lists
populateCustomerList(document.getElementById('sender'));
populateCustomerList(document.getElementById('receiver'));

// Add form submission event listener
document.getElementById('transferForm').addEventListener('submit', transferMoney);
