import React from "react";
import Header from "../Pages/Header";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Pages/Footer";
import LoadingSpinner from "../Pages/LoadingSpinner";

const ChefDetailsLayout = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default ChefDetailsLayout;
