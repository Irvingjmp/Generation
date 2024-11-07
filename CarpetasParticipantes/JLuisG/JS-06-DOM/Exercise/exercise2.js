// Exercise #2
// Write a JavaScript function to get the values of First and Last name from the following form.
// Print out the names to the console.
function getFormValue() {
    const form = document.getElementById('form1');
    const nombre = form.nombre.value;
    const apellido = form.apellido.value;
    console.log(`Nombre: ${nombre}, Apellido: ${apellido}`)};