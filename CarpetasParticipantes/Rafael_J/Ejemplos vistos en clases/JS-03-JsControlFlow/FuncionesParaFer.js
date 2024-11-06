let usuarioRegistrado = "";
let contraseñaRegistrada = "";

document.getElementById("registrarse").addEventListener("click", function () {

    const nombre = document.querySelector("#nombre input").value.trim(); 
    const contacto = document.querySelector("#contacto input").value.trim();
    const usuario = document.querySelector("#usuario input").value.trim();
    const email = document.querySelector("#email input").value.trim();
    const password = document.querySelector("#contraseña input").value.trim();
    

    if (nombre === "") { 
        alert("Por favor ingresa tu nombre completo");
    } else if (contacto === "") {
        alert("Por favor ingresa tu numero de telefono");
    } else if (usuario === "") {
        alert("por favor ingresa tu nombre de usuario");
    } else if (email === "") {
        alert("por favor ingresa tu email");
    } else if (!email.includes ("@")) {
        alert("Correo no aceptado, ingrese un correo valido");
    } else if (password === ""){
        alert ("Ingrese contraseña valida")
    } else if (password.length < 8){ 
        alert ("Contraseña no segura");
    }else {
        alert ("registro completo " + nombre + "!");
    }

    usuarioRegistrado = usuario;
    contraseñaRegistrada = password;

    console.log("Nombre:", nombre);
    console.log("Contacto:", contacto);
    console.log("Usuario:", usuario);
    console.log("Email:", email);
    console.log("Contraseña:", password);

});

document.getElementById("login").addEventListener("click", function () {
    const loginUsuario = document.querySelector("#usuario input").value.trim();
    const loginContraseña = document.querySelector("#contraseña input").value.trim();

    if (loginUsuario === usuarioRegistrado && loginContraseña === contraseñaRegistrada) {
        alert("Has iniciado sesión correctamente");
    } else {
        alert("Usuario y/o contraseña incorrectos");
    }
});