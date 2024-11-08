/*
POO

Clases: se refieren al molde o plantilla para poder crear objetos
Constructor: función obligatoria para crear objeto (ej. chefsito) a travér de características
o atributos específicos
Objetos: Es lo que se construye a partir de la clase y el constructor
Atributos: Se refieren a las caracerísticas o propiedades del objeto
Método: Lo que hace nuestro objeto (saludar, brincar, correr, etc.)
Instanciación: Se refiere a cuando ya creamos la clase, el constructor y el objeo

Pilares de la POO
    Herencia: Cuenta la palabra reservada extends
        permite reutilizar el código de la clase padre en la clase hijo
    Polimorfismo: Diversdad de atributos en el comportamiento entre objetos de la misma clase
    Encapsulamiento: Se refiere a enceerrar y/o ocultar el código
    Abstracción: Se refiere a la necesidad de ser específicos en el desarrollo de los 
        objetos (resumir)
    Modularidad: generación de módulos de código para mantener legibilidad y claridad
        del código. Establece la jerarquía entre clases padre e hijo. Permite reutilizar, 
        mantener orden, hacer modificaciones, 

Métodos
    Estático (static) Utiliza la palabra reservada static, nos permite ejecutar una clase
    sin instanciar el objeto

    Accesores: Los métodos accesores son funciones dentro de una clase que te permiten 
    obtener o modificar los valores de los atributos privados de un objeto. En JavaScript, 
    estos métodos se implementan como getters y setters. Su función principal es controlar 
    el acceso a los atributos de una clase, lo que ayuda a proteger y encapsular los datos.

Principios SOLID
    Principio de responsabilidad unica (SRP): Se refiere a que cada que asignamos una clase,
    objeto, etc. debe ser única

    Principio de abierto y cerrado (OCP): debemos poder extender el código ya existente
    de ser necesario

    Principio de sustitución de Liskov: podemos tener cualquier tipo de objeto dentro de mi
    clase y no se ve afectado el comportamiento del mismo

    Principio de segregación de interfaces (ISP): Se refiere a tener distintas interfaces

    Principio de investigación de dependencias (DIP): Trabaja a través de la abstracción 
    para que el código no dependa de detalles específicos


Objetos JSON
Javascript Object Notation

*/

class ch47 { //clase principal o clase padre
    constructor(nombre, apellido, email, edad){
        this.name = nombre;
        this.lastName = apellido;
        this.email = email;
        this.age = edad;
        this.info = `Hola soy ${this.name} ${this.lastName}, mi correo es
        ${this.email} y mi edad es ${this.age}`
    }
    
    infoIntegrantes (){
        console.log(this.info);
    }
}

class instruccion extends ch47{ //clase hijo
    constructor (nombre, apellido, email, edad, escolaridad){
        super(nombre, apellido, email, edad)
        this.grado = escolaridad;
    }

    static darSesiones (){
        console.log("Hoy no tienes sesión");
    }
}


class mentoria extends ch47{ //clase hijo
    constructor (nombre, apellido, email, edad, telefono){
        super(nombre, apellido, email, edad) //estos atributos se heredan
        this.tel = telefono;
        this.info = `Hola soy ${this.name} ${this.lastName}, mi correo es
        ${this.email} mi edad es ${this.age}, me puedes llamar al ${this.tel}`
    }
    
    static darMentoria (){
        console.log("Tienes muchos mentorados");
    }
}


class participantes extends ch47{ //clase hijo
    constructor (nombre, apellido, email, edad, lenguajeFavorito, estado){
        super(nombre, apellido, email, edad)
        this.lenguaje = lenguajeFavorito;
        this.geograf = estado;
        this.info = `Hola soy ${this.name} ${this.lastName}, mi correo es
        ${this.email} mi edad es ${this.age}, me gusta usar ${this.lenguaje} para
        programar y vengo de ${this.geograf}`
    }

    static serParticipante (){
        console.log("Como sigues vivoooo");
    }
}



const inte1 = new ch47 ("Luis", "Lopez", "luilop@gmail.com", 27) //obj se deben definir con const
const inte2 = new instruccion ("Lili", "Ramos", "lira@gmail.com", 30, "Licenciatura");
const inte3 = new mentoria ("Angela", "Arias", "anar@gmail.com", 45, "5547854942")
const inte4 = new participantes ("Tona", "Vieira", "tovi@gmail.com", 26, "Javascript", "Yucatán")

inte1.infoIntegrantes();
inte2.infoIntegrantes(); //muestra herencia (se hereda de ch47 a instruccion)
inte3.infoIntegrantes();
inte4.infoIntegrantes();
instruccion.darSesiones(); //muestra polimorfismo (distintos atributos aun en misma clase)
mentoria.darMentoria();
participantes.serParticipante();






