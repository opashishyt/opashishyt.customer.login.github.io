// ✅ Validate Login Form
function validateLogin() {
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;
    const errorElement = document.getElementById("loginError");

    errorElement.textContent = "";

    if (!email || !password) {
        errorElement.textContent = "❌ Please fill all fields";
        return false;
    }

    if (!isValidEmail(email)) {
        errorElement.textContent = "❌ Please enter a valid email";
        return false;
    }

    return true;
}

// ✅ Validate Register Form
function validateRegister() {
    const name = document.getElementById("regName").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value;
    const confirmPassword = document.getElementById("regConfirmPassword").value;
    const errorElement = document.getElementById("regError");

    errorElement.textContent = "";

    // Check all fields
    if (!name || !email || !password || !confirmPassword) {
        errorElement.textContent = "❌ Please fill all fields";
        return false;
    }

    // Validate name
    if (name.length < 2) {
        errorElement.textContent = "❌ Name must be at least 2 characters";
        return false;
    }

    // Validate email
    if (!isValidEmail(email)) {
        errorElement.textContent = "❌ Please enter a valid email";
        return false;
    }

    // Validate password
    if (password.length < 6) {
        errorElement.textContent = "❌ Password must be at least 6 characters";
        return false;
    }

    // Check password match
    if (password !== confirmPassword) {
        errorElement.textContent = "❌ Passwords do not match";
        return false;
    }

    return true;
}

// ✅ Email Validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}