import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Login from './pages/Login'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './pages/Register'
import SingleProduct from './pages/SingleProduct'
import { useCart } from './context/CartContext'

const App= () => {
  const {cartItem,setCartItem} = useCart()

  useEffect(() => {
    const getCSRFToken = async () => {
      await fetch("http://127.0.0.1:8000/set-csrf/", {
        credentials: "include"
      });
    };

    getCSRFToken();
  }, []);
  useEffect(()=>{
    const storedCart = localStorage.getItem('cartItem')

    if (storedCart){
      setCartItem(JSON.parse(storedCart))
    }
  },[])

  //save cart to local storage
useEffect(()=>{
  localStorage.setItem('cartItem',JSON.stringify(cartItem))
},[cartItem])
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path = '/' element = {<Home/>}></Route>

    <Route path = '/products' element = {<Products/>}></Route>

    <Route path = '/products/:id' element = {<SingleProduct/>}/>


    <Route path = '/about' element = {<About/>}></Route>

    <Route path = '/contact' element = {<Contact/>}></Route>

    <Route path = '/cart' element = {<Cart/>}></Route>

    <Route path = '/login' element= {<Login/>}></Route>

    <Route path = '/register' element = {<Register/>}>

    </Route>
   </Routes>
   </BrowserRouter>
   
  
  )
}

export default App
