// Funciones de orden superior

// Ejemplo 1

// Función de orden superior
function ejecutarFuncion(func){
  return func()
}

// Una función cualquier
function miFuncion() {
  return 'Hola, soy una función'
}

const resultado = ejecutarFuncion(miFuncion)
// console.log(resultado)

// Ejemplo 2
function aplicarOperacion(operacion, num1, num2) {
  
  return operacion(num1, num2)
}

function sumar(a, b){
  return a + b
}

function multiplicar(a,b){
  return a * b
}

// console.log(sumar(5,10))

// console.log(aplicarOperacion(sumar,5, 10))
// console.log(aplicarOperacion(multiplicar,5, 10))


// Ejemplo 3
// Vamos a crear una función de orden superior que reciba una función X que va a aplicar a cada elemento de un arreglo

let arreglo = [1,2,3,4]
// arregloFinal = [ 2, 4, 6, 8]
// function procesarArray(array, func){
//   let arregloFinal = []

//   for (let i = 0; i < array.length; i++){
//     arregloFinal.push(func(array[i]))
//   }
//   return arregloFinal
// }

// function doble(num){
//   return num * 2
// }

// function cuadrado(num){
//   return num * num
// }

// function cubo(num){
//   return num * num * num
// }

// console.log(procesarArray(arreglo, doble))
// console.log(procesarArray(arreglo, cuadrado))
// console.log(procesarArray(arreglo, cubo))


// Ejemplo 4
// Transformando las funciones previas en arrow function

const procesarArray = (array, func) => {
  let arregloFinal = []

  for (let i = 0; i < array.length; i++){
    arregloFinal.push(func(array[i]))
  }
  return arregloFinal
}

const doble = num => num * 2

const cuadrado = num => num * num

const cubo = num => num * num * num

// console.log(procesarArray(arreglo, doble))
// console.log(procesarArray(arreglo, cuadrado))
// console.log(procesarArray(arreglo, cubo))

// Ejemplo 5
// setTimeout: toma una función como argumento y la ejecuta después de un tiempo determinado.

const timeAlert = () => console.log('Han pasado 3 segundos')

// setTimeout(timeAlert, 3000)

// Métodos

// forEach

const frutas = ['mandarina', 'pomelo', 'papaya', 'naranja']

// frutas.forEach((fruta, indice) => {
//   console.log(`La fruta en la posición ${indice} es ${fruta}`)
// })

// for (let i = 0; i < array.length; i++){
//       arregloFinal.push(func(array[i]))
//     }

// Ejemplo 6
// Sumar todos los número de un arreglo
// const numeros = [4,5,6,1,80,34,6,78,12,40,23]

// let suma = 0
// numeros.forEach(function(num) {
//   suma = suma + num
// })

// console.log(suma)

// Ejemplo 7
const personas = [
  {nombre: 'Cesar', edad: 24},
  {nombre: 'Juan', edad: 20},
  {nombre: 'Ricardo', edad: 21},
  {nombre: 'Maria', edad: 24},
  {nombre: 'Julian', edad: 20},
  {nombre: 'Sebastián', edad: 21},
  {nombre: 'Lucía', edad: 24},
  {nombre: 'Ricardo', edad: 20},
  {nombre: 'Jazmin', edad: 21},

]

// personas.forEach(datosPersona => console.log(datosPersona.nombre))


// find()
// se va a utilizar para buscar un elemento en un arreglo que cumpla con una condición

const personaEncontrada = personas.find(function(persona){
  return persona.nombre === 'Evelyn'
})
// console.log(personaEncontrada)


// filter()
// Retornar un array con los elementos que cumplan la condición

// Ejemplo 8
// Utilizando filter vamos a capturar los números pares
// const numeros = [4,5,6,1,80,34,6,78,12,40,23]

// const numerosPares = numeros.filter(num => num % 2 === 0)
// console.log(numerosPares)

// some()

// Ejemplo 9

// const tieneNumerosPares = numeros.some(num => num % 2 === 0) // true
// console.log(tieneNumerosPares)

// map()

// Ejemplo 10
// const numerosDuplicados = numeros.map(num => num *2)
// console.log(numerosDuplicados)

// reduce()

// Ejemplo 11
// const suma = numeros.reduce((acc, num) => acc + num, 0)
// console.log(suma)

// Ejemplo 12

const compras = [
  {item: 'manzana', precio: 2, cantidad: 4},
  {item: 'banana', precio: 1, cantidad: 2},
  {item: 'naranja', precio: 5, cantidad: 8},
  {item: 'pera', precio: 8, cantidad: 2},
]

const costoTotal = compras.reduce((suma, compra) => suma + compra.precio * compra.cantidad, 0)
// console.log(costoTotal)

// sort()

// Ejemplo 13
const numeros = [4,5,6,1,80,34,6,78,12,40,23]

const numerosOrdenados = numeros.sort((a,b) => a - b)
console.log(numerosOrdenados)

// MATH

// MIN & MAX
// Spread Operator ...
const min = Math.min(...numeros) // 4,5,6,1,80,34,6,78,12,40,23
const max = Math.max(...numeros)

// console.log('min', min)
// console.log('max', max)

// Ceil, Floor y Round
// Ceil: redondeo al valor superior
// Floor: redondeo al valor inferior

let x = 4.6

let ceilX = Math.ceil(x)
let floorX = Math.floor(x)
let roundX = Math.round(x)

// console.log(ceilX)
// console.log(floorX)
// console.log(roundX)

// Square root
let sqrtX = Math.sqrt(x)
console.log(Math.round(sqrtX))

// Random
let randomNumber = Math.random() * 100
// console.log(Math.round(randomNumber))

// DATE

let fecha = new Date()
console.log(fecha)

let date1 = new Date('2022-12-25')
let date2 = new Date(2022,11,25)
let date3 = new Date('December 25, 2022')

console.log(date3)

let mes = date3.getMonth()
let anio = date3. getFullYear()
console.log(mes) // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
console.log(anio)