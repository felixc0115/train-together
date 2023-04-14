import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const RootPage = () => {
  return (
    <div className="flex flex-col h-min">
      <MainNavigation />
      <main className=" mt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootPage;
