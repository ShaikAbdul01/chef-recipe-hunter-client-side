import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Pages/Header";
import Footer from "../Pages/Footer";
import LoadingSpinner from "../Pages/LoadingSpinner";

const LoginLayout = () => {
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

export default LoginLayout;
