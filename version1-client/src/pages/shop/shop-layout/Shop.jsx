import { CiSearch } from "react-icons/ci";
import Category from "../shop category/Category";
import UseFetch from "../../../hooks/UseFetch";
import ProductCard from "../../../components/card/product-card/ProductCard";

export default function Shop() {
  const [data] = UseFetch("topProduct.json");
  return (
    <div className="max-w-screen-xl xl:max-w-screen-2xl mx-auto  min-h-screen  pt-20 md:pt-36 ">
      <div className="grid md:grid-cols-12 gap-4 ">
        <div className="hidden  md:block col-span-3">
          <Category></Category>
        </div>
        <div className="col-span-9">
          {/* search section & sort section */}
          <div className="flex flex-col md:flex-row md:justify-end items-center gap-4 px-3 md:px-5">
            {/* Search Input */}
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Search the product"
                className="w-full md:w-auto p-2 md:p-4 rounded border-b-2 border-black"
              />
              <span className="absolute right-2 top-3 md:right-3 md:top-4 text-xl md:text-2xl">
                <CiSearch />
              </span>
            </div>

            {/* Sort Dropdown */}
            <select
              name=""
              id=""
              className="w-full md:w-auto p-2 md:p-4 rounded border border-black"
            >
              <option value="" disabled>
                Sort
              </option>
              <option value="">High to Low</option>
              <option value="">Low to High</option>
              <option value="">Sort by latest</option>
            </select>
          </div>

          {/* show the product  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center pt-5">
            {data.map((item) => (
              <ProductCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
