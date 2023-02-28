import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const RootPage = () => {
  return (
    <div>
      <MainNavigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootPage;
