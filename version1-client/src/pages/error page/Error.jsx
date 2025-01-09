import { RiEmotionSadLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="md:pt-20">
      <div className=" w-full h-screen bg-[url('https://freefrontend.com/assets/img/html-css-404-page-templates/HTML-404-Error-Example-3.png')] bg-no-repeat bg-cover bg-center pt-20">
        {/* <div className="col-span-4">
        <img
          className="h-screen"
          src="https://i.ibb.co.com/0FPzxwD/error.png"
          alt=""
        />
      </div> */}
        <div className=" w-full mx-auto py-20 ">
          <div
            id="error-page"
            className="flex flex-col justify-center items-center text-white p-20"
          >
            <h1 className="text-7xl  font-bold p-10">Oops!</h1>
            <p className="text-2xl md:flex justify-center items-center">
              Sorry, an unexpected error has occurred.
              <span className=" text-4xl font-bold p-2">
                <RiEmotionSadLine />
              </span>
            </p>
            {/* <Lottie animationData={groovyWalkAnimation} /> */}
            <button className="p-10 border-2 border-cyan-600 rounded-lg px-20 mt-5 ">
              <Link to={"/"}>Go Back</Link>
            </button>
            {/* <p>
        <i>{error.statusText || error.message}</i>
      </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
