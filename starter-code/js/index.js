
// I deleted all the existing functions. 
// At some point you might want to put functionality into functions for readability :-)
window.onload = function () {

  var calculatePriceButtonId = 'calculate-button'
  var calculatePriceButton = document.getElementById(calculatePriceButtonId);

  calculatePriceButton.onclick = function () {
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

  var deleteButtonId = 'delete-button'
  var deleteButtons = document.getElementsByClassName(deleteButtonId);

  // this will only fetch the very first delete button. make it work for all of them once you added more elements.
  deleteButtons[0].onclick = function () {
    // look at https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
    // NOTE that closest() expexts a CSS-selector EXPRESSION ( thus the '.' in '.shop-item')
    // I found this via searching google for "javascript get parent element by class"
    deleteButtons[0].closest('.shop-item').remove() 
  }

  for (var i = 0; i < deleteButtons.length; i++) {
    // TODO :-)
  }
};
