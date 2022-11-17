let createPass = document.getElementById("newPassword");
let messageEle = document.getElementById("newPasswordErrMsg");
createPass.addEventListener("blur", function(event) {
    if (createPass.value === "") {
        messageEle.textContent = "Required*";
    } else {
        messageEle.textContent = "";
    }
});
let confirmPass = document.getElementById("confirmPassword");
let messageEle1 = document.getElementById("confirmPasswordErrMsg");
confirmPass.addEventListener("blur", function(event) {
    if (confirmPass.value === "") {
        messageEle1.textContent = "Required*";
    } else {
        messageEle1.textContent = "";
    }
});
let submitform = document.getElementById("updatePasswordForm");
submitform.addEventListener("submit", function(event) {
    event.preventDefault();
    if (createPass.value === "") {
        messageEle.textContent = "Required*";
    } else {
        messageEle.textContent = "";
        if (confirmPass.value === "") {
            messageEle1.textContent = "Required*";
        } else {
            messageEle1.textContent = "";
            if (confirmPass.value !== createPass.value) {
                messageEle1.textContent = "Passwords must be same";
            } else {
                messageEle1.textContent = "";
            }
        }
    }
});