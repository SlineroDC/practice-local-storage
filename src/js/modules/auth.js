import Swal from "sweetalert2";
import { saveToStorage } from "./storage.js";

export function initLogin() {
  const $loginForm = document.getElementById("login-form");
  const $email = document.getElementById("email");
  const $password = document.getElementById("password");

  if (!$loginForm) return; // Prevent errors if not on login view

  $loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    login($email.value, $password.value);
  });
}

async function login(email, password) {
  const response = await fetch(`http://localhost:3000/users?email=${email}`);
  const data = await response.json();

  if (data.length === 0) {
    Swal.fire({
      icon: "warning",
      title: "Email not found",
      text: "No account is associated with this email. Would you like to register instead?",
      showCancelButton: true,
      confirmButtonText: "Register",
      cancelButtonText: "Try Again"
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/register";
      }
    });
    return;
  }

  if (data[0].password === password) {
    Toast.fire({
      icon: "success",
      title: "Successfully logged in"
    });

    saveToStorage("currentUser", data[0]);
    window.location.href = "/"; // Redirect to root (SPA handles route)
  } else {
    Toast.fire({
      icon: "error",
      title: "Incorrect email or password"
    });
  }
}

// 🔔 Reusable toast for feedback
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});
