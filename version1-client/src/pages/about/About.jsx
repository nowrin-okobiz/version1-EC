import aboutImage from "../../assets/about/aboutIImage1.png";
export default function About() {
  return (
    <div className="max-w-screen-xl xl:max-w-screen-2xl mx-auto p-5 pt-20 md:pt-32  text-center">
      <div>
        <h1 className="text-3xl font-bold  py-5">About Us</h1>
        <div>
          <img className="w-full" src={aboutImage} alt="" />
        </div>
        <h1 className="py-5 md:text-xl md:py-10 ">
          Discover a world of freshness, warm service and value
        </h1>
        <p className="px-5 md:text-xl ">
          With a network of 507 outlets, comprising 82 own and 425 franchise
          stores, Shwapno stands as the largest retail chain in Bangladesh. As
          part of the Shwapno family, your satisfaction and well-being are what
          we work diligently to ensure. Most of all, we always want you to leave
          with a smile. Whether you visit our stores or order online, we are
          happy to serve you in every way we can. So expect more. Come and
          discover a different shopping experience. Welcome to Shwapno!
        </p>
      </div>
      <hr />
      <div className="pt-14 md:pt-20">
        <h1 className="text-start py-5 font-bold text-2xl md:text-4xl uppercase">
          Leave a comment
        </h1>
        <div className="w-full flex gap-4">
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            required
            className="h-5 p-5 md:p-10 border border-black border-10 w-1/2 md:text-2xl"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            required
            className="h-5 p-5 md:p-10 border border-black border-10 w-1/2 md:text-2xl"
          />
        </div>
        <textarea
          name=""
          className="border border-black w-full p-5 my-5 md:text-2xl"
          rows={5}
          placeholder="Your Comment here "
        ></textarea>
        <button className="p-5 px-10 bg-black text-white ">Submit</button>
      </div>
    </div>
  );
}
