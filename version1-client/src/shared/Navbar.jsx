export default function Navbar() {
  return (
   <div className="bg-black h-[70px]">
     <div className="max-w-6xl flex justify-around items-center mx-auto">
     <div><img className="w-12 md:w-24 h-6 md:h-12  m-2" src="https://i.ibb.co.com/gv291qV/G-Glogo.png" alt="" /></div>
     <div className="flex justify-center gap-2">
      <input type="text" className="w-20 md:w-96 p-3 mx-auto border border-white rounded-md" placeholder="Search products"/>
      <button className="bg-orange-600 p-3 rounded-md">Submit</button>
     </div>
     <div> 
     <button className="">Submit</button></div>
    </div>
   </div>
  )
}
