"use strict";

const passwordInput = document.getElementById("password");

const confirmPasswordInput = document.getElementById("confirm-pswd");

const errorMessage = document.querySelector(".error-msg");

confirmPasswordInput.addEventListener("input", function () {
  if (passwordInput.value !== confirmPasswordInput.value) {
    errorMessage.style.display = "block";
    passwordInput.style.border = "1px solid red";
    confirmPasswordInput.style.border = "1px solid red";
  } else {
    errorMessage.style.display = "none";
    passwordInput.style.border = "1.5px solid var(--input-bd-col)";
    confirmPasswordInput.style.border = "1.5px solid var(--input-bd-col)";
  }
});
