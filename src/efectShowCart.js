var iconShoppingCart = document.querySelector(".handleShowCart")
var contentCart = document.querySelector(".show-cart")
var containerNav= document.querySelector(".container-nav")
var btnX = document.querySelector(".show-cart-iconX")



function handleShowCart(){
 
  contentCart.classList.toggle("show--cart")
  containerNav.classList.add("container--nav")
  
}
function handleHiddenCart(){
  contentCart.classList.toggle("show--cart")
  containerNav.classList.remove("container--nav")
}

iconShoppingCart.addEventListener("click", handleShowCart)
btnX.addEventListener("click", handleHiddenCart)