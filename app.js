//   variables ("caja para guardar datos")


const producto = {
    nombre : "Cerveza Corona",
    precio : 12000,
    disponible : true
}

//  console.log(producto.nombre)
//  console.log(producto.precio)
//  console.log(producto.disponible)

// producto.imagen = "image.jpg"

const { nombre, precio, disponible} = producto

function producto (nombre, precio){
    this.nombre = nombre
    this.precio = precio
    this.disponible = true // ejemplo valor por default para todo
}

const productoDos = new producto("pilsen", 6000)
 
console.log(productoDos)















