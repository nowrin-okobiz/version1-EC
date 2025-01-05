import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import ProductCard from "../../../components/product-card/ProductCard";
export default function BestSelling() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get("topProduct.json").then((res) => {
      setProduct(res.data);
    });
  }, []);
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className=" md:text-4xl py-5 font-semibold">Best Selling</h1>{" "}
        <Link className="text-[#f26e21]">
          <div className="flex items-center">
            <span className="font-semibold">Show More</span>{" "}
            <MdArrowForwardIos />
          </div>
        </Link>
      </div>
      <div className=" pb-16">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            370: { slidesPerView: 2 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1278: { slidesPerView: 5 },
          }}
          // loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper !pb-16"
        >
          {product.map((item) => (
            <SwiperSlide key={item.id} className="h-full ">
              <ProductCard item={item} key={item.id} className=""></ProductCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
