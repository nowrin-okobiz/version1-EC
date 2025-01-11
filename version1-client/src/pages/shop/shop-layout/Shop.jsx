import Category from "../shop category/Category";

export default function Shop() {
  return (
    <div className="max-w-screen-xl xl:max-w-screen-2xl mx-auto  min-h-screen  pt-20 md:pt-36">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <Category></Category>
        </div>
        <div className="bg-purple-400 col-span-9"></div>
      </div>
    </div>
  );
}
