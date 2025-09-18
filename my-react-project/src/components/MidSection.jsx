import React, { useContext, useEffect } from 'react';
import { DataContext } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';

const MidSection = () => {
  const navigate = useNavigate()
  const { data, fetchAllProducts } = useContext(DataContext);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="bg-gradient-to-r from-pink-100 to-blue-100 py-8">
      <div className="flex flex-wrap justify-center gap-6">
        {data?.map((p, index) => (
          <div
            key={index}
            className="w-60 h-80 border border-pink-200 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl p-4"
          onClick={()=>{navigate(`/products/${p.id}`)}}>
            <img
              src={`http://127.0.0.1:8000/${p.img}`}
              alt={p.name}
              className="w-full h-48 "
            />
            <div className="p-4">
              <p className="text-blue-900 font-semibold">{p.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MidSection;
