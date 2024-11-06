function getFormvalue(){
    const nombre = document.getElementsByName("fname")[0].value;
    console.log("Nombre: ", nombre);
    const apellido = document.getElementsByName("lname")[0].value;
    console.log("Apellido: ", apellido);
    event.preventDefault();
}