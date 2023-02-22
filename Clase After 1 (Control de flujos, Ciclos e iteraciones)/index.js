//================EJEMPLO CON NOT================

// const NOMBRE = "John";
// const ES_ADMIN = true;

// if (!ES_ADMIN) {
//   console.log("Hola Usuario: " + NOMBRE);
// } else {
//   console.log("Proceso qu es exclusivo para Aministradores");
// }


//================CONDICIONALES COMPUESTAS AND OR================
// let valorUno = true
// let valorDos = true
// let valorTres = true

// if(valorUno == true && (valorDos == true || valorTres == false)){
//     alert("verdadero")
// }else{
//     alert("falso")
// }

//================EJERCICIO PRÁCTICO FOR================
/*
    Escribir un programa que muestre en pantalla 
    los números del 1 al 100, sustituyendo los 
    múltiplos de 3 por la palabra “fizz”, 
    los múltiplos de 5 por “buzz” y 
    los múltiplos de ambos, es decir, 
    los múltiplos de 3 y 5 (o de 15), 
    por la palabra “fizzbuzz”.
*/

// for (let index = 1; index <= 100; index++) {
//   if (index % 3 == 0 && index % 5 == 0) {
//     console.log("fizzbuzz");
//   } else if (index % 3 == 0) {
//     console.log("fizz");
//   } else if (index % 5 == 0) {
//     console.log("buzz");
//   } else {
//     console.log(index);
//   }
// }

let triangulo = ""
for(let i = 1; i<=10; i++){
    for(let j = 1; j<i; j++){
        triangulo += "*"
    }
    triangulo+="\n"
}

console.log(triangulo)
