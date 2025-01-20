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
import PostDetail from "../pages/PostDetail/PostDetail";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>page not found</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "post/:id",
        element: <PostDetail></PostDetail>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/post/${params.id}`),
      },
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
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
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
      // admin routes
      {
        path: "adminProfile",
        element: <h2>on proccess</h2>,
      },
      {
        path: "manageUser",
        element: <h2>on proccess</h2>,
      },
      {
        path: "reportedComment",
        element: <h2>on proccess</h2>,
      },
      {
        path: "makeAnnouncement",
        element: <h2>on proccess</h2>,
      },
    ],
  },
]);

export default routes;
