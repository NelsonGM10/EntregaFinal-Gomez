const cuadros = [
{id:goku, precio:70, descripcion:"Goku SSJ4"},
{id:vegeta, precio:65, descripcion: "Majin Vegeta SSJ"},
{id:gohan, precio:65, descripcion:"Gohan SSJ2"},
{id:uzumaki, precio:60, descripcion:"Naruto Uzumaki"},
{id:sasuke, precio:60, descripcion:"Sasuke Uchiha"},
{id:madara, precio:60, descripcion:"Madara Uchiha"},
{id:luffy, precio:70, descripcion:"Monkey D Luffy Gear 5"},
{id:zoro, precio:65, descripcion:"Roronoa Zoro"},
{id:asce , precio:60, descripcion:"Portgas D Asce"},
{id:tanjiro, precio:65, descripcion:"Tanjiro Kamado"},
{id:zenitsu, precio:60, descripcion:"Zentisu Agatsuma"},
{id:rengoku, precio:65, descripcion:"Rengoku Kyojuro"},
]

// let carrito =[];

// cuadros.forEach((producto)=>{
//   add.addEventListener("click",()=>{
//     compra.push({ id: precio.descripcion
//     });
//     //console.log(carrito)
//   })
// })

// datos del cliente // 
const datos = document.querySelector("#conteneForm");
const nameUser = document.querySelector("#validationTooltip01");
nameUser.addEventListener("input", (e) => {
  if (e.target.value === "") {
    alert("ingrese nombre");
  }
});
const datoCiudad = document.querySelector("#validationTooltip02");
datoCiudad.addEventListener("input", (e) => {
  if (e.target.value === "") {
    alert("ingrese ciudad");
  }
});
const datoDireccion = document.querySelector("#validationTooltip03");
datoDireccion.addEventListener("input", (e) => {
  if (e.target.value === "") {
    alert("ingrese una dirección");
  }
});
datos.addEventListener("submit", confirmarDatos);

function confirmarDatos(e) {
  e.preventDefault();
  alert(
    `Gracias ${nameUser.value} por tu compra, tu pedido será enviado a la ciudad de ${datoCiudad.value} en la direccion  ${datoDireccion.value} `
  );
}
