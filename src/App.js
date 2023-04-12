import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import RootPage from "./pages/Root";
import HomePage from "./pages/Home";
import ProgramsPage from "./pages/Programs";
import MyProgramsPage from "./pages/MyPrograms";
import ProgramDetailsPage from "./pages/ProgramDetails";
import LoginPage from "./pages/Login";
import CreateAccountPage from "./pages/CreateAccount.jsx";

function App() {
  const user = useSelector((state) => state.auth.user);
  console.log(user);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
        { path: "", element: <HomePage /> },
        { path: "login", element: <LoginPage /> },
        { path: "create-account", element: <CreateAccountPage /> },
        {
          path: "programs",
          element: user ? <ProgramsPage /> : <Navigate to="/login" />,
        },
        {
          path: "my-programs",
          element: user ? <MyProgramsPage /> : <Navigate to="/login" />,
        },
        {
          path: "programs/:programId",
          element: user ? <ProgramDetailsPage /> : <Navigate to="/login" />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
