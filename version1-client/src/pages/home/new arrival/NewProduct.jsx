import ProductContainer from "../../../components/product-container/ProductContainer";
import UseFetch from "../../../hooks/UseFetch";
import Title from "../../../components/title/Title";

export default function NewProduct() {
  const [data] = UseFetch("topProduct.json");
  // console.log(data);

  return (
    <div className="my-2">
      <Title title={"New Arrival"} url={"/shop"}></Title>
      <div>
        <ProductContainer key={data.id} product={data}></ProductContainer>
      </div>
    </div>
  );
}
