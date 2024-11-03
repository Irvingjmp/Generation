

/*
Arreglos dinámicos: Se crean en tiempo de ejecución, por lo que su tamaño puede 
cambiar de acuerdo a las necesidades del programa. Se pueden agregar o eliminar elementos
sin tener que preocuparse por el tamaño. 
Arreglos estáticos: La cantidad de elementos en un arreglo estático es una constante, 
por lo que no se puede poner una variable dentro de los corchetes. El arreglo tendrá 
la misma cantidad de datos durante toda la ejecución del programa.
*/

//Ciclos
//Los ciclos son 
// for -  n numero de veces de un bloque de código
// for in - ciclos en las propiedades de un objeto
// for of - valores de un objeto que tiene capacidad de ser iterado
// while -  ciclos de un bloque de codido "mientras" ciertara condición es true
// do/while - > ciclo que hace un bloque de código mientras la condición espcedificada sea true


console.log(frutas.length);
for(let i = 0; 
    i <= frutas.length -1; i++) {  //length empieza en 1 a diferencia del array que empieza en 0
        console.log(i)
        console.log(frutas[i]);
    }


function setBastaFlag(flag) {
    const abc = ["a", "b", "c", "d"]
    let i = 0;
        // do {
        //         console.log(abc[i]);
        //         i++
        // } while(flag)
    while(flag) {
        console.log(abc[i]);
        i++
    }
}
