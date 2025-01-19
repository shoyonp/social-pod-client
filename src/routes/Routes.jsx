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
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>page not found</h2>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "membership",
        element: (
          <PrivateRoute>
            <Membership></Membership>
          </PrivateRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
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
        path: "/dashboard/addPost",
        element: (
          <PrivateRoute>
            <AddPost></AddPost>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/myProfile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/myPost",
        element: (
          <PrivateRoute>
            <MyPost></MyPost>
          </PrivateRoute>
        ),
      },
      // admin routes
      {
        path: "/dashboard/adminProfile",
        element: <h2>on proccess</h2>,
      },
      {
        path: "/dashboard/manageUser",
        element: <h2>on proccess</h2>,
      },
      {
        path: "/dashboard/reportedComment",
        element: <h2>on proccess</h2>,
      },
      {
        path: "/dashboard/makeAnnouncement",
        element: <h2>on proccess</h2>,
      },
    ],
  },
]);

export default routes;
