import NavbarSec_1 from "../../components/nav/NavbarSec_1";
import NavbarSec_2 from "../../components/nav/NavbarSec_2";

export default function Navbar() {
  return (
    <div className="fixed z-50 w-full">
      {/* nav-section-1 */}
      <NavbarSec_1></NavbarSec_1>
      {/* nav-section-2 menu */}
      <NavbarSec_2></NavbarSec_2>
    </div>
  );
}
