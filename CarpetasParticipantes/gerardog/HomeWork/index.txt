/*
Explica de manerá practica y con ejercicios sencillos los siguientes 
conceptos:

1. Objeto función de Javascript.
funciones son objetos, por lo que a través de declarar variables
en estas, al nombrarlas tendremos de vuelta lo declarado

2. Resultado del siguiente codigo y explicación 
sencilla(function () {}). Constructor === Función que devuelve 
verdadero
3. Constructor de funciones y propiedades y métodos de Función.
El constructor es una función especial que se usa para crear 
y llamar objetos

4. This en funciones
let persona = {
    nombre: "Gerardo",
    saludar() { console.log(`Hola, this.nombre); }
}; El this toma el argumento relevante para la declaración
de la variable, aunque haya sido nombrada antes, respetará
el this de la declaración

5. Explica un ejemplo de función JavaScript usando el prototipo
Javascript.

6. Hoisting
El hoisting "almacena" la función aunque no haya sido declarada
7. Auto invocación
se nombra entre paréntesis después de declararla
8. Funciones utilizadas como valores
son funciones que pueden estar dentro de otras como anidadas
9. Funciones anónimas
estas aún no son nombradas, son útiles cuando se van a invocar
de inmediato
10. Funciones Arrow
Es una nueva forma de escribir funciones, son más cortas y ahorras tiempo al crearlas
11¿Qué funciones necesito crear para obtener los valores de 
los inputs de un formulario HTML?
*/

// Before each exercise, make sure you think about the 4 steps of a function.

// 1. Understand the purpose of the function.
// 2. Define the data that comes into the function from the caller (in the form of parameters)!
// 3. Define what data variables are needed inside the function to accomplish its goal.
// 4. Decide the set of steps that the program will use to accomplish this goal (the algorithm).
// Start coding up your answer once you have completed step 4.

// Exercise #1
    // Maria has to calculate the cost of her payments for the month. For every transation there
    //is a $3 fee and a 0.1% (0.01) interest fee. Can you help her calculate her costs?
    // Return the value of what she should be paying.

    function costo(montoTrans) {
        const fee = 3;
        const int = 0.01; // 0.1% = .01
    
        let costo = (montoTrans * int) + fee;
        return costo;
    }
    console.log(costo(100))
    
    // Exercise #2
    // Part 1
        // Ed would like a way to input 3 names of his friends. The output should be a console 
        //greeting to his friends saying: Welcome {name1}, {name2}, {name3}.
    function saludar(nombre1, nombre2, nombre3) {
        console.log("Hola " + nombre1 + ", " + nombre2 + "y " +nombre3);
    }
    saludar("Juan", "Maria", "Carlos")
    
    
    // Part 2
        // Ed would like to create a function that takes in a birth year and returns the age.
        // i.e. 1990 returns 30
    function calcularEdad(nacimiento) {
        const queAñoEs = 2024;
        return queAñoEs - nacimiento;
    }
    console.log(calcularEdad(2023)) 
    
    
    // Part 3
        // Ed would like to create a function that prints out, Welcome {name1}, you are {age1}. 
        //Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}.
    let edad1 = calcularEdad(nacimiento);
    let edad2 = calcularEdad(nacimiento);
    let edad3 = calcularEdad(nacimiento);
    
        console.log("Hola" + nombre1 + "tienes " + edad1 + " años." + 
                    "Hola" + nombre2 + "tienes " + edad2 + " años." +
                    "Hola" + nombre3 + "tienes " + edad3 + " años." 
        )
    
    // Challenge Yourself
        // A teacher wants to create a rubric for grading. The rubric is from 0 - 11.
        // Part 1
            // A student passes if they have a score greater than or equal to 5. Create a function 
            //that returns a boolean true or false.
    function aprobado(calificacion) {
        return calificacion >= 5;
    }
    console.log(aprado(6));
    
        // Part 2
            // A student has an excellent grade if they score higher than 8. Add on to your function
            // to print out "Excellent" for scores greater than 8.
    function aprobadoExcelente(calificacion) {
        if (calificacion >= 5) {
            if (calificacion > 8) {
                console.log("Excellent");
                }
                return true;
            }       
            else {
                return false;
            }
    }
    console.log(aprobadoExcelente(9)); 
        // Part 3
            // A student has a perfect grade if their score is 11. Add on to your function 
            //to print out "Perfect" for a score of 11.
    function excelentePerfecto(calificacion) {
        if (calificacion === 11) {
            console.log("Perfectirijillo");
        } else if (nota > 8) {
            console.log("Excellent");
        }
        return nota >= 5;
    }
    console.log(excelentePerfecto(11))
    
    