import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  const location = useLocation();
  const noNavbarFooter = location.pathname.includes("login");

  return (
    <div>
      {noNavbarFooter || <Navbar />}
      <Outlet />
      {noNavbarFooter || <Footer />}
    </div>
  );
};

export default Main;
