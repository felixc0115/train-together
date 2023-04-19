import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const RootPage = () => {
  return (
    <div className="h-min">
      <MainNavigation />
      <main className=" h-min mt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootPage;
