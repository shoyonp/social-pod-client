import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet-async";

const MainLayout = () => {
  return (
    <div>
      <Helmet>
        <title>Social Pod | Home</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="pt-16">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
