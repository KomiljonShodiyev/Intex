let elLoginForm = document.querySelector(".login-form");
const isRegistered = JSON.parse(localStorage.getItem("isRegistered"));

elLoginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const data = {
        username: e.target.username.value,
        password: e.target.password.value
    };

    if (isRegistered) {
        if (data.username === isRegistered.newUsername && data.password === isRegistered.newPassword) {
            setTimeout(() => {
                location.href = "./admin.html"; 
            }, 1000);
        } else {
            alert("Xato ma'lumot kiritdingiz!");
        }
    } else {
        if (data.username === "Komiljon" && data.password === "123") {
            setTimeout(() => {
                location.href = "./admin.html"; 
            }, 1000);
        } else {
            alert("Xato ma'lumot kiritdingiz!");
        }
    }
});
