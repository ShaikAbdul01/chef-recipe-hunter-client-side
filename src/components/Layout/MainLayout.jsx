import React from "react";

import { Outlet } from "react-router-dom";
import Header from "../Pages/Header";
import Banner from "../Pages/Home/Banner";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>

      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
