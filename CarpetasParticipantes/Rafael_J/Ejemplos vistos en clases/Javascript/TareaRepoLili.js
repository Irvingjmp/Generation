// Before each exercise, make sure you think about the 4 steps of a function.

// 1. Understand the purpose of the function.
// 2. Define the data that comes into the function from the caller (in the form of parameters)!
// 3. Define what data variables are needed inside the function to accomplish its goal.
// 4. Decide the set of steps that the program will use to accomplish this goal (the algorithm).
// Start coding up your answer once you have completed step 4.

// Exercise #1
// Maria has to calculate the cost of her payments for the month. For every transation there is a $3 fee and a 0.1% (0.01) interest fee. Can you help her calculate her costs?
let  montoPago = prompt ("Porfavor ingresa el monto de transacción:");
console.log(typeof montoPago);
let montoInput = parseFloat(montoPago);
function calcularMontoTotal() {
    const tarifa = 3 + (montoInput*0.01);
    const montoRealAplicado = montoInput + tarifa;
console.log(montoRealAplicado);
}

calcularMontoTotal();
// Return the value of what she should be paying.
alert ("Tu monto total es: " + montoRealAplicado);

// Exercise #2
// Part 1
// Ed would like a way to input 3 names of his friends. The output should be a console greeting to his friends saying: Welcome {name1}, {name2}, {name3}.

// Part 2
// Ed would like to create a function that takes in a birth year and returns the age.

// i.e. 1990 returns 30

// Part 3
// Ed would like to create a function that prints out, Welcome {name1}, you are {age1}. Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}.

function saludarAmigos (){
    let amigo1 = prompt (" ¿Cual de mis amigos eres? ");
    let amigo2 = prompt (" ¿Cual de mis amigos eres? ");
    let amigo3 = prompt (" ¿Cual de mis amigos eres? ");
    alert ("Bienvenidxs " + amigo1 + "," + amigo2 + "," + amigo3);
}

saludarAmigos();

// Challenge Yourself
// A teacher wants to create a rubric for grading. The rubric is from 0 - 11.

// Part 1
// A student passes if they have a score greater than or equal to 5. Create a function that returns a boolean true or false.

// Part 2
// A student has an excellent grade if they score higher than 8. Add on to your function to print out "Excellent" for scores greater than 8.

// Part 3
// A student has a perfect grade if their score is 11. Add on to your function to print out "Perfect" for a score of 11.

function evaluarAlumnos(calificación) {
    if (calificación < 0 || calificación > 11 ) {
        return "la calificiacion debe estar entre 0 y 11";
    } else if (calificación = 11) {
        return "perfecto!";
    } else if (calificación >7){
        return "excelente!";
    } else if (calificacion >5){
        aprobado =true;
    }else{
        aprobado = false;
    }
}

let miCalificación1 = 5;
let miCalificación2 = 8;
let miCalificación3 = 11;
const resultado = evaluarAlumnos(miCalificación3);
console.log (resultado);