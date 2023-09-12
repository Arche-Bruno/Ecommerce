

export function cardItmsCart(amount,img,id,price,quantity,name,category){
 

    return`
    
    <div class="show-cart-cardsItm">
    <div class="show-cart-cardImg">
      <img src=${img} alt="">
    </div>
    <div class="show-cart-cardsItmInfo">
      <h2 class="name" >${name}</h2>

      <div class="show-cart-infoStockPrice">
        <span class="colorHighLight">Stock:${quantity} | </span>
        <p class="show-cart-p price" >$ ${price}.00 </p> 
      </div>
      
     
        <p class="show-cart-p price-subtotal" >Subtotal: $ ${price*amount}.00 </p>

       <div class="show-cart-btns-cant-trash" id=${id}>
        <div class="show-cart-btns-cant" id=${id} >
          <button class="decrease" id=${id}><span>-</span> </button>
          <p id=${id} class="value" >${amount} </p> 
          <button class="increase" id=${id}><span>+</span> </button>
        </div>
       
        <svg class="svgTrash" id=${id} width="18" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 96 96" xmlns:xlink="http://www.w3.org/1999/xlink">
          <path d="m24,78c0,4.968 4.029,9 9,9h30c4.968,0 9-4.032 9-9l6-48h-60l6,48zm33-39h6v39h-6v-39zm-12,0h6v39h-6v-39zm-12,0h6v39h-6v-39zm43.5-21h-19.5c0,0-1.344-6-3-6h-12c-1.659,0-3,6-3,6h-19.5c-2.487,0-4.5,2.013-4.5,4.5s0,4.5 0,4.5h66c0,0 0-2.013 0-4.5s-2.016-4.5-4.5-4.5z"/>
          </svg>
          
       </div> 

    </div>
  </div>
    ` ;
    
}



