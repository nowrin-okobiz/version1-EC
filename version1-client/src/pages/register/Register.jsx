import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 pt-24 md:pt-36 pb-20">
      <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Create an account
        </h1>
        <form>
          {/* input field */}
          <div className="space-y-4">
            {/* name field */}
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-3 border rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {/* email field */}
            <input
              type="email"
              placeholder="E-mail"
              className="w-full px-4 py-3 border rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {/* phone number field */}
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full px-4 py-3 border rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {/* password field */}
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 border rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {/* confirm password field */}
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 border rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {/* privacy check  */}
            <div className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                id="privacy"
                className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
              />
              <label htmlFor="privacy" className="text-gray-600">
                I accept the{" "}
                <a href="#" className="text-orange-500 hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>
          </div>
          {/* submit field */}
          <button
            type="submit"
            className="mt-6 w-full bg-orange-500 text-white py-3 rounded-lg font-medium text-sm md:text-base hover:bg-orange-600"
          >
            Create an Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
