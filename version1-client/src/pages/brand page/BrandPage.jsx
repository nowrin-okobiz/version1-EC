import brand1 from "../../assets/brands/brand1.png";
import brand2 from "../../assets/brands/brand2.png";
import brand3 from "../../assets/brands/brand3.png";
import brand4 from "../../assets/brands/brand4.png";
import brand5 from "../../assets/brands/brand5.png";

export default function BrandPage() {
  return (
    <div className="max-w-screen-xl xl:max-w-screen-2xl mx-auto pt-20 md:pt-36 px-4">
      <h1 className="text-3xl text-center uppercase py-10 font-semibold text-[#f26e21]">
        Our Brand
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <div className="p-4 flex justify-center">
          <img
            className="rounded object-cover max-w-full h-auto"
            src={brand1}
            alt="Brand 1"
          />
        </div>
        <div className="p-4 flex justify-center">
          <img
            className="rounded object-cover max-w-full h-auto"
            src={brand2}
            alt="Brand 2"
          />
        </div>
        <div className="p-4 flex justify-center">
          <img
            className="rounded object-cover max-w-full h-auto"
            src={brand3}
            alt="Brand 3"
          />
        </div>
        <div className="p-4 flex justify-center">
          <img
            className="rounded object-cover max-w-full h-auto"
            src={brand4}
            alt="Brand 4"
          />
        </div>
        <div className="p-4 flex justify-center">
          <img
            className="w-28 md:w-32 rounded object-cover max-w-full h-auto"
            src={brand5}
            alt="Brand 5"
          />
        </div>
      </div>
    </div>
  );
}
