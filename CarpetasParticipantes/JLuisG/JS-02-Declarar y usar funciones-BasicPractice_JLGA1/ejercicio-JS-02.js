// Before each exercise, make sure you think about the 4 steps of a function.

// 1. Understand the purpose of the function.
// 2. Define the data that comes into the function from the caller (in the form of parameters)!
// 3. Define what data variables are needed inside the function to accomplish its goal.
// 4. Decide the set of steps that the program will use to accomplish this goal (the algorithm).
// Start coding up your answer once you have completed step 4.

// Exercise #1
// Maria has to calculate the cost of her payments for the month. For every transation there is a $3 fee and a 0.1% (0.01) interest fee. Can you help her calculate her costs?

// Return the value of what she should be paying.

console.log("**************************************** Exercise #1 ******************************************");


function payments(transation) {
    let cost = transation + (transation * 0.01) + 3 // esta es la operacion
    console.log(`El costo que Maria tiene que pagar por la transaccion de $${transation} + comisiones es igual a: $${cost}`);
}
payments(100)

// Exercise #2
// Part 1
// Ed would like a way to input 3 names of his friends. The output should be a console greeting to his friends saying: Welcome {name1}, {name2}, {name3}.


console.log("**************************************** Exercise #2 ******************************************");

function saludo(name1, name2, name3) {
    console.log(`
        Bienvenido ${name1}
        Bienvenido ${name2}
        Bienvenido ${name3}
                `);
}
saludo("Angel", "Cristobal", "Hugo");

// Part 2
// Ed would like to create a function that takes in a birth year and returns the age.

// i.e. 1990 returns 30

function calcularEdad(fechaDeNacimiento) {
    let nacimiento = new Date(fechaDeNacimiento)
    let fechaActual = new Date()
    let edad = fechaActual.getFullYear() - nacimiento.getFullYear()
    console.log(`tienes ${edad} años de edad`);
}
calcularEdad("1996-08-31")

// Part 3
// Ed would like to create a function that prints out, Welcome {name1}, you are {age1}. Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}.

function saludoCompleto(name1, edad1, name2, edad2, name3, edad3) {


    console.log(`Bienvenido ${name1}, tienes ${edad1} años. Bienvenido ${name2}, tienes ${edad2} años. Bienvenido ${name3}, tienes ${edad3} años`);

}

saludoCompleto("Angel", "29", "Hugo", "31", "Cristobal", "24");


console.log("**************************************** Challenge Yourself ******************************************");

// Challenge Yourself
// A teacher wants to create a rubric for grading. The rubric is from 0 - 11.
// Part 1
// A student passes if they have a score greater than or equal to 5. Create a function that returns a boolean true or false.
// Part 2
// A student has an excellent grade if they score higher than 8. Add on to your function to print out "Excellent" for scores greater than 8.

// Part 3
// A student has a perfect grade if their score is 11. Add on to your function to print out "Perfect" for a score of 11.


let random = Math.random() * 11;

function calification(calification) {
    if (calification === 11) {
        return "Perfect!!!";
    } else if (calification > 8) {
        return "Excelent!!!";
    } else if (calification >= 5) {
        return true;                        
    } else {
        return false;
    }
}

console.log("Tu resultado es: ", calification(random)," por que tu calificación fue: ",random); 

random = 7;

console.log("Tu resultado es: ", calification(random)," por que tu calificación fue: ",random); 



