import React from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../../assets/images/logo.jpeg";
import { LuLayoutDashboard,LuSchool, LuUser, } from "react-icons/lu";
import { IoSchoolOutline } from "react-icons/io5";

function Sidebar() {
  return (
    <>
      {/* left side */}
        <div className="d-flex justify-content-center align-item-center">
          <img src={Logo} alt="logo" className="" />
        </div>
        <div className="d-flex flex-column gap-2 mt-4 px-3">
            <Link to="/" className="text-white text-decoration-none fs-5 d-flex align-items-center gap-2"> <LuLayoutDashboard /> Dashboard</Link>
            <Link to="/students" className="text-white text-decoration-none fs-5 d-flex align-items-center gap-2"> <LuSchool /> Campus Setup</Link>
            <Link to="/students" className="text-white text-decoration-none fs-5 d-flex align-items-center gap-2"> <LuUser /> User Management</Link>
            <Link to="/students" className="text-white text-decoration-none fs-5 d-flex align-items-center gap-2"> <IoSchoolOutline /> Students</Link>
        </div>
    </>
  );
}

export default Sidebar;
