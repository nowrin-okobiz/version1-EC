import img1 from "../../assets/bannerImg/01.jpg";
import img2 from "../../assets/bannerImg/02.jpg";
import img3 from "../../assets/bannerImg/03.png";
import img4 from "../../assets/bannerImg/04.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Banner() {
  return (
    <div className="w-full">
      <Carousel autoPlay>
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
        <div>
          <img src={img4} alt="" />
        </div>
      </Carousel>
    </div>
  );
}
