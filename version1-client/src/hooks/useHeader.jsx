import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

const useHeader = () => {
  <div className="flex justify-between items-center">
    {" "}
    <h1 className="text-4xl font-semibold my-5 md:my-10">New Arrival</h1>
    <Link className="text-[#f26e21]">
      <div className="flex items-center">
        <span className="font-semibold">Show More</span> <MdArrowForwardIos />
      </div>
    </Link>
  </div>;
};
export default useHeader;
