// =========== DOM ============
// console.log(document)
// console.log(document.body)

// getElementById
const titulo = document.getElementById('titulo')

const content = document.getElementById('content')

// console.log(titulo)

// getElementsByClassName
const listItem = document.getElementsByClassName('item')

// for (const item of listItem) {
//   console.log(item)
// }

// innerText

console.log(titulo.innerText)
// titulo.innerText = 'Hola Mundo, esta es la clase de JS'

// const nombre = prompt('Ingrese su nombre')
// titulo.innerText = 'Hola ' + nombre

// innerHTML
titulo.innerHTML = '<p>Hola mundo, <strong>Bienvenidos</strong></p>'

// className

content.className = 'container my-5 mx-5'

for (const item of listItem) {
  item.className = 'item bg-item'
}

// Agregar o quitar nodos
const div = document.createElement('div')
div.className = 'container my-2'
div.innerHTML = '<h2>Hola mundo!</h2>'
document.body.prepend(div)
// console.log(div)

const lista = document.getElementById('lista')
const li = document.createElement('li')
li.className = 'item bg-item'
li.innerText = 'Un item nuevo'
lista.append(li)

// insertAdjacentHTML
const container = document.getElementById('container')

const html = '<span>Este es un span insertado despues del parrafo</span>'

container.querySelector('p').insertAdjacentHTML('afterend', html)

const bye = document.querySelector('#bye')
bye.remove()

// appendChild()

const producto = {id: 2, nombre: 'Zapatos'}
container.innerHTML = `
<h3> ID: ${producto.id}</h3>
<p>Nombre de producto: ${producto.nombre}</p>`

