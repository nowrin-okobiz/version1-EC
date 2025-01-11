import { BsMenuUp } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { FaPen } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";

export default function User() {
  return (
    <div className="pt-16 md:pt-32 max-w-screen-xl xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Mobile Sidebar */}
      <div className="md:hidden mb-6 text-center">
        <div className="flex justify-around items-center gap-2">
          <div className="p-4 border-2 border-gray-200 flex flex-col items-center text-sm md:text-lg rounded-lg hover:shadow-md transition">
            <span className="text-4xl text-[#f26e21] rounded-full hover:bg-[#f26e21] hover:text-white transition">
              <IoPersonCircleOutline />
            </span>
            <h1 className="font-medium">Account Info</h1>
          </div>
          <div className="p-4 border-2 border-gray-200 flex flex-col items-center text-sm md:text-lg rounded-lg hover:shadow-md transition">
            <span className="text-4xl text-[#f26e21] rounded-full hover:bg-[#f26e21] hover:text-white transition">
              <BsMenuUp />
            </span>
            <h1 className="font-medium">My Orders</h1>
          </div>
          <div className="p-4 border-2 border-gray-200 flex flex-col items-center text-sm md:text-lg rounded-lg hover:shadow-md transition">
            <span className="text-4xl text-[#f26e21] rounded-full hover:bg-[#f26e21] hover:text-white transition">
              <CiStar />
            </span>
            <h1 className="font-medium">My Reviews</h1>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Desktop Sidebar */}
        <div className="hidden md:block md:col-span-3">
          <ul className="flex flex-col space-y-5">
            <li className="flex gap-3 items-center bg-[#f5f5f5] p-5 rounded-md shadow-md hover:shadow-lg transition">
              <span className="text-4xl p-2 text-[#f26e21] rounded-full hover:bg-[#f26e21] hover:text-white transition">
                <IoPersonCircleOutline />
              </span>
              <h1 className="text-xl font-semibold">Account Info</h1>
            </li>
            <li className="flex gap-3 items-center bg-[#f5f5f5] p-5 rounded-md shadow-md hover:shadow-lg transition">
              <span className="text-4xl p-2 text-[#f26e21] rounded-full hover:bg-[#f26e21] hover:text-white transition">
                <BsMenuUp />
              </span>
              <h1 className="text-xl font-semibold">My Orders</h1>
            </li>
            <li className="flex gap-3 items-center bg-[#f5f5f5] p-5 rounded-md shadow-md hover:shadow-lg transition">
              <span className="text-4xl p-2 text-[#f26e21] rounded-full hover:bg-[#f26e21] hover:text-white transition">
                <CiStar />
              </span>
              <h1 className="text-xl font-semibold">My Reviews</h1>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="md:col-span-9">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span className="text-7xl p-2 text-[#f26e21] rounded-full hover:bg-[#f26e21] hover:text-white transition">
              <IoPersonCircleOutline />
            </span>
            <h1 className="text-2xl font-bold">Hello Ban</h1>
          </div>

          {/* Account Details Section */}
          <div className="mt-6">
            <div className="flex justify-between items-center py-5">
              <h1 className="text-xl font-semibold">Account Details</h1>
              <button className="p-3 px-5 rounded-lg border border-[#f26e21] flex items-center gap-2 hover:bg-[#f26e21] hover:text-white transition">
                <FaPen />
                <span className="text-xl">Edit</span>
              </button>
            </div>
            <hr />
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6">
            <input
              type="text"
              name="name"
              placeholder="Please enter your name"
              className="w-full border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-md"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone"
              className="w-full border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-md"
            />
            <input
              type="text"
              name="subject"
              placeholder="Enter subject here"
              className="w-full border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-md"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Write your message"
              className="w-full col-span-1 sm:col-span-2 border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-md"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button className="w-full mb-3 p-4 bg-black text-white text-lg font-semibold rounded-md hover:bg-gray-800 transition">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
