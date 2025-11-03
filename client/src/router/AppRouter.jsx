import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../page/Dashboard/Dashboard";
import Sidebar from "../page/Sidebar/Sidebar";
import Menu from "../page/Sidebar/Menu";
import Students from "../page/Students/Students";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route path="sidebar" element={<Sidebar />} />
          <Route path="" element={<Dashboard />} />
          <Route path="students" element={<Students />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRouter;
