import React from "react";
import { Link, Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <>
      {/* left side */}
        <div>
            <Link to="/">Dashboard</Link>
        </div>
        <div>
            <Link to="/students">Students</Link>
        </div>
    </>
  );
}

export default Sidebar;
