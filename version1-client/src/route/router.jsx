import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layOut/mainLayout/MAinLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },
]);
export default router;
