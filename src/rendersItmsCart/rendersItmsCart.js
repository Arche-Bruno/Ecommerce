import { cardItmsCart } from "../cardItmCart/cardItmsCart.js";

export function rendersItmsCart(cart) {
  // Encuentra el elemento donde deseas mostrar los elementos del carrito
  var showCartCards = document.querySelector(".show-cart-cards");
 

  // Verifica si se encontró el elemento
  if (!showCartCards) {
    console.error("Elemento '.show-cart-cards' no encontrado.");
    return;
  }

  
  // Limpia el contenido actual del elemento (esto puede ser opcional)
  showCartCards.innerHTML = "";
  
  // Recorre los elementos en el array 'data' y renderiza cada artículo del carrito

  for (const itmCard of Object.values(cart)) {


    let additmCard = cardItmsCart(
      itmCard.amount,
      itmCard.image,
      itmCard.id,
      itmCard.price,
      itmCard.quantity,
      itmCard.name,
      itmCard.category
      
    );
    

    // Agrega el artículo renderizado al elemento 'showCartCards'
    showCartCards.innerHTML += additmCard;


  }

 
  let total=0;

  for (const {amount,price} of Object.values(cart)) {
    total+=amount*price;
  }

 

  renderCartBuy(Object.values(cart).length,total,cart);
         
}



export function renderCartBuy(cant,total,cart){
  var showCartBuy = document.querySelector(".show-cart-buy")
  var cantIconShopping = document.querySelector(".counter")
 
  let html2 = `
  <div class="show-cart-buyCant">
  <div>${cant} itms </div>
  <div>$ ${total}.00  </div>
</div>


<button class="btn-buy">
  Compra
</button>
  `;
  showCartBuy.innerHTML= html2;
  cantIconShopping.innerHTML=cant;


  var btnBuy = document.querySelector(".btn-buy")
 
  btnBuy.addEventListener("click", ()=>{
       
    swal("Compra exitosa!", `Muchas gracias! 😁 total=  $ ${total}.00`, "success");
    
    for (const imt of Object.values(cart)) {
     
       
      console.log(imt.id)
       delete cart[imt.id]
    }
    rendersItmsCart(cart)
  })
}

