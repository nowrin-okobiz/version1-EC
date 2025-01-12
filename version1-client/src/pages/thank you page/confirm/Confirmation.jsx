import { IoCheckmarkDoneCircle } from "react-icons/io5";
import emailImg from "../../../assets/image/email.png";
import { RiPrinterFill } from "react-icons/ri";
import { FaLaptop } from "react-icons/fa";

export default function Confirmation() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center">
      {/* Header */}
      <header className="w-full bg-black text-white py-4">
        <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-lg md:text-xl font-bold">AVERT WATCHES</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="hover:underline">
              Home
            </a>
            <a href="/my-account" className="hover:underline">
              My Account
            </a>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="flex-grow flex flex-col justify-center items-center px-4 py-8">
        {/* Success Icon */}
        <span className="text-center text-5xl md:text-6xl text-green-700 mb-6">
          <IoCheckmarkDoneCircle />
        </span>

        {/* Thank You Text */}
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Thank you.</h2>
        <p className="text-lg md:text-xl text-gray-700 font-medium mb-6">
          Your order was completed successfully.
        </p>

        {/* Email Confirmation Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
          <img
            src={emailImg}
            alt="Email Icon"
            className="w-16 h-16 md:w-24 md:h-24"
          />
          <p className="text-base md:text-lg text-gray-600 max-w-lg text-center md:text-start">
            An email receipt including the details of your order has been sent
            to the email address provided. Please keep it for your records.
          </p>
        </div>

        {/* Additional Information Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <p className="text-base md:text-lg text-gray-600 max-w-lg text-center md:text-start">
            You can visit the{" "}
            <a href="/my-account" className="underline text-blue-600">
              My Account
            </a>{" "}
            page at any time to check the status of your order. Or click here to{" "}
            <a href="/print-receipt" className="underline text-blue-600">
              print a copy of your receipt
            </a>
            .
          </p>
          <div className="flex justify-center md:justify-start gap-4 text-black text-6xl">
            <span>
              <RiPrinterFill />
            </span>
            <span>
              <FaLaptop />
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
