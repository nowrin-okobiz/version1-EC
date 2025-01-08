import { Outlet } from "react-router-dom";
import Navbar from "../../shared/navbar/Navbar";
import Footer from "../../shared/footer/Footer";
import ScrollToTop from "../../components/scroll to top/ScrollToTop";

export default function MainLayout() {
  return (
    <div>
      <ScrollToTop />
      <Navbar></Navbar>
      <div className="min-h-screen ">
        {" "}
        <Outlet></Outlet>{" "}
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
