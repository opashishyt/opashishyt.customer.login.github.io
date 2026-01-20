// 🛠️ Utility Functions

// ✅ Show Notification
function showNotification(message, type = "success") {
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 10px;
        color: white;
        font-weight: bold;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    if (type === "success") {
        notification.style.background = "#4CAF50";
    } else if (type === "error") {
        notification.style.background = "#f44336";
    } else {
        notification.style.background = "#2196F3";
    }

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = "slideOut 0.3s ease";
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// ✅ Clear Form Errors
function clearErrors() {
    document.getElementById("loginError").textContent = "";
    document.getElementById("regError").textContent = "";
}

// ✅ Check Login Status
function checkLoginStatus() {
    if (localStorage.getItem("userLoggedIn") === "true") {
        window.location.href = "https://opashishyt.github.io";
    }
    if (localStorage.getItem("adminLoggedIn") === "true") {
        window.location.href = "admin.html";
    }
}

// ✅ Format Date
function formatDate(date) {
    return new Date(date).toLocaleString('en-IN');
}

// ✅ Add CSS Animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);