import Banner from "../Banner";
import BestSelling from "../best-selling-product/BestSelling";
import Features from "../feature-category/Features";
import Offer from "../offer/Offer";
import img1 from "../../../assets/bannerImg/01.jpg";
import img2 from "../../../assets/bannerImg/02.jpg";
import img3 from "../../../assets/bannerImg/03.png";
import img4 from "../../../assets/bannerImg/04.jpg";
import NewProduct from "../new arrival/NewProduct";
export default function Home() {
  return (
    <>
      <Banner img1={img1} img2={img2} img3={img3} img4={img4}></Banner>
      <div className="max-w-screen-xl xl:max-w-screen-2xl mx-auto ">
        <Features></Features>
        <BestSelling></BestSelling>
        <Offer></Offer>
        <NewProduct></NewProduct>
      </div>
    </>
  );
}
