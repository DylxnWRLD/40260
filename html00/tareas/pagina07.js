console.log("Inicio")

const mostrar = () => {
    console.log("Los parámetros: ")
    let user = document.getElementById("user")
    let password = document.getElementById("password")
    console.log(password.value)
    console.log(user.value)

    let formulario = document.getElementsByTagName("form")
    console.log(formulario)
    user.setAttribute("name", "q")
    password.setAttribute("name", "password")
    formulario[0].setAttribute("action", "https://google.com/search")
    formulario[0].submit()
}

const button = document.getElementById("enviar")
button.addEventListener("click", mostrar)