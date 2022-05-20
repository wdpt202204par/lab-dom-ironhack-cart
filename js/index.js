// ITERATION 1

function updateSubtotal() {
  console.log('Calculating subtotal, yey!');

  const priceEl = document.querySelector('.price span'); // <span>
  const quantityEl = document.querySelector('.quantity input') // <input>

  let total = Number(priceEl.innerHTML) * quantityEl.value // "25.00" * 2

  let subTotalEl = document.querySelector('.subtotal span')

  subTotalEl.innerHTML = total;
  console.log(subTotalEl)
}


function calculateAll() {
  //   // code in the following two lines is added just for testing purposes.
  //   // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  //   // end of test

  // ITERATION 2 
  const ProductsNodeList = document.querySelectorAll('.product');
  const allProductsArr = Array.from(ProductsNodeList);

  for (let i = 0; i < allProductsArr.length; i++) {
    updateSubtotal(ProductsNodeList[i]);
  }

  // ITERATION 3
  const totalEl = document.querySelector('#total-value span');
  let total = 0;
  for (let i = 0; i < allProductsArr.length; i++) {
    const subtotal = allProductsArr[i].querySelector('.subtotal span').textContent;
    total += Number(subtotal);
    totalEl.innerHTML = total;
  }





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
