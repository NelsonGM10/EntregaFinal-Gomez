//variables (caja para guardar datos)//



function mensajeBienvenida (){
    alert("Bienvenid@ a DrinkHouse")
    let nombreCliente = prompt("Ingrese su nombre")
    let apellidoCliente = prompt("Ingrese su apellido")
    alert("Bienvenid@" + " " + nombreCliente + " " + apellidoCliente )
}

function bebidas (){
    let licor = prompt ("¿Que deseas comprar el dia de hoy?")
    switch(licor){
        case "cerveza corona":
            alert(`Pedido por ${licor}, valor $12.000`)
            break
        case "cerveza club colombia":
            alert(`Pedido por ${licor}, valor $9.000`)
            break
        case "cerveza pilsen":
            alert(`Pedido por ${licor}, valor $6.000`)
            break
        default:
            alert("no disponible")
    }

}
mensajeBienvenida()
bebidas()














