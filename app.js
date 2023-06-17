const btnCart = document.querySelector(".container-cart-icon");
const btnBuyCart = document.querySelector("#buy");
const containerCartProducts = document.querySelector(
  ".container-cart-products"
);

btnCart.addEventListener("click", () => {
  containerCartProducts.classList.toggle("hidden-cart");
});

/*----------------------------------------------*/
const cartInfo = document.querySelector(".cart-product");
const rowProdcut = document.querySelector(".row-product");

/* lista contenedor productos*/
const productsList = document.querySelector(".container-items");

let allProducts = [];

const valorTotal = document.querySelector(".total-pagar");
const countProducts = document.querySelector("#contador-productos");

productsList.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-add-cart")) {
    const product = e.target.parentElement;
    const infoProduct = {
      quantity: 1,
      title: product.querySelector("h2").textContent,
      price: product.querySelector("p").textContent,
    };

    const exits = allProducts.some(
      (product) => product.title === infoProduct.title
    );

    if (exits) {
      const products = allProducts.map((product) => {
        if (product.title === infoProduct.title) {
          product.quantity++;
          return product;
        } else {
          return product;
        }
      });
      allProducts = [...products];
    } else {
      allProducts = [...allProducts, infoProduct];
    }
    showShop();
  }
});

rowProdcut.addEventListener("click", (e) => {
  if (e.target.classList.contains("icon-close")) {
    const product = e.target.parentElement;
    const title = product.querySelector("p").textContent;

    allProducts = allProducts.filter((product) => product.title !== title);
    showShop();
  }
});

/*leliminar producto*/
const showShop = () => {
  rowProdcut.innerHTML = "";

  let total = 0;
  let totalShop = 0;

  allProducts.forEach((product) => {
    const containerProduct = document.createElement("div");
    containerProduct.classList.add("cart-product");

    containerProduct.innerHTML = `
        <div class="info-cart-product">
					  <span class="cantidad-producto-carrito">${product.quantity}</span>
					  <p class="titulo-producto-carrito">${product.title}</p>
					  <span class="precio-producto-carrito">${product.price}</span>
					</div>
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  fill="none"
					  viewBox="0 0 24 24"
					  stroke-width="1.5"
					  stroke="currentColor"
					  class="icon-close"
					>
					  <path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M6 18L18 6M6 6l12 12"
					  />
					</svg>
        
        `;
    rowProdcut.append(containerProduct);

    total = total + parseInt(product.quantity * product.price.slice(1));
    totalShop = totalShop + product.quantity;
  });

  valorTotal.innerText = `$${total}`;
  countProducts.innerText = totalShop;
};

btnBuyCart.addEventListener("click", () => {

  const dataCar = JSON.stringify(allProducts);
  console.log(dataCar);

  // mostrar o utilizar datos del localStorage
  //data en el localStorage
  localStorage.setItem('jsonCar', dataCar)  

  // mostrar o utilizar datos del localStorage

  // limpiar todo  el carrito post compra
  allProducts = [];
  showShop();

  alert("finalize purchase");

  
});


