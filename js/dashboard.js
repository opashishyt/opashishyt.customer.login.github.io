// 🔒 Check Admin Authentication
document.addEventListener("DOMContentLoaded", function() {
    // Check if admin is logged in
    if (localStorage.getItem("isAdmin") !== "true") {
        alert("⛔ Access Denied! Admin access required.");
        window.location.href = "index.html";
        return;
    }

    // Load users
    loadUsers();
    
    // Setup logout button
    document.getElementById("logoutBtn").addEventListener("click", logoutAdmin);
});

// 📊 Load Users from Firestore
function loadUsers() {
    const usersList = document.getElementById("usersList");
    usersList.innerHTML = "<p>🔄 Loading users...</p>";

    db.collection("users").orderBy("createdAt", "desc").get()
        .then((querySnapshot) => {
            if (querySnapshot.empty) {
                usersList.innerHTML = "<p>📭 No users found</p>";
                return;
            }

            usersList.innerHTML = "";
            querySnapshot.forEach((doc) => {
                const user = doc.data();
                const userCard = createUserCard(user);
                usersList.innerHTML += userCard;
            });
        })
        .catch((error) => {
            console.error("Error loading users:", error);
            usersList.innerHTML = `<p>❌ Error loading users: ${error.message}</p>`;
        });
}

// 🎴 Create User Card HTML
function createUserCard(user) {
    const date = user.createdAt ? 
        new Date(user.createdAt.toDate()).toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }) : 'N/A';

    return `
        <div class="user-card">
            <div>
                <strong>👤 ${user.name || 'No Name'}</strong><br>
                <small>📧 ${user.email}</small><br>
                <small>🆔 ${user.uid.substring(0, 8)}...</small>
            </div>
            <div>
                <small>📅 ${date}</small>
            </div>
        </div>
    `;
}

// 🚪 Logout Admin
function logoutAdmin() {
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("adminLoggedIn");
    alert("👋 Logged out successfully!");
    window.location.href = "index.html";
}