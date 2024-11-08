/*function procesoSincrono (){
    console.log("inicia el proceso sincrono");
    for (let i= 0; i< 1e9; i++);
    console.log("fin del proceso sincrono");

}

console.log("Este punto es antes de la función");
procesoSincrono();
console.log ("después de la función");*/
/*const failed = false;

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

myPromise.then((result) => success(result))
.catch((error) => onFailed(error));*/

/*function procesoAsincrono(){
    console.log("Inicia el proceso asincrono");
    
    setTimeout(()=>{
        console.log("aqui termina el proceso asincrono");
    },7000);
}

console.log("antes de la funcion asincrona");
procesoAsincrono();
console.log("despues de la funcion asincrona");*/
const url = "https://pokeapi.co/api/v2/pokemon/bulbasaur";
console.log("antes del fetch");
fetch(url,{
    method: 'GET'
    }).then((response)=>{
         return response.json();
    }).then((data)=>{
        console.log(data);
        localStorage.setItem("nombrePokemon", data.name);
    }).catch((error)=>{
        console.error("ups no se que paso");
    });
     console.log("Despues del fetch");

     function peleaPokemon(){
        const miPrimerPokemon = localStorage.getItem("nombrePokemon");
        console.log("primerContrincante:" + miPrimerPokemon);
     }

     peleaPokemon();