import React from "react";
import background from "../../assets/images/background.png";
import school from "../../assets/images/school.png";
import logo from "../../assets/images/logo.png";

function CampusSetup() {
  return (
    <div className="dashboard">
      <div className="campus-header position-relative">
        {/* Background */}
        <div>
          <span>Internation</span>
        </div>
        <img src={background} alt="Background" className="campus-bg" />

        {/* School building */}
        <img
          src={school}
          alt="School Building"
          className="position-absolute school-img"
        />

        {/* Logo */}
        <img src={logo} alt="Logo" className="position-absolute logo-img" />
      </div>
    </div>
  );
}

export default CampusSetup;
