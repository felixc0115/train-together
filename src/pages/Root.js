import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};

export default RootPage;
