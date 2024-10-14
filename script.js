const username = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value.trim();
const confirmPassword = document.getElementById("confirmPassword").value.trim();
const form = document.getElementById("registrationForm");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (
    username === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    errorMessage.textContext = "All fields are required";
  }
  // 1. Use the regex to pattern match the email address
  // 2. Give an error to the user -if there a problem with email
  // 3. Match Password and confirm password;
  // 3. Give an error if there a problem with password
  // 4. Notify the user if the form is successfully submitted
});
