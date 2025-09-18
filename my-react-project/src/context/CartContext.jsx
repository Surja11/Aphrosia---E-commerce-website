import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext(null)


export const CartProvider = ({children}) => {
  const [cartItem, setCartItem] = useState([])

const clearCart = () => {
  setCartItem([]);
};
  const addToCart = (product) => {

    const itemInCart = cartItem.find((item)=> item.id === product.id)
    if (itemInCart){

      const updatedCart = cartItem.map((item) =>
      item.id === product.id ? {...item , quantity: item.quantity + 1}: item)

      setCartItem(updatedCart)
      toast.success("Product Quantity increased")
    }else{
      setCartItem((prevCart) => {
      const updatedCart = [...prevCart, {...product, quantity: 1}]
      console.log(updatedCart)
      return updatedCart
    })
    toast.success("Product is added to Cart")
    }
    
  }


  const updateQuantity = (cartItem,productId, action)=>{
   setCartItem(cartItem.map(item => {
      if (item.id === productId){
        let newUnit = item.quantity;
        if (action === "increase"){
          newUnit += 1
        }
        else if(action === "decrease"){
          newUnit -=1
        }
        return newUnit>0 ?{...item, quantity: newUnit}:null
      }
      return item
    }).filter(item => item != null)) 
  }

  const deleteItem = (cartItem, productId)=>{
    setCartItem(cartItem.filter((item)=>{
      return item.id!==productId
    }))
    toast.success("Product Deleted")
  }
  return (
    <CartContext.Provider value={{ cartItem, setCartItem, addToCart,updateQuantity ,deleteItem,clearCart}}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
