import ReviewCard from "../../../components/card/ReviewCard";
import UseFetch from "../../../hooks/UseFetch";

export default function ReviewContainer() {
  const [data] = UseFetch("review.json");

  return (
    <div className="max-w-screen-xl xl:max-w-screen-2xl mx-auto pt-20 md:pt-36 px-4">
      <h1 className="text-xl md:text-2xl text-center py-5 md:py-10 font-semibold underline">
        Our Client Review
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <ReviewCard data={item} key={item.id}></ReviewCard>
        ))}
      </div>
    </div>
  );
}
