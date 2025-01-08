import { useState } from "react";
import productImg from "../../../assets/productImage/image1.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
export default function Details() {
  const [showFullText, setShowFullText] = useState(false);
  const [count, setCount] = useState(0);
  const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod itaque
            rem quibusdam non fuga numquam soluta debitis vero eos minus? Atque
            placeat id voluptate beatae minima alias quis, repellendus aut.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            quis incidunt error facere, consequatur tempore aliquam quidem
            deleniti ut repellat rerum impedit laborum asperiores repudiandae
            doloremque odit fugit eius saepe!`;

  // Maximum number of words to display when collapsed
  const maxWords = 50;

  // Split text into words
  const words = text.split(" ");
  const isTruncated = words.length > maxWords;
  const [selectedSize, setSelectedSize] = useState(""); // Store the selected size

  const sizes = ["M", "L", "XL", "2XL"]; // Available sizes
  return (
    <div className="pt-10 md:pt-32 max-w-screen-xl xl:max-w-screen-2xl mx-auto px-5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-3">
        {/* image section */}
        <div className="md:col-span-5">
          <div>
            <img
              className="w-full object-contain border border-slate-200 "
              src={productImg}
              alt=""
            />
          </div>
          <div className="py-2 md:py-5">
            <Swiper
              slidesPerView={4}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  className="md:w-28 md:h-20 object-contain border border-slate-200 "
                  src={productImg}
                  alt=""
                />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="md:w-28 md:h-20 object-contain border border-slate-200 "
                  src={productImg}
                  alt=""
                />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="md:w-28 md:h-20 object-contain border border-slate-200 "
                  src={productImg}
                  alt=""
                />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="md:w-28 md:h-20 object-contain border border-slate-200 "
                  src={productImg}
                  alt=""
                />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="md:w-28 md:h-20 object-contain border border-slate-200 "
                  src={productImg}
                  alt=""
                />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="md:w-28 md:h-20 object-contain border border-slate-200 "
                  src={productImg}
                  alt=""
                />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="md:w-28 md:h-20 object-contain border border-slate-200 "
                  src={productImg}
                  alt=""
                />{" "}
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        {/* product details section */}
        <div className="md:col-span-7 md:px-10 md:py-5 flex flex-col space-y-4">
          <h1 className="text-xl font-semibold md:text-3xl font-rajdhani">
            Apple iPad Mini 7 WiFi 128GB Starlight
          </h1>
          <span className="text-base text-slate-600">Not reviewed yet</span>
          <div className="flex gap-3 items-center">
            <h2 className="text-3xl font-bold ">
              TK. <span className="text-3xl font-bold ">6500</span>
            </h2>
            <h2 className=" line-through text-xl text-slate-600">
              TK. <span className=" font-bold ">7900</span>
            </h2>
          </div>
          <div className="text-gray-800">
            {/* Display truncated or full text based on state */}
            <p>
              {showFullText || !isTruncated
                ? text
                : `${words.slice(0, maxWords).join(" ")}...`}
            </p>

            {/* See More/See Less Button */}
            {isTruncated && (
              <button
                onClick={() => setShowFullText(!showFullText)}
                className="text-blue-500 mt-2"
              >
                {showFullText ? "See Less" : "See More"}
              </button>
            )}
          </div>
          {/* size section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Select Size:</h3>

            <div className="flex space-x-4">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)} // Set selected size
                  className={`border px-4 py-2 text-center font-medium rounded ${
                    selectedSize === size
                      ? "bg-blue-500 text-white border-blue-500"
                      : "border-gray-400 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            {selectedSize && (
              <p className="mt-4 text-sm text-gray-700">
                Selected Size: <strong>{selectedSize}</strong>
              </p>
            )}
          </div>
          <div className="flex gap-2">
            {/* quantity section */}
            <div className="flex items-center justify-center border border-gray-400 px-4 w-40">
              {/* Decrease button */}
              <button
                onClick={() => setCount(count - 1)}
                className="text-lg font-bold px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                -
              </button>

              {/* Count display */}
              <span className="text-lg mx-4">{count}</span>

              {/* Increase button */}
              <button
                onClick={() => setCount(count + 1)}
                className="text-lg font-bold px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                +
              </button>
            </div>
            {/* add to cart section */}
            {/* quantity section */}
            <div>
              <h1 className="px-5 py-3 bg-black text-white">+ Add To Card</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
