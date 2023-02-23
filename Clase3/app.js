// contador = contador + 1 // contador++

// .  0             1           3
// for(let i = 0; i <= 5; i++){
     // 2
     // Lógica de lo que queremos ejecutar
// }

// i = i -1 // i--

// for (let i = 20; i > 0; i--){
//     console.log(i)
// }
console.log('Fin del programa')


// 1er ejercicio
// Tabla de multiplicar

// let tabla = Number(prompt('Ingresa el número deseado'))

// for (let i = 1; i <= 10; i++){
//     console.log(tabla * i)
// }


// 2do ejercicio
// Sumar los números del 1 al 10

// let suma = 0
// for (let i = 1; i <= 10; i++) {
//     suma += i
//     console.log(suma)
// }

// console.log(suma)


// 3er ejercicio
// Imprimir las letras de una cadena de texto
// .            0123
// const string = 'Hola, cómo te va?'
// console.log(string.length)
// for (let i = 0; i < string.length; i++) {
//     console.log(string[i])
// }


// 4to ejercicio
// Operador módulo %

// for (let i= 1; i <= 100; i++) {
//     if( i % 2 === 0){
//         console.log(i + '<--- Par')
//     } else if ( i % 2 === 1){
//         console.log(i + '<--- Impar')
//     }
// }


// BREAK

// 1er ejercicio

// let numeroProhibido = 66

// for (let i = 0; i <= 100; i++){
//     console.log(i)

//     if(i === numeroProhibido) { // TRUE
//         break
//     }
// }

// 2do ejercicio
// Salir del bucle después de encontrar el primer número impar
// for (let i = 0; i <= 10; i++){
//     if ( i % 2 !==0) {
//         console.log('Econtrado', i)
//         break
//     }
// }

// 3er ejercicio
// Salir del bucle después de encontrar un número divisible por 3
// for (let i = 1; i <= 100; i++){
//     if ( i % 5 === 0) {
//         console.log('Econtrado', i)
//         break

//     }
// }


// CONTINUE

// 1er ejercicio

// let numeroProhibido = 66

// for (let i = 0; i <= 100; i++){
//     if (i === numeroProhibido) {
//         continue
//     }
//     console.log(i)
// }

// 2do ejercicio
// Obviar los números que sean múltiplos de 6
// for (let i = 0; i <= 100; i++){
//     if (i % 6 === 0) {
//         continue
//     }
//     console.log(i)
// }

// 3er ejercicio

// let valorLimite = Number(prompt('Dame el número'))
// let conteo = 0
// for (let i = 0; i <= valorLimite; i++){
//     if (i % 7 === 0) {
//         conteo++
//     }
// }
// console.log(conteo)


// WHILE

// Ejercicio 1
// Imprimir los números entre 1 y 10

// let i = 1
// while (i < 10) {
//     // Lógica a ejecutarse
//     console.log(i)
//     i++
// }

// Ejercicio 2
// Sumar los números entre 1 y 10

// let i = 1
// let suma = 0
// while (i < 10) {
//     suma += i
//     i++
//     console.log(suma)
// }


// Ejercicio 3
// encontrar el primer número que sea divisible por 3
// let i = 1
// while (i <= 10) {
//     if (i % 3 === 0) {
//         console.log(i)
//     }
//     i++
// }

// Ejercicio 4
// Implementacion de Login
// let pass = prompt('Ingrese la contraseña')
// let contador = 1

// while(pass !== 'Coder' && contador <= 3) {
//     alert('Acceso denegado, pruebe nuevamente')
//     contador++
//     pass = prompt('Ingrese la contraseña')
// }
// if (contador ===3) {
//     alert('Límite de ingresos, vuelva después')
// } else {
//     alert('Bienvenido')
// }

// DO WHILE
// let pass

// do {
//     pass = prompt('Ingrese la contraseña')
// } while (pass !== 'Coder')

// alert('Bienvenido')

// SWITCH

// Ejercicio 1
let banco = prompt('Ingrese su banco')

// if (banco === 'Santander') {
//     console.log('Tasa de interés: 15%')
// } else if (banco === 'BBVA') {
//     console.log('Tasa de interés: 25%')
// } else if (banco === 'Provincia') {
//     console.log('Tasa de interés: 37%')
// } else if (banco === 'Patagonia') {
//     console.log('Tasa de interés: 60%')
// }

// let monto = 1000
// switch(banco) {
//     case 'Santander':
//         interes = 1.15
//         console.log('Interés 15%')
//         break
//     case 'BBVA':
//         interes = 1.25
//         console.log('Interés 25%')
//         break
//     case 'Provincia':
//         interes = 1.37
//         console.log('Interés 37%')
//         break
//     default:
//         console.log('No encontramos ese banco')
// }

// alert('Tiene que devolver: ' + 1000 * interes)