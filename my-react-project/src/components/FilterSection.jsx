import React, { useEffect, useState } from "react";
import { getProduct } from "../context/ProductContext";

const FilterSection = ({
  search,
  setSearch,
  priceRange,
  setPriceRange,
  category,
  setCategory,
  handleCategoryChange,
}) => {
  const { product, fetchProducts } = getProduct();

  useEffect(() => {
    fetchProducts();
  }, []);

  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((curElem) => {
      return curElem[property];
    });
    newVal = [...new Set(newVal)];
    return newVal;
  };

  const categoryOnlyData = getUniqueCategory(product, "category");

  const minPrice =
    product.length > 0 ? Math.min(...product.map((item) => item.price)) : 0;
  const maxPrice =
    product.length > 0 ? Math.max(...product.map((item) => item.price)) : 1000;

  const resetFilters = () => {
    setSearch("");
    setCategory("All");
    setPriceRange([minPrice, maxPrice]);
  };

  return (
    <div className="mt-10 p-4 rounded-md h-max border border-sky-700">
      <input
        type="text"
        placeholder="Search"
        className="bg-amber-50 rounded-md border p-1 border-blue-800"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <h1 className="mt-5 font-semibold text-xl text-blue-800 text-center">
        Category
      </h1>
      <div className="flex flex-col gap-2 mt-3">
        <div>
        <input
            type="checkbox"
            className="mx-2 align-middle"
            name="category"
            id="category-all"
            value="All"
            checked={category === "All"} onChange={(e)=>{
              setCategory("All")
            }}
          
          />All
          </div>
        {categoryOnlyData.map((item, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                className="mx-2 align-middle"
                name={item}
                checked={category === item}
                value={item}
                onChange={handleCategoryChange}
              />
              {item}
            </div>
          );
        })}
      </div>
      <h1 className="font-semibold text-center text-xl text-blue-800 m-4 ">
        Price Range
      </h1>
      <div className="flex flex-col gap-2 items-center justify-center">
        <label htmlFor="">
          Price Range: Rs.{priceRange[0]} - Rs.{priceRange[1]}
        </label>

        <input
          type="range"
          id="maxPrice"
          min={minPrice}
          max={maxPrice}
          value={priceRange[1]}
          onChange={(e) => {
            setPriceRange([priceRange[0], Number(e.target.value)]);
          }}
          className="w-45"
        />

        <button
          className="bg-gradient-to-br from-sky-400 to-red-400
              hover:from-blue-950 hover:to-sky-700
              text-amber-50 transition duration-300 rounded-3xl px-4 py-3 cursor-pointer flex gap-1" onClick={resetFilters}
        >
          Reset Filter
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
