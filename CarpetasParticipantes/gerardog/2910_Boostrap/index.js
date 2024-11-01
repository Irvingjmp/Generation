/* Flujo en js es el proceso en el cual se van interpretando las lineas
de un codigo y ese flujo se puede interrumpir, pausar y ejecutar en un solo hilo o 
en linea*/ 

/*
console.log(1);
console.log(2);
console.log(3);
const jsflow = () => {
    console.log(4);
}
jsflow (); // se imprimiría 1, 2, 3, 4
*/

/*
const jsflow = () => {
    console.log(4);
}

console.log(1);
console.log(2);
jsflow ();
console.log(3);

 // se imprimiría 1, 2, 4, 3
 */

//If & else son ejecutables que modifican el flujo de JS
    //al ejecutar dos posibles bloques de codigo que en lenguaje natural serian dos finales

const mostrarMensaje = (mensaje) => {
    alert (mensaje);
}
    
const validarEdad = (edad) => {
    if (edad >= 18){
        alert ("bbva te otorga un prestamo");
    } else {
        alert ("debes ser mayor de edad");
    } 
    if(edad === 25) {
        console.log("buen candidato")
    }
}

validarEdad (25);

/* JS utiliza estructuras de control de flujo para hacer codigo eficiente y flexible
Estas estructiras son:
1. condicionales (if, else if, else, switch (con base a casos))
2. ciclos (for, while, do.while): la manera como controlan el flujo es con iteraciones
3. Controles de salto (break): capaz de modificar y romper los ciclos permitiéndote salir del bucle
 */

//switch

/* tenemos una serie de casos o categorías en las cuales necesitamos que nuestros bloques de código se 
ejecuten segun sea el caso a validar*/

/*
const validarNoLabor = () => { //creando un caso con switch
    switch(dia) {
        case "sabado": //caso a validar
            console.log("Día no laborable"); //codigo a ejecuar
            break; //break para salir
        case "domingo":
            console.log("Día no laborable"); //codigo a ejecuar
            break; //break para salir
            default: // caso por defecto (si ninguno se cumple, haz esto)
                break;
    }

}
*/
const validarNoLabor = () => { //creando un caso con switch
    switch(dia) {
        case "sabado": 
        case "domingo": //criterio múltiple
            console.log("Día no laborable"); //codigo a ejecuar
            break; //break para salir
            default:
                break;
    }

}





//<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>