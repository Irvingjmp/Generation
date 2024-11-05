// Crear y asignar un arreglo
// Dos maneras de crear y asignar un arreglo
const numeros = [1,2,3,4,5,6]
let dinamico=[];

const frutas = new Array("manzana","pera","sandia");

// Podemos accerde a los arrays por medio del index
console.log(numeros[4]) //Se espara que imprima el numero 5
frutas[0] = "uvas"; //Espero que en donde habia manzanas
console.log(frutas[0]); //Espero que el arreglo en el indice 0 

console.log(dinamico.length); //

//Existen metodos precreados para los arreglos, porque los arreglos son Objetos.
//indexOf(), para usar un metodo de un arreglo
//Se usa la syntaxis nombre

console.log(frutas.indexOf("uvas")); //Retorna el valor de indice donde localice "uvas" en este caso[0]
console.log(frutas.indexOf("manzana")) //retorna un -1

numeros.push(7);
numeros.push(8);
console.log(numeros);

//Slice, hace un corte en base a dos indices, el indeice de inicio y el índice final -> hace un clon (copia) modificado de mi arreglo original

let clonFrutas = frutas.slice(2,3)
console.log(clonFrutas)
let clonNumeros = numeros.slice(-2,-1)
console.log(clonNumeros)

// Ciclos
// Los ciclos son: for, for/in, for/of - while y do while
for(let i=0; frutas.length-1; i++){
    console.log("-------aqui se ejecuta----------")
    console.log(frutas[i]);
}