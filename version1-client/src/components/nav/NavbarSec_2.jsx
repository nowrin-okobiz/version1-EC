import { useEffect, useState } from "react";
import axios from "axios";
import { CiMenuBurger } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export default function NavbarSec_2() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulating data fetching (replace with API call to get menu.json)
    axios.get("menu.json").then((res) => {
      setCategories(res.data);
    });
  }, []);

  // First six categories for the main navigation
  const visibleCategories = categories.slice(0, 6);

  // Remaining categories for the hamburger menu
  const hiddenCategories = categories.slice(6);

  const handleCategoryClick = (categoryName) => {
    // Navigate to the category page
    navigate(`/category/${categoryName}`);
  };

  const handleSubcategoryClick = (subcategoryName) => {
    // Navigate to the subcategory page
    navigate(`/subcategory/${subcategoryName}`);
  };

  return (
    <div>
      <div className="nav-sec-2">
        <div className="hidden md:block">
          <div className="bg-black h-[50px] p-2">
            <div className="max-w-5xl mx-auto text-white">
              <ul className="flex space-x-6 justify-center">
                {/* Main navigation categories */}
                {visibleCategories.map((category, index) => (
                  <li key={index} className="relative group">
                    <button
                      onClick={() => handleCategoryClick(category.name)}
                      className="text-sm font-medium hover:text-blue-300"
                    >
                      <div className="flex items-center">
                        <span>{category.name}</span>
                      </div>
                    </button>

                    {/* Subcategories Dropdown */}
                    {category.subcategories.length > 0 && (
                      <ul className="absolute -left-5 top-6 mt-2 bg-gray-100 border-t-2 border-[#f26e21] text-gray-800 w-48 shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 hidden group-hover:block z-50">
                        {category.subcategories.map((subcategory, subIndex) => (
                          <li
                            key={subIndex}
                            className="px-4 py-2 hover:bg-gray-100 hover:text-blue-600 cursor-pointer"
                            onClick={() => handleSubcategoryClick(subcategory)}
                          >
                            {subcategory}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}

                {/* Hamburger menu for hidden categories */}
                {hiddenCategories.length > 0 && (
                  <li className="relative group">
                    <button className="text-sm font-medium hover:text-blue-300">
                      <span className="text-2xl">
                        <CiMenuBurger />
                      </span>
                    </button>

                    {/* Dropdown for hidden categories only (no subcategories) */}
                    <ul className="absolute left-0 top-5 mt-2 bg-gray-100 text-gray-800 w-48 shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 hidden group-hover:block z-50">
                      {hiddenCategories.map((category, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 hover:bg-gray-100 hover:text-blue-600 cursor-pointer"
                        >
                          <button
                            onClick={() => handleCategoryClick(category.name)}
                            className="w-full text-left"
                          >
                            {category.name}
                          </button>
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
