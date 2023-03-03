import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const RootPage = () => {
  return (
    <div className="flex-col min-h-screen	">
      <MainNavigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootPage;
