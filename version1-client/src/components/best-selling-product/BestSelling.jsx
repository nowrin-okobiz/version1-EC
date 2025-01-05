import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import SellingCard from "./SellingCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
export default function BestSelling() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get("topProduct.json").then((res) => {
      setProduct(res.data);
    });
  }, []);
  return (
    // <div className=" grid grid-cols-2 md:grid-cols-3 gap-4 ">
    <Swiper
      slidesPerView={5}
      spaceBetween={30}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {product.map((item) => (
        <SwiperSlide key={item.id}>
          <SellingCard item={item} key={item.id}></SellingCard>
        </SwiperSlide>
      ))}
    </Swiper>

    // </div>
  );
}
