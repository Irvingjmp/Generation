/*  comentarios
multilinea
en
javascript*/

//comentarios de una sola linea

/*javascript

Lenguaje de programacion
imperativo: que se lee de arriba a abajo y de izquierda a derecha
interpretado
tipado debil
orientado a objetos
ECMASCRIPT
*/

// alert ("Hola mundo"); /* nos muestra un mensaje de alert */

// console.log ("Este es un mensaje de la consola"); /* nos muestra un mensaje en la consola */

// document.write("Hola CH47");/* nos permite imprimir en el documento */

// let nombre = prompt("ingresa tu nombre");
// alert ("Hola, " + nombre + " Bienvenidx al mundo de javascript");

// let mensaje = prompt ("Inicia el cambio");

// let nombre = prompt ("Regalame tu nombre");

// let signo = prompt (" ingresa tu signo");

// let resultado = nombre + " y tu signo es: " + signo;

// alert (" Eres " + resultado);

alert ("¡Alto, identificate!");

let edad = prompt (" ¿Cual es tu edad? ");

function verificarEdad(edad) {
    if (edad < 18) {
      console.warn("Advertencia: el usuario es menor de edad.");
    } else {
      console.log("Sal de la pagina, hijo.");
    }
  }
  
  verificarEdad(16);
  

let nombre = prompt (" ¿Cual es tu nombre? ");

let comida = prompt (" ¿Cual es tu comida favorita ");

let resultado = "Alto " + nombre + " Quedas detenido por robo de " + comida;

alert (resultado);

console.log ("Te hackeamos");

