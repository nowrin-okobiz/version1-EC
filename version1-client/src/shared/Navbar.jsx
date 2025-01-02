import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
export default function Navbar() {


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
  const visibleCategories = categories.slice(0, 6);
  const moreCategories = categories.slice(8).filter((category) => category.subcategories.length > 0);



  return (
   <div>
    {/* nav-section-1 */}
    <div className="nav-sec-1">
      <div className="bg-[#191a20] h-[70px]">
     <div className="max-w-6xl flex gap-2 justify-around items-center mx-auto">
     <div className="flex justify-between items-center">
     <span className="md:hidden flex font-bold text-2xl text-white"><CiMenuBurger /></span>
      <img className="w-14 md:w-24 h-10 md:h-12  m-2" src="https://i.ibb.co.com/gv291qV/G-Glogo.png" alt="" /></div>
     <div className="flex justify-center gap-2">
     <div className="relative"> <input type="text" className="w-50 md:w-[500px] p-3 mx-auto border border-white rounded-md" placeholder="Search products"/>
     <span className="text-orange-600  absolute  text-2xl top-4 right-0 mr-3"><CiSearch /></span></div>
      <button className="bg-orange-600 p-3 rounded-md">Submit</button>
     </div>
    <div className="hidden md:flex justify-between gap-2 ">
      <button className="text-white text-2xl px-4 bg-[#565556] rounded-md hover:bg-orange-600"><IoPersonCircleOutline /></button>
      <button className="text-white text-4xl p-2 bg-[#565556] rounded-md hover:bg-orange-600"><CiShoppingCart /></button>
    </div>
    </div>
   </div>
   </div>
   {/* nav-section-2 menu */}
   <div>
    <div className="nav-sec-2">
      <div className="bg-black h-[50px] p-2">
        <div className="max-w-5xl mx-auto text-white">
         {/* <ul className="flex space-x-6  justify-center " ref={dropdownRef}>
          
          {visibleCategories.map((category, index) => (
            <li key={index} className="relative ">
              <button
                className="flex items-center text-sm font-medium hover:text-blue-300"
                onClick={() => toggleCategory(index)}
              >
                {category.title}
                <span
                  className={`ml-1 transform transition-transform ${
                    openCategory === index ? "rotate-180" : ""
                  }`}
                >
                  <IoIosArrowDown />
                </span>
              </button>

               
              {openCategory === index && (
                <ul className="absolute left-0 top-full mt-2 bg-white text-gray-800 w-48 shadow-lg rounded-md">
                  {category.subcategories.map((sub, subIndex) => (
                    <li
                      key={subIndex}
                      className="px-4 py-2 hover:bg-gray-100 hover:text-blue-600"
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul> */}
         <ul className="flex space-x-6 justify-center" ref={dropdownRef}>
          {visibleCategories.map((category, index) => (
            <li key={index} className="relative">
              <button
                className="text-sm font-medium hover:text-blue-300"
                onClick={() => toggleCategory(index)}
              >
                <div className="flex items-center"><span>{category.name}</span>
                <span> {category.subcategories.length >0 && <span><IoIosArrowDown/></span>}</span></div>
                
               
               
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
      </div>
    </div>
   </div>
   </div>
  )
}
