import Banner from "../Banner";
import BestSelling from "../../../components/best-selling-product/BestSelling";
import Features from "../feature-category/Features";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <div className="max-w-6xl mx-auto ">
        <Features></Features>
        <BestSelling></BestSelling>
      </div>
    </>
  );
}
