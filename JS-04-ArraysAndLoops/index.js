// Crear y asignar un arreglo /  Dos maneras de crear y asignar un arreglo
const numeros = [1,2,3,4,5,6];
let frutas = new Array("manzana","pera","sandia");
// en los arrays podemos acceder por medio del index
console.log(numeros[4]) // Espero que se imprima en consola el numero 5
frutas[0] = "Uvas"; //Espero que en donde habia manzanas, ahora tengamos uvas
console.log(frutas[0]); //Espero que el arreglo en el indice 0 me retorne uvas
//Existe metodos pre-creados para los arreglos, porque los arreglos son Objetos
//indexOf(), para usar un metodo de un arreglo 
//se usa la syntaxis nombre_arreglo.nombreMetodo
console.log(frutas.indexOf("Uvas")); // esperamos de retorno el indice de donde estan las uvas [0]
console.log(frutas.indexOf("manzana")) // retornar un -1