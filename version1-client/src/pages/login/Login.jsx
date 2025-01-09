const Login = () => {
  return (
    <div className="max-w-screen-xl mx-auto pt-8 md:pt-16 px-4">
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-sm w-full">
          <div className="flex flex-col items-center mb-6">
            <h1 className="text-lg md:text-xl font-semibold text-gray-800 mt-2 text-center">
              Welcome to The Lotus Team
            </h1>
          </div>
          <form>
            <div className="mb-4">
              <label
                htmlFor="useremail"
                className="block text-sm md:text-base font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="useremail"
                placeholder="Enter your email"
                className="mt-1 block w-full px-3 py-2 border rounded-md text-gray-700 bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm md:text-base font-medium text-gray-700"
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
              className="w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white py-2 md:py-3 rounded-md hover:opacity-90 text-sm md:text-base font-medium"
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
              Do not have an account?{" "}
              <a
                href="/register"
                className="text-red-500 font-medium hover:underline"
              >
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
