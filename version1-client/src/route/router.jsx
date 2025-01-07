import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layOut/mainLayout/MainLayout";
import Home from "../pages/home/home-layout/Home";
import Details from "../pages/details/details-layout/Details";
import BestSellingContainer from "../pages/best-selling-page/best-selling-layout/BestSellingContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "detail/:id",
        element: <Details></Details>,
      },
      {
        path: "bestSell",
        element: <BestSellingContainer></BestSellingContainer>,
      },
    ],
  },
]);
export default router;
