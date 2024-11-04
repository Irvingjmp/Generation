document.getElementById("registrarse").addEventListener("click", function (){
    const nombre = document.querySelector("#nombre input").value.trim();
    const email = document.querySelector("#email input").value.trim();
    const password = document.querySelector("#password input").value.trim();

    if (nombre === "") { //para que identifique que no esté vacío
        alert("No puede quedar vacío este apartado");
    } else if (email === "") {
        alert("Necesito de tu email para seguir");
    } else if (!email.includes("@")) {
        alert("revisa la estructura de tu correo");
    } else if (password === "") {
        alert("falta tu contraseña");
    } else if (password.length <= 8) { //&& password.length < 50
        alert("Contraseña no segura");
    } else {
        alert("Registro completo " + nombre + "!") //buscar como poner contraseña oculta
    }
});



