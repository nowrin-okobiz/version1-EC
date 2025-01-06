import { Link } from "react-router-dom";
import ProductContainer from "../../../components/product-container/ProductContainer";
import UseFetch from "../../../hooks/UseFetch";
import { MdArrowForwardIos } from "react-icons/md";

export default function NewProduct() {
  const [product] = UseFetch("topProduct.json");
  console.log(product);

  return (
    <div className="my-2">
      <div className="flex justify-between items-center">
        {" "}
        <h1 className="text-4xl font-semibold my-5 md:my-10">New Arrival</h1>
        <Link className="text-[#f26e21]">
          <div className="flex items-center">
            <span className="font-semibold">Show More</span>{" "}
            <MdArrowForwardIos />
          </div>
        </Link>
      </div>
      <div>
        <ProductContainer key={product.id} product={product}></ProductContainer>
      </div>
    </div>
  );
}
