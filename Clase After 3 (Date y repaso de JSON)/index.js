//================ DATE ================

// console.log(new Date());

// console.log(new Date(2020, 1, 15))

// const casiNavidad = new Date(2021, 11, 25, 23, 59, 59)
// console.log(casiNavidad)

// const casiNavidadString = new Date("December 25, 2021 23:59:59")
// console.log(casiNavidadString)

//================ OBTENER VALORES DE LA FECHA ================

// const hoy = new Date()

// console.log(hoy.getFullYear())
// console.log(hoy.getMonth())
// console.log(hoy.getDay())

//================ FORMATOS FECHA ================

// const hoy = new Date("December 17, 2021")

// console.log( hoy.toDateString() )
// console.log( hoy.toLocaleString() )
// console.log( hoy.toLocaleDateString() )
// console.log( hoy.toTimeString() )

//================ EJEMPLO DATE DIFERENCIAS FECHAS ================

const fechaActual = new Date();
const milisegundosPorDia = 86400000;

let dia = parseInt(prompt("Ingresa tu día de nacimiento"));
let mes = parseInt(prompt("Ingresa tu mes de nacimiento"));
let anio = parseInt(prompt("Ingresa tu año de nacimiento"));

const cumpleanios = new Date(anio, mes - 1, dia);
const diferenciaDias = (fechaActual - cumpleanios) / milisegundosPorDia;
const diferenciaAnios = diferenciaDias / 365;

alert(`Naciste hace ${diferenciaAnios} años`);
alert(`Naciste hace ${Math.floor(diferenciaAnios)} años`);
alert(`Naciste hace ${Math.ceil(diferenciaAnios)} años`);
