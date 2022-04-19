let addToCartButtons = document.getElementsByClassName('cart-button');

//when a user clicks on add to cart button
for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener('click', addToCart)

}



function addToCart(event) {

  let cartButton = event.target;
  let productContainer = cartButton.parentElement.parentElement;
  let price = productContainer.getElementsByClassName('price')[0].innerText;
  let image = productContainer.getElementsByClassName('image')[0].src;
  let imageTitle = productContainer.getElementsByClassName('image-title')[0].innerText;

  showToCart(price, image, imageTitle);


}

function showToCart(price, image, imageTitle) {

  let cartItems = document.getElementById('cart-items');
  let cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');


  let itemName = cartItems.getElementsByClassName("cart-item-title");


  for (let i = 0; i < itemName.length; i++) {
    if (itemName[i].innerText === imageTitle) {
      alert('The item has been added')
      return;
    }

  }


  let items = `
  <div class='product-image'><img src=${image} width=60px height=60px></div>
  <div class="cart-item-title">${imageTitle}</div>
  <div class='item-price'>${price}</div>
  <div> <input type="number" name="quantity"  class="item-quantity quantity" value="0" min="1" max="50">
  </div>
  <div class='total-div'><div class='total'>0</div> <button type='button' class='del-item' onclick="deleteItem(event)"><i class="fa-solid fa-trash"></i></button></div>
  `;

  cartItem.innerHTML = items;
  cartItems.appendChild(cartItem);

  deleteItem = (event) => {
    let deleteFromCart = event.target;
    deleteFromCart.parentElement.parentElement.parentElement.remove();
    changeInQuantity();

  }


  let quantityChanged = document.getElementsByClassName('item-quantity');
  for (let i = 0; i < quantityChanged.length; i++) {
    quantityChanged[i].addEventListener('click', changeInQuantity);

  }


  for (let i = 0; i < quantityChanged.length; i++) {
    quantityChanged[i].addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        changeInQuantity();
      }


    });
  }

}
function changeInQuantity() {


  let cartItems = document.getElementById('cart-items');
  let items = cartItems.getElementsByClassName('cart-item');
  let cartTotal = 0;

  let itemTotal = 0;
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let priceElement = item.getElementsByClassName('item-price')[0];
    let price = parseInt(priceElement.innerText);
    let quantity = item.getElementsByClassName('quantity')[0].value;
    let totalElement = item.getElementsByClassName('total')[0];
    itemTotal = price * quantity;
    totalElement.innerHTML = itemTotal;

    cartTotal = cartTotal + (price * quantity);

  }



  let itemsTotal = document.getElementById('cart-total').innerHTML = `Rs ${cartTotal}`;



}









