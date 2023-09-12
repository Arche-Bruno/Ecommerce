import {RenderCards} from "./RendersCards/RenderCards.js"
import { handleFetch } from "./fetch/handleFetch.js";
import { addItmsCart } from "./addItmsCart/addItmsCart.js";
import { rendersItmsCart } from "./rendersItmsCart/rendersItmsCart.js";


 function efectoFilter(){

 

  mixitup(".container-shopping", {
    selectors: {
        target: '.container-shopping-card'
    },
    animation: {
      effects: 'fade translateZ(-100px)'
  }

});
 }

 async function app(){


    const { loading, bd, error } = await handleFetch();
    const {datas,cart } = bd
    await RenderCards(loading,datas,error);
  
    addItmsCart(datas,cart)

  
    var changeItm = document.querySelector(".show-cart-cards");

           
    changeItm.addEventListener("click", (e)=>{
      
    
      if(e.target.closest(".decrease")){
        let idDecrease= Number(e.target.parentElement.id);
      
      if(cart[idDecrease].amount===1)  return 
         cart[idDecrease].amount-=1
     
      }


      if(e.target.closest(".increase")){
        let idIncrease= Number(e.target.parentElement.id);

       
       if(cart[idIncrease].amount=== cart[idIncrease].quantity)
        return swal("Lo sentimos ya no contamos con stock para este producto😥")
           
        cart[idIncrease].amount+=1 ;
    
     
      }

      if(e.target.closest(".svgTrash")){
        let svgTrash= Number(e.target.parentElement.id);
        delete cart[svgTrash]
        
     

      }
     
    
      rendersItmsCart(cart)
     
 
    });
    
    efectoFilter()
   

    
 }


window.addEventListener("load", app);
