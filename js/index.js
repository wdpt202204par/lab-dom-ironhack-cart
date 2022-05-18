// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let myPriceEl = product.querySelector('.price span'); // <span>

  let myQuantityEl = product.querySelector('.quantity input'); // <input>
  let mySubTotalEl = product.querySelector('.subtotal span');

  const price = myPriceEl.innerText // "25.00"
  const quantity = myQuantityEl.value 
  
  const ret = price * quantity

  console.log('ret=', ret)

  mySubTotalEl.innerHTML =  ret
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const productsEl=document.querySelectorAll('.product') // [ <tr>, <tr>, ... ]
  const productsArray=Array.from(productsEl)
  for (let i=0;i<productsArray.length;i++){
    updateSubtotal(productsArray[i])
    console.log(i)
  }

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
