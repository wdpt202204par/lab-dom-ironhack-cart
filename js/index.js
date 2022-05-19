// ITERATION 1
function updateSubtotal(product) {
  let myPriceEl = product.querySelector('.price span');            //selection de la span du prix
  let myQuantityEl = product.querySelector('.quantity input');     //selection de la span de la quantité
  let mySubTotalEl = product.querySelector('.subtotal span');      //selection de la span du soustotal
  const price = myPriceEl.innerText                                //selection de la valeur du prix
  const quantity = myQuantityEl.value                              //selection de la valeur de la quantité
  const result = price * quantity                                  //on multiplie le prix par la quantité
  mySubTotalEl.innerHTML = result                                  //on vient écrire notre résultat dans la span soustotal

}

function calculateAll() {
  // ITERATION 2
  const productsArray = Array.from(document.querySelectorAll('.product'))        // [ <tr>, <tr>, ... ]
  //const productsArray = Array.from(productsEl)
  for (let i = 0; i < productsArray.length; i++) {
    updateSubtotal(productsArray[i])
  }

  // ITERATION 3
  let result = 0
  for (let i = 0; i < productsArray.length; i++) {
    let subTotal = Number(productsArray[i].querySelector('.subtotal span').innerText)
    result += subTotal
  }
  let totalEl = document.querySelector('#total-value span')
  totalEl.innerHTML = result
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //console.log('The target in remove is:', target);
  let myTarget = target.closest('tr')
  myTarget.remove()
}

// ITERATION 5

function createProduct() {
  let tBody = document.querySelector('tbody')
  let inputsArray = Array.from(document.querySelectorAll(".create-product input"))
  let newProductName = inputsArray[0].value;
  let newProductPrice = inputsArray[1].value;

  let template = `
  <tr class="product">
  <td class="name">
    <span>${newProductName}</span>
  </td>
  <td class="price">$<span>${newProductPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`

  tBody.innerHTML += template

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtonsArray = Array.from(document.querySelectorAll('.product'))

  for (let i = 0; i < removeButtonsArray.length; i++) {
    removeButtonsArray[i].querySelector('button').addEventListener('click', function (event) {
      return removeProduct(event)
    })

  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtonsArray = Array.from(document.querySelectorAll('.product'))

  for (let i = 0; i < removeButtonsArray.length; i++) {
    removeButtonsArray[i].querySelector('button').addEventListener('click', function (event) {
      return removeProduct(event)
    })
  }
});


let createButton = document.getElementById('create')
//createButton.onclick = function(){createProduct()}
createButton.addEventListener('click', createProduct)