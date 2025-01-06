import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import UseFetch from "../../../hooks/UseFetch";
import ProductContainer from "../../../components/product-container/ProductContainer";
export default function BestSelling() {
  const [product] = UseFetch("topProduct.json");
  console.log(product);
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className=" md:text-4xl py-5 font-semibold">Best Selling</h1>{" "}
        <Link className="text-[#f26e21]">
          <div className="flex items-center">
            <span className="font-semibold">Show More</span>{" "}
            <MdArrowForwardIos />
          </div>
        </Link>
      </div>
      <div className=" pb-16">
        <ProductContainer key={product.id} product={product}></ProductContainer>
      </div>
    </>
  );
}
