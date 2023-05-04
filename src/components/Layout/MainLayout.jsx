import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Header";
import Banner from "../Pages/Home/Banner";
import Footer from "../Pages/Footer";
import Feature from "../Pages/Feature";
import Reviews from "../Pages/Reviews";

const MainLayout = () => {
  return (
    <div className="">
      <Header></Header>
      <Banner></Banner>
      <Outlet></Outlet>
      <Feature></Feature>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
