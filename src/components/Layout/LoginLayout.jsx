import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Header";

const LoginLayout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default LoginLayout;
