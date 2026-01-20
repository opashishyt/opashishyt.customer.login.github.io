// 🔐 Admin Credentials (Hidden - not visible in forms)
const ADMIN_ID = "opashishyt";
const ADMIN_PASS = "Ashish@2006";

// ✅ Login Function
function loginUser(email, password) {
    // Check if admin login
    if (email === ADMIN_ID && password === ADMIN_PASS) {
        localStorage.setItem("isAdmin", "true");
        localStorage.setItem("adminLoggedIn", "true");
        window.location.href = "admin.html";
        return;
    }

    // Firebase user login
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("✅ Login Successful!");
            localStorage.setItem("userLoggedIn", "true");
            localStorage.setItem("userEmail", email);
            window.location.href = "https://opashishyt.github.io";
        })
        .catch((error) => {
            console.error("Login Error:", error);
            document.getElementById("loginError").textContent = error.message;
        });
}

// ✅ Register Function
function registerUser(name, email, password) {
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            
            // Save user details in Firestore
            return db.collection("users").doc(user.uid).set({
                name: name,
                email: email,
                uid: user.uid,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        })
        .then(() => {
            alert("✅ Registration Successful! Please login.");
            switchToLogin();
            clearRegisterForm();
        })
        .catch((error) => {
            console.error("Registration Error:", error);
            document.getElementById("regError").textContent = error.message;
        });
}

// 🔄 Switch to Login Tab
function switchToLogin() {
    document.getElementById("loginTab").classList.add("active");
    document.getElementById("registerTab").classList.remove("active");
    document.getElementById("loginForm").classList.add("active-form");
    document.getElementById("registerForm").classList.remove("active-form");
    document.getElementById("loginEmail").focus();
}

// 🧹 Clear Register Form
function clearRegisterForm() {
    document.getElementById("regName").value = "";
    document.getElementById("regEmail").value = "";
    document.getElementById("regPassword").value = "";
    document.getElementById("regConfirmPassword").value = "";
    document.getElementById("regError").textContent = "";
}