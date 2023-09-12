export function card(loading,error,id,image,price,quantity,name,category) {
   
  return `
      <div class="container-shopping-card ${category}"  id=${id} >
    
        <div class="image-container">
          <img src=${image} alt="">
        </div>
        <button class="btn-agregar" id=${id} ><span class="btn-span" id=${id} >+</span></button>
        <div class="container-shopping-card-info">
          <div class="card-price-stock">
            <span>$ ${price}</span>
            <p>Stock: ${quantity}</p>
          </div>
          <a > ${name} </a>
        </div>
        
      </div>
      
    `;
  }
