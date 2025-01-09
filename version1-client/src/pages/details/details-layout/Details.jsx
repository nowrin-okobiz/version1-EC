import ProductCard from "../../../components/card/product-card/ProductCard";
import UseFetch from "../../../hooks/UseFetch";
import DetailsSection from "../details container 1/DetailsSection";

export default function Details() {
  const [data] = UseFetch("/topProduct.json");
  // console.log(data);
  return (
    <div className="pt-10 md:pt-32 max-w-screen-xl xl:max-w-screen-2xl mx-auto px-5">
      <DetailsSection></DetailsSection>
      <div>
        <hr />
        <h1 className="text-2xl font-semibold md:py-10 py-5">
          You may also like
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((item) => (
            <ProductCard item={item} key={item.id}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
}
