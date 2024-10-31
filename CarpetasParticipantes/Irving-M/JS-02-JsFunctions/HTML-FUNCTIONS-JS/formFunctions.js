/* Ejercicio 1 Nota: No tenía claro si hacer un for pero calculé la deuda para cada transacción*/
function calculatePayment(transaction){
    return transaction*1.01+3
}
/* Imaginemos que pagará $10 */
console.log("Tienes que pagar ",calculatePayment(10));

/* Ejercicio 2 */
/* Parte 1 */
const nombresAmigos=[];
const añoNacimiento=[];
let edades=[];

/* nombresAmigos.push(prompt("Ingresa el nombre de tu primer amix:"));
añoNacimiento.push(prompt("Ingresa tu año de nacimiento"));
nombresAmigos.push(prompt("Ingresa el nombre de tu segundo amigx:"));
añoNacimiento.push(prompt("Ingresa tu año de nacimiento"));
nombresAmigos.push(prompt("Ingresa el nombre de tu tercer amigx:"));
añoNacimiento.push(prompt("Ingresa tu año de nacimiento")); */

/* console.log(saludarAmigos(nombresAmigos)); */

/* console.log(calcularEdad(añoNacimiento)); */

function saludarAmigos(nombres){
    let saludo = "Bienvenido ";
    saludo += nombres.join(", ");
    return saludo + ".";
}

/* Parte 2 */

function calcularEdad(añosNacimientos){
    const añoActual=new Date().getFullYear();
    const edades=[];
    console.log(añosNacimientos);
    añosNacimientos.forEach(año => {
        edades.push(añoActual-año);
    });
    return edades; 
}

/* edades = calcularEdad(añoNacimiento); */

/* Parte 3 */

function saludarAmigosEdad(nombres,edades){
    let saludo = "";
    nombres.forEach((nombre,index) => {
        saludo += "Bienvenido "+nombre+" tienes "+edades[index]+"\n";        
    });

    return saludo;
}

/* console.log(saludarAmigosEdad(nombresAmigos,edades)); */
/* Me compliqué demasiado usando arreglos pero salió :')*/


/* Ejercicio 3 Grades from 0 to 11*/

/* let puntaje = prompt("Ingresa tu puntaje");
puntaje = Number(puntaje); */

function gradingStudents(grade){
    if(grade===11){
        console.log("Perfect");
        return true;
    }else if(grade>8){
        console.log("Excellent");
        return true;
    }else if(grade>=5){
        return true;
    }else{
        return false;
    }

}
/* console.log("Pasaste? ",gradingStudents(puntaje)); */

//Propiiedades de funcion y metodos
function saludar(nombre) {
    console.log("Hola, " + nombre);
 }
  console.log("Saludar.name")
  console.log(saludar.name); // "saludar"
  console.log(saludar.length); // 1

  //This
  const persona = {
    nombre: "Ana",
    saludar: function() {
      console.log("Hola, soy " + persona.nombre);
    }
  };
  
  persona.saludar(); // "Hola, soy Ana"