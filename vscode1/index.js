// Wait for the DOM to load before accessing elements
document.addEventListener("DOMContentLoaded", function() {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email validation regex

    const email = document.getElementById("email-user");
    const submit = document.getElementById("submit");

    submit.addEventListener("click", function() {
        // Remove existing validation message if any
        const existingResult = document.getElementById("validation-result");
        if (existingResult) {
            existingResult.remove();
        }

        // Create a new paragraph for the result message
        const result = document.createElement("p");
        result.id = "validation-result"; // Assign an ID to manage duplicates

        // Validate email input
        if (pattern.test(email.value.trim())) {
            console.log("Email is valid");
            result.innerText = "Email is valid";
            result.style.backgroundColor = "green";
            result.style.color = "white";
        } else {
            console.log("Email is not valid");
            result.innerText = "Email is not valid";
            result.style.backgroundColor = "red";
            result.style.color = "white";
        }

        // Append the result message to the document body
        document.body.appendChild(result);
    });
});
