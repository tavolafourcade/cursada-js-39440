// ARREGLOS

const miPrimerArray = []
const miSegundoArray = [ 1, 2]
const miTercerArray = [ 'C1', 'C2']
const miCuartoArray = [ true, false, true]

//                      0,   1,      2
const miQuintoArray = [ 1, false, 'Curso1']

// Ejemplo 1
// Acceder a un arreglo de datos personales
let personas = [
  {nombre: 'Juan', edad: 28},
  {nombre: 'María', edad: 25},
  {nombre: 'Pedro', edad: 30},
]

let nombrePrimeraPersona = personas[0].edad
let nombreSegundaPersona = personas[1]['nombre']

// console.log(nombrePrimeraPersona)
// console.log(nombreSegundaPersona)

// Recorriendo un arreglo
// Ejemplo 2

let colores = ['rojo', 'amarillo', 'verde', 'azul', 'magenta', 'gris', 'negro']

// for (let i = 0; i < colores.length; i++){
//   console.log(colores[i])
// }

// colores[0] rojo
// colores[1] amarillo

// Ejemplo 3
// Acceder a la lista útiles escolares y procesar las ventas
let productos = [
  {nombre: 'Lápiz', precio: 2.5, cantidad: 10},
  {nombre: 'Borrador', precio: 1.5, cantidad: 5},
  {nombre: 'Cuaderno', precio: 3, cantidad: 20},
  {nombre: 'Libretas', precio: 1, cantidad: 25},
  {nombre: 'Lapiceros', precio: 2, cantidad: 12},
  {nombre: 'Cartulinas', precio: 1, cantidad: 5},
  {nombre: 'Cuaderno', precio: 3, cantidad: 20},
  {nombre: 'Libretas', precio: 1, cantidad: 25},
  {nombre: 'Lapiceros', precio: 2, cantidad: 12},
  {nombre: 'Cartulinas', precio: 1, cantidad: 5},
  {nombre: 'Cuaderno', precio: 3, cantidad: 20},
  {nombre: 'Libretas', precio: 1, cantidad: 25},
  {nombre: 'Lapiceros', precio: 2, cantidad: 12},
  {nombre: 'Cartulinas', precio: 1, cantidad: 5},
  {nombre: 'Cuaderno', precio: 3, cantidad: 20},
  {nombre: 'Libretas', precio: 1, cantidad: 25},
  {nombre: 'Lapiceros', precio: 2, cantidad: 12},
  {nombre: 'Cartulinas', precio: 1, cantidad: 5}
]

let totalVentas = 0

for (let i = 0; i < productos.length; i++){
  let producto = productos[i]
  // console.log(producto)

  let ventaProducto = producto.precio * producto.cantidad
  // console.log('El total por venta del producto: ' + producto.nombre + ' es de $' + ventaProducto)
  totalVentas += ventaProducto
}

// console.log('Total de ventas es: ' + totalVentas)

// LENGTH

// Ejemplo 4
// Obtener el número de elementos que tiene un array

let frutas = ['manzana', 'pera', 'banana','manzana', 'pera', 'banana','manzana', 'pera', 'banana','manzana', 'pera', 'banana']
let numFrutas = frutas.length
// console.log('Número de frutas: ' + numFrutas)

// PUSH

// Ejemplo 5
// console.log(frutas.length)
frutas.push('naranja')
frutas.push('fresa')

// console.log(frutas.length)

// Ejemplo 6
frutas.push('melón', 'sandía', 'papaya', 'uva')
// console.log(frutas.length)
// console.log(frutas)

// UNSHIFT

// Ejemplo 7
frutas.unshift('arándanos')
// console.log(frutas.length)
// console.log(frutas)

frutas.unshift('melocotón')
// console.log(frutas.length)
// console.log(frutas)

// Ejemplo 8
frutas.unshift('pomelo', 'kiwi','toronja')
// console.log(frutas)

// pop
// Ejemplo 9
let ultimaFruta = frutas.pop()
// console.log(ultimaFruta)

// shift
// Ejemplo 10
let primeraFruta = frutas.shift()
// console.log(primeraFruta)

// splice
// Ejemplo 11
// 1er parámetro: la posición inicial desde donde se va a eliminar.
// 2do parámetro: cuantos elementos queremos eliminar del arreglo.
// console.log(frutas)
let frutasEliminadas = frutas.splice(1,2)
// console.log(frutasEliminadas)
// console.log(frutas)

// join
// Ejemplo 12
let listaFrutas = frutas.join('\n')
// console.log(frutas)

// console.log(listaFrutas)

// concat
// Nos permite combinar dos arreglos en uno solo

let carros1 = ['audi', 'mercedes benz']
let carros2 = ['toyota', 'mazda']
let carros3 = ['hyundai', 'ford']

let todosLosCarros = carros1.concat(carros2, carros3)
// console.log(todosLosCarros)

const carrosAlternativos = carros1 + carros2 + carros3
// console.log(carrosAlternativos)

// slice
// Nos va a devolver una copia de una porción del arreglo
// NO VA A MODIFICAR EL ARREGLO ORIGINAL
// Este método nos  va a retornar los elementos desde el inicio - start (1) y justo hasta antes de llegar al - end (2)

//                              0             1       2         3
let instrumentosMusicales = ['guitarra', 'organo', 'violín', 'tambor']
let instrumentosExtraidos = instrumentosMusicales.slice(1,2)
// console.log(instrumentosExtraidos)
// console.log(instrumentosMusicales)

// indexOf
// Nos va a permitir obtener el índice de un elemento dentro de un arreglo

// Si no se encuentra el elemento nos retorna -1
// Caso contrario nos retorna la posición del elemento

let posicion = instrumentosMusicales.indexOf('violín')
// console.log(posicion)

if (posicion !== -1){ // Si el elemento existe
  instrumentosMusicales.splice(posicion, 1)
}
// console.log(instrumentosMusicales)

// includes
// true: si el elemento existe
// false: si el elemento no existe

let existe = instrumentosMusicales.includes('organo') // false
// console.log(existe)

// reverse
let numeros = [1,2,3,4,5,6,7,8,9,10]
numeros.reverse()
console.log(numeros)

// For Of

let personas2 = [
  {nombre: 'Juan', edad: 28},
  {nombre: 'María', edad: 25},
  {nombre: 'Pedro', edad: 30},
  {nombre: 'Sebastian', edad: 28},
  {nombre: 'Fabricio', edad: 25},
  {nombre: 'Mariano', edad: 30},
  {nombre: 'Leandro', edad: 28},
  {nombre: 'Brian', edad: 25},
  {nombre: 'Jacqueline', edad: 30},
]

for (let i = 0; i< personas2.length; i++){
  // console.log(i)
}

for (persona of personas2) {
  console.log(persona.nombre)
}