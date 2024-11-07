//Ejercicio fetch (failed)
    //fetch('https://api.example.com/data') // Hacemos una solicitud a la API 
    //.then(response => response.json()) // Convertimos la respuesta a formato JSON 
    //.then(data => console.log(data)) // Usamos los datos .catch(error => console.error('Error:', error)); 



//JS puede ser síncrono y asíncrono
    //parte asincrona se encarga de administrar los flujos de 
    //control y los request
    //las operaciones asincronas permiten que el programa siga
    //ejectando tareas mientras espera que la operación actual se
    //complete, JS es asinrono y puede usar fnciones ya definidas
    //como setTimeout, promesas y async/await

    //parte síncrono se refiere a lo que se hace a la par

//function procesoSincrono(){
//    console.log("inicia el proceso sincrono");
//    for(let i=0; i< 1e9; i++){}
//    console.log("fin del proceso sincrono");
//}

//console.log("Este punto es antes de la funcion");
//procesoSincrono();
//console.log("después de la función sincrona")


//asincrono guarda funciones y las invoca cuando se le indica (por ejemplo
//con el temporizador de setTimeout) No se ejecuta al momento, espera a que 
// sea el momento solicitado

//function procesoAsincrono(){
//    console.log("Inicia el proceso asincrono");
//
//    setTimeout(() => {
//        console.log("aquí termina el proceso asincrono")
//    },20000); //20 segundos
//}
//
//console.log("antes de la función asincrona");
//procesoAsincrono();
//console.log("despues de la función asincrona")
//

//Fetch
const url = "https://pokeapi.co/api/v2/pokemon/ditto";

fetch(url,{ //link definido
    method: 'GET' //definir objeto (los corchetes [] son para arreglos)
    }).then((response)=>{
         return response.json();
    }).then((data)=>{
        console.log(data);
    }).catch((error)=>{
        console.error("ups no se que paso");
    });
     console.log("Despues del fetch");







