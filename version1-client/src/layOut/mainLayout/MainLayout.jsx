import { Outlet } from "react-router-dom";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";

export default function MainLayout() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen">  <Outlet></Outlet>   </div>
       <div><Footer></Footer></div>
    </div>
  )
}
