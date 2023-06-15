// Register form submission
const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const usernameInput = document.getElementById('username').value;
  const passwordInput = document.getElementById('password').value;

  // Check if the user is already registered
  if (localStorage.getItem(usernameInput) !== null) {
    alert('User already exists. Please choose a different username.');
    return;
  }

  // Register the user
  localStorage.setItem(usernameInput, passwordInput);
  alert('Registration successful. You can now proceed to the text editor.');
  registerForm.reset();

  // Redirect to the text editor page
  window.location.href = 'index.html';
});

// Login form submission
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const usernameInput = document.getElementById('loginUsername').value;
  const passwordInput = document.getElementById('loginPassword').value;

  // Check if the entered credentials are valid
  const storedPassword = localStorage.getItem(usernameInput);
  if (storedPassword === null || storedPassword !== passwordInput) {
    alert('Invalid username or password.');
    return;
  }

  // Login successful
  alert('Login successful. Welcome back, ' + usernameInput + '!');
  loginForm.reset();

  // Redirect to the text editor page
  window.location.href = 'index.html';
});
