document.getElementById("username").addEventListener("input", function () {
    const username = this.value;
    const errorMessage = document.getElementById("error-message");
    const checkmark = document.getElementById("checkmark");
    const submitBtn = document.getElementById("submit-btn");

    const minLength = 6;
    const validPattern = /^[a-zA-Z0-9]+$/;

    if (username.length < minLength) {
        errorMessage.textContent = "Username must be at least 6 characters.";
        checkmark.classList.add("hidden");
        submitBtn.disabled = true;
    } else if (!validPattern.test(username)) {
        errorMessage.textContent = "Only letters and numbers are allowed.";
        checkmark.classList.add("hidden");
        submitBtn.disabled = true;
    } else {
        errorMessage.textContent = "";
        checkmark.classList.remove("hidden");
        submitBtn.disabled = false;
    }
});
