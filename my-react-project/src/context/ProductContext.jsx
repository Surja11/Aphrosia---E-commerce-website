import axios from "axios";
import { createContext, useContext, useState } from "react";

export const ProductContext = createContext(null);

export const ProductProvider = ({children}) =>{

  const [product, setProduct] = useState([]);

  const fetchProducts = async()=>{
    try{
    const res = await axios.get('http://127.0.0.1:8000/products/')

    setProduct(res.data);
    console.log(res.data);
    }catch(error){
      console.error("error fetching products: ", error);
    }

  }
  return(
    <ProductContext.Provider value={{product,setProduct,fetchProducts}}>
      {children}
    </ProductContext.Provider>
  )
}

export const getProduct = () => useContext(ProductContext)