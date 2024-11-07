//Cuando buscamos modificar el valor de un input html, generalmente usamos usamos la siguiente sintaxis:
//const inputOne = document.getElementById().value;
//La estructura de como interactuamos con el dom en JS es la siguiente:
// 1. Palabra reservada: documento
// 2. Utilizamos el método/API -> getElementById()
// 3. Utilizamos el atributo del elemento que en este caso conocemos previamente que es un input por este conocimiento previo sabemos que uno de sus atributos es value:
document.getElementById("registrarse").addEventListener("click", function () {
    const nombre = document.querySelector("#nombre input").value.trim();
    const password = document.querySelector("#password input").value.trim();
    if (nombre === "") {
        alert("Por favor ingresa tu nombre, este campo no puede quedar vacio");
    }else if (password === "") {
        alert ("Contraseña incorrecta")
    } else if (password.length >=8){
        const mensaje=document.getElementById("msj");
        // mensaje.className="valid"
        mensaje.style.display = "none"
    }else{
        alert("Registro completo" + nombre + "!");
    }
});