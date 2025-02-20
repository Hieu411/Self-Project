import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/home";
import Root from "./Root";
import Page404 from "../pages/page-404";
import AdminRoutes from "./AdminRoutes";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import SignIn from "../components/auth/SignInForm";
import SignUp from "../components/auth/SignUpForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        {/* <Header /> */}
        <Home />
        {/* <Footer /> */}
      </>
    ),
    errorElement: <Page404 />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  //User Routes
  {
    path: "/user",
    element: <Root />,
    children: [
      {
        path: "/user",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <div>user</div>,
          },
          {
            path: "/user/profile",
            element: <div>User Profile</div>,
          },
        ],
      },
    ],
  },
  //Admin Routes
  {
    path: "/admin",
    element: <AdminRoutes />,
    children: [
      {
        path: "/admin/dashboard",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <div>Dashboard </div>,
          },
        ],
      },
    ],
  },
]);

export default router;
