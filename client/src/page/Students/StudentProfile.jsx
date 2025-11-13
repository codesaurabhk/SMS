import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { FaUserGraduate } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";

const StudentProfile = () => {
  return (
    <div
      className="container-fluid p-3"
      style={{ background: "#f2f7fa", minHeight: "100vh" }}
    >
      <div className="row g-4">
        {/* LEFT SIDEBAR */}
        <div className="col-10 col-md-2" style={{ flex: "0 0 19%" }}>
          <Card className="shadow border-0 rounded-4 p-3">
            {/* Profile */}
            <div className="text-center">
              <img
                src="https://i.pravatar.cc/200?img=8"
                alt="profile"
                className="rounded-circle mb-3 mt-3"
                width={95}
                height={95}
              />
              <h5 className="fw-bold mb-0">Neha Pal</h5>
              <p className="text-secondary mb-0 small">Neha.Pal@DPS.com</p>
              <p style={{ color: "#A1A1A1" }} className="small">
                Last update: 12-11-2020
              </p>
            </div>

            {/* Sidebar Menu */}
            <ListGroup variant="flush" className="mt-3">
              {/* <ListGroup.Item className="p-3 rounded-3 bg-primary text-white fw-semibold"> */}
              {/* Basic Details */}
              {/* </ListGroup.Item> */}

              {[
                "Basic Details ",
                "Academic Performance",
                "Academic Details",
                "Fees & Billing Info",
                "RFID & Access Card",
                "Transport Details",
                "Hostel / Dormitory Details",
                "Parent/Guardian Info",
                "Uploaded Documents",
                "Additional Info",
              ].map((item, index) => (
                <ListGroup.Item key={index} className="p-3">
                  <RiGraduationCapFill className="me-2" />
                  {/* <FaUserGraduate  />  */}
                  {item}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </div>

        {/* MIDDLE MAIN INFO CARD */}
        <div className="col-12 col-md-8" style={{ flex: "0 0 63%" }}>
          <Card
            className="shadow border-0 rounded-4 p-4"
            style={{ minHeight: "450px" }}
          >
            <h5 className="fw-semibold mb-4">
              Identification & Basic Information
            </h5>

            <div className="row mb-3">
              <div className="col-4">
                <p className="fw-semibold mb-0">Gender</p>
                <p className="text-secondary">Female</p>
              </div>
              <div className="col-4">
                <p className="fw-semibold mb-0">Date of Birth</p>
                <p className="text-secondary">16th March 2000</p>
              </div>
              <div className="col-4">
                <p className="fw-semibold mb-0">Blood Group</p>
                <p className="text-secondary">B+</p>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-4">
                <p className="fw-semibold mb-0">Nationality</p>
                <p className="text-secondary">Indian</p>
              </div>
              <div className="col-4">
                <p className="fw-semibold mb-0">Religion</p>
                <p className="text-secondary">Hindiusm</p>
              </div>
              <div className="col-4">
                <p className="fw-semibold mb-0">Category / Caste</p>
                <p className="text-secondary">OBC</p>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-4">
                <p className="fw-semibold mb-0">Aadhar Number</p>
                <p className="text-secondary">222555555555</p>
              </div>
              <div className="col-4">
                <p className="fw-semibold mb-0">Birth Certificate No.</p>
                <p className="text-secondary">256102452555254552</p>
              </div>
              <div className="col-4">
                <p className="fw-semibold mb-0">Place Of Birth</p>
                <p className="text-secondary">Allahabad</p>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-4">
                <p className="fw-semibold mb-0">Mother Tongue</p>
                <p className="text-secondary">Hindi</p>
              </div>
              <div className="col-4">
                <p className="fw-semibold mb-0">Medical Conditions</p>
                <p className="text-secondary">No/Yes e.g., asthma</p>
              </div>
              <div className="col-4">
                <p className="fw-semibold mb-0">Disability</p>
                <p className="text-secondary">Yes/no</p>
              </div>
            </div>
          </Card>
        </div>

        {/* RIGHT SMALL PROFILE CARD */}
        <div className="col-12 col-md-2" style={{ flex: "0 0 18%" }}>
          <Card className="shadow border-0 rounded-4 p-3 text-center  ">
            <img
              src="https://i.pravatar.cc/200?img=8"
              className="rounded-circle mb-3 ms-3 mt-4"
              width={205}
              height={199}
            />

            <h5 className="fw-bold fs-4">Neha Pal</h5>
            <p className="text-secondary">Student ID : ST65432</p>

            <div className="text-start mt-0 px-3">
              <p className="fw-semibold text-dark mb-1">E-Mail ID</p>
              <p className="text-secondary">neha.pal@DPS.com</p>

              <p className="fw-semibold text-dark mb-1">Class & Section</p>
              <p className="text-secondary">Class 5th C</p>

              <p className="fw-semibold text-dark mb-1">Roll No.</p>
              <p className="text-secondary">63</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
