document.getElementById("registrarse").addEventListener("click", function () {

    const nombre = document.querySelector("#nombre").value.trim();
    const curp = document.querySelector("#curp").value.trim();
    const correo = document.querySelector("#correo").value.trim();
    const password = document.querySelector("#password").value.trim();
    const confirmPassword = document.querySelector("#confirmPassword").value.trim();
    const telefono = document.querySelector("#telefono").value.trim();
    const fechaNacimiento = document.querySelector("#fechaNacimiento").value.trim();
    const robot = document.querySelector('input[name="robot"]:checked');


    if (nombre === "") {
        alert("Ingresa tu nombre, este campo no puede quedar vacío.");
    } else if (curp === "") {
        alert("Ingresa tu CURP.");
    } else if (correo === "") {
        alert("Ingresa tu corre@.");
    } else if (!correo.includes("@")) {
        alert("Correo no aceptado.");
    } else if (password === "") {
        alert("Por favor ingresa tu contraseña.");
    } else if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
    } else if (confirmPassword === "") {
        alert("Por favor, confirma tu contraseña.");
    } else if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
    } else if (telefono === "") {
        alert("Por favor ingresa tu número de teléfono.");
    } else if (!telefono.match(/[0-9]{3}-[0-9]{3}-[0-9]{4}/)) {
        alert("El formato de teléfono no es válido. Ejemplo: 123-456-7890");
    } else if (fechaNacimiento === "") {
        alert("Por favor ingresa tu fecha de nacimiento.");
    } else if (!robot) {
        alert("Espero que no seas un robot.");
    } else {
        alert("¡Registro completo, " + nombre + "!");
    }
});