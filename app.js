//  variables (caja para guardar datos)



 function mensajeBienvenida (){
     alert("Bienvenid@ a DrinkHouse")
     let nombreCliente = prompt("Ingrese su nombre")
     let apellidoCliente = prompt("Ingrese su apellido")
     alert("Bienvenid@" + " " + nombreCliente + " " + apellidoCliente )
 }


function validarCliente(){
    let contrasenia = "hola"
    let ingresarClave = prompt ("ingrese su contraseña")
    if (ingresarClave === "hola"){
        alert("acceso permitido")
    }else if(ingresarClave == "HOLA"){
        alert("acceso permitido")
    }else{
        alert("acceso denegado")
    }
}

    
 function bebidas (){
     let licor = prompt (`¿Que deseas comprar el dia de hoy?
     1.Cerveza Corona
     2.Cerveza Club Colombia
     3.Cerveza Heineken
     4.Cerveza Budweiser`)
     switch(licor){
         case "1":
             alert(`Cerveza Corona, valor 12.000`)
             break
         case "2":
             alert(`Cerveza Club Colombia, valor $9.000`)
             break
         case "3":
             alert(`Cerveza Heineken, valor $10.000`)
             break
         case "4":
             alert(`Cerveza Budweiser, valor $10.000`)
             break  
         default:
             alert("no disponible")
     }

 }


 function descuento(){
    let tipoCliente = "premium"
    let puntos = 1200
    if(tipoCliente == "premium" && puntos >= 1200){
        alert("descuento habilitado")
    }else if(tipoCliente == "premium 1" || puntos == 1200){
        alert("bono por $30.000")
    }else{
        alert("no aplica ninguno")
    }
 }



mensajeBienvenida()
validarCliente()
bebidas() 
descuento()



let final = ""
do {
    alert(`validando su compra ${final}`)
    final++
    
} while (final =="")

alert("compra finalizada")















