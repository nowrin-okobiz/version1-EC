import brand1 from "../../../assets/brands/brand1.png";
import brand2 from "../../../assets/brands/brand2.png";
import brand3 from "../../../assets/brands/brand3.png";
import brand4 from "../../../assets/brands/brand4.png";
import brand5 from "../../../assets/brands/brand5.png";
import Marquee from "react-fast-marquee";
import Title from "../../../components/title/Title";
export default function BrandContainer() {
  return (
    <div className="my-4">
      <Title title={"Brand"}></Title>
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
