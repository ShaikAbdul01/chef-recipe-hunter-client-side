import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Pages/Header";

function App() {

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
}

export default App;
