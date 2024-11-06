
/*function onInputOneChange(){
// console.log("-------aqui inicia inputonechange------")
let numero1 = parseFloat(document.getElementById("numero1").value);
// console.log(numero1);
let numero2 = parseFloat(document.getElementById("numero2").value);
// console.log(numero2);
 console.log(numero1);
// console.log("----------aqui termina funcion imputOneChange-------");
console.log(numero1,numero2);
}

function operacionMatematica(typoOperacion){
    console.log (typoOperacion);

    switch(typoOperacion){
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        default:
            alert("syntax error");
    }
    console.log(resultado);
}*/
function operacionMatematica(typoOperacion){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    switch(typoOperacion){
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
             alert("syntax error");
    }
    console.log(resultado);
}