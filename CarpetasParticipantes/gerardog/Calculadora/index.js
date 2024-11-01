/* 
let resultado;
let numero1 = parseFloat(document.getElementById("numero1").value); //globales
let numero2 = parseFloat(document.getElementById("numero2").value);
console.log("Aqui empieza a ejecutarse JS: " + resultado, numero1, numero2);
*/

/*
function onInputOneChange () {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    console.log(numero1);
}

function onInputTwoChange () {
    let numero2 = parseFloat(document.getElementById("numero2").value);
    console.log(numero2);
}
    
*/

/*
    //Evitar duplicar función

function onInputChange () {
    //console.log("--Inicia el inputOnChange--") //guías para entender la iteración
    let numero1Local = parseFloat(document.getElementById("numero1").value);
    //console.log(numero1);
    let numero2Local = parseFloat(document.getElementById("numero2").value);
    console.log("Aqui hubo un input" + numero1Local, numero2Local)
    // console.log(numero2);
    //console.log(numero1); // a ver si se sobreescribe
    //console.log("--Termina el inputOnChange--")
}
*/

/*
function suma(){
    alert ("click")
}
function resta(){
    alert ("click")
}
function multiplicion(){
    alert ("click")
}
    */

/*
    //Podemos hacer una sola función con switch
function operacionMatematica(typoOperacion) { //funcion debe hacer una cosa, al declararlas podemos ver cuantas acciones hará
    console.log("Aqui hubo un evento click y son variables globales " + numero1, numero2) 
    console.log("Aqui hubo un evento click y son variables locales " + numero1Local, numero2Local)
    switch(typoOperacion) {
        case "suma": 
            console.log("console.log del case suma "+ numero1, numero2); //verificar lo que entre
            resultado = numero1 + numero2;
            console.log("este debería ser el resultado: "+ resultado); //verificar lo que sale
            break;
        case "resta":
            console.log("console.log del case resta "+ numero1, numero2);
            resultado = numero1 + numero2;
            console.log("este debería ser el resultado: "+ resultado);
            break;
        case "multi": 
            console.log("console.log del case multiplicación "+ numero1, numero2);
            resultado = numero1 * numero2;
            console.log("este debería ser el resultado: "+ resultado);
            break;
        default:
            alert("syntax error")
    }
    console.log(resultado);
}
*/



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
    document.getElementById("result").innerHTML = `Resultado: ${resultado}`; //sobreescribe 
}




















