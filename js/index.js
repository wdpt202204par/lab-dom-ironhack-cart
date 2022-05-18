// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  // Step 1
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");

  // Step 2
  const price_value = price.innerHTML;      // '25.00'
  const quantity_value = quantity.value;       // 0

  // Step 3
  const subtotal = price_value * quantity_value;

  // Step 4
  const subtotal_element = product.querySelector(".subtotal span");

  // Step 5
  subtotal_element.innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  const product_list = document.querySelectorAll(".product")

  const product_list_Array = Array.from(product_list) // Transformes en vrais tableaux.

  let total = 0;

  product_list_Array.forEach(function (product) {
    total += updateSubtotal(product);

  document.querySelector("#total-value span").innerHTML = total;
    
  });



  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
