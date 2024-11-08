/*POO Program Oriented Objects

Clases: Se refiere a nuestro molde o plantilla para que podamos
crear objetos. Utiliza la palabra reservada "class"

Constructor: Es una funcion obligatoria para crear objetos(chef)
a traves de caracteristicas o atributos especificos
Objetos: Es lo que construimos a traves de la clase y el
constructor.
Atributo: Se refiere a las caracteristicas o propiedades de los
objetos
Metodos: Lo que hace nuestro objeto (saludar, caminar, correr, etc).
Instanciacion: Es cuando todo lo anterior esta definido.

Herencia: Utiiza la palabra reservada "extends" para reutilizar el codigo de una clase
a otra.
Polimorfismo: El comportamiento de cada objeto de la misma clase a un metodo
Encapsulamiento: Se refiere a encerrar y/o ocultar el codigo.
Abstraccion: Se refiere a ser especificos con los objetos y sus caracteristicas (resumir).
Modularidad: nos permite reutilizar codigo, hacer modifiaciones, tener orden, entender
y mantener el codigo.

Metodos estaticos. Palabra reservada "static": Nos permite ejecutar una clase sin
instanciar al objeto.
Metodos accesores. 

Principios SOLID
S - Single Responsibility Principle (Principio de Responsabilidad Única): Se refiere a que cada que asignamos a una clase
u objeto, estos deben ser unicos. Como un id o una variable.
O - Open-Closed Principle (Principio de Abierto-Cerrado): Se refiere a que debemos poder extender el codigo
ya existente de ser necesario.
L - Liskov Substitution Principle (Principio de Sustitución de Liskov): Se refiere a que podemos tener cualquier tipo
de objeto dentro de la misma clase y no se ve afectado el comportamiento del mismo
I - Interface Segregation Principle (Principio de Segregación de Interfaz): Se refiere a que es mejor tener interfaces
pequenas y especificas, en lugar de una muy grande.
D - Dependency Inversion Principle (Principio de Inversión de Dependencias): Trabaja a traves de la
abstraccion para que el codigo no dependa de detalles especificos.

Objetos JSON - Kava Object Notation
Se manejan a traves de clave- valor y no tienen metodos.
*/

class ch47 {//Clase principal o clase padre 
    constructor(nombre, apellido, email, edad){//nos permite crear el objeto 
        this.name = nombre;//this nos permite seleccionar el objeto que voy a crear 
        this.lastName = apellido;
        this.email = email;
        this.age = edad;
        this.info = `Holi soy ${this.name} ${this.lastName}, mi correo es ${this.email} y mi edad es ${this.age}`
    }

    infoIntegrantes(){
        console.log(this.info);
    }
}

class instruccion extends ch47{
    constructor(nombre, apellido, email, edad, escolaridad){
        super (nombre, apellido, email, edad)
        this.grado = escolaridad;
    }

    static darSesiones(){
        console.log("Hoy no tienes sesion");
    }
}

class mentoria extends ch47 {
    constructor (nombre, apellido, email, edad, telefono){
    super (nombre, apellido, email, edad)
    this.tel = telefono;
    }

    static darMentoria(){
        console.log("Tienes muchxs mentees");
    }
}

const inte1 = new ch47 ("Xaxiry", "Gonzalez", "xaxiry@gmial.com", 27);//los objetos se deben definir con const
const inte2 = new instruccion ("Liliana", "Aguirre", "lili@gmail.com", 30, "Licenciatura");
inte2.infoIntegrantes();
instruccion.darSesiones();

//TAREA AGREGADA SOBRE GETTERS Y SETTERS

//Explicacion segun mis palabras: Los metodos accesores son funciones que se utilizan para asignar (set) y llamar dicha asignacion (get), se ejecutan al momento
//siguiendo el orden del flujo del codigo JS. Ejemplo:

//cree una clase estudiante sin informacion, porque la voy a agregar despues con un setter. El punto de hacerlo antes de asignar la informacion es que
//lo estamos encapsulando como mencionamos en la clase.

class Estudiante {
    constructor() {
      this.nombrePrueba = '';
      this.apellidoPrueba = '';
      this.edadPrueba = 0;
      this.mascotaPrueba = '';
    }
  
    get nombre() {
      return this.nombrePrueba;
    }
  
    set nombre(nuevoNombre) {
      this.nombrePrueba = nuevoNombre;
    }
      
    get apellido() {
        return this.apellidoPrueba;
      }
    
      set apellido(nuevoaApellido) {
        this.apellidoPrueba = nuevoaApellido;
      }
  
        
    get edad() {
        return this.edadPrueba;
      }
    
      set edad(nuevaEdad) {
        this.edadPrueba = nuevaEdad;
      }
        
    get mascota() {
        return this.mascotaPrueba;
      }
    
      set mascota(nuevaMascota) {
        this.mascotaPrueba = nuevaMascota;
      }
  //Aqui creamos un nuevo metodo para no tener que poner la informacion parte por parte de manera individual
  
    presentarse() {
      return `Hola, me llamo ${this.nombre} ${this.apellido}, tengo ${this.edad} años. Y tengo un ${this.mascota} como mascota`;
    }
  }
  
 //Creamos un nuevo objeto estudiante donde ya podamos agregar la informacion a placer
  const estudiante = new Estudiante();
  estudiante.nombre = "Alberto";
  estudiante.apellido = "Perez";
  estudiante.edad = 28;
  estudiante.mascota = "gato";
  
  // Imprimimos la informacion con el metodo que hicimos anteriormente y con la informacion ya actualizada 
  console.log(estudiante.presentarse());

  //Esta informacion se puede modificar a placer y reproducir tanto como querramos, pues esta encapsulada y es basicamente un template vacio para reproducirlo
  //como sea necesario.