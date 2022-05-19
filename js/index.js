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
  const productsArray = Array.from(document.querySelectorAll('.product'))        // création d'un tableau avec tous les produits
  for (let i = 0; i < productsArray.length; i++) {                               // on boucle sur la longueur du tableau
    updateSubtotal(productsArray[i])                                             // on appelle udpateSubtotal() sur chaque élément du tableau
  }

  // ITERATION 3
  let result = 0                                                                        //initialisation du résultat
  for (let i = 0; i < productsArray.length; i++) {                                      //on (re)boucle sur la longueur du tableau
    let subTotal = Number(productsArray[i].querySelector('.subtotal span').innerText)   //on numérise la string de la valeur du subtotal
    result += subTotal                                                                  //on ajoute la valeur numérisée au résultat
  }
  let totalEl = document.querySelector('#total-value span')                             //selection de la span du total
  totalEl.innerHTML = result                                                            //on écrit notre résultat dans la span total
}

// ITERATION 4
window.addEventListener('load', () => {                                                     //au chargement de la page
  const calculatePricesBtn = document.getElementById('calculate');                          //selection du bouton calculate
  calculatePricesBtn.addEventListener('click', calculateAll);                               //ajout d'un EventListener click sur notre bouton

  const productsArray = Array.from(document.querySelectorAll('.product'))                   //création d'un tableau avec tous les produits

  for (let i = 0; i < productsArray.length; i++) {                                          //on boucle sur la longueur du tableau
    productsArray[i].querySelector('button').addEventListener('click', function (event) {   //pour produit du tableau, on ajoute un EventListener sur le bouton remove
      return removeProduct(event)                                                           //on appelle la fonction removeProduct
    })
  }
});

function removeProduct(event) {
  const target = event.currentTarget;                                                       //
  let myTarget = target.closest('tr')                                                       //on vient cibler la <tr> parente la plus proche du bouton remove
  myTarget.remove()                                                                         //on efface toute la <tr> 
}

// ITERATION 5
let createButton = document.getElementById('create')                    //selection du bouton create
//createButton.onclick = function(){createProduct()}
createButton.addEventListener('click', createProduct)                   //ajout d'un EventListener click sur le bouton create

function createProduct() {
  let tBody = document.querySelector('tbody')                                               //selection du tbody
  let inputsArray = Array.from(document.querySelectorAll(".create-product input"))          //création d'un tableau contenant les input de la tr du tfoot
  let newProductName = inputsArray[0].value;                                                //selection de la valeur du nom du nouveau produit
  let newProductPrice = inputsArray[1].value;                                               //selection de la valeur du prix du nouveau produit

  let template =                                                                            //création du template de la ligne du nouveau produit en écrivant les valeurs du nom et du prix
  `<tr class="product">
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

  tBody.innerHTML += template                                                               //on vient écrire la nouvelle ligne du tableau a la fin du tbody

  const calculatePricesBtn = document.getElementById('calculate');                          //on vient rajouter un EventListener sur le bouton remove de la nouvelle ligne
  calculatePricesBtn.addEventListener('click', calculateAll);
  const productsArray = Array.from(document.querySelectorAll('.product'))
  for (let i = 0; i < productsArray.length; i++) {
    productsArray[i].querySelector('button').addEventListener('click', function (event) {
      return removeProduct(event)
    })
  }
}