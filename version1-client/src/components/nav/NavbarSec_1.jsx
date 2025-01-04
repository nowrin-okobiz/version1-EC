import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosClose, IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";

export default function NavbarSec_1() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("menu.json").then((res) => {
      setCategories(res.data);
    });
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setOpenCategory(null); // Reset open category when closing menu
  };

  const toggleSubcategories = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <div>
      {/* Navbar Section 1 */}
      <div className="nav-sec-1">
        <div className="bg-[#191a20] h-[75px] p-2">
          <div className="max-w-6xl flex gap-2 justify-between items-center mx-auto">
            <div className="flex items-center">
              <button
                className="md:hidden flex text-white text-2xl"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
              >
                <CiMenuBurger />
              </button>
              <img
                className="w-10 sm:w-12 md:w-24 h-10 md:h-12 m-2"
                src="https://i.ibb.co.com/gv291qV/G-Glogo.png"
                alt="Logo"
              />
            </div>
            <div className="flex justify-center gap-2">
              <div className="relative">
                <input
                  type="text"
                  className="w-44 md:w-[400px] p-3 border border-white rounded-md"
                  placeholder="Search products"
                />
                <span className="text-[#f26e21] absolute text-2xl top-4 right-0 mr-3">
                  <CiSearch />
                </span>
              </div>
              <button className="bg-[#f26e21] p-3 rounded-md text-white">
                Submit
              </button>
            </div>
            <div className="hidden md:flex justify-between gap-2">
              <button className="text-white text-3xl px-4 rounded-md hover:bg-orange-600">
                <IoPersonCircleOutline />
              </button>
              <button className="text-white text-4xl p-2 rounded-md hover:bg-[#f26e21]">
                <CiShoppingCart />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hamburger Menu */}
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

      {/* Overlay for Closing Menu */}
      {menuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
}
