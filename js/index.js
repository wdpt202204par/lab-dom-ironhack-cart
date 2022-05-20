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

    sum += Number(subtt.innerHTML)
  
  }
  totalEl.innerHTML = sum
}

function removeProduct(event) {
  const target = event.currentTarget;

  let tr = target.closest("tr")
  tr.remove()
}

function createProduct() {
  let elem = document.querySelector('.product');

  let clone = elem.cloneNode(true);

  const productName = prompt("Enter your product")
  let price = prompt("Enter your price")

  while (!/^[0-9]+$/.test(price)) {
    alert("You did not enter a number.");
    price = prompt("Enter your price");
  }

  clone.querySelector(".name span").innerHTML = productName
  clone.querySelector(".price span").innerHTML = price
  clone.querySelector("button").addEventListener('click', (event)=> removeProduct(event))

  const tbody = document.querySelector("tbody")

  if (productName !== null && price !== null && productName !== "" && price !== ""){
    tbody.appendChild(clone);
  }

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

  //Evenement Button Add
  const addButton = document.querySelector("#cart button")
  addButton.addEventListener('click', createProduct);

});
