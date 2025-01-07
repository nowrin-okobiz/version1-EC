import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Title({ title }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
      {/* Title */}
      <h1 className="text-2xl md:text-4xl font-semibold text-gray-800 my-3 md:my-5">
        {title}
      </h1>

      {/* Show More Button */}
      <Link
        to="#"
        className="flex items-center text-[#f26e21] hover:text-[#d55c1c] transition duration-300"
      >
        <span className="font-semibold text-base md:text-lg">Show More</span>
        <MdArrowForwardIos className="ml-1 text-lg md:text-xl" />
      </Link>
    </div>
  );
}
