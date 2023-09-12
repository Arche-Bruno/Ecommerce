import { rendersItmsCart } from "../rendersItmsCart/rendersItmsCart.js";


var btnAdd = document.querySelector(".container-shopping");

 
export function addItmsCart(datas,cart){
     
    btnAdd.addEventListener("click",(e)=>{
      

        const btnElement = e.target.closest('.btn-agregar');
        
        if(btnElement){
            let idItm = Number(e.target.closest('.btn-agregar').id)
            
            let findItm = datas.find((itm) => itm.id ===idItm)
           

            if(cart[idItm]){
               if(cart[idItm].amount===datas[idItm-1].quantity){
             
               console.log(e.target.parentElement.id)
               
               return swal("Lo sentimos ya no contamos con mas stock para este producto 😥");
                
                   
               }
                cart[idItm].amount+=1;
            
               
            }else{
                cart[idItm] ={
                    ...findItm,
                    amount:1
                }

            }
         
       
        }
        rendersItmsCart(cart)

    

    })
     
}
