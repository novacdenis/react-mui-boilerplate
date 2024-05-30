import { Navigate, createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "@/components/layouts";
import { RouteLoadingIndicator } from "@/components/shared";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLoadingIndicator />,
    children: [
      {
        index: true,
        element: <h1>Home</h1>,
      },
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            lazy: () => import("./auth/login"),
          },
          {
            path: "register",
            lazy: () => import("./auth/register"),
          },
          {
            path: "forgot-password",
            lazy: () => import("./auth/forgot-password"),
          },
          {
            path: "reset-password",
            lazy: () => import("./auth/reset-password"),
          },
          {
            path: "*",
            element: <Navigate replace to="/auth/login" />,
          },
        ],
      },
    ],
  },
]);
