let resultado; 

function onInputOneChange(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
   
}

function operacionMatematica(typoOperacion){
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


