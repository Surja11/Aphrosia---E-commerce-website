import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { IoCartOutline } from "react-icons/io5";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";

const SingleProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { addToCart } = useCart();

  const [singleProduct, setSingleProduct] = useState("");
  const getSingleProduct = async () => {
    try {
      const res = await axios.get(`http://127.0.0.1:8000/product/${params.id}`);
      const product = res.data;
      setSingleProduct(product);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);
  return (
    <>
      {singleProduct ? (
        <div className="w-full bg-gradient-to-r from-pink-100 to-blue-100 flex justify-center items-center">
          <div className="max-w-7xl flex justify-around bg-amber-50 m-5 rounded-2xl p-7">
            <div className="flex-1">
              <img
                src={`http://127.0.0.1:8000/${singleProduct.img}`}
                className="h-80 w-80 mr-7 rounded-2xl mt-16"
              ></img>
            </div>
            <div className="flex-2 flex-col ml-4">
              <h1 className="font-semibold text- text-center">
                {singleProduct.name}
              </h1>
              <br />
              <p>Category: {singleProduct.category}</p>
              <p>Brand: {singleProduct.brand}</p>
              <br></br>
              <p>{singleProduct.description}</p>
              <br></br>
              <p>Ingredients</p>
              <p>{singleProduct.ingredients}</p>
              <br></br>

              <p className="font-semibold">
                Price:{" "}
                <span className="font-semibold">Rs.{singleProduct.price}</span>
              </p>
              <br></br>

              <div>
                <label htmlFor="" className="text-sm font-medium ">
                  Quantity{" "}
                </label>
                <input
                  type="number"
                  min={1} value="1"
                  className="border
              w-20 border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-700"
                ></input>
              </div>
              <br />
              <button
                className="bg-gradient-to-br from-sky-400 to-red-400
                          hover:from-blue-950 hover:to-sky-700
                          text-amber-50 transition duration-300 rounded-3xl px-4 py-3 cursor-pointer flex gap-1"
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(singleProduct);
                }}
              >
                <IoCartOutline className="w-6 h-6" /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
      <Footer />
    </>
  );
};

export default SingleProduct;
