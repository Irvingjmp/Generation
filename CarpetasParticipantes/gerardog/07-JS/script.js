// alert ("tipos de datos")  probando vínculo

/* tipos de datos y variables

variable: es un espacio de memoria dentro de nuestro programa 

tres formas de declararlas

var: alcance global
let: alcance local
const: es una constante

scope: alcance de mis variables

dato:

string: cadena de texto
number: num
boolean: T/F
undefined: no definido
null: no tiene valor
nan: no es un num

*/

let nombre = "Gerardo";
nombre = "Luis"; //cambiando let

const apellido = "Garcia";
console.log(apellido);

console.log(nombre);

let telefono = null; //nulo


let direccion; 


//multiples variables

let num1; let num2; let num3;

num1 = 15;
num2 = 18;
nume3 = 21;


//Encasillamiento o cohersión: se refiere a una conversión automática

let precio = prompt ("cual es tu rango de inversión");
console.log (typeof precio); // mi dato es un string por ahora


let numero1 = "41";
let newNumber = Number (numero1); //Number está asignado para encasillar o convertir el valor entre paréntesis
console.log(typeof newNumber);

//convertir string a number (cp)
let cp = "01730"; //string
let numcp = parseInt (cp); //str a num
console.log(numcp);

//convertir numero a string
let edad = 32; //number
let edadString = edad.toString(); //num a str
console.log(edadString);

//boolean a string
let ine = true; //boolean
let ineString = ine.toString(); // boolean a string
console.log(ineString);
console.log(typeof ineString);

//ejemplo de NaN
console.log(edad * nombre)
































