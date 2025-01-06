import UseFetch from "../../../hooks/UseFetch";

export default function NewProduct() {
  const [product] = UseFetch("topProduct.json");
  console.log(product);

  return (
    <div className="my-2">
      <h1 className="text-4xl font-semibold">New Arrival</h1>
      <div></div>
    </div>
  );
}
