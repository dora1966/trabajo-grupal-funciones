/*EJERCICIOS CONDICIONAL

1- Crear una función obtenerDiasMes que tome como argumento 
un string mes y devuelva un número dependiendo de la cantidad 
de días que tenga ese mes*/

// const obtenerDiasMes = function(mes) {
//     if (mes==="febrero" || mes==="Febrero") {
//         console.log("28 días");
//     } else if( mes == "ABRIL" || mes==="junio"|| mes==="septiembre" || mes==="noviembre"){
//         console.log("30 días");
//     } else {
//         console.log("31 días");
//     }
// }

// obtenerDiasMes("ABRIL");

/*2- Crear una función esPositivoONegativo que acepte como argumento 
un numero y devuelva el string positivo si el numero es positivo, 
o el string negativo si el numero es negativo*/



// const esPositivoONegativo = function(numero){
//     if(numero >=0){
//         console.log("Positivo");
//     } else console.log("Negativo")
// }  

// esPositivoONegativo(0)


/*3- Crear una función esParOImpar que acepte como argumento un numero
y devuelva el string par si el numero es par, o el string impar si el numero es impar*/

// let numero = Number(prompt("Ingrese un número:"))

// const esParOImpar = function(numero){
//     if(numero % 2== 0){
//         console.log("Es Par");
//     } else {console.log("Es impar");
//     }
// }
// esParOImpar(numero)


/*4- Crear una función puedeGraduarse que tome como argumentos dos números
 asistencia y materiasAprobadas y un booleano tesisAprobada,
y devuelva true si una persona puede gruadarse o false si no.
Una persona puede graduarse si tiene un 75% de asistencia o más, 
50 materias aprobadas o más y la tesis aprobada. */

let asistencia = Number(prompt("Ingrese el % de asistencia :"))
let materias = Number(prompt("Ingresá cantidad de materias aprobadas:"))
let tesisAprobada = prompt("Aprobó la tesis? conteste si o no")

const puedeGraduarse = function(asistencia, materias, tesisAprobada) {
    if(asistencia >= 75 && materias >=50 && tesisAprobada=="si") {
        console.log("Felicitaciones Te has Graduado");
    } else {
        console.log("No has llegado a los objetivos, sigue Intentádolo :( ");
    }
}
