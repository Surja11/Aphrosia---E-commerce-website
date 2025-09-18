import React, { useEffect, useState } from 'react'
import { getProduct } from '../context/ProductContext'
import FilterSection from '../components/FilterSection'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import Pagination from '../components/Pagination'
 
const Products = () => {

  const {product, fetchProducts} = getProduct()

  

  const [search,setSearch] = useState("")

  const [category, setCategory] = useState("All")
  const [priceRange, setPriceRange] = useState([0,0])

  const [absoluteMin, setAbsoluteMin] = useState(0)
  const [absoluteMax, setAbsoluteMax] = useState(0)
 const [page,setPage] = useState(1)

  useEffect(()=>{
    fetchProducts()
  },[])

  useEffect(() => {
    if (product.length > 0) {
      const prices = product.map((p) => p.price)
      const minPrice = Math.min(...prices)
      const maxPrice = Math.max(...prices)

      setAbsoluteMin(minPrice)
      setAbsoluteMax(maxPrice)
      setPriceRange([minPrice, maxPrice]) 
    }
  }, [product])

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
    console.log(category)
  }
 
  const pageHandler = (selectedPage)=>{
    setPage(selectedPage)
  }

 
  const filterData = product?.filter((p)=>
    p.name.toLowerCase().includes(search.toLowerCase())&&(category === "All"||p.category==category)&& p.price >=priceRange[0] && p.price<=priceRange[1]
  )

   const dynamicPage= Math.ceil(filterData?.length/15)
  
  

  return(
    <div className='bg-gradient-to-r from-pink-100 to-blue-100'>
      <div className = 'max-w-8xl mx-auto px-4 mb-10 '>
        {
          product?.length>0?(
            <>
            <div className='flex gap-8'>
              <FilterSection search={search} setSearch= {setSearch} priceRange={priceRange} setPriceRange={setPriceRange} category={category} setCategory={setCategory} handleCategoryChange={handleCategoryChange} absoluteMin={absoluteMin}
              absoluteMax={absoluteMax}/>

           <div className="flex flex-row flex-wrap gap-4 mt-6"> 
              {
                filterData?.slice(page*15 - 15,page*15).map((productItem, index)=>{
                  return <ProductCard key={index} product={productItem}/>
                  
                })

              }

            </div>
            
            </div>
            <Pagination pageHandler={pageHandler} page={page} dynamicPage={dynamicPage}/>
            </>
          ):(<div className='text-3xl text-center'>
              <p>loading</p>
            </div>)
        }
      </div>
   
  <div>
    
    <Footer/>
    </div>
  
    </div>
  )
}
export default Products