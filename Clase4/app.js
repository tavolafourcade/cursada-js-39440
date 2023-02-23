

// function servirCafe() {
// // preparar la taza
// // agregar el cafe
// // agregar el azucar
// // calentar el agua
// // llenar la taza con el agua caliente
// // mover con una cuchara
// // tomar el café
// }

// servirCafe()


// DECLARACIÓN
// 1er ejemplo

// 1er momento: declaración
// function saludar(){
//      console.log('Hola clase!')
// }

// 2do momento: llamar a la función saludar()
// saludar()

// 2do ejemplo
// let nombreIngresado = prompt('Ingresar el nombre')
// alert('El nombre ingresado es ' + nombreIngresado)

// nombreIngresado = prompt('Ingresar el nombre')
// alert('El nombre ingresado es ' + nombreIngresado)

// nombreIngresado = prompt('Ingresar el nombre')
// alert('El nombre ingresado es ' + nombreIngresado)

function solicitarNombre () {
     let nombreIngresado = prompt('Ingresar el nombre')
     alert('El nombre ingresado es ' + nombreIngresado)
}

// solicitarNombre()
// solicitarNombre()
// solicitarNombre()

// PARÁMETROS
// Ejemplo 3
//Mostrar en la console el nombre recibido

function mostrarNombre(nombre){
     console.log('Tu nombre es: ' + nombre)
}

// mostrarNombre('Sebastián')
// mostrarNombre('Matías')
// mostrarNombre('Raquel')
// Ejemplo 4
function bienvenidaAlCurso(saludo, nombre) {
     console.log(saludo + ' ' + nombre)
}

// bienvenidaAlCurso('Hola', 'David')

// Ejemplo 5
// Función para sumar 2 números
function sumar(num1, num2) {
     return num1 + num2
}
let resultado = sumar(5, 9)
// console.log(resultado)
resultado = sumar(8,10)
// console.log(resultado)


// Ejemplo 6
function concatenar(str1, str2){
     return str1 + str2
}

const saludo = 'Bienvenido'
const lugar = 'A mi clase'
// let resultadoConcatenado = concatenar('Hola', 'Mundo')
// let resultadoConcatenado2 = concatenar(saludo, lugar)
// console.log(resultadoConcatenado)
// console.log(resultadoConcatenado2)

// Ejemplo 7
// Función para calcular el promedio de 3 Números

function promedio(a,b,c){
     return (a + b + c)/3
}

// let calculoProm = promedio(5,8,15)
// console.log(promedio(5,8,15))

// Ejemplo 8
// Crearemos una función que reciba 3 parámetros y haga unos cálculos matemáticos

/*
num1: 1er número
num2: 2do número
operacion: tipo de operación (+,-,*,/)
*/

function calcular(num1, num2, operador){
     // let hijoDeLaFuncion = 'Scope Global'
     if (operador === '+'){
          return num1 + num2
     } else if (operador === '-') {
          return num1 - num2
     } else if (operador === '*') {
          return num1 * num2
     } else if (operador === '/') {
          return num1 / num2
     } else {
          return 'Operación no es válida'
     }
     

}

// console.log(hijoDeLaFuncion)

let operacionSuma = calcular(1,2,'/')
let operacionDivision = calcular(5, 3, '/')
// console.log(operacionSuma)
// console.log(operacionDivision)


let nombreDeUsuario = 'Juan' // Scope Global

function imprimirUsuario () {
     let nombreDeUsuario = 'Cesar' // Scope Local
     console.log(nombreDeUsuario)

}
// imprimirUsuario()
// console.log(nombreDeUsuario)


// Ejemplo 9
function sumarNumeros(a, b) {
     let resultadoSuma = a + b
     console.log(resultadoSuma)
}
// console.log(resultadoSuma)

// sumarNumeros(5,10)


// Función Anónima
// Expresión

// Ejemplo 10
// Declarando la función tradicional
// function suma(a,b){
//      return a + b
// }

// let suma2 = function(a,b){
//      return a + b
// }

// console.log(suma2(4,5))
// console.log(suma2(3,10))

// Funciión Flecha
//=>

// let suma3 = (a, b) => {
//      return a + b
// }

// let suma3 = (a, b) => a + b

let suma3 = (a, b) => {
     let c = a + 1
     return c + b
}


// Ejemplo 10


// let sumaNumeros = function(a,b){
//      if(typeof a !== 'number' || typeof b !=='number'){
//           return 'Ambos argumentos deben ser numéricos'
//      }
//      return a + b
// }

let num1 = 19
let num2 = 45



// let sumaNumeros = (a,b) => {
//      if(typeof a !== 'number' || typeof b !=='number'){
//           return 'Ambos argumentos deben ser numéricos'
//      }
//      return a + b
// }

let sumaNumeros = (a,b) => {
     if(typeof a !== 'number' || typeof b !=='number'){
          return 'Ambos argumentos deben ser numéricos'
     } else {
          return a + b
     }
}

let resultadoSumaFAnonima = sumaNumeros(num1, num2)
console.log(resultadoSumaFAnonima)


let nombreFuncion = () => {}