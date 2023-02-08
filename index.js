//========= DECLARACIÓN Y ASIGNACIÓN DE VARIABLES =========

// let nombre = "Jesus";
// let edad = 25;
// const PI = 3.1416
// PI = 3.14

//========= OPERACIONES CON VARIABLES =========

// let calificacionUno = 10;
// let calificacionDos = 5;
// let calificacionTres = 8;

// const SUMA = calificacionUno + calificacionDos + calificacionTres;
// console.log(SUMA)

// const RESTA = calificacionUno - calificacionDos - calificacionTres;
// console.log(RESTA)

// const MULTIPLICACION = calificacionUno * calificacionDos * calificacionTres;
// console.log(MULTIPLICACION)

// const DIVISION = SUMA/3;
// console.log(DIVISION)

//========= CONCATENAR STRINGS =========

// let palabraUno
// let palabraDos
// let palabraTres

// palabraUno = "Bienvenidos"
// palabraDos = " al "
// palabraTres = "curso"

// const FRASE = palabraUno + palabraDos + palabraTres

// console.log(FRASE)

//========= SOLICITAR INFORMACIÓN AL USUARIO =========

const ANIO_ACTUAL = 2023;

const NOMBRE = prompt("Ingresa tu nombre");
const ANIO = prompt("Ingresa tu año de nacimiento");
const EDAD = ANIO_ACTUAL - ANIO;

const FRASE = "Hola " + NOMBRE + " este año tendrás: " + EDAD + " años";

alert(FRASE);

//========= CALCULAR IMPUESTOS SOBRE UNA COMPRA =========

const VALOR_IVA = 0.16;

const PRODUCTO = prompt("Ingresa el nombre del producto");
const PRECIO = prompt("Ingresa el precio del producto");
const TOTAL = PRECIO * (1 + VALOR_IVA);

const FRASE_PRECIO =
  "El valor del producto " + PRODUCTO + " es de: $" + TOTAL + " pesos";

alert(FRASE_PRECIO);
