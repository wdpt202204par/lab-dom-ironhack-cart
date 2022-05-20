// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  // Step 1
  const price               = product.querySelector(".price span");
  const quantity            = product.querySelector(".quantity input");

  // Step 2
  const priceValue          = price.innerHTML;
  const quantityValue       = quantity.value;

  // Step 3
  const subtotal            = priceValue * quantityValue;

  // Step 4
  const subtotalElement     = product.querySelector(".subtotal span");

  // Step 5
  subtotalElement.innerHTML = subtotal;

  return subtotal;
}

// ITERATION 2

function calculateAll() {
  const productsNodeList    = document.querySelectorAll(".product")
  const productsList        = Array.from(productsNodeList);

  let total                 = 0;

  productsList.forEach(product => {
    total += updateSubtotal(product);
    
  });

  // ITERATION 3

  document.querySelector("#total-value span").innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  target.parentElement.parentElement.remove();  // Product line is the parent node from the parent node of the "Remove" button
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const newProductName  = document.querySelector(".create-product td:nth-child(1) input");
  const newProductPrice = document.querySelector(".create-product td:nth-child(2) input");

  const newProduct = document.createElement('tr');
  newProduct.classList.add('product');
  newProduct.innerHTML =`
      <td class="name">
        <span>${newProductName.value}</span>
      </td>
      <td class="price">$<span>${newProductPrice.value}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
  `;

  document.querySelector("tbody").appendChild(newProduct);

  // Adding a 'click' event listener on the 'Remove' button of the new product
  const newProductRemoveBtn = newProduct.querySelector(".btn-remove");
  newProductRemoveBtn.addEventListener('click', event => removeProduct(event));

  // Resetting the 'Create product' form
  newProductName.value  = 0;
  newProductPrice.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn    = document.getElementById('calculate');
  const createProductBtn      = document.getElementById('create');
  const removeBtnsNodeList    = document.querySelectorAll(".btn-remove");
  const removeBtnsArray       = Array.from(removeBtnsNodeList);

  // Adding 'click' event listener on each "Remove" button at window loading
  removeBtnsArray.forEach(function (removeBtn) {
    removeBtn.addEventListener('click', event => removeProduct(event));
  });
  
  calculatePricesBtn.addEventListener('click', calculateAll);
  createProductBtn.addEventListener('click', createProduct);
});
