const btnCarrito = document.querySelector(".carrito-icono");
const btnBuyCart = document.querySelector("#buy");
const contenedorCarrito = document.querySelector(
  ".contenedor-carrito-productos"
);

btnCarrito.addEventListener("click", () => {
  contenedorCarrito.classList.toggle("hidden-cart");
});
/*----------------------------------------------*/
const infoProducto = document.querySelector(".carrito-producto");
const productoAgregado = document.querySelector(".producto-agregado");

/* lista contenedor productos*/
const catalogo = document.querySelector(".contenedor-catalogo");

let Paints = [];

const valorTotal = document.querySelector(".total-pagar");
const contadorProductos = document.querySelector("#contadorProductos");

catalogo.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-add-cart")) {
    const product = e.target.parentElement;
    const infoProduct = {
      cantidad: 1,
      titulo: product.querySelector("h2").textContent,
      precio: product.querySelector("p").textContent,
    };

    const salida = Paints.some(
      (product) => product.titulo === infoProduct.titulo
    );

    if (salida) {
      const products = Paints.map((product) => {
        if (product.titulo === infoProduct.titulo) {
          product.cantidad++;
          return product;
        } else {
          return product;
        }
      });
      Paints = [...Paints];
    } else {
      Paints = [...Paints, infoProduct];
    }
    showShop();
  }
});

productoAgregado.addEventListener("click", (e) => {
  if (e.target.classList.contains("cerrar-icono")) {
    const product = e.target.parentElement;
    const titulo = product.querySelector("p").textContent;

    Paints = Paints.filter((product) => product.titulo !== titulo);
    showShop();
  }
});

/*limpiar carrito*/
const showShop = () => {
  productoAgregado.innerHTML = "";

  let total = 0;
  let totalShop = 0;

  Paints.forEach((product) => {
    const contenedorProductos = document.createElement("div");
    contenedorProductos.classList.add("carrito-producto");

    contenedorProductos.innerHTML = `
        <div class="info-producto-carrito">
					  <span class="cantidad-producto-carrito">${product.cantidad}</span>
					  <p class="titulo-producto-carrito">${product.titulo}</p>
					  <span class="precio-producto-carrito">${product.precio}</span>
					</div>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  fill="none"
					  viewBox="0 0 24 24"
					  stroke-width="1.5"
					  stroke="currentColor"
					  class="cerrar-icono"
					>
					  <path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M6 18L18 6M6 6l12 12"
					  />
					</svg>
        
        `;
    productoAgregado.append(contenedorProductos);

    total = total + Number(product.cantidad * product.precio.slice(1));
    totalShop = totalShop + product.cantidad;
  });

  valorTotal.innerText = `$${total}`;
  contadorProductos.innerText = totalShop;
};

btnBuyCart.addEventListener("click", () => {
  const dataCar = JSON.stringify(Paints);
  console.log(dataCar);

  // mostrar o utilizar datos del localStorage
  //data en el localStorage
  localStorage.setItem("jsonCar", dataCar);
  // se utiliza para obtener valores del storage //
  const getValue = localStorage.getItem("jsonCar", dataCar);
  console.log(getValue + "valor storage");

  // mostrar o utilizar datos del localStorage

  // limpiar todo  el carrito post compra
  Paints = [];
  showShop();

  alert("Thanks, please confirm your purchase");
});
  


