function login() {
  console.log("Login button clicked"); // DEBUG LINE

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (username === "admin" && password === "1234") {
    localStorage.setItem("token", "dummy-token");
    window.location.href = "dashboard.html";
  } else {
    error.innerText = "Invalid credentials";
    error.style.color = "red";
  }
}

