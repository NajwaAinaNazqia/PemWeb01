function validateLogin() {
    const hardcodedUsername = "inaaa";
    const hardcodedPassword = "bisa1234";

    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    if (usernameInput === hardcodedUsername && passwordInput === hardcodedPassword) {
        alert("Login Sukses");
       
        window.location.href = "success.html";
    } else {
        alert("Login Gagal");
    }
}