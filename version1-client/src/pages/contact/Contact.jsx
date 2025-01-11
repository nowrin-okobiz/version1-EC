import { FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="max-w-screen-xl xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-36">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Section */}
        <div className="md:col-span-5 space-y-6 p-4 md:p-10 bg-gray-50 rounded-lg shadow-lg">
          <div className="flex text-3xl font-bold gap-3 items-center">
            <FaPhoneAlt />
            <h1>Sales Enquiries</h1>
          </div>
          <div>
            <h1 className="font-semibold text-lg">Address</h1>
            <p className="font-medium text-gray-700">
              Interested in any of our products? Talk to our experts today.
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-lg">Mobile:</h1>
            <p className="text-gray-700 font-medium">01708156699</p>
          </div>
          <div>
            <h1 className="font-semibold text-lg">Email:</h1>
            <p className="text-gray-700 font-medium">online@rise-brand.com</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:col-span-7 flex flex-col space-y-6 bg-white p-4 md:p-10 rounded-lg shadow-lg">
          <h1 className="text-2xl text-center font-bold">
            Get in touch with us
          </h1>
          <input
            type="text"
            name="name"
            placeholder="Please enter your name"
            className="w-full border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone"
            className="w-full border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Enter subject here"
            className="w-full border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Write your message"
            className="w-full border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button className="p-4 bg-black text-white text-lg font-semibold rounded-md hover:bg-gray-800 transition">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
