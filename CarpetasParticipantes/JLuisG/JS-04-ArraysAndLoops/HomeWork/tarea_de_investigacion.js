let personajesDeMarvel = ['Capitan America', 'Iron-Man', 'Thor', 'Spider-Man', 'HULK', 'Wolverine'];

// Accediendo a un personaje
console.log(personajesDeMarvel[0]);
console.log('********************************************');

// Modificando un personaje
personajesDeMarvel[4] = 'Ant-Man';
console.log(personajesDeMarvel); 
console.log('********************************************');

// Unir dos arreglos
let villanosDeMarvel = ['Venom', 'Juggernaut', 'Thanos', 'Dr. Octopus', 'Loki'];
let todosLosPersonajesDeMarvel = personajesDeMarvel.concat(villanosDeMarvel);
console.log(todosLosPersonajesDeMarvel);
console.log('********************************************');

// Recorrer todos los personajes y mostrarlos uno por uno
personajesDeMarvel.forEach(personaje => console.log(personaje));
console.log('********************************************');

// Sacamos al primer personaje
let primerPersonaje = personajesDeMarvel.shift(); 
console.log(primerPersonaje);
console.log('********************************************');

// Añadimos un personaje al principio
personajesDeMarvel.unshift('Doctor Strange');
console.log(personajesDeMarvel); 
console.log('********************************************');

// Ejemplo de pila y cola
let personajesDeCapcom = ['Megaman', 'Chun-Li', 'Zangief', 'Cammy'];

// Usamos unshift para poner un personaje al principio
personajesDeCapcom.unshift('Ryu');
console.log(personajesDeCapcom);
console.log('********************************************');

// Ahora sacamos a 'Ryu' usando shift
let personajeDeCapcom = personajesDeCapcom.shift();
console.log(personajeDeCapcom); 
console.log('********************************************');

// Usamos push para añadir un personaje al final de la lista
personajesDeCapcom.push('Ken');
console.log(personajesDeCapcom);
console.log('********************************************');

// Y pop para sacar el último personaje
let personajeEliminado = personajesDeCapcom.pop();
console.log(personajeEliminado);
console.log('********************************************');

// Ejemplo con ciclo For
for (let marvelIndex = 0; marvelIndex < personajesDeMarvel.length; marvelIndex++) {
    console.log(personajesDeMarvel[marvelIndex]);
}
console.log('********************************************');

// Ejemplo con Do While
let capcomIndex = 0;
do {
    console.log(personajesDeCapcom[capcomIndex]);
    capcomIndex++;
} while (capcomIndex < personajesDeCapcom.length);
console.log('********************************************');

// Ejemplo con While
let villanosIndex = 0;
while (villanosIndex < villanosDeMarvel.length) {
    console.log(villanosDeMarvel[villanosIndex]);
    villanosIndex++;
}
console.log('********************************************');

// 5 ejemplos de For anidados

// Ejemplo 1: Mostrar los equipos de personajes
let refuerzosMarvel = ['Deadpool', 'Colossus'];
let refuerzosCapcom = ['Zero', 'Morrigan'];

// Creamos un array de equipos combinados
let nuevoEquipo = [refuerzosMarvel, refuerzosCapcom];

// Bucle anidado para recorrer y mostrar los equipos
for (let m = 0; m < nuevoEquipo.length; m++) {
    for (let c = 0; c < nuevoEquipo[m].length; c++) {
        console.log(`Equipo ${m + 1}: ${nuevoEquipo[m][c]}`);
    }
}

console.log('********************************************');