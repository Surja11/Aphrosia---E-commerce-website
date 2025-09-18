
import React, { useContext } from 'react'
import { Link,NavLink } from 'react-router-dom'
import {IoCartOutline} from "react-icons/io5"
import { AuthContext } from '../context/AuthContext'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  const {isAuthenticated,setIsAuthenticated,logout} = useContext(AuthContext)

  const {cartItem} = useCart()
  // const handleLogout = async ()=>{
  //   await fetch("http://127.0.0.1:8000/logout/",{
  //     method:"POST",
  //     credentials: "include"
  //   });
  //   setIsAuthenticated(false);
  // };
  return (
    <div className='bg-amber-50 py-5 shadow-2xl px-5'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'> 
      <div >
        <Link to={'/'}>
        <h1 className ='font-stretch-90% text-3xl text-blue-400'>
          Aphrosia
        </h1>
        </Link>

        <div className = 'flex gap-1 cursor-pointer tet-gray-700 items-center'></div>
      </div>

      {/* menu */}

      <nav className='flex gap-7 items-center'>
        <ul className = " flex gap-7 items-center text-xl font-semibold">
          <NavLink to={'/'}className={({isActive}) => `${isActive? "border-b-3 transition-all border-blue-500": "text-black"} cursor-pointer`}><li>Home</li></NavLink>
          <NavLink to={'/products'} className={({isActive}) => `${isActive? "border-b-3 transition-all border-blue-500": "text-black"} cursor-pointer`}> <li>Products</li> </NavLink>
          <NavLink to={'/about'} className={({isActive}) => `${isActive? "border-b-3 transition-all border-blue-500": "text-black"} cursor-pointer`}><li>About</li></NavLink>
          <NavLink to={'/contact'} className={({isActive}) => `${isActive? "border-b-3 transition-all border-blue-500": "text-black"} cursor-pointer`}><li>Contact</li></NavLink>
        </ul>
        <Link to = {'/cart'} className='relative'>
        <IoCartOutline className = "h-7 w-7"/>
        <span className='bg-blue-900 px-2 rounded-full absolute -top-3 -right-3 text-white'>{cartItem.length}</span></Link>

    {!isAuthenticated?(  
      <>     
      <Link to={'/login'}>
        <button className = "bg-transparent hover:bg-blue-900 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Login</button>
        </Link>

         <Link to={'/register'}><button className = "bg-transparent hover:bg-blue-900 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Register</button>
         </Link>
         </>):(
          <button className = "bg-transparent hover:bg-blue-900 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={logout}>Logout</button>
         )}
      </nav>
    </div>
    </div>
  )
}

export default Navbar