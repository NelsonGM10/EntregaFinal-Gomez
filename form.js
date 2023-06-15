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
