    // Get DOM elements
const container = document.getElementById("container");
const toggleBtn = document.getElementById("toggleBtn");
const goToSignup = document.getElementById("goToSignup");
const goToLogin = document.getElementById("goToLogin");

const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");

// Toggle forms
toggleBtn.addEventListener("click", () => {
  container.classList.toggle("signup-mode");
});

goToSignup.addEventListener("click", () => {
  container.classList.add("signup-mode");
});

goToLogin.addEventListener("click", () => {
  container.classList.remove("signup-mode");
});

// Handle Signup form submission
signupForm.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent page refresh

  const fullName = signupForm.querySelector('input[placeholder="Full Name"]').value;
  const email = signupForm.querySelector('input[placeholder="Email"]').value;
  const password = signupForm.querySelector('input[placeholder="Password"]').value;

  // For now, just log the values
  console.log("Sign Up Data:", { fullName, email, password });

  // Show alert or feedback
  alert(`Sign Up Successful!\nName: ${fullName}\nEmail: ${email}`);

  // Reset form and go back to login
  signupForm.reset();
  container.classList.remove("signup-mode");
});

// Handle Login form submission
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = loginForm.querySelector('input[placeholder="Username"]').value;
  const password = loginForm.querySelector('input[placeholder="Password"]').value;

  // For now, just log the values
  console.log("Login Data:", { username, password });

  // Show alert or feedback
  alert(`Login Attempt\nUsername: ${username}`);
  
  // Reset form
  loginForm.reset();
});
