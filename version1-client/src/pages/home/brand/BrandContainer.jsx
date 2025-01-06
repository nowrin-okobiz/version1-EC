// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
// import brand1 from "../../../assets/brands/brand1.png";
// import brand2 from "../../../assets/brands/brand2.png";
// import brand3 from "../../../assets/brands/brand3.png";
// import brand4 from "../../../assets/brands/brand4.png";
// import brand5 from "../../../assets/brands/brand5.png";
// export default function BrandContainer() {
//   return (
//     <div>
//       <h1 className="py-5 text-4xl font-semibold">Brands</h1>
//       <Swiper
//         navigation={true}
//         modules={[Navigation]}
//         className="mySwiper"
//         slidesPerView={1}
//         breakpoints={{
//           370: { slidesPerView: 2 },
//           640: { slidesPerView: 3 },
//           768: { slidesPerView: 4 },
//           1024: { slidesPerView: 5 },
//           1278: { slidesPerView: 6 },
//         }}
//       >
//         <SwiperSlide>
//           <div className="">
//             <img className="" src={brand1} alt="" />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="">
//             <img src={brand2} alt="" />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="">
//             <img src={brand3} alt="" />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="">
//             <img src={brand4} alt="" />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="">
//             <img src={brand5} alt="" />
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }
import React from "react";
import brand1 from "../../../assets/brands/brand1.png";
import brand2 from "../../../assets/brands/brand2.png";
import brand3 from "../../../assets/brands/brand3.png";
import brand4 from "../../../assets/brands/brand4.png";
import brand5 from "../../../assets/brands/brand5.png";
import Marquee from "react-fast-marquee";
export default function BrandContainer() {
  return (
    <div className="my-4">
      <h1 className="py-5 text-4xl font-semibold">Brands</h1>
      <Marquee pauseOnHover={true} className="cursor-pointer">
        <div className=" p-4">
          {/* <img src={brand1} alt="" /> */}
          <img className=" rounded " src={brand1} alt="" />
        </div>
        <div className=" p-4">
          {/* <img src={brand2} alt="" /> */}
          <img className=" rounded " src={brand2} alt="" />
        </div>
        <div className=" p-4">
          {/* <img src={brand3} alt="" /> */}
          <img className=" rounded " src={brand3} alt="" />
        </div>
        <div className=" p-4">
          {/* <img src={brand4} alt="" /> */}
          <img className=" rounded object-cover " src={brand4} alt="" />
        </div>
        <div className=" p-4">
          {/* <img src={brand5} alt="" /> */}

          <img className="w-28 md:w-32 rounded  " src={brand5} alt="" />
        </div>
      </Marquee>
    </div>
  );
}
