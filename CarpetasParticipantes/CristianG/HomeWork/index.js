// Before each exercise, make sure you think about the 4 steps of a function.

// 1. Understand the purpose of the function.
// 2. Define the data that comes into the function from the caller (in the form of parameters)!
// 3. Define what data variables are needed inside the function to accomplish its goal.
// 4. Decide the set of steps that the program will use to accomplish this goal (the algorithm).
// Start coding up your answer once you have completed step 4.

// Exercise #1
// Maria has to calculate the cost of her payments for the month. For every transation there is a $3 fee and a 0.1% (0.01) interest fee. Can you help her calculate her costs?

// Return the value of what she should be paying.

let numTransaccion = prompt('Ingresa la cantidad de transacciones que realizaste en el mes:');//se declara una variable para pedir la cantidad de transacciones del mes hachas por el usuario.

function pagoMensual(transaccionesDelMes){ //la función pagoMensual calcula el costo por la cantidad de transacciones hechas en el mes por el usuario.
    const tarifa = 3; //se crean dos variables constantes ya que su valor no cambiará. su alcance es local, ya que estan dentro de la función.
    const tarifaDeInteres = 0.01;

    return tarifa*transaccionesDelMes*tarifaDeInteres; //se utiliza return para que la función devuelva un valor que no sea undefined, en este caso el resultado de la operación.
}

//alert(pagoMensual(numTransaccion));
console.log(pagoMensual(numTransaccion)); //se llama a la función por medio de un console.log, para que se muestre en la consola.

// Exercise #2
// Part 1
// Ed would like a way to input 3 names of his friends. The output should be a console greeting to his friends saying: Welcome {name1}, {name2}, {name3}.

let amigo1 = prompt('Ingresa el nombre de tu primer amigo:');
let amigo2 = prompt('Ingresa el nombre de tu segundo amigo:');
let amigo3 = prompt('Ingresa el nombre de tu tercer amigo:'); //se crean tres variables para los nombres de los tres amigos.

function saludarAmigos(nombre1,nombre2,nombre3){ //la función permitirá imprimir en la consola el mensaje deseado.
    console.log('Bienvenidos ' + nombre1 + ', ' + nombre2 + ' y ' + nombre3);
    //return 'Bienvenidos ' + nombre1 + ', ' + nombre2 + ' y ' + nombre3
}

//alert(saludarAmigos(amigo1,amigo2,amigo3));
saludarAmigos(amigo1,amigo2,amigo3); //se llama a la función.

// Part 2
// Ed would like to create a function that takes in a birth year and returns the age.

// i.e. 1990 returns 30

let birthYear = prompt('Ingresa tu año de nacimiento:'); //se declara una variable para pedir el año de nacimiento del usuario.

function edad(birthYear){ //la funcióon edad toma como parametro el año proporcionado por el usuario y calcula su edad por medio de una resta. Para que la función devuelva el resultado y no undefined se usa return.
    let currentYear = 2024;
    return currentYear - birthYear;
}

//alert('Tu edad ectual es de ' + edad(birthYear)  + ' años.');
console.log('Tu edad ectual es de ' + edad(birthYear)  + ' años.'); //se imprime el mensaje en cosola, concatenando el valor que retorna la función.

// Part 3
// Ed would like to create a function that prints out, Welcome {name1}, you are {age1}. Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}.

let edadDeAmigo1 = prompt('Ingresa la edad de tu primer amigo: ');
let edadDeAmigo2 = prompt('Ingresa la edad de tu segundo amigo: ');
let edadDeAmigo3 = prompt('Ingresa la edad de tu tercer amigo: '); //se crean tres variables para pedir al usuario las edades de sus amigos.

function saludarAmigosConEdad(primerNombre,edad1,segundoNombre,edad2,tercerNombre,edad3){ //se crea la función que imprimirá en la consola el mensaje de bienvenida con el nombre y edades de los amigos.
    console.log('Bienvenido ' + primerNombre + ' tienes ' + edad1 + ' años. Bienvenido ' + segundoNombre + ' tienes ' + edad2 + ' años. Bienvenido ' + tercerNombre + ' tienes ' + edad3 + ' años.');
}

saludarAmigosConEdad(amigo1,edadDeAmigo1,amigo2,edadDeAmigo2,amigo3,edadDeAmigo3); //se llama a la función.

// Challenge Yourself
// A teacher wants to create a rubric for grading. The rubric is from 0 - 11.

// Part 1
// A student passes if they have a score greater than or equal to 5. Create a function that returns a boolean true or false.

// Part 2
// A student has an excellent grade if they score higher than 8. Add on to your function to print out "Excellent" for scores greater than 8.

// Part 3
// A student has a perfect grade if their score is 11. Add on to your function to print out "Perfect" for a score of 11.

let calificacion = prompt('Ingresa tu calificación: '); //se crea una variable que pedirá al usuario su calificación.

function rubrica(score){ //la función permite determinar el tipo de calificación por medio de la estructura condicional if.
    if(score >= 5 && score <= 8){ //si la calificación es mayor o igual a 5 y es menor o igual a 8 entonces devuelve true.
        return true;
    }else if(score > 8 && score < 11){ //si la calificación es mayor a 8 y menor a 11 entonces se imprime en consola "Excellent", solo si la primera condición no se cumple
        console.log('Excellent'); 
    }else if(score == 11){ //si la calificación es igual a 11 entonces se imprime en consola "Perfect", solo si ninguna de las condiciones anteriores no se cumple.
        console.log('Perfect');
    }else{ //si ninguna de las condiciones anteriores se cumple, se devuelve el valor booleano false.
        return false;
    }
    //return score >= 5;
}

rubrica(calificacion); //se llama a la función.