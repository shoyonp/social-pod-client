import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import DashboardLayout from "../layouts/DashboardLayout";
import AddPost from "../pages/Dashboard/AddPost/AddPost";
import MyProfile from "../pages/Dashboard/MyProfile.jsx/MyProfile";
import MyPost from "../pages/Dashboard/MyPost/MyPost";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Membership from "../layouts/Membership";
import Payment from "../pages/Payment/Payment";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>page not found</h2>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "membership",
        element: <Membership></Membership>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      // user routes
      {
        path: "addPost",
        element: <AddPost></AddPost>,
      },
      {
        path: "myProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "myPost",
        element: <MyPost></MyPost>,
      },
      // adin routes
    ],
  },
]);

export default routes;
