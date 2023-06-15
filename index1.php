<?php
    include("connection.php");
?>
<!DOCTYPE html>
<html>
<head>
  <title>User Registration and Login</title>
  <link rel="stylesheet" type="text/css" href="styles1.css">
</head>
<body>
  <div class="container">
    <div class="form-container">
      <h2>Register</h2>
      <form id="registerForm" action="login.php" method="POST">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" name="user" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" name="pass" required>
        </div>
        <div class="form-group">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>

    <div class="form-container">
      <h2>Login</h2>
      <form id="loginForm">
        <div class="form-group">
          <label for="loginUsername">Username:</label>
          <input type="text" id="loginUsername" required>
        </div>
        <div class="form-group">
          <label for="loginPassword">Password:</label>
          <input type="password" id="loginPassword" required>
        </div>
        <div class="form-group">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  </div>

  <script src="script1.js"></script>
</body>
</html>
