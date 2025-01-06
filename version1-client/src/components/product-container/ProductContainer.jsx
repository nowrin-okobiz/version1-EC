import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Autoplay, Navigation } from "swiper/modules";
import ProductCard from "../product-card/ProductCard";
export default function ProductContainer({ product }) {
  return (
    <div>
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
  );
}
