import React, { useContext, useEffect } from 'react';
import { DataContext } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { IoCartOutline } from 'react-icons/io5';

const MidSection = () => {
  const navigate = useNavigate()
  const { data, fetchAllProducts } = useContext(DataContext);
  const {addToCart} = useContext(CartContext)

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="bg-gradient-to-r from-pink-100 to-blue-100 py-8">
      <div className="flex flex-wrap justify-center gap-6">
        {data?.map((p, index) => (
          <div
            key={index}
            className="w-60 h-82 border border-pink-200 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl p-4"
          onClick={()=>{navigate(`/products/${p.id}`)}}>
            <img
              src={`http://127.0.0.1:8000/${p.img}`}
              alt={p.name}
              className="w-full h-44 "
            />
            <div className="p-2">
              <p className="text-blue-900 font-semibold line-clamp-2">{p.name}</p>
            </div>
            <p className=" text-center">Rs.{p.price}</p>
            <div className='flex justify-center items-center'>
                  <button
                    className="bg-gradient-to-br from-sky-400 to-red-400
                          hover:from-blue-950 hover:to-sky-700
                          text-amber-50 transition duration-300 rounded-3xl px-4 py-1 cursor-pointer flex gap-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(p);
                    }}
                  >
                    <IoCartOutline className="w-6 h-6" /> Add to Cart
                  </button>
                </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MidSection;
