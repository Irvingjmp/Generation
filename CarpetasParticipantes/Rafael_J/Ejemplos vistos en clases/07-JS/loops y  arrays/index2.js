/* Almacenar la fecha más reciente en una variable comparando las transacciones usando declaraciones IF. Una vez que encuentre la fecha más reciente, querrá mostrarla. */
//  crear y asignar un arreglo
const numeros = [1,2,3,4,5,6];
let dinamico = [];
// const dfrutas = new Array("manzana","pera",  "sandia");
let frutas = new Array("manzana","pera","sandia");

// en los arrays podemos acceder por medio del index
// console.log(numeros[4]);//espero que se imprima en consola el numero 5
// tambien puedo modificarlos
frutas[0]= "uvas";//Espero que en donde habia manzanas, ahora tengamos uvas
// console.log(frutas[0]); //Espero que el arreglo en el indice 0 me retorne uvas
// los arreflos tienen atributos y uno de ellos es la longitud
console.log(dinamico.length); // vamos a esperar el largo del arreglo
// existen metodos precreado para los arreglos, porque los arreglos son objetos
// indexOf(), para usar un metodo de un arreglo se usa la symtaxis nombre arreglo.nombreMetodo

// console.log(frutas.indexOf("uvas")); // esperamos de retorno el indice de donde estan las uvas [0]
// console.log(frutas.indexOf("manzana")); // retornar un -1

// El metodo push agregar uno o mas elementos al final de la matriz y devuelve la nueva longitud de la matriz.

numeros.push(7);
numeros.push(8);
console.log (numeros);

// slice hace un corte en base a 2 indices, el indice de inicio y el indice final -> hace un clon (copia) modificado de mi arreglo original

let clonFrutas = frutas.slice(2) // lo que esperamos de aqui es que se extraiga el arreglo clon con el elemento sandia porque es el del indice 2
console.log(clonFrutas);
let clonNumeros = numeros.slice(-2); 
console.log(clonNumeros);

// ciclos

// for -  n numero de veces de un bloque de código
for(let i = 0; i <= frutas.length-1; i++){
    console.log("---------------------------aqui se ejecuta el for------------------")
    console.log(frutas[i]);
}
// for in - ciclos en las propiedades de un objeto
// for of - valores de un objeto que tiene capacidad de ser iterado
// while -  ciclos de un bloque de codido "mientras" ciertara condición es true
// do/while - > ciclo que hace un bloque de código mientras la condición espcedificada sea true