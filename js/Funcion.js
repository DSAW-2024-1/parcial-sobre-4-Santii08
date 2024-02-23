const emailValido = "ash@loremcompany.com"
const email = document.getElementById("correo")
const form = document.getElementById("formulario")
const mensaje = document.getElementById("mensaje")

//Escuchar eventos del formulario
form.addEventListener("submit", x=>{
    x.preventDefault()
    mensaje.innerHTML = ""
    //console.log("El correo es: " + email.value)
    if(email.value != emailValido){
        mensaje.innerHTML = "Correo no es válido!"
    }
    else return form.submit();
})
