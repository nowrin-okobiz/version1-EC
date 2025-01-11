import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CgMenuGridO } from "react-icons/cg";
import Category from "../shop category/Category";
import UseFetch from "../../../hooks/UseFetch";
import ProductCard from "../../../components/card/product-card/ProductCard";

export default function Shop() {
  const [data] = UseFetch("topProduct.json");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false); // State to toggle Category modal

  return (
    <div className="max-w-screen-xl xl:max-w-screen-2xl mx-auto min-h-screen pt-20 md:pt-36 px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-12 gap-6">
        {/* Sidebar (hidden on mobile, visible on desktop) */}
        <div className="hidden md:block col-span-3">
          <Category />
        </div>

        {/* Main Content */}
        <div className="col-span-12 md:col-span-9">
          {/* Search & Sort Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:px-5">
            {/* Filter Button (visible only on mobile) */}
            <div
              className="md:hidden flex items-center gap-2 cursor-pointer"
              onClick={() => setIsCategoryOpen(true)} // Open the Category modal
            >
              <span className="text-2xl text-gray-700">
                <CgMenuGridO />
              </span>
              <h1 className="text-sm font-medium text-gray-700">Filter</h1>
            </div>

            <div className="flex justify-center items-center gap-2">
              {/* Search Input */}
              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  className="w-full h-14 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none"
                  placeholder="Search products"
                />
                <span className="absolute top-4 right-3 text-[#f26e21] text-2xl">
                  <CiSearch />
                </span>
              </div>

              {/* Sort Dropdown */}
              <select
                name="sort"
                id="sort"
                className="w-full h-14 px-4 md:w-48 p-2 md:p-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
              >
                <option value="sort">Sort</option>
                <option value="high-to-low">High to Low</option>
                <option value="low-to-high">Low to High</option>
                <option value="latest">Sort by Latest</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center pt-6">
            {data.map((item) => (
              <ProductCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>

      {/* Category Modal for Mobile */}
      {isCategoryOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
          <div className="w-80 bg-white h-full shadow-lg">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold">Categories</h2>
              <button
                className="text-2xl font-bold"
                onClick={() => setIsCategoryOpen(false)} // Close the Category modal
              >
                ×
              </button>
            </div>
            <Category />
          </div>
        </div>
      )}
    </div>
  );
}
