// Login
// Set the correct login details
const correctUsername = "Lovelove";
const correctPassword = "012723";

function validateLogin() {
    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");
    const loading = document.getElementById("loading");

    // Validate credentials
    if (username === correctUsername && password === correctPassword) {
        // Show loading animation
        loading.style.display = "block";

        // Wait for 3 seconds, then redirect
        setTimeout(() => {
            window.location.href = "home.html";
        }, 3000);
    } else {
        // Show error message
        message.style.color = "red";
        message.textContent = "Invalid username or password!";
        message.style.display = "block";
    }
}
