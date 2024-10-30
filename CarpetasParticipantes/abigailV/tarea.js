// Before each exercise, make sure you think about the 4 steps of a function.

// 1. Understand the purpose of the function.
// 2. Define the data that comes into the function from the caller (in the form of parameters)!
// 3. Define what data variables are needed inside the function to accomplish its goal.
// 4. Decide the set of steps that the program will use to accomplish this goal (the algorithm).
// Start coding up your answer once you have completed step 4.

// Exercise #1
// Maria has to calculate the cost of her payments for the month. For every transation there is a $3 fee and a 0.1% (0.01) interest fee. Can you help her calculate her costs?
// Return the value of what she should be paying.
//función 


// Exercise #2
// Part 1
// Ed would like a way to input 3 names of his friends. The output should be a console greeting to his friends saying: Welcome {name1}, {name2}, {name3}.
let nombre = prompt ("Ingresa tu nombre: ");

let nombre1= prompt ("Ingresa tu nombre: ");

let nombre2 = prompt ("Ingresa tu nombre:");

let saludo = "Welcome"+ " " + nombre + " " +nombre1+ " " + nombre2 ; 

console.log(saludo)

// Part 2
// Ed would like to create a function that takes in a birth year and returns the age.

// i.e. 1990 returns 30

// Part 3
// Ed would like to create a function that prints out, Welcome {name1}, you are {age1}. Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}.
let nombre3 = prompt ("Ingresa tu nombre: ");

let edad= prompt ("Ingresa tu edad: ");

let saludo1("Welcome" + nombre +"tienes" + edad +"años");

console.log(saludo1)

let nombre4 = prompt ("Ingresa tu nombre:");

let edad2= prompt ("Ingresa tu edad: ");

console.log("Welcome" + nombre2 + edad2);

let nombre5 = prompt ("Ingresa tu nombre:");

let edad3= prompt ("Ingresa tu edad: ");

console.log("Welcome" + nombre3 + edad3);





// Challenge Yourself
// A teacher wants to create a rubric for grading. The rubric is from 0 - 11.

// Part 1
// A student passes if they have a score greater than or equal to 5. Create a function that returns a boolean true or false.
function aprobar(calificacion){
return calificacion >= 5;
}

let calificacionEstudiante = 5;
let calificacionEstudiante1 = 4;

console.log(aprobar(calificacionEstudiante));
console.log(aprobar(calificacionEstudiante1));

// Part 2
// A student has an excellent grade if they score higher than 8. Add on to your function to print out "Excellent" for scores greater than 8.
function excelente(calificacion){
    if (calificacion >= 8) {
        console.log("Excelente");
    }
}

let calificacionExcelente = 8;
let calificacionExcelente1 = 7;

console.log(excelente(calificacionExcelente));



// Part 3
// A student has a perfect grade if their score is 11. Add on to your function to print out "Perfect" for a score of 11.
function perfecto(calificacion){
    if (calificacion >= 11) {
        console.log("Perfecto");
    }
}

let calificacionPerfecto = 11;


console.log(perfecto(calificacionPerfecto));
