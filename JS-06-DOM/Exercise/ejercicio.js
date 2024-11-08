/*const boton = document.getElementById("jsstyle");
const parrafo = document.getElementById("text");

boton.addEventListener("click", function(){
    parrafo.style.fontFamily = "Arial, sans-serif";
    parrafo.style.fontSize = "24px";
    parrafo.style.color = "blueviolet";
})*/
function getFormValue(event){
    event.prevent.Default(); // el even prevent es para evitar que se recarge la página

    const firstName = documento.forms["form1"]["fname"].value;
    
    const lastName = documento.forms["form1"]["lname"].value;

    console.log("First Name", firstName);

    console.log("Last Name", lastName);

    alert("First Name: " + firstName + "\nLast Name: " + lastName);
}