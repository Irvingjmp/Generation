document.getElementById("registrarse").addEventListener("click", function () {
    const nombre = document.querySelector("#nombre input").value.trim();
    const password = document.querySelector("#password input").value.trim();
    if (nombre === "") {
        alert("Por favor ingresa tu nombre, este campo no puede quedar vacio");
    } else if (password === "") {
        alert ("Por favor ingresa tu contraseña, este campo no puede quedar vacio");
    } else if (password.length >= 8) {
        const mensaje = document.getElementById('msj');
        //mensaje.className='valid';
        mensaje.style.display = 'none';
    } else {
        alert("Registro completo " + nombre + "!");
    }
});