function js_style() {
    const paragraph = document.getElementById("text");
    paragraph.style.fontFamily = "Tahoma";
    paragraph.style.fontSize = "26px";
    paragraph.style.color = "violet";
  }

  document.getElementById("form1").addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("fname").value.trim();
    const lastName = document.getElementById("lname").value.trim();

    if (firstName=== "" || lastName === "") {
        alert("Por favor, ingresa tu nombre y apellido.");
    } else {
        console.log("Primer nombre:", firstName);
        console.log("Apellido:", lastName);

    }
});