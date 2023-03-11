import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/Root";
import HomePage from "./pages/Home";
import ProgramsPage from "./pages/Programs";
import MyProgramsPage from "./pages/MyPrograms";
import AddProgramPage from "./pages/AddProgram";
import ProgramDetailsPage from "./pages/ProgramDetails";
import LoginPage from "./pages/Login";
// eslint-disable-next-line no-unused-vars
import createAccountPage from "./pages/CreateAccount";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProgramData } from "./store/program-actions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "create-account", element: <createAccountPage /> },
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
    dispatch(fetchProgramData());
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
