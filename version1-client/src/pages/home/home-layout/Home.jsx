import Banner from "../Banner";
import BestSelling from "../best-selling-product/BestSelling";
import Features from "../feature-category/Features";
import Offer from "../offer/Offer";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <div className="max-w-6xl mx-auto ">
        <Features></Features>
        <BestSelling></BestSelling>
        <Offer></Offer>
      </div>
    </>
  );
}
