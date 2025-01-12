import { useState } from "react";

export default function Category() {
  // Example Data
  const menuItems = [
    {
      title: "Mega Deals",
      subcategories: ["New Arrival", "Offer Sale", "Top Sale"],
    },
    {
      title: "Categories",
      subcategories: [
        "Phone",
        "Laptop",
        "Accessories",
        "Cameras",
        "Smartwatches",
        "Drones",
        "Gaming",
        "Printers",
        "Tablets",
        "Networking",
      ],
    },
    {
      title: "Sub Category",
      subcategories: [
        "Smartphones",
        "Feature Phones",
        "Gaming Laptops",
        "Ultrabooks",
        "Android Tablets",
        "iPads",
        "Quadcopters",
        "Mini Drones",
        "Chargers",
        "Cables",
      ],
    },
    {
      title: "Brand",
      subcategories: ["COUGER", "ACEFAST", "VENTION", "DIESEL", "PNY."],
    },
  ];
  // Initialize all sections as open by default
  const [openSections, setOpenSections] = useState(() =>
    menuItems.reduce((acc, item) => {
      acc[item.title] = true; // All sections start open
      return acc;
    }, {})
  );
  // Function to toggle a section
  const toggleSection = (sectionName) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionName]: !prev[sectionName],
    }));
  };

  return (
    <div className="max-w-sm mx-auto p-4 border-r-2 border-slate-600 hidden md:block">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className="border-b border-gray-300">
            <div className="flex justify-between items-center py-3">
              <span className="font-bold text-xl">{item.title}</span>
              <button
                onClick={() => toggleSection(item.title)}
                className="text-2xl font-bold focus:outline-none"
              >
                {openSections[item.title] ? "−" : "+"}
              </button>
            </div>
            {/* Subcategories */}
            {openSections[item.title] && item.subcategories.length > 0 && (
              <ul className="pl-4 pb-3 font-semibold text-base text-gray-600">
                {item.subcategories.map((subcategory, subIndex) => (
                  <li key={subIndex} className="py-1">
                    {subcategory}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
