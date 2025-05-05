console.log("Inicio")

const button = document.getElementById("Enviar")
button.addEventListener("click",
    () => {
        console.log("Los parámetros: ")
        let user=document.getElementById("user")
        let password=document.getElementById("password")
        console.log(password.value)
        console.log(user.value)
    }
 )