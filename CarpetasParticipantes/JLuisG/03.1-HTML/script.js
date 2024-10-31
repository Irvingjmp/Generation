/* function calculateMonthlyPayments(totalAmount, numberOfTransactions) {
    const transactionFee = 3;
    const interestRate = 0.001;
    const totalFee = numberOfTransactions * transactionFee;
    const interestCost = totalAmount * interestRate;
    return totalFee + interestCost;
}

function greetFriends(name1, name2, name3) {
    console.log(`Welcome ${name1}, ${name2}, ${name3}`);
}

function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

function greetFriendsWithAge(name1, birthYear1, name2, birthYear2, name3, birthYear3) {
    console.log(`Welcome ${name1}, you are ${calculateAge(birthYear1)}.`);
    console.log(`Welcome ${name2}, you are ${calculateAge(birthYear2)}.`);
    console.log(`Welcome ${name3}, you are ${calculateAge(birthYear3)}.`);
}


function isPassing(score) {
    return score >= 5;
}

function gradeEvaluation(score) {
    if (score >= 5) {
        console.log("Pass");
        if (score > 8) {
            console.log("Excellent");
        }
    } else {
        console.log("Fail");
    }
}

function gradeEvaluation(score) {
    if (score >= 5) {
        console.log("Pass");
        if (score > 8) {
            console.log("Excellent");
        }
        if (score === 11) {
            console.log("Perfect");
        }
    } else {
        console.log("Fail");
    }
}

*/





//habiamos comentado que el flujo Javascript es el proceso en el cual se van interpretando las lineas de tu codigo,
//y es flujo se puede interrumpir, se puede pausar y se ejecutar en un solo hilo de linea

const jsFlow = () => {
    console.log(4);
}
console.log(1);
console.log(2);
//invocando
jsFlow();
console.log(3);

// If y else son ejecutables que modifican el flujo JS

const mostrarMensaje = (mensaje) => {
    alert(mensaje);
}

const validarEdad = (edad) => {
    if (edad >= 18) {
        mostrarMensaje("Santander te presta mas que BBVA");
    } else {
        mostrarMensaje("Santander no le presta a menores");

    }
}

validarEdad(28);

/*JS utiliza estructutas de control de flujo para hacer tu codigo eficiente y flexible:
Esttras estructuras son:
1. Condicionales (if, else if, else, swich en base a casos)
2. Ciclos(for, while, do..while): la manera en que controlan el flujo es por emdio de iteraciones
3. Controles de salto (break): es capaz de modficar y romper los ciclos permitiemtiendote
*/
//switch que es como la vida real, han real tenemos una serie de caso o de caterogia
//en las cuales necesitamos que nuestros bloques de codigo se ejecuten segun sea el caso a validar
// if y switch llevaria el flujo de la aplicacion
// break se puede usar con sitch o bucles, para el proceso de flujo. Alto y continua si hay una indicacion mas adelante.

const  ValidarNoLaborable = (dia) =>{
    switch(dia){
        case "sabado":
            console.log("Dia no laborable");
            break;
        case "domingo":         // cuando case da True. como el if - else
            console.log("dia no laborable");
            break;             // se coloca si o si para parar un switch, si no lo hay da un error fall-through
        default:
            break;        
    }
}
ValidarNoLaborable("sabado");
