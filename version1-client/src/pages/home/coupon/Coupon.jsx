import img1 from "../../../assets/cuponImg/img1.png";
import img2 from "../../../assets/cuponImg/img2.png";
import img3 from "../../../assets/cuponImg/img3.png";
import img4 from "../../../assets/cuponImg/img4.png";

export default function Coupon() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 p-2 md:p-6">
      <div className="col-span-1">
        <img className="w-full h-auto object-cover" src={img1} alt="Coupon 1" />
      </div>
      <div className="col-span-1">
        <img className="w-full h-auto object-cover" src={img2} alt="Coupon 2" />
      </div>
      <div className="col-span-1">
        <img className="w-full h-auto object-cover" src={img3} alt="Coupon 3" />
      </div>
      <div className="col-span-1">
        <img className="w-full h-auto object-cover" src={img4} alt="Coupon 4" />
      </div>
    </div>
  );
}
