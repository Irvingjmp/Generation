/* Objeto funcion en javascript*/
// una funcion en javascript tambien es un objeto, y esto permite agregarle propiiedades y metodos

// en javascript, function () y {} es una declaracion de funcion anonima. es anonima porque no tiene nombre y simplemente define una funcion vacia que no hace nada cuando se ejecuta.
/* se desglosa en:

palabra clave: function indica que creas una funcion
(): son necesarios para los parametros, aunque en este caso están vacios
{}: contienen el codigo que la funcion ejecutará, pero están vacias, por lo  que no se ejecutará nada

*/

// const myFunc = function () {}; // Creamos una función vacía y la asignamos a myFunc
// myFunc(); // Llamamos a la función, pero no hace nada

/* En JavaScript, cada función tiene una propiedad especial llamada constructor, que se refiere a la función constructora que creó esa función. Cuando comparamos function() {}.constructor === Function, estamos verificando si el constructor de una función anónima es el mismo que el propio objeto Function.

Explicación:
Function es el constructor base de todas las funciones en JavaScript.
Cuando creas una función anónima como function() {}, JavaScript la trata como una instancia del objeto Function.
Al comparar (function() {}).constructor === Function, estamos preguntando: "¿El constructor de esta función es Function?" y la respuesta es verdadera (true), porque todas las funciones son instancias del objeto Function. */

// console.log((function() {}).constructor === Function); // Resultado: true

// datos de ejercicio #!

// ejercicio #2

let name1 = " name1"
let name2 = " name2"
let name3 = " name3"

function greetings() {
    console.log("Welcome " + name1 + name2 + name3);
}
greetings()

// part2
let birthyear = prompt (" what´s your birth year? ");

function calculateAge(){
    let resultado  = birthyear - (new Date(2024-10-29).getFullYear());
 
}
calculateAge();