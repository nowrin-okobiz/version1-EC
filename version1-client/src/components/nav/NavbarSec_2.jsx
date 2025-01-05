import { useEffect, useState } from "react";
import axios from "axios";
import { CiMenuBurger } from "react-icons/ci";
export default function NavbarSec_2() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("menu.json").then((res) => {
      setCategories(res.data);
    });
  }, []);
  // Visible categories and remaining categories
  const visibleCategories = categories.slice(0, 6);
  const moreCategories = categories
    .slice(8)
    .filter((category) => category.subcategories.length > 0);
  return (
    <div>
      <div className="nav-sec-2">
        <div className="hidden md:block">
          <div className="bg-black h-[50px] p-2">
            <div className="max-w-5xl mx-auto text-white">
              <ul className="flex space-x-6 justify-center">
                {visibleCategories.map((category, index) => (
                  <li key={index} className="relative group">
                    <button className="text-sm font-medium hover:text-blue-300">
                      <div className="flex items-center">
                        <span>{category.name}</span>
                      </div>
                    </button>

                    {/* Subcategories Dropdown */}
                    {category.subcategories.length > 0 && (
                      <ul className="absolute -left-5 top-full mt-3 bg-gray-100 border-t-2 border-[#f26e21] text-gray-800 w-48 shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 hidden group-hover:block">
                        {category.subcategories.map((subcategory, subIndex) => (
                          <li
                            key={subIndex}
                            className="px-4 py-2 hover:bg-gray-100 hover:text-blue-600"
                          >
                            {subcategory}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}

                {/* "More" Dropdown */}
                {moreCategories.length > 0 && (
                  <li className="relative group">
                    <button className="text-sm font-medium hover:text-blue-300">
                      <span className="text-2xl">
                        {" "}
                        <CiMenuBurger />
                      </span>
                      {/* <IoIosArrowDown className="ml-1" /> */}
                    </button>

                    {/* More Categories Dropdown */}
                    <ul className="absolute left-0 top-full mt-2 bg-white text-gray-800 w-48 shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 hidden group-hover:block">
                      {moreCategories.map((category, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 hover:bg-gray-100 hover:text-blue-600"
                        >
                          {category.name}
                        </li>
                      ))}
                    </ul>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
