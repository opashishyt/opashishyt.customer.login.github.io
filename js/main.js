// 🎯 Main JavaScript File
document.addEventListener("DOMContentLoaded", function() {
    // Check login status
    checkLoginStatus();
    
    // Tab Switching
    document.getElementById("loginTab").addEventListener("click", switchToLoginTab);
    document.getElementById("registerTab").addEventListener("click", switchToRegisterTab);

    // Form Submissions
    document.getElementById("loginForm").addEventListener("submit", handleLogin);
    document.getElementById("registerForm").addEventListener("submit", handleRegister);

    // Clear errors on input
    document.querySelectorAll("input").forEach(input => {
        input.addEventListener("input", clearErrors);
    });

    // Focus on first input
    document.getElementById("loginEmail").focus();
});

// 🔄 Switch to Login Tab
function switchToLoginTab(e) {
    e.preventDefault();
    document.getElementById("loginTab").classList.add("active");
    document.getElementById("registerTab").classList.remove("active");
    document.getElementById("loginForm").classList.add("active-form");
    document.getElementById("registerForm").classList.remove("active-form");
    document.getElementById("loginEmail").focus();
}

// 🔄 Switch to Register Tab
function switchToRegisterTab(e) {
    e.preventDefault();
    document.getElementById("registerTab").classList.add("active");
    document.getElementById("loginTab").classList.remove("active");
    document.getElementById("registerForm").classList.add("active-form");
    document.getElementById("loginForm").classList.remove("active-form");
    document.getElementById("regName").focus();
}

// 🔐 Handle Login
function handleLogin(e) {
    e.preventDefault();
    
    if (validateLogin()) {
        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;
        loginUser(email, password);
    }
}

// 📝 Handle Registration
function handleRegister(e) {
    e.preventDefault();
    
    if (validateRegister()) {
        const name = document.getElementById("regName").value.trim();
        const email = document.getElementById("regEmail").value.trim();
        const password = document.getElementById("regPassword").value;
        registerUser(name, email, password);
    }
}