// Javacript tiene la capacidad de ser sincrono y asincrono, 
// siendo la parte asicrona la que se encarga de administrar los flujos de control
// como los requiest.
// Estas opciones o operaciones asicronas permiten que el programa siga ejecutando otras tareas mientras 
// espera que la operacion acutal se complete, Js es asincrono, y podemos utilizar funciones predefinidas 
// como setTimeout, promesas y async/await
// Ejemplo de una funcion sincrona:
//function prosesoSincrono(){
//console.log("inicia el proceso sincrono");
//for(let i=0; i< 1e9 ; i++){}
//console.log("fin del proceso sincrono");
//}

//console.log("Este punto es antes de la funcion");
//prosesoSincrono();
//console.log("Despues de la funcion sincrona");
// Ejemplo de una funcion asincrona:


// const failed = false;

// const myPromise = new Promise((resolve, reject) => {
//     if (failed)
//         reject('Promesa fallida');
//     else
//     setTimeout(function () {
//         resolve("Éxito!"); 
//     }, 250);

// });

// function success(result) {
//     console.log(result);
// }

// function onFailed(error) {
//     console.log(error);
// }

// myPromise.then((result) => success(result))
//     .catch((error) => onFailed(error));

function procesoAsincrono() {
    console.log("inicia el proceso asincrono");

    setTimeout(() => {
        console.log("aqui termina el proceso asincrono");

    }, 15000);

}

console.log("antes de la funcion asincrona");
procesoAsincrono();
console.log("despues de la funcion asincrona");

const url = "https://pokeapi.co/api/v2/pokemon/149/";

fetch(url, {
    method: 'GET'
}).then((Response) => {
    console.log(Response.data.name);

}).catch((Error) => {
    console.log("");


});


const url = "https://pokeapi.co/api/v2/pokemon/Bulbasaur";
console.log("antes del fetch");
fetch(url, {
    method: 'GET'
}).then((response) => {
    console.log(response.data.name);
}).catch((error) => {
    console.error("ups no se que paso");
});
console.log("Despues del fetch")