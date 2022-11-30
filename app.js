

// function saludar(nombre) {
//     console.log(`Hola, ${nombre}, como estas?`);
// }


// otra forma de ejecutar la funcion es usando const

// const saludar = function (nombre) {
//     console.log(`Hola, ${nombre}, como estas?`);
// };

// saludar("Dora");

// para que se vea en el navegador puedo usar la funcion document write

// const saludar = function (nombre) {
//     document.write(`Hola, ${nombre}, como estas?`);
// };
// saludar("Dora");

// return se puede utilizar la respuesta de una funcion para otra funcion

// const sumar = function(num1, num2) {
//    let resultado= num1 + num2;
//    return resultado  // sin este return este resultado no se va a ver en las funciones de abajo

// }
// // declaro la funcion mostrarPorConsola
// const mostrarPorConsola = function(resultado){
//     console.log(`El resultado fue ${resultado}`);
// }
// // declaro la funcion mostrarPorAlerta
// const mostrarPorAlerta = function(resultado) {
//     alert(`El resultado fue ${resultado}`)
// }

// mostrarPorConsola(sumar(1, 2));  //esto lo muestra por consola
// mostrarPorAlerta(sumar(10, 20));  // este resultado lo muestra por la alerta


// condicional if: Ejecuta una sentencia si una fcondicion especificada es evaluada 
//como verdadera
// si la condicion es evaluada como falsa, otra sentencia puede ser ejecutada


// ejemplo

// let color = prompt("¿De que color esta el semaforo?");

// // if consta de el nombres reservado para la funcion, la condicion y la sentecia

// if(color === "verde") {
// console.log("El color de semaforo esta en verde, puedes pasar")
// // solo funciona si es verde porque es true, si pongo rojo va a ser falso
// } else if (color === "amarillo") {
// console.log("El Semaforo esta en amarillo, ten precaucion");
// } else if (color==="rojo"){
//     console.log("l color del semaforo esta en rojo, no puedes pasar");
// } else {
//     console.log("el semaforo no esta en verde, no puedes pasar.");
// }

// ejemplo boliche

// let edad = Number(prompt("¿Cual es tu edad?"));

// if (edad >= 18) {
//     console.log("puedes pasar, sos mayor de edad.")
// } else {
//     console.log("No puedes ingresar, sos menor de edad");
// }


// hacer lo mismo con una funcion

// const determinarEdad = function () {
//     let edad = Number(prompt("¿Cual es tu edad?"));

//     if (edad >= 18) {
//         console.log("puedes pasar, sos mayor de edad.")
//     } else {
//         console.log("No puedes ingresar, sos menor de edad");
//     }
// };
// determinarEdad ();


// para que pueda poner varios parametros tengo que cambiar function() por function(edad)

// const determinarEdad = function (edad) {

//     let edad = Number(prompt("¿Cual es tu edad?"));

//     if (edad >= 18) {
//         console.log("puedes pasar, sos mayor de edad.")
//     } else {
//         console.log("No puedes ingresar, sos menor de edad");
//     }
// };

// determinarEdad (12);
// determinarEdad (15);
// determinarEdad (18);
// determinarEdad (22);


// OPERADORES LOGICOS = OR , AND
// AND --> &&
// OR --> ||

// HACE UN PROGRAMA QUE ADEMAS DE EVALUAR LA EDAD, VEA SI EL INVITADO
// TIENE UNA ENTRADA.

// let edad = Number(prompt("¿Cual es tu edad?"));

// const validarEntrada = function (edad, entrada) {

// if (edad >=18 && entrada === true){
//     console.log(`Puedes pasar, sos mayor de edad. Tu edad es ${edad} años.`);
// } else if(edad>=18 || entrada === false){
//     console.log("eres mayor de edad, pero no tienes entrada. Lo lamento");
// } else {
//     console.log("No eres mayor de edad, lo siento");
// }
// };

// validarEntrada(24, false);
// validarEntrada(12, true);
// validarEntrada(19, true);
// validarEntrada(20, true);

// para que se ejecute lo de arriba, todo tiene que cumplir la condicion true
// si en validarEntrada(24, false) no se cumple la condicion y no es correcto la ejecutacion


// usando mas de un OR siempre uno siempre dar true -
// si fuera AND Todas tienen que ser true para que se ejecute

const validarColorSemaforo = function(color) {
    if (color === "amarillo" || color=== "rojo" || color=== "bordo") {
        console.log("No puedes pasar");
    } else if (color==="verde") {
        console.log("Puedes pasar");
    }
};

validarColorSemaforo("verde");
validarColorSemaforo("amarillo");
validarColorSemaforo("rojo");
validarColorSemaforo("bordo");