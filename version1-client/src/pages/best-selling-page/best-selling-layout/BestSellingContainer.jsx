import UseFetch from "../../../hooks/UseFetch";
import ProductCard from "../../../components/card/product-card/ProductCard";
import offerImg from "../../../assets/offerBanner/year-end-offer.png";
import CoverImage from "../../../components/coverImage/CoverImage";
export default function BestSellingContainer() {
  const [data] = UseFetch("topProduct.json");
  console.log(data);
  return (
    <div className="max-w-screen-xl xl:max-w-screen-2xl mx-auto pt-20 md:pt-36">
      <CoverImage image={offerImg}></CoverImage>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 space-y-4">
        {data.map((item) => (
          <ProductCard item={item} key={item.id}></ProductCard>
        ))}
      </div>
    </div>
  );
}
