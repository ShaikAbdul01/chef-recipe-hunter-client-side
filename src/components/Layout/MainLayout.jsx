import React from "react";

import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Pages/Header";
import Banner from "../Pages/Home/Banner";
import Footer from "../Pages/Footer";
import LoadingSpinner from "../Pages/LoadingSpinner";
import Feature from "../Pages/Feature";
import About from "../Pages/About";

const MainLayout = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Outlet></Outlet>
      <Feature></Feature>
      <About></About>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
