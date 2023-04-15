import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const RootPage = () => {
  return (
    <div className="h-screen">
      <MainNavigation />
      <main className="mt-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootPage;
