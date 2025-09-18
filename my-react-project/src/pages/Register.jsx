import React, { useState } from 'react'
import Footer from '../components/Footer'

const Register = () => {

  const [formData, setFormData] = useState({
    username :'',
    email: '',
    first_name: '',
    last_name: '',
    phone: '',
    address: '',
    password: '',
    password2: '',
  });

  const handleChange = (e)=>{
    setFormData({...formData,[e.target.name]: e.target.value})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const response = await fetch('http://127.0.0.1:8000/register/',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        
        },
        body:JSON.stringify(formData),
      });
       if (response.ok) {
        alert('Registration successful!');
        setFormData({
          username: '',
          email: '',
          first_name: '',
          last_name: '',
          phone: '',
          address: '',
          password: '',
          password2: '',
        });
      } else {
        const errorData = await response.json();
        alert('Error: ' + JSON.stringify(errorData));
      }
    } catch (err) {
      console.error('Error:', err);
      alert('Something went wrong');
    }
  }

  return (
    <>
    <div className="h-screen w-full flex justify-center items-center bg-gradient-to-r from-blue-100 to-pink-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-auto">
        <h1 className="text-2xl font-bold text-center mb-6 text-sky-600">Register</h1>

        <form className="flex flex-col" onSubmit={handleSubmit} >
          <div className='grid grid-cols-2'>
          <label className="mb-2 font-medium text-gray-700">Username</label>
          <input 
            type="text"
            name="username"
            placeholder="Enter your username" 
            value={formData.username}
            onChange={handleChange}
            className="bg-gray-200 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-sky-900"
          />

          <label className="mb-2 font-medium text-gray-700">Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            placeholder="Enter your email" onChange={handleChange}
            className="bg-gray-200 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-sky-900"
          />

          <label className="mb-2 font-medium text-gray-700">First Name</label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name} 
            placeholder="Enter your first name" onChange={handleChange}
            className="bg-gray-200 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-sky-900"
          />

          <label className="mb-2 font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            name="last_name"
           value={formData.last_name}
            placeholder="Enter your last name" onChange={handleChange}
            className="bg-gray-200 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-sky-900"
          />
           <label className="mb-2 font-medium text-gray-700">Phone</label>
          <input
            type="text"
            name="phone"
             value={formData.phone}
            placeholder="Enter your Phone No" onChange={handleChange}
            className="bg-gray-200 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-sky-900"
          />
           <label className="mb-2 font-medium text-gray-700">Address</label>
          <input
            type="text"
            name="address" 
             value={formData.address}
             onChange={handleChange}
            placeholder="Enter your Address"
            className="bg-gray-200 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-sky-900"
          />

          <label className="mb-2 font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password" 
             value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="bg-gray-200 rounded px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-sky-900"
          />
         

          <label className="mb-2 font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            name="password2"
            value={formData.password2} 
            onChange={handleChange}
            placeholder="Enter your password"
            className="bg-gray-200 rounded px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-sky-900"
          />

</div>

          <button
            type="submit"
            className="bg-cyan-600 text-white font-semibold py-2 rounded hover:bg-sky-900 transition duration-200"
          >
            Register
          </button>
        </form>
        </div>
      </div>
    
    <Footer/>
    </>
  )
}

export default Register
