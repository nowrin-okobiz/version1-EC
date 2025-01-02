import React, { useState, useEffect, useRef } from "react";

const Footer = () => {
  const categories = [
    { name: "Phone", subcategories: ["Smartphones", "Feature Phones"] },
    { name: "Laptop", subcategories: ["Gaming Laptops", "Ultrabooks"] },
    { name: "Accessories", subcategories: ["Chargers", "Cables"] },
    { name: "Cameras", subcategories: [] }, // No subcategories
    { name: "Smartwatches", subcategories: [] }, // No subcategories
    { name: "Drones", subcategories: ["Quadcopters", "Mini Drones"] },
    { name: "Gaming", subcategories: [] }, // No subcategories
    { name: "Printers", subcategories: [] }, // No subcategories
    { name: "Tablets", subcategories: ["Android Tablets", "iPads"] },
    { name: "Networking", subcategories: [] }, // No subcategories
  ];

  const [openCategory, setOpenCategory] = useState(null);
  const dropdownRef = useRef(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  // Close dropdowns if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenCategory(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Visible categories and remaining categories
  const visibleCategories = categories.slice(0, 8);
  const moreCategories = categories.slice(8).filter((category) => category.subcategories.length > 0);

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold">Gadget Store</div>

        {/* Navigation Links */}
        <ul className="flex space-x-6" ref={dropdownRef}>
          {visibleCategories.map((category, index) => (
            <li key={index} className="relative">
              <button
                className="text-sm font-medium hover:text-blue-300"
                onClick={() => toggleCategory(index)}
              >
                {category.name}
              </button>

              {/* Subcategories Dropdown */}
              {openCategory === index && category.subcategories.length > 0 && (
                <ul className="absolute left-0 top-full mt-2 bg-white text-gray-800 w-48 shadow-lg rounded-md">
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
            <li className="relative">
              <button
                className="text-sm font-medium hover:text-blue-300"
                onClick={() => toggleCategory("more")}
              >
                More
                <span
                  className={`ml-1 transform transition-transform ${
                    openCategory === "more" ? "rotate-180" : ""
                  }`}
                >
                  &#x25BC;
                </span>
              </button>

              {/* More Categories Dropdown */}
              {openCategory === "more" && (
                <ul className="absolute left-0 top-full mt-2 bg-white text-gray-800 w-48 shadow-lg rounded-md">
                  {moreCategories.map((category, index) => (
                    <li key={index} className="px-4 py-2 hover:bg-gray-100 hover:text-blue-600">
                      {category.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Footer;
