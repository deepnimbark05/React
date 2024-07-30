import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/index";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
