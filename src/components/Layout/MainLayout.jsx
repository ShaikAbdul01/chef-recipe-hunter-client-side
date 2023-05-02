import React from "react";

import { Outlet } from "react-router-dom";
import Header from "../Pages/Header";
import Banner from "../Pages/Home/Banner";
import Footer from "../Pages/Footer";
import Chefs from "../Pages/Home/Chefs";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
