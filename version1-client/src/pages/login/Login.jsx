const Login = () => {
  return (
    <div className="max-w-screen-xl xl:max-w-screen-2xl mx-auto pt-16 md:pt-28 px-4">
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
          <div className="flex flex-col items-center mb-6">
            {/* <img
              src="/path/to/your-logo.png"
              alt="Logo"
              className="h-16 w-16"
            /> */}
            <h1 className="text-xl font-semibold text-gray-800 mt-4">
              We are The Lotus Team
            </h1>
          </div>
          <form>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                className="mt-1 block w-full px-3 py-2 border rounded-md text-gray-700 bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="mt-1 block w-full px-3 py-2 border rounded-md text-gray-700 bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white py-2 rounded-md hover:opacity-90"
            >
              Log In
            </button>
          </form>
          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-indigo-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="#" className="text-red-500 font-medium hover:underline">
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
