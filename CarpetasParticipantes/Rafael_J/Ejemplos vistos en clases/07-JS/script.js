
/* Tipos de datos y variables 

variable: una variable es un espacio de memoria dentro de nuestro programa

3 tipos de formas de declarar una variable: var, let, const

var:tiene un alcance global
let: tiene un alcance local
const: es una constante, esto quiere decir que no se puede modificar.

scope: alcance de mis variables

string: cadena de texto
numbaer: numero
boolean: true or false 0/1
null: no tiene un valor
nan: no es un numero 

*/

// let nombre; declaro mi variable
// nombre = "jesus"; inicializo mi variable
let nombre = "Jesus";

nombre = "Rafael";

const apellido = "Joachin";

// apellido = "zenon"; esto da error porque las constantes no pueden modificarse.

console.log(apellido);
console.log(nombre);

let telefono  = null;

let direccion;

// multiples variables

let num1 = 15;
let num2 = 18;
let num3 = 20;

//Encasillamiento o cohersion: se refiere a una una conversion automatica

let precio = prompt ("cual es tu rango de inversión?");
console.log(typeof precio); /* typeof va a identificar el tipo de variable que estas usando */


// objeto Number
let numero1 = "41";
let newNumber = Number(numero1);

console.log(typeof newNumber);


//  conversion de tipo de dato string a number

let cp = "23456";
let numcp = parseFloat(cp);
console.log( typeof numcp);

// CONVERSION DE UN NUMERO A UN STRING

let edad = 29;
let edadString = edad.toString();
console.log(edadString);

// CONVERSION DE UN BOOLEAN A UN STRING

let ine = true;
ine = String(ine);
console.log(ine)
console.log(typeof ine);
// let ineString = ine.toString();
// console.log(ineString);
// console.log(typeof ineString);

// Not a number
console.log (num1 + nombre);
// Null
console.log(telefono);

