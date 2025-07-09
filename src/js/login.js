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
        alert("login existoso")

        localStorage.setItem("currentUser",JSON.stringify(data[0]))
        window.location.href = "./dashboard.html"
    }else{
        alert("contraseña erronea")
    }
}