


  async function get() {
   
    const dataInitial = {
      loading: true,
      bd:{
        datas :null,
        cart :{},
      },
      error: null,
    };
    try {
      const URL = "https://ecommercebackend.fundamentos-29.repl.co/";
      const response = await fetch(URL);
      const data = await response.json();
  
      dataInitial.loading = false;
      dataInitial.bd.datas = data;
      dataInitial.error = null;
  
      return dataInitial;
     
    } catch (error) {
      let showError= "El error es este " + error
      dataInitial.loading = false;
      dataInitial.bd.datas = null;
      dataInitial.error = showError;

     
      return dataInitial;
    }
   
  }
  
 export async function handleFetch() {
    const showApi = await get();
    return showApi
   
   
  }
  

  