// script.js

// Function to show a message when the button is clicked
function showMessage() {
    alert("Hello! Welcome to my  website.");
}

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && message) {
        document.getElementById('formResponse').innerText = `Thank you, ${name}! We'll get back to you soon.`;
    } else {
        document.getElementById('formResponse').innerText = "Please fill in all fields.";
    }

    // Optionally reset the form
    this.reset();
});
