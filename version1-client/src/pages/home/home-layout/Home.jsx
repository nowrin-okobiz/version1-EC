import Banner from "../Banner";
import Features from "../feature-category/Features";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <div className="max-w-6xl mx-auto">
        <Features></Features>
      </div>
    </>
  );
}
