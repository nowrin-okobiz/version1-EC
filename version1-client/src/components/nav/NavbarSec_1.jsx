import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosClose, IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function NavbarSec_1() {
  const [categories, setCategories] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("menu.json").then((res) => {
      setCategories(res.data);
    });
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setOpenCategory(null); // Reset open category when closing menu
  };

  const toggleSubcategories = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      {/* Navbar Section */}
      <div className="bg-[#191a20] h-[70px] p-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-4 px-3 md:px-6">
          {/* Logo & Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              className="md:hidden text-white text-2xl"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <CiMenuBurger />
            </button>
            <Link to="/">
              <img
                className="w-10 sm:w-12 md:w-24 h-10 md:h-12"
                src="https://i.ibb.co.com/gv291qV/G-Glogo.png"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex flex-1 justify-center gap-2">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                className="w-full h-10 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none"
                placeholder="Search products"
              />
              <span className="absolute top-2 right-3 text-[#f26e21] text-2xl">
                <CiSearch />
              </span>
            </div>
            <button className="bg-[#f26e21] h-10 px-4 rounded-md text-white">
              Submit
            </button>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleLogin}
              className="text-white text-3xl hover:bg-orange-600 p-2 rounded-md"
              aria-label="Login"
            >
              <IoPersonCircleOutline />
            </button>
            <button
              className="text-white text-3xl hover:bg-orange-600 p-2 rounded-md"
              aria-label="Shopping Cart"
            >
              <CiShoppingCart />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-[75%] h-full bg-white shadow-lg z-50">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold">Categories</h2>
            <button
              className="text-3xl text-gray-700"
              onClick={toggleMenu}
              aria-label="Close Menu"
            >
              <IoIosClose />
            </button>
          </div>
          <ul className="mt-4">
            <Link to="/">
              <li className="pl-5 font-semibold p-2">Shop</li>
            </Link>
            <hr />
            {categories.map((category, index) => (
              <li key={index} className="border-b">
                <div
                  className="flex justify-between items-center px-4 py-3 cursor-pointer"
                  onClick={() =>
                    category.subcategories.length > 0
                      ? toggleSubcategories(index)
                      : null
                  }
                >
                  <span
                    className={`text-gray-700 ${
                      category.subcategories.length > 0 ? "font-medium" : ""
                    }`}
                  >
                    {category.name}
                  </span>
                  {category.subcategories.length > 0 && (
                    <button
                      className="text-gray-500"
                      aria-label={`Toggle ${category.name}`}
                    >
                      {openCategory === index ? (
                        <IoIosArrowDown />
                      ) : (
                        <IoIosArrowForward />
                      )}
                    </button>
                  )}
                </div>
                {/* Subcategories */}
                {openCategory === index &&
                  category.subcategories.length > 0 && (
                    <ul className="pl-8 pb-2">
                      {category.subcategories.map((subcategory, subIndex) => (
                        <li
                          key={subIndex}
                          className="text-gray-600 py-1 hover:text-blue-500"
                        >
                          {subcategory}
                        </li>
                      ))}
                    </ul>
                  )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
}
