export default function SellingCard({ item }) {
  const { productId, productName, brand, description, image, review, price } =
    item;
  return (
    <div>
      {/* <div
        key={productId}
        className="flex flex-col border rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex-grow my-4 h-[400px]  p-2"
      >
       
        <img
          src={image}
          alt={productName}
          className="w-full h-48 object-cover rounded-t-lg p-4"
        />

       
        <div className="flex flex-col justify-between  p-4">
          <div>
            <h2 className="text-xl font-semibold">{productName}</h2>
            <p className="text-sm text-gray-500">Brand: {brand}</p>
         
          </div>
        
          <p className="text-xl font-semibold text-[#f26e21]">TK. {price}</p>
          <div className="flex justify-center items-center gap-2 ">
            <button className="p-2 bg-[#fef0e8] rounded hover:bg-[#f26e21] text-xs md:text-base">
              Bye Now
            </button>
            <button className="p-2 bg-[#d8d8d6] rounded hover:bg-black hover:text-white text-xs md:text-base">
              Add to cart
            </button>
          </div>
        </div>
      </div> */}
      <div className="border rounded-lg shadow-lg hover:shadow-xl transition duration-300 h-[400px] flex flex-col flex-grow justify-between ">
        {/* Image Section */}
        <div className="h-48 w-full flex items-center justify-center ">
          <img
            src={image}
            alt={productName}
            className="max-h-full object-contain"
          />
        </div>

        {/* Content Section */}
        <div className="p-4 flex-grow flex flex-col justify-between">
          {/* Product Info */}
          <div>
            <h2 className="text-lg font-semibold">{productName}</h2>
            <p className="text-sm text-gray-500">Brand: {brand}</p>
            <p className="text-sm text-[#f26e21] font-semibold">TK. {price}</p>
          </div>
        </div>

        {/* Button Section */}
        <div className="p-4 flex gap-2">
          <button className="w-full py-2 px-4  bg-[#fef0e8] rounded hover:bg-[#f26e21] text-xs md:text-base transition">
            Buy Now
          </button>
          <button className="w-full py-2 px-4  bg-[#d8d8d6] rounded hover:bg-black hover:text-white text-xs md:text-base transition">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
