import React, { useContext } from 'react'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContext'
import { FaRegTrashAlt } from 'react-icons/fa'
import { LuNotebookText } from "react-icons/lu";
import { AuthContext } from '../context/AuthContext';

const Cart = () => {
  const {cartItem,updateQuantity,deleteItem} = useCart()
  const {user} = useContext(AuthContext)

  const totalPrice = cartItem.reduce((total, item)=>total + item.price*item.quantity, 0)
  return (
    <><div className='w-full p-5 bg-gradient-to-r from-pink-100 to-blue-100 flex justify-center items-center'>
      {cartItem.length>0?
      <div className=''>
        <h1 className='font-semibold text-2xl'>My Cart</h1>
        <br />
        <p className='font-semibold'>Items: {cartItem.length}</p>
        <div className="border border-blue-400 rounded max-w-8xl">{
          cartItem.map((item,index)=>{
            return <div key={index}>
              <div className='flex  items-center gap-4 p-4 border-b border-blue-400'>
                <img src={`http://127.0.0.1:8000/${item.img}`} className="h-30 w-30 rounded-2xl " alt={item.name} />
                <div>
                <h2 className='w-[300px] line-clamp-2'>{item.name}</h2>
                <p className='font-semibold text-red-700'>Rs.{item.price}</p>
                </div>

                <div className='bg-red-700 text-amber-50 flex gap-4 p-2 rounded-md font-bold text-xl'>
                  <button className="cursor-pointer" onClick={()=>{
                    updateQuantity(cartItem,item.id,"decrease")
                  }}>-</button>
                  <span>{item.quantity}</span>
                  <button className='cursor-pointer' onClick={()=>{
                    updateQuantity(cartItem,item.id,"increase")}}>+</button>
                </div>

                <span className='hover:bg-white/60 transition-all rounded-full p-3'>
                  <FaRegTrashAlt className='text-red-500 text-2xl cursor-pointer hover:shadow-2xl' onClick={()=>{deleteItem(cartItem,item.id)}}/>
                </span>
                </div>            </div>
          })
          }</div>
          <div className='grid grid-cols-2 gap-9 space-y-2'>
            <div className='bg-gray-100 rounded-md p-7 mt-4'>
              <h1 className="text-gray-800 font-bold text-xl">
                Delivery Info
              </h1>

              <div className='mb-2 flex flex-col space-y-1'>
                <label>Full Name </label>
                <input type="text" placeholder='Enter Your Name' value={user ? user.full_name : ""}

                

                className="ml-2 border border-blue-500 rounded p-0.5"/>

              </div>

              <div className='mb-2 flex flex-col space-y-1'>
                <label>Address </label>
                <input type="text" placeholder='Enter Your Address' value={user? user.address: ""} className="ml-2 border border-blue-500 rounded p-0.5"/>

                

              </div>
               <div className='mb-2 flex flex-col space-y-1'>
                <label>State</label>
                <input type="text" placeholder='Enter Your State' className="ml-2 border border-blue-500 rounded p-0.5"/>
                </div>

                <div className='mb-2 flex flex-col space-y-1'>
                <label>Contact No</label>
                <input type="text" placeholder='Enter Phone Number' className="ml-2 border border-blue-500 rounded p-0.5"/>
                </div>
                <div className='mb-2 flex flex-col space-y-5 w-1/4'>
                <button className='bg-blue-800 text-amber-50 rounded-xl cursor-pointer p-1 hover:bg-red-800'>Submit</button>
                </div>
            </div>
            <div className='bg-gray-100 rounded-md p-7 mt-4 shadow-xl space-y-2 h-max'>
              <h1 className='text-blue-700text-xl font-semibold'>Billing Details</h1>
              <div className = "flex justify-between items-center">

                <h1><span>Items Total</span></h1>

                <p>Rs.{totalPrice}</p>
              </div>

              <div className = "flex justify-between items-center">

                <h1><span>Delivery Charge</span></h1>

                <p>Rs.100</p>
              </div>

           
<hr />
              <div className = "flex justify-between items-center">

                <h1 className='font-semibold'><span>Grand Total</span></h1>

                <p className='font-semibold'>Rs.{totalPrice+100}</p>
              </div>

              <div className='flex justify-center mt-6'>
                <button className='bg-blue-800 text-amber-50 p-2 rounded-2xl hover:bg-red-800 hover:shadow-2xl transition duration-300 cursor-pointer '>Proceed to Checkout</button>
              </div>

            </div>
          </div>

      </div>:
      <div className='h-screen w-full flex justify-center items-center'>
      <div className='w-1/2 h-1/2 text-center bg-amber-50 rounded-3xl flex justify-center items-center'>
      <p className='font-semibold text-2xl text-blue-800'>No items in Cart</p>
      </div>  
      </div>
    
    }
    </div>
    <Footer/></>
  )
}

export default Cart