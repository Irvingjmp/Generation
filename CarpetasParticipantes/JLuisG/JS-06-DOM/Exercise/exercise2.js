function getFormValue(event) {
    event.preventDefault();

    let nombre = document.forms["f1"]["nombre"].value;
    let apellido = document.forms["f1"]["apellido"].value;

    console.log("Nombre: " + nombre);
    console.log("Apellido: " + apellido);
}
