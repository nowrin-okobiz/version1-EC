import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
  // console.log(item);
  const {
    productId,
    productName,
    brand,
    description,
    image,
    review,
    price,
    discount,
  } = item;

  // Calculate final price
  let finalPrice;
  const numericPrice = Number(price);

  if (discount) {
    if (discount.includes("%")) {
      // Percentage discount
      const discountPercentage = parseInt(discount);
      finalPrice = numericPrice - (numericPrice * discountPercentage) / 100;
    } else {
      // Flat taka discount
      const discountTaka = Number(discount);
      finalPrice = numericPrice - discountTaka;
      finalPrice = Math.ceil(finalPrice);
    }
  }

  return (
    <div>
      <Link to={`/detail/${productId}`}>
        {console.log(productId)}
        <div className="border rounded-lg shadow-lg hover:shadow-xl transition duration-300 h-[430px] flex flex-col flex-grow justify-between overflow-hidden ">
          {/* Image Section */}
          <div className="h-48 w-full flex items-center justify-center relative">
            <img
              src={image}
              alt={productName}
              className="max-h-full object-contain"
            />
            <div className="absolute top-0.5 right-0.5">
              {discount && (
                <p className="bg-orange-600 text-white p-2 px-2 py-1 rounded-tl-lg rounded-br-lg text-sm md:text-base font-semibold uppercase">
                  {discount} off
                </p>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-4 flex-grow flex flex-col justify-between">
            {/* Product Info */}
            <div>
              <h2 className="text-lg font-semibold">{productName}</h2>
              <p className="text-sm text-gray-500">Brand: {brand}</p>

              {/* Price Section */}
              {discount ? (
                <div className="flex gap-2">
                  <p className="text-sm text-[#f26e21] font-semibold">
                    TK. {finalPrice.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500 line-through">
                    TK. {price}
                  </p>
                </div>
              ) : (
                <p className="text-sm text-[#f26e21] font-semibold">
                  TK. {price}
                </p>
              )}
            </div>
          </div>

          {/* Button Section */}
          <div className="p-4 flex flex-col gap-2">
            <button className="w-full py-2 px-4 bg-[#fef0e8] rounded hover:bg-[#f26e21] text-xs md:text-base transition">
              Buy Now
            </button>
            <button className="w-full py-2 px-4 bg-[#d8d8d6] rounded hover:bg-black hover:text-white text-xs md:text-base transition">
              Add to cart
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
