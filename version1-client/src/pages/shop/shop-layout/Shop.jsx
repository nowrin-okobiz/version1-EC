import { CiSearch } from "react-icons/ci";
import Category from "../shop category/Category";
import UseFetch from "../../../hooks/UseFetch";
import ProductCard from "../../../components/card/product-card/ProductCard";

export default function Shop() {
  const [data] = UseFetch("topProduct.json");
  return (
    <div className="max-w-screen-xl xl:max-w-screen-2xl mx-auto  min-h-screen  pt-20 md:pt-36">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <Category></Category>
        </div>
        <div className=" col-span-9">
          {/* search section & sort section */}
          <div className="flex justify-end items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search the product"
                className="p-4 rounded border-b-2 border-black"
              />
              <span className="absolute right-1 top-5 text-2xl">
                <CiSearch />
              </span>
            </div>
            <select name="" id="" className="p-5 rounded">
              <option value="" disabled>
                Sort
              </option>
              <option value="">High to Low</option>
              <option value="">Low to High</option>
              <option value="">Sort by latest</option>
            </select>
          </div>
          {/* show the product  */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 space-y-4 items-center">
            {data.map((item) => (
              <ProductCard item={item} key={item.id}></ProductCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
