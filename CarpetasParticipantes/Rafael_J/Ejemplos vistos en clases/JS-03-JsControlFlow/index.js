// se puede pausar y se ejecutanen un solo hilo o en linea4
const jsflow = () => {
    console.log(4);
}

console.log(1);
console.log(2);
jsflow();
console.log(3);


const validarEdad = (edad) =>{
    if(edad >= 18) {
        alert( "bbva te presta mil pesos");
    }else{
        alert("bbva necesitas tener 18 años");
    }
    if(edad === 25){
        console.log("es buen candidato");
    }
}

validarEdad(25);

/*javascript utiliza estructuas de control de flujo para hacer tu codigo eficiente y flexible:
estas estructuras son: 
1.- condicionales (if, else if, else, switch en base a casos)
2.- ciclos: (for, while, dowhile)
3.- controles de salto (break) es capas de romper el ciclo y salir del bucle*/

// SWITCH -> que es como la vida reaal, han real tenemos una series de datos o de categoria
const validadDiaNoLaborable = (dia) =>{
    switch(dia){
        case "sabado":
            console.log("Dia no laborable");
            break;
            case "domingo":
                console.log("dia no laborable");
                break;
            default:
                break;
    }
}

validadDiaNoLaborable("sabado");