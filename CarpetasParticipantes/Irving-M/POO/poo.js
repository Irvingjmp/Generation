/*
POO
Clases: Se refiere a nuetro modelo o plantilla para que podamos crear ojetos
Constructor: Es una función para crear objetos a través de características o atributos especificos
Objetos: Es lo que construimos a través de la clase y el constructor
Atributo: Se refieren a las características o propiedades de mi objeto.
Método: Lo que hace nuestro objeto (saludar, agarrar, etc)
Instanciación: Se refiere a cuando ya creamos la clase, el constructor y el objeto.

Herencia: Cuenta la palabra reservada extends. La herencia permite reutilizar el código de la clase padre en la clase hijo
Polimorfismo: El comportamiento de cada objeto de la misma clase a un metodo.
Encapsulamiento: Se refiere a encerrar y/o ocular el código.
Abstracción: Se refiere a ser muy especifico con los objetos.
Modularidad: Nos permite reutilizar código, hacer modificaciones, tener orden, entender y mantener el código.

Métodos estáticos: Utiliza la palabra reservado static, nos permite ejecutar una clase sin instanciar al objeto.
Métodos accesores: (Pendiente)

Principios SOLID.
Principio de responsbailidad única (SRP): Se refiere a que cada que asignamos una clase, objeto, etc, debe ser único.
Principio de abierto y cerrado (OCP): Se refiere a que debemos poder extender el código ya existente de ser necesario.
Principio de sustitución de Liskov: Se refiere a que podemos tener cualquier tipo de objeto dentro de mi clase y no se ve afectado el comportamiento del mismo.
Principio de segregación de interfaces (ISP): Se refiere a tener distintas interfaces.
Principio de investigación de dependencias (DIP): Trabaja a través de la abstracción para que el código no dependa de detalles especificos.

*/

class ch47{
    constructor(nombre,apellido,email,edad){
        this.name = nombre;
        this.lastName = apellido;
        this.email = email;
        this.age = edad;
        this.info = `Hola soy ${nombre} ${apellido}, mi correo es ${email} y tengo ${edad} años`
    }
    infoIntegrantes(){
        console.log(this.info)
    }
}

class instruccion extends ch47{
    constructor(nombre,apellido,email,edad,escolaridad){
        super(nombre,apellido,email,edad)
        // this.escolaridad;
        this.grado=escolaridad;
    }
    static darSesiones(){
        console.log("Hoy no tienes sesión");
    }
}

class mentoria extends ch47{
    constructor(nombre, apellido, email, edad,telefono){
    super(nombre,apellido,email,edad)
    this.tel = telefono;
    }
    static darMentoria(){
    console.log("Tienes muchos mentees");
    }
}

class mentees extends ch47{
    constructor(nombre, apellido, email, edad,mentora){
        super(nombre,apellido,email,edad)
        this.mentora=mentora;
    }
    mostrarMentora(){
        console.log(`Mi mentora es ${this.mentora}`)
    }
}
const inte1 = new ch47("Xaxiry","Gonzalez","xaxiry@gmail.com",27); //Los objetos se deben definir con const


const inte2 = new instruccion("Liliana","Aguirre","lili@gmail.com",30,"Licenciatura")
inte2.infoIntegrantes();
instruccion.darSesiones();
console.log(inte2.grado);

const inte3 = new mentoria("Eva", "Morales", "eva@gmail.com", 34, "5512345678");
inte3.infoIntegrantes();
mentoria.darMentoria();

const inte4 = new mentees("Irving", "Morales", "irving@gmail.com", 25, "Yare");
inte4.infoIntegrantes();
inte4.mostrarMentora();
// console.log(inte4.mentora);