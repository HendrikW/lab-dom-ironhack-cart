
function calculatePriceButtonClick() {
  // this currently works only for the very first element, if you create more it will not calculate the prices for those.
  // change that ! ;-)
  var shopItemElement = document.getElementsByClassName('shop-item')[0]
  var price = shopItemElement.getElementsByClassName('unit-price')[0].innerText
  console.log("price : " + price) // remember to use console.log everywhere if you have trouble understanding what your code does
  var qty = shopItemElement.getElementsByTagName('input')[0].value
  console.log("qty : " + qty)
  var totalPrice = Number(price) * Number(qty)

  console.log("totalPrice : " + totalPrice) 

  shopItemElement.getElementsByClassName('total-price')[0].innerText = totalPrice.toFixed(2)
}

// I deleted all the existing functions except one.
// At some point you might want to put more and more functionality into functions in the same way for readability :-)
window.onload = function () {

  var calculatePriceButtonId = 'calculate-button'
  var calculatePriceButton = document.getElementById(calculatePriceButtonId);

  // move the 
  calculatePriceButton.onclick = calculatePriceButtonClick;

  var deleteButtonClass = 'delete-button'
  var deleteButtons = document.getElementsByClassName(deleteButtonClass);

  // this will only fetch the very first delete button. make it work for all of them once you added more elements.
  deleteButtons[0].onclick = function () {    
    deleteButtons[0].parentNode.remove()
  }

  for (var i = 0; i < deleteButtons.length; i++) {
    // TODO :-)
  }
};
