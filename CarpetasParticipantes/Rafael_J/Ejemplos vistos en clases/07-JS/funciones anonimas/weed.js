if (nombre === "") {
    alert ("Por favor ingresa tu nombre, este campo no puede quedar vacio");
   } else if (email === "") {
    alert ("Oshe, esto no puede estar vacío");
   } else if (!email.includes ("@")){
    alert ("Correo no aceptado");
   } else if (password === ""){
    alert ("Contrasena incorrecta");
   } else if (password.length > 8) {
    alert ("Contraseña no segura");
   }else {
    alert("Registro completo" + nombre + "!");
   }
});