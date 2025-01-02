import { CiSearch } from "react-icons/ci";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
export default function Navbar() {
  return (
   <div className="bg-black h-[70px]">
     <div className="max-w-6xl flex justify-around items-center mx-auto">
     <div><img className="w-16 md:w-24 h-10 md:h-12  m-2" src="https://i.ibb.co.com/gv291qV/G-Glogo.png" alt="" /></div>
     <div className="flex justify-center gap-2">
     <div className="relative"> <input type="text" className="w-50 md:w-[500px] p-3 mx-auto border border-white rounded-md" placeholder="Search products"/>
     <span className="text-orange-600  absolute  text-2xl top-4 right-0 mr-3"><CiSearch /></span></div>
      <button className="bg-orange-600 p-3 rounded-md">Submit</button>
     </div>
    <div className="hidden md:flex justify-between gap-2 ">
      <button className="text-white text-2xl px-4 bg-[#565556] rounded-md hover:bg-orange-600"><IoPersonCircleOutline /></button>
      <button className="text-white text-4xl p-2 bg-[#565556] rounded-md hover:bg-orange-600"><CiShoppingCart /></button>
    </div>
    </div>
   </div>
  )
}
