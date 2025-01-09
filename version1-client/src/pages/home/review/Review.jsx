import ReviewCard from "../../../components/card/ReviewCard";
import UseFetch from "../../../hooks/UseFetch";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import Title from "../../../components/title/Title";

export default function Review() {
  const [data] = UseFetch("review.json");
  // console.log(data);
  return (
    <div>
      <Title title={"Our Reviews"} url={"/review"}></Title>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          speed={500}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper !pb-16"
        >
          {data.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard key={review.id} data={review}></ReviewCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
