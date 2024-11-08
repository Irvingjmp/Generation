
//Fetch
const url = "https://pokeapi.co/api/v2/pokemon/ditto";

//      fetch(url,{ //link definido
//          method: 'GET' //definir objeto (los corchetes [] son para arreglos)
//          }).then((response)=>{ //recibe la info de la respuesta
//               return response.json(); 
//          }).then((data)=>{ // ya trabaja con la respuesta
//              console.log(data);
//              localStorage.setItem("nombrePokemon", data.name);
//              // localStorage.removeItem("nombrePokemon")
//          }).catch((error)=>{
//              console.error("ups no se que paso");
//          });
//           console.log("Despues del fetch");
//      
//      function peleaPokemon () {
//          const miPrimerPokemon = localStorage.getItem("nombrePokemon")
//          console.log("primerContrincanta:" + miPrimerPokemon);
//      }
//      
//      peleaPokemon();


// ASYNC / AWAIT  deben ir siempre juntos
    //alternativa para trabajar con funciones asíncronas 
    //desde el uso de la palabra reservada async se declara que la función es asíncrona
    // y por lo tanto debe retornar una promesa

    //prueba se hace con funcion dummy/mock

function dummyFetch() {
    return new Promise((resolve, reject) => {
        setTimeout (() =>{
            reject("errorDummy");
        },2000)
    })
}

async function funcionAsync() { //si no necesito la respuesta es mejor usar el async
    try{
        const data = await dummyFetch(); //aquí "esperamos" a que la pprimesa se resuelva
    } catch (err){
        console.error("error de Dummy"+err)
    }
//console.log(data);esperamos que nos imprima "datosDummy"
}  //redujo las lineas de new Promise, haciendo que se vea más limpio el código


funcionAsync();
