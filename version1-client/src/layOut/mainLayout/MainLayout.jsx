import { Outlet } from "react-router-dom";
import Navbar from "../../shared/Navbar";

export default function MainLayout() {
  return (
    <div>
      <Navbar></Navbar>
      <div>  <Outlet></Outlet>   </div>
       
    </div>
  )
}
