import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layOut/mainLayout/MainLayout";
import Home from "../pages/home/home-layout/Home";
import Details from "../pages/details/details-layout/Details";
import BestSellingContainer from "../pages/best-selling-page/best-selling-layout/BestSellingContainer";
import NewProductContainer from "../pages/new arrival page/new-arrival-layout/NewProductContainer";
import BrandPage from "../pages/brand page/BrandPage";
import ReviewContainer from "../pages/review page/review-page-layout/ReviewContainer";
import Login from "../pages/login/Login";

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
        path: "bestProduct",
        element: <BestSellingContainer></BestSellingContainer>,
      },
      {
        path: "newProduct",
        element: <NewProductContainer></NewProductContainer>,
      },
      {
        path: "brand",
        element: <BrandPage></BrandPage>,
      },
      {
        path: "review",
        element: <ReviewContainer></ReviewContainer>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
]);
export default router;
