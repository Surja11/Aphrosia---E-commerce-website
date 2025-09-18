import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const {addToCart} = useCart();
  return (
    <div
      className="border relative border-pink-300 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 h-100 w-60 flex flex-col items-center"
      onClick={() => {
        navigate(`/products/${product.id}`);
      }}
    >
      <img
        src={`http://127.0.0.1:8000/${product.img}`}
        alt={product.name}
        className=" rounded-2xl h-60 w-60 "
      ></img>
      <h1 className="line-clamp-2 p-1 font-semibold">{product.name}</h1>
      <p className="my-1">Rs.{product.price}</p>
      <button
        className="bg-gradient-to-br from-sky-400 to-red-400
              hover:from-blue-950 hover:to-sky-700
              text-amber-50 transition duration-300 rounded-3xl px-4 py-3 cursor-pointer flex gap-1"
        onClick={(e) => {
          e.stopPropagation();
          addToCart(product);
        }}
      >
        <IoCartOutline className="w-6 h-6" /> Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
