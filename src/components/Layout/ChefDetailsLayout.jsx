import React from "react";
import Header from "../Pages/Header";
import { Outlet } from "react-router-dom";

const ChefDetailsLayout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default ChefDetailsLayout;
