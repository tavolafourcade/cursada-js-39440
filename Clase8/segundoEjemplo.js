const productos = [
  { id: 1, nombre: "Camisa roja", precio: 25, talla: "M" },
  { id: 2, nombre: "Pantalón azul", precio: 35, talla: "L" },
  { id: 3, nombre: "Vestido negro", precio: 45, talla: "S" },
  { id: 4, nombre: "Sudadera gris", precio: 55, talla: "XL" },
  { id: 5, nombre: "Zapatos negros", precio: 65, talla: "S" },
  { id: 6, nombre: "Bolsa marrón", precio: 75, talla: "única" },
  { id: 7, nombre: "Camiseta blanca", precio: 15, talla: "M" },
  { id: 8, nombre: "Jeans azules", precio: 45, talla: "M" },
  { id: 9, nombre: "Abrigo gris", precio: 125, talla: "L" },
  { id: 10, nombre: "Botas marrones", precio: 85, talla: "XSS" },
  { id: 11, nombre: "Zapatos negros", precio: 65, talla: "L" },
  { id: 12, nombre: "Bolsa marrón", precio: 75, talla: "única" },
  { id: 13, nombre: "Camiseta blanca", precio: 15, talla: "M" },
  { id: 14, nombre: "Jeans azules", precio: 45, talla: "M" },
  { id: 15, nombre: "Abrigo gris", precio: 125, talla: "L" },
  { id: 16, nombre: "Botas marrones", precio: 85, talla: "L" }
];


const tablaProductos = document.querySelector('#tablaProductos')

productos.forEach(function(producto) {
  let fila = document.createElement('tr')
  let celdaId = document.createElement('td')
  let celdaNombre = document.createElement('td')
  let celdaPrecio = document.createElement('td')
  let celdaTalla = document.createElement('td')

  // { id: 1, nombre: "Camisa roja", precio: 25, talla: "M" },
  celdaId.innerText = producto.id
  celdaNombre.innerText = producto.nombre
  celdaPrecio.innerText = producto.precio
  celdaTalla.innerText = producto.talla

  fila.append(celdaId)
  fila.append(celdaNombre)
  fila.append(celdaPrecio)
  fila.append(celdaTalla)

  tablaProductos.append(fila)
})

const productoHead = document.querySelector('#producto_head')
productoHead.className = 'background-table'

