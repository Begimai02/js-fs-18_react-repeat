import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import MyNavbar from "../Components/Navbar/Navbar";

const MainLayouts = () => {
  return (
    <div
      style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}
    >
      <MyNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayouts;
