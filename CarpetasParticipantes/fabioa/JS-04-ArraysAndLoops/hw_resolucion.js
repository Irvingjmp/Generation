// Open up a text editor of your choice and complete the following Javascript exercises.
// Exercise #1
// Part 1
// There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan. Create an array that has these three names in order.
let peopleWaiting = ["Sofia","David","Juan"];
console.log(peopleWaiting);
// Part 2
// Two more people get added to the back of the line - Sara and Augustin. The first person in line is called to the teller. What does the queue look like?

peopleWaiting.push("Sara","Agustin")
console.log("Llegan Sara y Agustin")
console.log(peopleWaiting)
console.log("Se va la primera persona")
actualizada1 = peopleWaiting.shift()
console.log(peopleWaiting)
// Part 3
// It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line. One more person (Elena) shows up and goes to the end of the line. What does the queue look like?
console.log("Regresa Renata")
peopleWaiting.splice(1,0, "Renata");
console.log(peopleWaiting);
peopleWaiting.splice(5,4,"Elena");
console.log("Llegó Elena")
// Exercise #2
// Write a JavaScript program to construct the following pattern, using a nested for loop.

// *  
// * *  
// * * *  
// * * * *  
// * * * * *
//Solución
// Número de filas en el patrón
let filas = 5;
// Bucle anidado para construir el patrón
for (let i = 1; i <= filas; i++) {
  let linea = "";
  // Bucle interno para agregar los asteriscos
  for (let j = 1; j <= i; j++) {
    linea += "* ";
  }
  // Imprimir cada línea
  console.log(linea);
}
// Exercise #3
// Write while loops to do the following:

// – Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
// as long as xValue remains positive.
// - Print all the odd numbers between 1 - 100.
// - Write a method with a while loop to print 1 through n in square brackets. 
// For example, if n = 6 print [1] [2] [3] [4] [5] [6]
// - Write a method with a while loop that computes the sum of first n positive integers: 
//while (i < 16)
// sum = 1 + 2 + 3 + … + n
// Examples:
// n = 5 sum = 15
// n = 19 sum = 190