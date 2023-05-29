 function mensajeBienvenida (){
    alert("Bienvenid@ a DrinkHouse")
    let nombreCliente = prompt("Ingrese su nombre")
    let apellidoCliente = prompt("Ingrese su apellido")
    alert("Bienvenid@" + " " + nombreCliente + " " + apellidoCliente )
   }
  mensajeBienvenida()

  function validarCliente(){
  let contrasenia = "hola"
  let ingresarClave = prompt ("ingrese su contraseña")
    if (ingresarClave == "hola" || ingresarClave =="HOLA") {
    alert("Acceso permitido")
   // cerveza()
   }else{
     alert("Acceso denegado")
     }
    
   }
  validarCliente()

function cerveza ( nombre, precio, cantidad){
    this.nombre = nombre = prompt(`¿Que cerveza deseas tomar hoy?
    Corona
    Heineken
    Club Colombia
    Smirnoff`)
    this.precio = precio
    this.cantidad = cantidad = prompt ("¿Cuantas se te antojan hoy?")
    this.compra = function(){
 alert ("El total de tu compra es " + this.precio * this.cantidad + " por " + this.cantidad + " botellas de " + this.nombre)
    
    }
}

const pedidoUno = new cerveza ("", /*valor por unidad*/ 9000, 3)

        
pedidoUno.compra()
    
const carrito = []

carrito.push(pedidoUno)
console.log(carrito)


   let totalCompra = carrito.reduce((accum , prod, cantidad)=>{
     return accum + prod.precio * prod.cantidad
  },0)
console.log("generando factura por " + totalCompra)

const lugar =[
    {barrio : "La Esperanza"},
    {barrio: "Rodeo alto"},
    {barrio: "Santa fe"},
    {barrio: "Barrio antioquia"}
]

let busqueda = lugar.filter((lugar)=> lugar.barrio != "Santa fe")
console.log(busqueda)

let sede = lugar.find((lugar)=> lugar.barrio == "rodeo alto")
//console.log(sede)

