import { card } from "../Card/card.js";


export async function RenderCards(loading,datas,error){
   
    var shopping = document.querySelector(".container-shopping");
    

  
    if (loading) {
   console.log("Cargando")
    } else if(error) {
        alert("Hubo un error en la base de datos: " + error);
        return;
    }
  
  
    if (!datas || datas.length === 0) {
      shopping.innerHTML = "No hay datos disponibles.";
      return;
    }
    
    for (const data of datas) {
        console.log(data.category)
       let cardHtml = card(
      
        loading,
        error,
        data.id,
        data.image,
        data.price,
        data.quantity,
        data.name,
        data.category,
        
        )
        shopping.innerHTML +=cardHtml;
        
    }  
   

  

}