//================ SPREAD DE OBJETOS ================

const productos = [
  { nombre: "Cuaderno", precio: 15 },
  { nombre: "Libro de js", precio: 50 },
  { nombre: "Pluma", precio: 7 },
  { nombre: "Borrador", precio: 5 },
  { nombre: "Diccionario", precio: 100 },
];

const productosConPrecioActualizado = productos.map((producto) => ({
  ...producto,
  precio: producto.precio * 1.1,
}));

console.log(productosConPrecioActualizado);

//================ REST ================

function sumar(...numeros) {
  console.log("LOS PARÁMETROS RECIBIDOS SON: ");
  console.log(numeros);

  let sumatoria = numeros.reduce((acumulador, valor) => acumulador + valor, 0);
  return sumatoria;
}

console.log(sumar(4, 2));
console.log(sumar(10, 15, 30, 5));
console.log(sumar(100, 300, 50));
