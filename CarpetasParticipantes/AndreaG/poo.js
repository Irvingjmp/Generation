/* 
POO


Clases: Se refiere a nuestro molde o plantilla para que podamos crear objetos. Utiliza la palabra reservada class.
Constructor: Es una función obligatoria para crear objetos a través de características o atributos específicas
Objetos: Es lo que construimos a través de la clase y el constructor
Atrubuto; Se refieren a las características propiedades de mi objeto
Método: Lo que hace nuestro objeto (saludar, brincar,correr)
Instanciación: Se refire a cuando ya creamos la clase, el constructor y el objeto 

Pilares de la POO

Herencia: cuenta la palabra reservada "extends", permite reutilizar el código de la clase padre en la clase hijo, y nos permite heredar atributos.
Polimorfismo: El comportamiento de cada objeto de la misma clase a un método. 
Encapsulamiento: Se refiere a encerrar y/u ocultar el código
Abstracción: Se refiere a ser muy específicos con los objetos (resumir)
Modularidad: Nos permite reutilizar código, hacer modificacioones, tener orden, entender y mantener el código. Permite abordar un error de forma más rápida y eficiente.

Métodos estáticos: Funciones que nos permiten ejecutar una clase sin instanciar al objeto, usan la palabra reservada "static", debe estar dentro de una clase.

Métodos accesores: Los métodos accesores en JavaScript son funciones que obtienen o establecen el valor de una propiedad de un objeto. Se dividen en dos tipos:
Métodos getters: Obtienen el valor de una propiedad.
Métodos setters: Establecen el valor de una propiedad.

Principios SOLID: 

Principios de responsabilidad Única (SRP): Se refiere a que cada que asignamos una clase, objeto, etc debe ser única. 

Principio de abierto y cerrado (OCP): Se refiere a que debemos poder extender el código ya existente de ser necesario 

Principio de sustitución de Liskov: Se refiere a que podemos tener cualquier tipo de objeto dentro de mi clase y no se ve afectado el comportamiento del mismo

Principio de segregación de interfaces (ISP): Tener distintas interfaces específicas a una sola general.

Principio de investigación de dependencias (DIP): Trabaja a través de la abstracción para que el código no dependa de detalles específicos


Objetos Json
JavaScript Object Notion
Trabajan a través de clave-valor 
No van a tener un método, solamente guardan la información 
Se manejan a través de clave-valor y no tiene métodos
*/

class ch47{  //Creamos la clase principal o clase padre
    constructor(nombre, apellido, email,edad){ //nos permite crear el objeto
        this.name = nombre; //this nos permite seleccionar el objeto que voy a crear
        this.lastName = apellido;
        this.email = email;
        this.age = edad;
        this.info = `Holi soy ${this.name} ${this.lastName}, mi correo es ${this.email} y mi edad es ${this.age}`

        }

        get apellido(){
            return this.lastName;
        }

        set apellido(nuevoApellido) {
            this.lastName = nuevoApellido;
        }

    infoIntegrantes(){
        console.log(this.info);
    }

} 
    
   

class instruccion extends ch47{
    constructor(nombre, apellido,email, edad,escolaridad){
        super (nombre, apellido, email, edad)
        this.grado = escolaridad; 
        this.info = `Holi soy ${this.name} ${this.lastName}, mi correo es ${this.email} y mi edad es ${this.age}, mi grado de estudios es ${this.grado}`
    }


    get estudio(){
        return this.grado;
    }

    set estudio(nuevoEstudio){
        this.grado = nuevoEstudio;
    }


    static darSesiones(){
        console.log("Hoy no tienes sesión");
    }

}

class mentoria extends ch47{
    constructor (nombre, apellido, email, edad, telefono){
    super (nombre, apellido, email, edad);
    this.tel = telefono;
    this.info = `Holi soy ${this.name} ${this.lastName}, mi correo es ${this.email}, mi edad es ${this.age}, y mi teléfono es ${this.tel}`
   }

   get telefono (){
    return this.tel;
   }

   set telefono(nuevoTelefono){
    this.tel = nuevoTelefono;
   }


   static darMentoria(){
    console.log("Tienes muchxs mentees");
   }
}

class participantes extends ch47{
    constructor(nombre, apellido, email, edad, telefono, estado){
        super(nombre, apellido, email,edad)
        this.tel = telefono;
        this.lugar = estado;
        this.info = `Holi soy ${this.name} ${this.lastName}, mi correo es ${this.email} y mi edad es ${this.age}, mi telefono es ${this.tel} y vivo en ${this.lugar}`
    }

    static asistirAClase(){
    console.log ("Bienvenidx a la CH47");
    }
}

const inte1 = new ch47 ("Xaxiry","Gonzalez","xaxiry@gmail.com","27"); //Los objetos se deben definir con const// 

const inte2 = new instruccion ("Liliana", "Aguirre", "lili@gmail.com", 30, "Licenciatura");

const mento1 = new mentoria ( "Yareri", "Arcos", "yare@gmail.com", 30,"552345678");

const parti1 = new participantes ("Andy", "Gonzalez", "andy@gmail.com", 26, "72246456","EdoMex" );
const parti2 = new participantes ("Arez", "Zuñiga", "arez@gmail.com", 25, "5512345678","CDMX" );
const parti3 = new participantes ("Cyn", "Castellanos", "cyn@gmail.com", 27, "5523456789","CDMX" );
const parti4 = new participantes ("Jerry", "Granados", "jerr@gmail.com", 26, "5534567890","CDMX" );


inte1.infoIntegrantes();
inte2.infoIntegrantes();
mento1.infoIntegrantes();
parti1.infoIntegrantes();
instruccion.darSesiones();
mentoria.darMentoria();
participantes.asistirAClase();

console.log(inte1.apellido);

inte1.apellido = "Loera";
console.log(inte1.apellido);

console.log(inte2.estudio);
inte2.estudio = "Doctorado";
console.log(inte2.estudio);

console.log(mento1.telefono);
mento1.telefono = "123456789";
console.log(mento1.telefono);
