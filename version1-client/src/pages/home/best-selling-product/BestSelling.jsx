import UseFetch from "../../../hooks/UseFetch";
import ProductContainer from "../../../components/product-container/ProductContainer";
import Title from "../../../components/title/Title";
export default function BestSelling() {
  const [data] = UseFetch("topProduct.json");
  // console.log(data);
  return (
    <>
      <Title title={"Best Selling"} url={"/bestProduct"}></Title>
      <div className=" pb-16">
        <ProductContainer key={data.id} product={data}></ProductContainer>
      </div>
    </>
  );
}
