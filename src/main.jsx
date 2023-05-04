import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import MainLayout from "./components/Layout/MainLayout.jsx";
import LoginLayout from "./components/Layout/LoginLayout.jsx";
import Login from "./components/Pages/Login.jsx";
import Register from "./components/Pages/Register.jsx";
import Blog from "./components/Pages/Blog.jsx";
import ChefDetailsLayout from "./components/Layout/ChefDetailsLayout.jsx";
import Chefs from "./components/Pages/Home/Chefs.jsx";
import ChefDetails from "./components/Pages/ChefDetails.jsx";
import ErrorPage from "./components/Pages/ErrorPage.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import LoadingSpinner from "./components/Pages/LoadingSpinner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Navigate to="/chef"></Navigate>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/loader",
        element: <LoadingSpinner></LoadingSpinner>,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: ":id",
        element: <Chefs></Chefs>,
      },
    ],
  },
  {
    path: "details",
    element: <ChefDetailsLayout></ChefDetailsLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <ChefDetails></ChefDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chef-recipe-hunter-server-shaikabdul01.vercel.app/details/${params.id}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
