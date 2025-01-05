import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layOut/mainLayout/MainLayout";
import Home from "../pages/home/home-layout/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
      path:'',
      element:<Home></Home>
    },]
  },
]);
export default router;
