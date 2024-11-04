let resultado;

// Función para manejar el cambio del primer input
function onInputOneChange() {
    console.log("Cambio en el primer input");
}

// Función para manejar el cambio del segundo input
function onInputTwoChange() {
    console.log("Cambio en el segundo input");
}

// Función para realizar la operación matemática
function operacionMatematica(typoOperacion) {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingresa ambos números.");
        return;
    }

    switch (typoOperacion) {
        case "suma":
            resultado = numero1 + numero2;
            break;
        case "resta":
            resultado = numero1 - numero2;
            break;
        case "multi":
            resultado = numero1 * numero2;
            break;
        default:
            alert("Operación no válida");
            return;
    }

    // Muestra el resultado en el div correspondiente
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
    console.log(resultado);
}

