// Declarar o definir funciones

function nombreFuncion(param1, param2) {
    // Código a ejecutar
    return param1 + param2; 
   }

//    Invocar funciones
console.log(nombreFuncion("hola","Liliana"));

// alcance local

function sumar(a, b) {
    let resultado = a + b; 
    return resultado;
  }
  
  console.log(resultado);

//   alcance global

  let mensaje = "Hola a todos"; // Variable global

function mostrarMensaje() {
  console.log(mensaje); 
}

mostrarMensaje(); 

// alcance lexico

function padre() {
    let mensaje = "Hola desde el padre";
    
    function hijo() {
      console.log(mensaje); 
    }
    
    hijo();
  }
  
  padre(); 
  
//Funcion es un objeto
  console.log((function () {}).constructor === Function); 

//Los nombres van en camelCase
function miFuncionEjemplo() {
  console.log("Ejemplo de función en camelCase");
}

//Que es un Objeto

//Prototype JS

//Existe un constructor del objeto global function
const sumar = new Function("a", "b", "return a + b");
console.log(sumar(2, 3)); // 5


  //Propiiedades de funcion y metodos
  function saludar(nombre) {
    console.log("Hola, " + nombre);
  }
  console.log(saludar.name); // "saludar"
  console.log(saludar.length); // 1

  //This
  const persona = {
    nombre: "Ana",
    saludar: function() {
      console.log("Hola, soy " + this.nombre);
    }
  };
  
  persona.saludar(); // "Hola, soy Ana"
  
  