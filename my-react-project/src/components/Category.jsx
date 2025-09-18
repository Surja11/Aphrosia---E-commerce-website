import React, { useContext, useEffect } from 'react'
import { getProduct, ProductContext } from '../context/ProductContext'

const Category = () => {
  const {product, fetchProducts} = getProduct();

  useEffect(()=>{
    fetchProducts();
  },[]);

  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((curElem) =>{
      return curElem[property]
    })
    newVal = [ ...new Set(newVal)]
    return newVal
  }

  const categoryOnlyData = getUniqueCategory(product,"category")


  return (
    <div className='bg-gradient-to-r  from-pink-100 to-blue-100'>
      <h1 className='text-2xl font-semibold text-sky-900 text-center pt-10'>Categories</h1>
      <div className="max-w-7xl mx-auto flex flex-wrap gap-4 items-center justify-around py-7 px-4">

        {
          categoryOnlyData.map((item,index)=>{
            return <div key={index}>
              <button className='bg-gradient-to-br from-sky-400 to-red-400
              hover:from-blue-950 hover:to-sky-700
              text-amber-50 transition duration-300 rounded-3xl px-4 py-3 cursor-pointer'>{item}</button>
            </div>

          })
        }
      </div>
    </div>
  )
}

export default Category