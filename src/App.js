import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/Root";
import HomePage from "./pages/Home";
import ProgramsPage from "./pages/Programs";
import MyProgramsPage from "./pages/MyPrograms";
import AddProgramPage from "./pages/AddProgram";
import ProgramDetailsPage from "./pages/ProgramDetails";
import LoginPage from "./pages/Login";
import createAccountPage from "./pages/createAccount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "createAccount", element: <createAccountPage /> },
      { path: "programs", element: <ProgramsPage /> },
      { path: "myPrograms", element: <MyProgramsPage /> },
      { path: "addProgram", element: <AddProgramPage /> },
      { path: "programs/:programId", element: <ProgramDetailsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
