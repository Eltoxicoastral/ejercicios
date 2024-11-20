//ejercicio 1

// let nombre = prompt("ingrese nombre")
// let apellido = prompt("ingrese apellido")

// alert("bienvenido");

// console.log(nombre,apellido)

// ejercicio 2

// let numero1 = prompt("ingrese primer numero");
// let numero2 = prompt("ingrese segundo numero");

// let resultado = numero1 + numero2;

// alert("el resultado es:" +resultado)


//ejercicio 3

// let numero = prompt("ingrese un numero");

// let resultado = numero * 3;

// console.log(resultado)

//ejercicio 4

// let texto = prompt("ingrese cualquier texto")
// console.log("el texto es",texto.length)

//ejercicio 5

// let nombre = prompt("ingrese nombre");

// if(nombre === ""){

// alert("no hay nombre")


// }else{


// alert("el nombre de usuario es: "+nombre)


// }

//ejercicio 6

// let numero = prompt("ingrese un numero");

// if (numero % 2 === 0) {
//     alert ("El número es par.");
//   } else 
//   if (numero %2===1)

// {


  
//    alert("El número es impar.") ;
//   }


//ejercicio 7

// let pelicula = prompt("ingrese pelicula\n")

// if(pelicula == 2){

// document.write("tiket impreso")



// }else{

// document.write("no imprimio")


// }


// ejercicio 8

// let tragos = prompt("ingrese numero de tragos ingeridos")

// if( tragos > 0) {



// alert("no deberias bebiendo si vas a conducir")


// }else if(tragos == 0){

// alert("nos alegra que seas responsable al conducir")


// }

// ejercicio 9

// let numero1 = prompt("ingrese primer numero")
// let numero2 = prompt("ingrese segundo numero")
// let operacion= prompt("que tipo de opreacion desea hacer 1:suma 2:resta 3:multiplicacion 4: division")
// let resultado
// if(operacion == 1){


//  resultado = numero1 + numero2
 






// }else if(operacion == 2){


//  resultado = numero1 - numero2

 




// }else if(operacion == 3){


// resultado = numero1 * numero2



// }else if(operacion == 4){



// resultado= numero1 / numero2





// }

// alert("el resultado es: "+ resultado)



//ejercicio 10

// let edad = prompt("ingrese su edad")
// let genero = prompt("ingrese edad (F o M)")


// if(genero ==="f" && edad ==65){


// alert("si jubila")


// }else if(genero == "m" && edad == 60){

// alert("si jubila")


// }else{

// alert("no jubila")

// }


// ejercicio 10

// // Imprimir todos los números entre -20 y 30
// console.log("Números entre -20 y 30:");
// for (let i = -20; i <= 30; i++) {
//     console.log(i);
// }

// // Imprimir todos los números pares entre 20 y 60
// console.log("\nNúmeros pares entre 20 y 60:");
// for (let i = 20; i <= 60; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// // Imprimir todos los números impares entre 600 y 666
// console.log("\nNúmeros impares entre 600 y 666:");
// for (let i = 600; i <= 666; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

// // Función para verificar si un número es primo
// function esPrimo(n) {
//     if (n <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }

// // Imprimir todos los números primos entre 1 y 150
// console.log("\nNúmeros primos entre 1 y 150:");
// for (let i = 1; i <= 150; i++) {
//     if (esPrimo(i)) {
//         console.log(i);
//     }
// }


// ejercicio 11

// // Solicitar al usuario un número
// let numero = parseInt(prompt("Introduce un número para mostrar su tabla de multiplicar hasta el 10:"));

// // Verificar que la entrada es un número válido
// if (!isNaN(numero)) {
//     console.log(`Tabla de multiplicar del ${numero}:`);
    
//     // Generar la tabla de multiplicar
//     for (let i = 1; i <= 10; i++) {
//         let resultado = numero * i;
//         console.log(`${numero} x ${i} = ${resultado}`);
//     }
// } else {
//     console.log("Por favor, introduce un número válido.");
// }