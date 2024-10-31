// Las matrices en JavaScript son un tipo de datos que se utilizan para almacenar múltiples valores en una sola variable. Aunque se ven y actúan como listas ordenadas, internamente son un tipo especial de objeto con claves indexadas. Vamos a profundizar en cómo crear, modificar, acceder y manipular matrices utilizando métodos comunes.

// 1. Creando una matriz
// Se puede crear una matriz utilizando corchetes [] o el constructor Array().

// javascript
// Copiar código
// // Creación usando corchetes
// let numeros = [1, 2, 3, 4, 5];

// // Creación usando el constructor
// let frutas = new Array("manzana", "banana", "naranja");
// 2. Modificando una matriz
// Para modificar elementos específicos, puedes usar su índice, donde el primer elemento tiene el índice 0.

// javascript
// Copiar código
// numeros[0] = 10;  // Cambia el primer elemento a 10
// frutas[2] = "pera"; // Cambia el tercer elemento a "pera"
// 3. Accediendo a los elementos de una matriz
// Se accede a los elementos de una matriz mediante su índice, entre corchetes.

// javascript
// Copiar código
// console.log(numeros[0]); // Imprime 10
// console.log(frutas[2]);  // Imprime "pera"
// 4. Funciones de matriz incorporadas
// JavaScript ofrece una amplia variedad de métodos para trabajar con matrices, desde manipular elementos hasta transformarlos. Vamos a ver algunos de los métodos más comunes.

// 5. indexOf()
// Busca un elemento en la matriz y devuelve su índice. Si no lo encuentra, devuelve -1.

// javascript
// Copiar código
// let index = frutas.indexOf("banana"); // Devuelve 1
// 6. pop()
// Elimina el último elemento de la matriz y lo devuelve. La longitud de la matriz disminuye en 1.

// javascript
// Copiar código
// let ultimoElemento = numeros.pop(); // Elimina 5 y lo devuelve
// console.log(numeros); // [10, 2, 3, 4]
// 7. push()
// Agrega uno o más elementos al final de la matriz y devuelve la nueva longitud de la matriz.

// javascript
// Copiar código
// numeros.push(6); // Agrega 6 al final
// console.log(numeros); // [10, 2, 3, 4, 6]
// 8. splice()
// Permite añadir, eliminar o reemplazar elementos. Se usa con tres argumentos: índice, número de elementos a eliminar y elementos para añadir.

// javascript
// Copiar código
// numeros.splice(2, 1, 9); // En la posición 2, elimina 1 elemento y añade 9
// console.log(numeros); // [10, 2, 9, 4, 6]
// 9. unshift()
// Agrega uno o más elementos al inicio de la matriz y devuelve la nueva longitud.

// javascript
// Copiar código
// numeros.unshift(1); // Agrega 1 al principio
// console.log(numeros); // [1, 10, 2, 9, 4, 6]
// 10. shift()
// Elimina el primer elemento de la matriz y lo devuelve.

// javascript
// Copiar código
// let primerElemento = numeros.shift(); // Elimina 1 y lo devuelve
// console.log(numeros); // [10, 2, 9, 4, 6]
// 11. slice()
// Devuelve una copia de una porción de la matriz sin modificarla, con índices de inicio y fin opcionales.

// javascript
// Copiar código
// let subArray = numeros.slice(1, 3); // Crea un subarray de índice 1 a 3 (sin incluir el índice 3)
// console.log(subArray); // [2, 9]
// 12. forEach()
// Ejecuta una función en cada elemento de la matriz.

// javascript
// Copiar código
// numeros.forEach(function(numero) {
//     console.log(numero * 2); // Imprime cada elemento multiplicado por 2
// });
// 13. Las matrices son un tipo de objeto
// Internamente, una matriz es un objeto con propiedades indexadas numéricamente. Por ejemplo, frutas en realidad tiene índices 0, 1, 2 como propiedades. Puedes verificarlo usando typeof:

// javascript
// Copiar código
// console.log(typeof frutas); // "object"
// 14. Usando matrices como pila o cola
// Las matrices pueden comportarse como pilas (LIFO: último en entrar, primero en salir) o colas (FIFO: primero en entrar, primero en salir).

// Pilas
// En una pila, usamos push() para añadir elementos al final y pop() para eliminarlos desde el final.

// javascript
// Copiar código
// let pila = [];
// pila.push(1); // [1]
// pila.push(2); // [1, 2]
// pila.pop();   // Devuelve 2, pila ahora es [1]
// Colas
// En una cola, usamos push() para añadir al final y shift() para eliminar desde el principio.

// javascript
// Copiar código
// let cola = [];
// cola.push(1); // [1]
// cola.push(2); // [1, 2]
// cola.shift(); // Devuelve 1, cola ahora es [2]
// En resumen:

// Las pilas usan push() y pop().
// Las colas usan push() y shift().

/// Ciclos
