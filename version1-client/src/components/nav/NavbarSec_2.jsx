import { useEffect, useState } from "react";
import axios from "axios";
import { CiMenuBurger } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";

export default function NavbarSec_2() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/menu.json")
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : [];
        setCategories(data);
      })
      .catch((err) => {
        console.error("Error fetching menu.json:", err);
      });
  }, []);

  const visibleCategories = categories.slice(0, 6);
  const hiddenCategories = categories.slice(6);

  const handleCategoryClick = (categoryName) => {
    navigate(`/category/${categoryName}`);
  };

  const handleSubcategoryClick = (subcategoryName) => {
    navigate(`/subcategory/${subcategoryName}`);
  };

  return (
    <div>
      <div className="nav-sec-2">
        <div className="hidden md:block">
          <div className="bg-black h-[50px] p-2">
            <div className="max-w-5xl mx-auto text-white">
              <ul className="flex space-x-6 justify-center">
                <Link to={"/shop"}>
                  {" "}
                  <li className="font-semibold hover:text-blue-400">Shop |</li>
                </Link>
                {/* Render visible categories */}
                {visibleCategories.map((category, index) => (
                  <li key={index} className="relative group">
                    <button
                      onClick={() => handleCategoryClick(category.name)}
                      className="text-sm font-medium hover:text-blue-300"
                    >
                      {category.name}
                    </button>

                    {/* Render subcategories if available */}
                    {category.subcategories &&
                      category.subcategories.filter(Boolean).length > 0 && (
                        <ul className="absolute -left-5 top-6 mt-2 bg-gray-100 border-t-2 border-[#f26e21] text-gray-800 w-48 shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 hidden group-hover:block z-50">
                          {category.subcategories
                            .filter(Boolean)
                            .map((subcategory, subIndex) => (
                              <li
                                key={subIndex}
                                className="px-4 py-2 hover:bg-gray-100 hover:text-blue-600 cursor-pointer"
                                onClick={() =>
                                  handleSubcategoryClick(subcategory)
                                }
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
