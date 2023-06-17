const datos = document.querySelector("#conteneForm");
const nameUser = document.querySelector("#validationTooltip01");
nameUser.addEventListener("input", (e) => {
  if (e.target.value === "") {
    alert("Enter your name please");
  }
});
const datoCiudad = document.querySelector("#validationTooltip02");
datoCiudad.addEventListener("input", (e) => {
  if (e.target.value === "") {
    alert("Enter a city please");
  }
});
const datoDireccion = document.querySelector("#validationTooltip03");
datoDireccion.addEventListener("input", (e) => {
  if (e.target.value === "") {
    alert("Enter an address please");
  }
});
datos.addEventListener("submit", confirmarDatos);

function confirmarDatos(e) {
  e.preventDefault();
  alert(
    `Thank's ${nameUser.value} for you purchase, your order will be sent to the city of ${datoCiudad.value} at address  ${datoDireccion.value} `
  );
}

