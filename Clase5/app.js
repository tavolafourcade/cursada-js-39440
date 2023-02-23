// DEFINICIÓN
// const obj1 = {}


// const objeto = {
//      clave1: valor1,
//      clave2: valor2,
//      clave3: valor3
// }

// Ejemplo 1
const persona = {
     nombre: 'Fabricio',
     edad: 22,
     dni: 36453442,
     direccion: 'Av. Bellavista 456',
     telefono: 956858443
}

// Notación .
// console.log(persona.nombre)
// console.log(persona.direccion)

// Notación de corchetes
// console.log(persona['dni'])
// console.log(persona['direccion'])

persona.edad = 23
persona.telefono = 94756789
persona['direccion'] = 'Calle Colmena 123'
// console.log(persona.edad)
// console.log(persona.telefono)
// console.log(persona.direccion)

persona.signo = 'Geminis'
// console.log(persona)

// CONSTRUCTOR
// Ejemplo 2
function Auto(marca,modelo,anio){
     this.marca = marca
     this.modelo = modelo
     this.anio = anio
}

const auto1 = new Auto('Toyota', 'Camry', 2020)
// console.log(auto1)

// 1

const auto2 = {
     marca: 'Toyota',
     modelo: 'Camry',
     anio: 2020
}

// console.log(auto1)

// Métodos y operaciones con objetos

// Ejemplo 3
// const persona2 = {
//      nombre: 'Fabricio',
//      edad: 22,
//      dni: 36453442,
//      direccion: 'Av. Bellavista 456',
//      telefono: 956858443,
//      saludar: function(){
//           console.log('Hola Mundo, soy ', this.nombre)
//      }
// }

// console.log(persona2)
// persona2.saludar()

// Ejemplo 4 con función constructora
function Producto(id, nombre, stock, precio){
     this.id = id
     this.nombre = nombre
     this.stock = stock
     this.precio = precio

     this.calcularIva = function() {
          return this.precio * 1.21
     }
}

const product1 = new Producto(1, 'Zapatillas', 50, 180)
const product2 = new Producto(2, 'Polo', 20, 150)
const product3 = new Producto(3, 'Pantalón', 15, 220)

// console.log(product1.calcularIva())
// console.log(product2.calcularIva())
// console.log(product3.calcularIva())

// Ejemplo 5

const persona2 = {
     nombre: 'Fabricio',
     edad: 22,
     dni: 36453442,
     direccion: 'Av. Bellavista 456',
     telefono: 956858443,
     saludar: function(){
          console.log('Hola Mundo, soy ', this.nombre)
     }
}

// console.log('edad' in persona2) // true
// console.log('ciudad' in persona2) // false

// for... in
// for (let i = 0; i < persona2.length; i++){
//      console.log(persona2[i])
// }

// for (let i in persona2) {
//      console.log(persona2[i])
// }

// Object.keys

// console.log(Object.keys(persona2))
// console.log(Object.values(persona2))


// Objetos
// Función constructora de objetos
// Clases 

// Ejemplo 6
class Libro {
     constructor(titulo, autor, anio){
          this.titulo = titulo;
          this.autor = autor
          this.anio = anio
     }

     describir() {
          return this.titulo + ' fue escrito por ' + this.autor
     }
}

const libro1 = new Libro('Las aventuras de Sherlock Holmes', 'Arthur Conan Doyle', 1890)
console.log(libro1)
// console.log(libro1.describir())

function Libros(titulo, autor, anio){
     this.titulo = titulo;
     this.autor = autor
     this.anio = anio

     this.describir = function(){
          return this.titulo + ' fue escrito por ' + this.autor
     }
}

const libro2 = new Libros('El juego de Ender', 'Orson Scott', 1950)
console.log(libro2)

// Objeto
// Función constructora
// Clase


// Ejercicio adicional

class Usuario {
     constructor(nombre, usuario, contrasenia) {
       this.nombre = nombre;
       this.usuario = usuario;
       this.contrasenia = contrasenia;
     }
     saludar() {
       return "hola " + this.nombre + " gracias por ingresar sus datos";
     }

     // 2 métodos
     comprobar() {
          if(this.contrasenia == 123){
          return "contrasenia correcta"
          }
          else {
              return "contrasenia " + this.contrasenia +" incorrecta"
          }
      }

      verificarContrasenia(contraseniaIngresada) {
          return this.contrasenia === contraseniaIngresada
      }

      mostrarDatos(){
          return `Nombre : ${this.nombre}
          Usuario: ${this.usuario}
          Contraseña: ${this.contrasenia}
          `
      }

      cambiarContrasenia(nuevaContrasenia){
          this.contrasenia = nuevaContrasenia
          return 'Se actualizó la contraseña con éxito'
      }
   }

const nombre = prompt("ingrese su nombre ");
const usuario = prompt("ingrese un nombre de usuario");
const contrasenia = prompt("ingrese una contraseña ");
const nuevoUsuario = new Usuario(nombre, usuario, contrasenia);
alert(nuevoUsuario.saludar());
// alert(
//      `gracias ${nuevoUsuario.nombre} has creado el usuario ${nuevoUsuario.usuario} y la contraseña  
//      ${nuevoUsuario.contrasenia} correctamente`
// );
// alert(nuevoUsuario.comprobar())
// alert(nuevoUsuario.verificarContrasenia('secret'))
console.log(nuevoUsuario.mostrarDatos())
console.log(nuevoUsuario.cambiarContrasenia('secret'))
console.log(nuevoUsuario.mostrarDatos())
