// const aprendiendoProgramacion = false

// if (aprendiendoProgramacion) { 
//     console.log('Hola Mundo')
// }

// const estudiante = Number(prompt('Ingrese su edad')) // '10'

// if (estudiante === 10){ // true
//   console.log('Buenos días ' + estudiante)
//     console.log(`Bienvenido dfgfd dfg ${estudiante}`)
// }

// console.log('Adios')
// = operador de asignación
// == operadores de comparación 1 == 1, 1 == '1'
// === operador de comparación estricto 1 === 1, 1 === '1'


// let edad = Number(prompt('Ingrese su edad actual'))
// let nombre = prompt('Ingrese su nombre')

// if (edad >= 10) { // false
//   if (nombre == 'Cesar'){
//     console.log('Hola Cesar')
//   } else {
//     console.log('No eres mi amigo')
//   }
// } else {
//   console.log('Te sirvo un jugo de naranja')
// }

// Admin
// Premium
// sebas
// let rol = prompt('Ingrese su rol').toLowerCase()

// if (rol == 'admin'){
//   alert('Tiene acceso ilimitado')
// } else if (rol == 'premium') {
//   alert('Acceso a su cuenta')
// } else {
//   alert('Bienvenido visitante')
// }


// let numero = 10
// let esMayor = (numero > 5) // true
// console.log(esMayor)

// let temperatura = 50

// if (temperatura >= 40) {
//   alert('Qué calor!')
// } else if (temperatura >= 30) {
//   alert('Está fresco el clima')
// } else {
//   alert('Hace mucho frío')
// }

// console.log('Nuevo código')

// let esValida = false
// if (!esValida) {
//   alert('Es boolean true')
// }

// let user = prompt('Ingrese el usuario')
// let pass = Number(prompt('Ingrese la contraseña'))
// let palabraMagica = prompt('Ingrese la palabra mágica')

// if (user === 'Santiago' && pass === 1234){
//   alert('Bienvenido')
// } else {
//   alert('Datos incorrectos')
// }

// if ((user === 'Martin' && pass === 1234) || palabraMagica === 'ADMIN'){
//   alert('Bienvenido')
// } else {
//   alert('Datos incorrectos')
// }

// if (user === 'Martin' && (pass === 1234 || palabraMagica === 'ADMIN')){
//   alert('Bienvenido')
// } else {
//   alert('Datos incorrectos')
// }


// let numero = prompt('ingresa un numero')
// if ( numero > 1000 ) {
//     alert('Es mayor a mil')
// } else {
//     alert('Es menor a mil')
// }


let primerNumero = Number(prompt("Ingrese un número a evaluar."))
// let textoRandom = prompt("Ingrese un texto.");


// if(primerNumero> 1000){
//     alert("El numero ingresado supera al 1000.");
// }else{
//     alert("El numero ingresado es menor a 1000.");
// }


// if (textoRandom === "hola"){
//     console.log("Hola.");
// }else{
//     console.log("El texto ingresado no fue un 'hola'.");
// }

// if(primerNumero > 10 && primerNumero < 50){
//   console.log('El número está entre 10 y 50')
// } else {
//   console.log('El número NO está entre 10 y 50')
// }

let numero = Number(parseInt(prompt("Ingese un numero")));
let nombre = prompt("Ingese su nombre");

if (numero === 10 && nombre == "Camila"){
    console.log("ok")
} else {
    console.log("no")
}