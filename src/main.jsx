import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import MainLayout from "./components/Layout/MainLayout.jsx";
import Banner from "./components/Pages/Home/Banner.jsx";
import LoginLayout from "./components/Layout/LoginLayout.jsx";
import Login from "./components/Pages/Login.jsx";
import Register from "./components/Pages/Register.jsx";
import Blog from "./components/Pages/Blog.jsx";
import About from "./components/Pages/About.jsx";
import ChefDetailsLayout from "./components/Layout/ChefDetailsLayout.jsx";
import Chefs from "./components/Pages/Home/Chefs.jsx";
import ChefDetails from "./components/Pages/ChefDetails.jsx";
import ErrorPage from "./components/Pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
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
        path: "/about",
        element: <About></About>,
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
        /*  loader: ({ params }) =>
          fetch(`http://localhost:5000/chefs/${params.id}`), */
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
        element: <ChefDetails></ChefDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params.id}`),
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
