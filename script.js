import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
document.getElementById("root")

document.getElementById("loginBtn").addEventListener("click", login);

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    error.textContent = "";

    // MOCKED AUTH LOGIC
    if (username === "admin" && password === "1234") {
        // store dummy token
        localStorage.setItem("token", "dummy-auth-token");

        // redirect to dashboard
        window.location.href = "dashboard.html";
    } else {
        error.textContent = "Invalid username or password";
        error.style.color = "red";
    }
}
