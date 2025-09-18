import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null)

export const CartProvider = ({children}) => {
  const [cartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    setCartItem((prevCart) => {
      const updatedCart = [...prevCart, product]
      console.log(updatedCart)
      return updatedCart
    })
  }

  return (
    <CartContext.Provider value={{ cartItem, setCartItem, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
