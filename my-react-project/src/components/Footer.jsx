import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-amber-50 py-5 shadow-2xl px-5'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'> 
      <div className='flex flex-col gap-1'>
        <Link to={'/'}>
        <h1 className ='font-stretch-90% text-3xl text-blue-400 pb-3'>
          Aphrosia
        </h1>
        </Link>
        <p> 
        Radiate Confidence Naturally
        </p>
        <p>
          Madhyapur Thimi-05, Bhaktapur, Nepal

        </p>
        <p>
          Email: aphro_sia@gmail.com
        </p>
        <p>
          Phone: 01-6600000
        </p>

        
      </div>
      <div>
        <p className='text-2xl py-5'>Follow Us</p>
        <div className="flex justify-around">
          <FaInstagram className='w-7 h-7' />
          <FaFacebook className='w-7 h-7' />
        </div>


      </div>
      </div>
      </div>
  )
}

export default Footer