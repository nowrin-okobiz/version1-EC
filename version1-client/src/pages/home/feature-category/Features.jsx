// import { IoIosPhonePortrait } from "react-icons/io";
import Marquee from "react-fast-marquee";
import mobileImg from "../../../assets/featureImg/1699881121737973.png";
import airpod from "../../../assets/featureImg/airpod.png";
import cable from "../../../assets/featureImg/cable.png";
import camera from "../../../assets/featureImg/camera.png";
import earpod from "../../../assets/featureImg/earpod.png";
import mac from "../../../assets/featureImg/mac.png";
import phoneCase from "../../../assets/featureImg/phone-cases.png";
import powerBank from "../../../assets/featureImg/power bank.png";
import speaker from "../../../assets/featureImg/speaker.png";
import videoGame from "../../../assets/featureImg/video_game.png";
import watchs from "../../../assets/featureImg/watchs.png";
export default function Features() {
  return (
    <div className=" mb-10">
      <h1 className="py-5 text-3xl text-center">Featured Categories</h1>
      <div>
        <Marquee>
          <div className="flex flex-col px-5">
            <span
              className="text-3xl  bg-[#f3f3f1] border-2 rounded-full
          "
            >
              <img className="w-20 md:w-24" src={mobileImg} alt="" />
            </span>
            <h1 className="text-center font-bold text-slate-600">phone</h1>
          </div>
          <div className="flex flex-col  px-5">
            <span
              className="text-3xl  bg-[#f3f3f1] border-2 rounded-full
          "
            >
              <img className="w-20 md:w-24" src={airpod} alt="" />
            </span>
            <h1 className="text-center font-bold text-slate-600">AirPods</h1>
          </div>
          <div className="flex flex-col  px-5">
            <span
              className="text-3xl  bg-[#f3f3f1] border-2 rounded-full
          "
            >
              <img className="w-20 md:w-24" src={cable} alt="" />
            </span>
            <h1 className="text-center font-bold text-slate-600">Cable</h1>
          </div>
          <div className="flex flex-col  px-5">
            <span
              className="text-3xl  bg-[#f3f3f1] border-2 rounded-full
          "
            >
              <img className="w-20 md:w-24" src={camera} alt="" />
            </span>
            <h1 className="text-center font-bold text-slate-600">Camera</h1>
          </div>
          <div className="flex flex-col  px-5">
            <span
              className="text-3xl  bg-[#f3f3f1] border-2 rounded-full
          "
            >
              <img className="w-20 md:w-24" src={earpod} alt="" />
            </span>
            <h1 className="text-center font-bold text-slate-600">Ear Phone</h1>
          </div>
          <div className="flex flex-col  px-5">
            <span
              className="text-3xl  bg-[#f3f3f1] border-2 rounded-full
          "
            >
              <img className="w-20 md:w-24" src={mac} alt="" />
            </span>
            <h1 className="text-center font-bold text-slate-600">mac</h1>
          </div>
          <div className="flex flex-col  px-5">
            <span
              className="text-3xl  bg-[#f3f3f1] border-2 rounded-full
          "
            >
              <img className="w-20 md:w-24" src={phoneCase} alt="" />
            </span>
            <h1 className="text-center font-bold text-slate-600">
              Phone Case{" "}
            </h1>
          </div>
          <div className="flex flex-col  px-5">
            <span
              className="text-3xl  bg-[#f3f3f1] border-2 rounded-full
          "
            >
              <img className="w-20 md:w-24" src={powerBank} alt="" />
            </span>
            <h1 className="text-center font-bold text-slate-600">Power Bank</h1>
          </div>
          <div className="flex flex-col  px-5">
            <span
              className="text-3xl  bg-[#f3f3f1] border-2 rounded-full
          "
            >
              <img className="w-20 md:w-24" src={speaker} alt="" />
            </span>
            <h1 className="text-center font-bold text-slate-600">Speaker</h1>
          </div>
          <div className="flex flex-col  px-5">
            <span
              className="text-3xl  bg-[#f3f3f1] border-2 rounded-full
          "
            >
              <img className="w-20 md:w-24" src={videoGame} alt="" />
            </span>
            <h1 className="text-center font-bold text-slate-600">Video Game</h1>
          </div>
          <div className="flex flex-col  px-5">
            <span
              className="text-3xl  bg-[#f3f3f1] border-2 rounded-full
          "
            >
              <img className="w-20 md:w-24" src={watchs} alt="" />
            </span>
            <h1 className="text-center font-bold text-slate-600">Watch</h1>
          </div>
        </Marquee>
      </div>
    </div>
  );
}
