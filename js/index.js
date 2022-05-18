// ITERATION 1

function updateSubtotal(product) {
  let price = Number(product.querySelector('.price span').innerHTML) // Récupère le prix
  let quantity= Number(product.querySelector('.quantity input').value) // Récupère la quantité

  // Cible la class subtotal et met à jour le prix
  let subtt = product.querySelector('.subtotal') 
  subtt.innerHTML = price * quantity
}

function calculateAll() {
  const singleProduct = document.querySelectorAll('.product'); // Cible la class product

  for (let i = 0; i < singleProduct.length; i++){ // Met à jour le subtotal dans chaque lignes
    updateSubtotal(singleProduct[i]);
  }


  // Mettre a jour le total en additionnant tous les subtotaux

  let sum = 0;
  let totalEl = document.querySelector('#total-value span') // <span>

  for (let i = 0; i < singleProduct.length; i++){ // Met à jour le subtotal dans chaque lignes
    let subtt = singleProduct[i].querySelector('.subtotal')

    //const ret =  Number(total.innerHTML) +
    //console.log('ret=',ret)
    sum += Number(subtt.innerHTML)
  
  }

  // maj total avec sum
  totalEl.innerHTML = sum
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

  let tr = target.closest("tr")
  tr.remove()
  

  console.log("tr =", tr)
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // Creer une variable qui regroupe tous les boutons remove dans un tableau
  // Faire une boucle et integrer la fonctionnalité de click "remove"

  const removeBtnList = document.querySelectorAll('.product')

  for (let i = 0; i < removeBtnList.length; i++){
    removeBtnList[i].querySelector("button").addEventListener('click', (event)=> removeProduct(event))
  }
  //... your code goes here
});
