const ReviewCard = ({ data }) => {
  const { name, picture, review, occupation, description } = data;
  return (
    <div className="flex flex-col sm:flex-row items-center max-w-md sm:max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img
          src={picture} // Replace with actual image URL
          alt="Jone Copper"
          className="w-30 h-full  border-4 border-blue-500"
        />
      </div>

      {/* Content Section */}
      <div className="sm:ml-6 text-center sm:text-left mt-4 sm:mt-0">
        <blockquote>
          <p className="text-gray-600 text-lg">
            <span className="text-blue-500 text-base  font-bold">“</span>{" "}
            {description}
          </p>
        </blockquote>

        {/* Rating Section */}
        <div className="flex justify-center sm:justify-start mt-4 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.805 1.433 8.288L12 18.896l-7.369 4.503 1.433-8.288L.001 9.306l8.332-1.151z" />
            </svg>
          ))}
        </div>

        {/* Name Section */}
        <div className="mt-4">
          <h4 className="font-semibold text-lg text-gray-800">{name}</h4>
          <p className="text-sm text-gray-500">{occupation}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
