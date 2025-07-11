import "../css/login.css"
import Swal from "sweetalert2"

const $loginForm = document.getElementById("login-form")
const $email = document.getElementById("email")
const $password = document.getElementById("password")


$loginForm.addEventListener("submit", function (event) {
    event.preventDefault()
    login()

})


async function login() {

    let response = await fetch(`http://localhost:3000/users?email=${$email.value}`)
    let data = await response.json()

    if (data.length == 0) {
        alert("ese correo no existe, quiere registrarse?")
    }

    if (data[0].password === $password.value) {
        Toast.fire({
            icon: "success",
            title: "Signed in successfully"
        });

        localStorage.setItem("currentUser", JSON.stringify(data[0]))
        window.location.href = "./dashboard.html"
    } else {
         Toast.fire({
            icon: "error",
            title: "User or Password incorrect"
        });
    }
}


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
