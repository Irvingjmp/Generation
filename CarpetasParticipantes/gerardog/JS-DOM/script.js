//Cuando buscamos modificar un valor de un input html, generalment usamos la
        //const inputOne = document.getElementById("inputText").value;
        //const otroElemento = inputOne.getElementById("");
//La estructura de como interactuamos con el DOM en JS es:
    // 1. palabra reservada: document
    // 2. usamos método/API: getElementById()
    // 3. Utilizamos el atributo del elemenro que en este caso, conocemos previamente que es un input
    // por este conociemiento previo vale



    document.getElementById("registrarse").addEventListener("click", function () {
        const nombre = document.querySelector("#nombre input").value.trim();
        const password = document.querySelector("#password input").value.trim();
        if (nombre === "") {
            alert("Por favor ingresa tu nombre, este campo no puede quedar vacio");
        } else if (password === "") {
            alert ("Contraseña incorrecta")
        } else if (password.length >= 8){
            const mensaje = document.getElementById("msj");
            // mensaje.className="valid";
            mensaje.style.display = "none";
        } else{
                alert("Registro completo" + nombre + "!");
            }
    });