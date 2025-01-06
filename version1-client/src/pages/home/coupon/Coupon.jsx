import img1 from "../../../assets/cuponImg/img1.png";
import img2 from "../../../assets/cuponImg/img2.png";
import img3 from "../../../assets/cuponImg/img3.png";
import img4 from "../../../assets/cuponImg/img4.png";
export default function Coupon() {
  return (
    <div className="grid md:grid-cols-4 gap-4 my-2 md:my-6">
      <div className="col-span-1">
        <img src={img1} alt="" />
      </div>
      <div className="col-span-1">
        <img src={img2} alt="" />
      </div>
      <div className="col-span-1">
        <img src={img3} alt="" />
      </div>
      <div className="col-span-1">
        <img className="h-full" src={img4} alt="" />
      </div>
    </div>
  );
}
