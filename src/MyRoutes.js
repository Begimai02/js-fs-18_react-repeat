import React from "react";
import { Route, Routes } from "react-router-dom";
import Add from "./Pages/Add";
import List from "./Pages/List";
import Edit from "./Pages/Edit";
import Home from "./Pages/Home";
import MainLayouts from "./layouts/MainLayouts";

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/list" element={<List />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
