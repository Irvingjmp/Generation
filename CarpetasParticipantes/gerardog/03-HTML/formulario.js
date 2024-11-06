document.getElementById("registrarse").addEventListener("click", function (){
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("correo").value.trim();
    const password = document.getElementById("password").value.trim();

    if (nombre === "") { // Verifica que el campo de nombre no esté vacío
        alert("No puede quedar vacío este apartado");
    } else if (email === "") { // Verifica que el correo no esté vacío
        alert("Necesito de tu email para seguir");
    } else if (!email.includes("@")) { // Verifica si el correo tiene estructura válida
        alert("Revisa la estructura de tu correo");
    } else if (password === "") { // Verifica que la contraseña no esté vacía
        alert("Falta tu contraseña");
    } else if (password.length <= 8) { // Verifica que la contraseña tenga más de 8 caracteres
        alert("Contraseña no segura");
    } else {
        alert("Registro completo " + nombre + "!"); // Mensaje de éxito
    }
});