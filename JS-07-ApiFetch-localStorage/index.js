//Javascript tiene la capacidad de ser sincrono y asincrono,
//siendo la parte asincrona la que se encarga de administrar los flujos de control
//Como los request.
//Estas opciones o operaciones asincronas permiten que el progrma siga ejecutando otras
//tareas mientras espera que la operación actual se complete, JS es asincrono, y podemos
//utilizar funciones predefinidas como setTimeout, promesas, y async/await 
//Ejemplo de una funcion sincrona 
function procesoSincrono(){
   // console.log("inicia el proceso sincrono");
    for(let i=0; i< 1e9 ; i++){}
    //console.log("fin del proceso sincrono");
}

//console.log("Este punto es antes de la función");
procesoSincrono();
//console.log("despues de la función sincrona");

//Asincrono 
function procesoAsincrono(){
    //console.log("Inicia el proceso asincrono");
    setTimeout(()=>{
        //console.log("aqui termina el proceso asincrono");
    },5000);
}
//console.log("antes de la funcion asincrona");
procesoAsincrono();
//console.log("despues de la funcion asincrona");

const url = "https://pokeapi.co/api/v2/pokemon/bulbasaur";

//console.log("antes del fetch");
fetch(url,{
method: 'GET'
}).then((response)=>{
     return response.json();
}).then((data)=>{
  //  console.log(data);
    localStorage.setItem("nombrePokemon", data.name);
   // localStorage.removeItem("nombrePokemon");
}).catch((error)=>{
   // console.error("ups no se que paso");
});
// console.log("Despues del fetch");

 function peleaPokemon() {
    const miPrimerPokemon = localStorage.getItem("nombrePokemon");
 //   console.log("primerContrincante:" + miPrimerPokemon );
 }

peleaPokemon();

//Promesas
const failed = false;

const myPromise = new Promise((resolve, reject) => { 
    if(failed)
        reject('fail promise');
    else
        resolve('resolved!!')
});

function success(result){
  console.log(result);
}

function onFailed(error){
  console.log(error);
}

//myPromise.then((result) => success(result))
//.catch((error) => onFailed(error));

//ASYNC/AWAIT
function dummyFetch(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("ErrorDummy");
        },3000)
    })
}
//Desde el uso de la palabra reservada async, estas declarando que la función es asincrona y por lo tanto
//retorna una promesa
async function funcionAsync(){
    try{
        const data = await dummyFetch(); // aqui "esperamos" a que la promesa se resuelva. 
        console.log(data);// aqui esperamos que nos imprima "datosDummys"
    } catch (err){
        console.error("error de Dummy"+err);
    }
}

funcionAsync();

