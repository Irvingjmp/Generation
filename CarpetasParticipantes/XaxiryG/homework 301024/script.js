// Xaxiry Magaly Gonzzalez Ramos   30/10/24
//Arreglos (Arrays), matrices o colecciones.
// Los arrays son estructuras utilizadas para almacenar y organizar datos.    
// Los arreglos en JavaScript se pueden declarar utilizando let, const o var, pero cada uno tiene un comportamiento diferente.
/*Usa let si necesitas cambiar el arreglo completamente.
Usa const si quieres que el arreglo no cambie de referencia, pero aún puedes modificar su contenido.
Var no se recomienda en el contexto moderno de JavaScript. */
// ***** Creando,modificando, accediendo, arreglos en JS ***** 
// creando arreglos en JS. JavaScript Array literal. Estrcutura: let array_name = [item1, item2, ...];
let taquitos=[ "pastor ", "canasta ", "dorados ", "barbacoa ", "carnitas ", "guisado ", "carne asada ", "suadero "];
console.log(taquitos);
// Un arreglo puede usar varias líneas, el espacio y los saltos de línea no interfieren, mientras se respete la estructura.
let arreglosNumeros = [
  1 ,
  2 ,
  3 ,
  4 ,
  5 ,
  6 ,
  7
];
console.log(arreglosNumeros);
// Usando la palabra clave new.
let arreglosLogicos = new Array ( true,  false ,true );
console.log(arreglosLogicos);
// *Se recomienda utilizar la primera estructura JavaScript Array literal.*
// ----- modificando ----- 
// Array taquitos.
//Cambiando un elemento del arreglo.
taquitos[5] = "alambre "; // Cambiando guisado por alambre
// Ejemplos y para que sirve push y pop en los arreglos
// Los métodos .push() y .pop() actuan al final del array.
// .push() Añade uno o varios elementos al final del array. 
let agua = ["Jamaica ", "horchata ", "Naranja ", "Limon "];
document.getElementById("agua1").innerHTML = agua; //Para visualizar en html
agua.push("Uva "); //Agrega Uva al final de la lista
// let length = agua.push("Uva"); // Para añadir uno o varios elementos al final del array. Devuelve el tamaño del array.
document.getElementById("agua2").innerHTML = agua ; // Para visualizar en html en parrafo
//.pop()  elimina el último elemento del array. 
let calcetin = ["Rojos ", "Verdes ", "Naranjas ", "Amarillo "];
document.getElementById("calcetines1").innerHTML = calcetin; //Para visualizar en html
calcetin.pop(); // elimina el ultimo elemento del array
//document.getElementById("calcetines2").innerHTML = calcetin.pop();//Devuelve dicho elemento, eliminado.
document.getElementById("calcetines2").innerHTML = calcetin ; // Para visualizar en html en parrafo
//Los métodos .unshift() y .shift() actuan al inicio del array.
// .unshift Añade uno o varios elementos al inicio del array. 
document.getElementById("agua3").innerHTML = agua; //Para visualizar en html
agua.unshift("Piña "); //Agrega Uva al inicio de la lista
document.getElementById("agua4").innerHTML = agua ; // Para visualizar en html en parrafo
// .shift() Elimina el primer elemento del array. 
document.getElementById("calcetines3").innerHTML = calcetin; //Para visualizar en html
calcetin.shift(); // elimina un elemento al inicio del array
document.getElementById("calcetines4").innerHTML = calcetin ; // Para visualizar en html en parrafo

// ----- accediendo a los arreglos ----- 
let animales =["conejo ", "perro ", "caballo ", "gato ", "loro "];
document.getElementById("arregloAni").innerHTML = animales; //console.log(animales);
document.getElementById("unElemento").innerHTML = animales[1]; // console.log(animales[1]); // accedemos a perro.

// Funciones de arreglos mas usadas en desarrollo js
// forEach, slice y shift
// .forEach(ƒ): Ejecuta la función definida en ƒ por cada uno de los elementos del array.
// Ejemplo de .forEach
let dulces = ["paletas ", "chicles ", "chocolate ", "caramelo ", "palanquetas "];
// .forEach con funcion arrow https://www.youtube.com/watch?v=5DaZXXbHI_U
dulces.forEach(dulces => { 
console.log(dulces); // Imprime cada fruta, recorre el array.
 });
 // Ejemplo de slice
/*Es una función integrada en JavaScript que se utiliza para crear una copia superficial de una parte de un array existente. La parte del array que se copia se especifica mediante el índice inicial y final. Este método no modifica el array original y devuelve un nuevo array.*/
let slicedulces = dulces.slice(1, 3);
console.log(slicedulces); // [2, 3]
 // Ejemplo de shift 
 /*Es una función integrada en JavaScript que se utiliza para eliminar el primer elemento de un array y devolver ese elemento eliminado. Este método modifica el array original en el que se llama. */
let numbers = [1, 2, 3, 4, 5];
let firstNumber = numbers.shift();
console.log(numbers); // [2, 3, 4, 5]
console.log(firstNumber); // 1

// Ejemplo y paso a paso de como crear una cola o pila con arreglos JS
// Cola FIFO (First In, First Out), lo que significa que el primer elemento en entrar es el primero en salir, y los nuevos que se añaden van al final.
//Primero se declara la matriz
let cola = ["donas ", "conchas ", "panque "]
console.log(cola);
// luego se agregan mas elementos al arreglo con push.
cola.push("taco ");
cola.push("cuernito "); // Utilizamos push porque añade uno o varios elementos al final del array.
// Para eliminar la primera en la cola se utiliza shift
cola.shift(); 
console.log(cola);

// Explica For, Do while, while y cuando usar uno en cada caso
// Do - While
//Es una combinación de instrucciones define un bloque de código que se ejecutará una vez y se repetirá mientras se cumpla una condición true.
/* Estructura 
do {  instrucción de codigo
} while (condition); */
let contar = 1;
do {
    console.log(contar);
    contar++;
} while (contar <= 5); // Para contar del 1 al 5
// While 
// La while de claración crea un bucle (alrededor de un bloque de código) que se ejecuta mientras se cumple una condición true.
let contarWhile = 1;

while (contarWhile <= 5) {
    console.log(contarWhile);
    contarWhile++;
}
//For 
//Se usa cuando conoces el número de iteraciones.
for (let cont = 1; cont <= 5; cont++) {
  console.log(cont);
}

// Ejemplo de For anidados
const filas = 5;
// Para hacer una piramide triangulo.
for (let i = 1; i <= filas; i++) { //Este bucle se ejecuta desde i = 1 hasta i = 5
    let linea = ""; // Se inicializa una cadena vacía llamada linea. Esta cadena se irá llenando con asteriscos en cada iteración del bucle interior.
    for (let j = 1; j <= i; j++) { // Este bucle anidado se ejecuta desde j = 1 hasta j = i. Esto significa que en la primera iteración (cuando i = 1), el bucle interior se ejecutará una vez; en la segunda iteración (cuando i = 2), se ejecutará dos veces, y así sucesivamente hasta que i = 5.
        linea += '* '; // En cada iteración del bucle interior, se añade un asterisco seguido de un espacio a la cadena linea. Esto construye la línea de asteriscos para esa fila.
    }// se cierra el for anidado.
    console.log(linea); // imprimer en consola
} //Se cierra el primero for