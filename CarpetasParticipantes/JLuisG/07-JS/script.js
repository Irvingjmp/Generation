/*Tipos de datos y variables

variable: es un espacio de memoria dentro de nuestro programa

var, let y const

var: tiene un alcance global en todo el bloque pero da errores
let: tiene un alcance local dentro del bloque de codigo, es mas especifico
()
const: es una constante, es una variable que no se va a cambiar 
(nombre, edad, pi)

scope: alcance de mis variables 

string: cadena de texto
number: numero
boolean: true or false 0/1
undefined: no definido
null: no tiene un valor
nan: no es un numero


Declarar una variable que va a ser nombre
Inicializar hacerlo en la misma linea de codigo
*/

// let nombre; declaro mi variable
// nombre = "Fernanda"; inicializo mi variable

// let nombre;

// nombre = "fernanda";

// let nombre = "fernanda";

let nombre = "Luis";




let telefono = null;



let direccion;

// multiples variables

//let num1, let num2, let num3;

// o 

//let num1 = 12;
//let num2 = 24;

//Encasillamiento o cohersion se refiere 
// typeof me permite saber el tipo de dato

let precio = prompt ("Cual es tu rango de inversion");
console.log(typeof precio);


// objeto Number
let numero1 = "41";
let newNumber = Number(numero1);

console.log(typeof newNumber);


//conversion de tipo de dato string a number

let cp = "62790";
let numcp = parseInt(cp);
console.log( typeof numcp);

// Conversion de un numero a un string

let edad = true;
let edadString = edad.toString();
console.log(edadString);

// Conversion de un boolean a string

let ine = true;
let ineString = ine.toString();
console.log(ineString);
console.log(typeof ineString);

console.log(edad + nombre);





