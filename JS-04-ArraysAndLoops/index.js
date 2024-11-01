// Crear y asignar un arreglo /  Dos maneras de crear y asignar un arreglo
const numeros = [1,2,3,4,5,6];
let dinamico = [];

let frutas = new Array("manzana","pera","sandia");

// en los arrays podemos acceder por medio del index
//console.log(numeros[4]) // Espero que se imprima en consola el numero 5
//frutas[0] = "Uvas"; //Espero que en donde habia manzanas, ahora tengamos uvas
//console.log(frutas[0]); //Espero que el arreglo en el indice 0 me retorne uvas

//Los arreglos tienen atributos y uno de ellos es la logintud
//console.log("length: "+dinamico.length); //vamos a esperar el largo del arreglo

//Existe metodos pre-creados para los arreglos, porque los arreglos son Objetos
//indexOf(), para usar un metodo de un arreglo 
//se usa la syntaxis nombre_arreglo.nombreMetodo

//console.log(frutas.indexOf("Uvas")); // esperamos de retorno el indice de donde estan las uvas [0]
//console.log(frutas.indexOf("manzana")) // retornar un -1

//El metodo push  agregar uno o mas elementos al final de la matriz y devuelve la nueva longitud de la matriz.

numeros.push(7);
numeros.push(8);
console.log(numeros);//  despues del push esperamos ver del 1 al 8
//numeros.shift(); //Esperamos ver el arreglo sin primer elemento
let primerElemento = numeros.shift(); // en una variable let el primer elemento
console.log(primerElemento); // visualizar el primer elemento
console.log(numeros);// el arreglo sin el primer elemto



//Slice, hace un corte en base a dos indices, el indice de inicio y el indice final -> hace un clon (copia) modificado de mi arreglo original 

let clonFrutas = frutas.slice(2); //debemos esperar de aqui es que se extraiga el arreglo clon con el elemento sandia porque es el del indice 2
//console.log(clonFrutas);
let clonNumeros = numeros.slice(-2,-1); // deberiamos esperar un  clon del arreglo numeros que deberia ser el 7 o 6
//console.log(clonNumeros);

//Ciclos
// Los ciclos son: for,for/in, for/of - while y do while 
for(let i = 0; i <= frutas.length-1; i++){
   // console.log(frutas[i]); // Esperamos que se impriman en colola uno a uno los valores dentro del arreglo de frutas
}

function setBastaFlag(flag){
    const abc = ["a","b","c","d"]
   let i = 0; 
    // do{
    //     console.log(abc[i]);
    //     i++
    // }while(flag);

    while(flag){
        console.log(abc[i]);
        i++
    };
} 

