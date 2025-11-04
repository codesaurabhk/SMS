import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "../../assets/images/logo.jpeg";
import {
  LuLayoutDashboard,
  LuSchool,
  LuUser,
  LuFileChartColumnIncreasing,
  LuSettings,
  LuBusFront,
  LuUserPlus,
  LuClipboardList,
} from "react-icons/lu";
import {
  PiStudent,
  PiBuildingApartmentLight,
  PiClockClockwiseFill,
} from "react-icons/pi";
import { BsPersonVcard } from "react-icons/bs";
import { IoSchoolOutline } from "react-icons/io5";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";
import { MdOutlineLocalLibrary } from "react-icons/md";
import { RiShieldUserLine } from "react-icons/ri";

function Sidebar() {
  const navItems = [
    { path: "/", label: "Dashboard", icon: <LuLayoutDashboard /> },
    { path: "/campus-setup", label: "Campus Setup", icon: <LuSchool /> },
    { path: "/user-management-system", label: "User Management", icon: <LuUser /> },
    { path: "/students", label: "Students", icon: <PiStudent /> },
    { path: "/teachers", label: "Teachers", icon: <FaChalkboardTeacher /> },
    { path: "/academic-setup", label: "Academic Setup", icon: <IoSchoolOutline /> },
    { path: "/lead-management-system", label: "Lead Management System", icon: <LuUserPlus /> },
    { path: "/hr-management", label: "HR Management", icon: <BsPersonVcard /> },
    { path: "/account-management", label: "Account Management", icon: <FaRegCreditCard /> },
    { path: "/academic-management", label: "Academic Management", icon: <LuClipboardList /> },
    { path: "/library", label: "Library", icon: <MdOutlineLocalLibrary /> },
    { path: "/dormitory", label: "Dormitory", icon: <PiBuildingApartmentLight /> },
    { path: "/transportation", label: "Transportation", icon: <LuBusFront /> },
    { path: "/academic-history", label: "Academic History", icon: <PiClockClockwiseFill /> },
    { path: "/admin-module", label: "Admin Module", icon: <RiShieldUserLine /> },
    { path: "/settings", label: "Settings", icon: <LuSettings /> },
    { path: "/reports", label: "Reports", icon: <LuFileChartColumnIncreasing /> },
  ];

  return (
    <>
    {/* Left side */}
    <div className="h-100">
      <div className="d-flex justify-content-center align-items-center">
        <img src={Logo} alt="logo" className="img-fluid p-3" />
      </div>

      <div className="d-flex flex-column gap-2 mt-4 px-3 pages-linkage">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) => `text-white text-decoration-none fs-6 d-flex justify-content-left align-items-center gap-2 p-2 btn ${ isActive ? "btn-primary rounded-2" : "bttn" }` }
          >
            {item.icon} <span className="link-head" style={{width:'200px',overflowX:'auto',textAlign:'left'}}>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
    </>
  );
}

export default Sidebar;
