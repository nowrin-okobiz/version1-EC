import { useEffect, useState } from "react";
// import OfferBanner from "./OfferBanner";
import axios from "axios";
import ProductCard from "../../../components/card/product-card/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import offerImg from "../../../assets/offerBanner/offerBanner.png";
export default function Offer() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get("topProduct.json").then((res) => {
      setProduct(res.data);
    });
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-6 py-1 ">
        <div className="col-span-4">
          <img className="h-[200px] md:h-[430px]" src={offerImg} alt="" />
        </div>
        <div className="col-span-2 border ">
          <div className=" ">
            <Swiper
              slidesPerView={2}
              breakpoints={{
                370: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 2 },
                1278: { slidesPerView: 2 },
              }}
              // navigation={true}
              // modules={[Navigation]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {product.map((item) => (
                <SwiperSlide key={item.id}>
                  <ProductCard item={item} key={item.id}></ProductCard>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
