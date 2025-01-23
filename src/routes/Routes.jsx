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
import PostsComment from "../pages/Dashboard/PostsComment/PostsComment";
import AdminProfile from "../pages/Dashboard/AdminProfile/AdminProfile";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import Activities from "../pages/Dashboard/Activities/Activities";
import Announcement from "../pages/Dashboard/Announcement/Announcement";

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
      {
        path: "comments/:postId",
        element: <PostsComment></PostsComment>,
      },
      // admin routes
      {
        path: "adminProfile",
        element: <AdminProfile></AdminProfile>,
      },
      {
        path: "manageUser",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "activities",
        element: <Activities></Activities>,
      },
      {
        path: "makeAnnouncement",
        element: <Announcement></Announcement>,
      },
    ],
  },
]);

export default routes;
