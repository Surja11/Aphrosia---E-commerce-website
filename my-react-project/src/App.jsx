import { useState } from 'react'
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

const App= () => {
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
