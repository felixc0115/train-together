import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/Root";
import HomePage from "./pages/Home";
import ProgramsPage from "./pages/Programs";
import MyProgramsPage from "./pages/MyPrograms";
import AddProgramPage from "./pages/AddProgram";
import ProgramDetailsPage from "./pages/ProgramDetails";
import LoginPage from "./pages/Login";
import CreateAccountPage from "./pages/CreateAccount";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllProgramsData } from "./store/program-actions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "create-account", element: <CreateAccountPage /> },
      { path: "programs", element: <ProgramsPage /> },
      { path: "my-programs", element: <MyProgramsPage /> },
      { path: "add-program", element: <AddProgramPage /> },
      { path: "programs/:programId", element: <ProgramDetailsPage /> },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProgramsData());
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
