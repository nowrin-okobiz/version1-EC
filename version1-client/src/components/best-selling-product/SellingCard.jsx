export default function SellingCard({ item }) {
  const { productId, productName, brand, description, image, review } = item;
  return (
    <div>
      {/* <div className="flex flex-col border border-black">
        <div>
          <img className="w-full h-20 md:h-40" src={image} alt="" />
        </div>
        <h1>{productName}</h1>
        <h1>{brand}</h1>
        <h1>{description}</h1>
        <h1>{review}</h1>
      </div> */}
      {/* <div className="border rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <img
          src={image}
          alt={productName}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{productName}</h2>
          <p className="text-sm text-gray-500">Brand: {brand}</p>
          <p className="text-gray-700 my-2">{description}</p>
          <p
            className={`font-bold ${
              review ? "text-green-500" : "text-red-500"
            }`}
          >
            {review ? "Reviewed" : "Not Reviewed"}
          </p>
        </div>
      </div> */}
      <div
        key={productId}
        className="flex flex-col border rounded-lg shadow-lg hover:shadow-xl transition duration-300 "
      >
        {/* Image Section */}
        <img
          src={image}
          alt={productName}
          className="w-full h-48 object-cover rounded-t-lg p-4"
        />

        {/* Content Section */}
        <div className="flex flex-col justify-between flex-grow p-4">
          <div>
            <h2 className="text-xl font-semibold">{productName}</h2>
            <p className="text-sm text-gray-500">Brand: {brand}</p>
            {/* <p className="text-gray-700 my-2 line-clamp-3">{description}</p> */}
          </div>
          <p
            className={`font-bold mt-4 ${
              review ? "text-green-500" : "text-red-500"
            }`}
          >
            {review ? "Reviewed" : "Not Reviewed"}
          </p>
        </div>
      </div>
    </div>
  );
}
