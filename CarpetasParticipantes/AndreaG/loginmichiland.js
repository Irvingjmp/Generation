document.getElementById("sesion").addEventListener("click",function (){

    const email = document.querySelector("#email input").value.trim();
    const password = document.querySelector("#password input").value.trim();

    if (email === ""){
        alert ("Por favor ingresa tu michicorreo");
    } else if (!email.includes ("@")){
        alert ("Miawlto ahí, esto no es un michicorreo");
    } else if (password === "") {
        alert("Contraseña incorreccta");
    } else if(password.length < 8){
        alert ("Contraseña no segura");
    } else {
        alert ("¡Bienvenido a michiland " + email + "!");
    }

});