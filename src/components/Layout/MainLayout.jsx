import React from "react";

import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Pages/Header";
import Banner from "../Pages/Home/Banner";
import Footer from "../Pages/Footer";
import LoadingSpinner from "../Pages/LoadingSpinner";
import Feature from "../Pages/Feature";
import Reviews from "../Pages/Reviews";

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
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
