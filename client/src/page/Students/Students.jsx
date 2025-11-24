import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Badge, Button, Form, Card } from "react-bootstrap";
import { FaSchool } from "react-icons/fa";
import { FaSchoolFlag } from "react-icons/fa6";
import { TfiFilter } from "react-icons/tfi";
import { LuCloudDownload } from "react-icons/lu";
import { PiDotsThreeVertical } from "react-icons/pi";
import { MdOutlineIndeterminateCheckBox } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

const Students = () => {
  const navigate = useNavigate();
  const [students] = useState(
    [
    {
      id: 1,
      photo: "https://i.pravatar.cc/40?img=1",
      name: "Neha Pal",
      class: "5",
      section: "C",
      doa: "15th June 2013",
      admissionNo: "WS454353424",
      contact: "9876543210",
      status: "Active",
      teacher: "Anjali Mishra",
      fee: "Paid",
      attendance: "59%",
    },
    {
      id: 2,
      photo: "https://i.pravatar.cc/40?img=2",
      name: "Neha Kapoor",
      class: "7",
      section: "A",
      doa: "15th June 2013",
      admissionNo: "WS454353424",
      contact: "9123456780",
      status: "Transferred",
      teacher: "Rakesh Sharma",
      fee: "Pending",
      attendance: "59%",
    },
    {
      id: 3,
      photo: "https://i.pravatar.cc/40?img=3",
      name: "Riya Mehta",
      class: "8",
      section: "A",
      doa: "15th June 2013",
      admissionNo: "WS454353424",
      contact: "9811223344",
      status: "Drop Out",
      teacher: "Pooja Nair",
      fee: "Overdue",
      attendance: "59%",
    },
    {
      id: 4,
      photo: "https://i.pravatar.cc/40?img=4",
      name: "Arjun Verma",
      class: "8",
      section: "C",
      doa: "15th June 2013",
      admissionNo: "WS454353424",
      contact: "9765432190",
      status: "Alumni",
      teacher: "Sandeep Verma",
      fee: "Cancelled",
      attendance: "59%",
    },
    {
      id: 5,
      photo: "https://i.pravatar.cc/40?img=5",
      name: "Sneha Nair",
      class: "4",
      section: "B",
      doa: "15th June 2013",
      admissionNo: "WS454353424",
      contact: "9090909090",
      status: "Inactive",
      teacher: "Neelam Gupta",
      fee: "UnderReview",
      attendance: "59%",
    },
  ]);
  const [showLowAttendance, setShowLowAttendance] = useState(false);
  const [openMenuId, setOpenMenuId] = useState(null);

  const overviewCards = [
    { title: "Total Students", value: 6000, color: "#c79d7c" },
    { title: "Active Students", value: 6000, color: "#d8c26a" },
    { title: "Pending Fees", value: 6000, color: "#e18bd9" },
    // { title: "Students Not Assigned Class Yet", value: 6000, color: "#8DDE6F" },
    { title: "Inactive/Transferred Students", value: 6000, color: "#7fb5f0" },
    { title: "Low Attendance Students", value: 6000, color: "#ec8a8a" },
  ];

  const feeColors = {
    Paid: { bg: "#ECFDF3", color: "#00B515" },
    Refunded: { bg: "#E4EFFF", color: "#2865C0" },
    Pending: { bg: "#FDECEC", color: "#911808" },
    Overdue: { bg: "#FF9999", color: "#911808" },
    "Partially Paid": { bg: "#FDECEC", color: "#911808" },
    Cancelled: { bg: "#F2EEC2", color: "#696103" },
    UnderReview: { bg: "#FEE9FA", color: "#FF50D3" },
    "Payment Failed": { bg: "#FF9999", color: "#911808" },
  };

  const handleCardClick = (title) => {
    if (title === "Low Attendance Students") {
      navigate("/studentTable");
    }
  };
  
  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  return (
    <div
      className="container-fluid bg-light p-4"
      style={{ minHeight: "100vh", backgroundColor: "#f2f7fa" }}
    >
      {/*  Student Overview Section */}
      <Card className="shadow border-0 mb-4  rounded-4">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-semibold mb-1"> Student Overview</h3>
          </div>

          <div className="d-flex flex-wrap gap-4">
            {overviewCards.map((card, index) => (
              <Card
                key={index}
                onClick={() => handleCardClick(card.title)}
                className="shadow-sm rounded-4 d-flex flex-row align-items-center position-relative"
                style={{
                  width: "232px",
                  height: "108px",
                  backgroundColor: "#fff",
                  border: "1px solid #E3E3E3",
                  overflow: "hidden",
                }}
              >
                {/* Left Color Strip */}
                <div
                  style={{
                    width: "8px",
                    height: "100%",
                    backgroundColor: card.color,
                    borderTopLeftRadius: "12px",
                    borderBottomLeftRadius: "12px",
                    position: "absolute",
                    left: 0,
                    top: 0,
                  }}
                ></div>

                {/* Content Area */}
                <div className="d-flex justify-content-between align-items-center w-100 px-3 py-3">
                  {/* Left Text Section */}
                  <div className="text-start">
                    <Card.Title className="fs-6 fw-semibold text-dark mb-1">
                      {card.title}
                    </Card.Title>
                    <h4 className="fw-semibold mb-0 ms-4">{card.value}</h4>
                  </div>

                  {/* Divider + Right Icon */}
                  <div
                    className="d-flex flex-column align-items-center justify-content-center ps-3"
                    style={{ borderLeft: "1px solid #E3E3E3" }}
                  >
                    <FaSchool style={{ fontSize: "2rem", color: card.color }} />
                    <div
                      className="mt-2 px-2 py-1 rounded-pill text-success fw-semibold"
                      style={{
                        backgroundColor: "#FAF5F5",
                        fontSize: "0.75rem",
                        width: "50px",
                      }}
                    >
                      20% ↑
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card.Body>
      </Card>

      {/* 👩‍🎓 Students Table */}
      <Card className="shadow border-0 rounded-3 bg-white">
        <Card.Header className="d-flex justify-content-between align-items-center bg-white border-0 rounded-3 py-3">
          <div className="d-flex gap-2 ms-1">
            <h5 className="mb-0  fw-semibold">Students</h5>{" "}
            {/* <span
              style={{
                backgroundColor: "#F7FAFF",
                color: "#0070FF",
                marginTop: "2px",
              }}
            >
              40
            </span> */}
          </div>
          <div className="d-flex gap-3  ">
            <Form.Select
              size="sm"
              className="rounded-3 text-secondary"
              style={{
                width: "100px",
                border: "1px solid #1C1C1C29",
                padding: "4px 10px",
              }}
            >
              <option value="">All Class</option>
              <option value="1">Class 1</option>
              <option value="2">Class 2</option>
              <option value="3">Class 3</option>
            </Form.Select>
            <Button
              className="rounded-3 "
              variant="outline-secondary"
              size="sm"
              style={{ padding: "4px 14px", border: "1px solid #1C1C1C29" }}
            >
              <LuCloudDownload
                className=" fs-5"
                style={{ transform: "rotate(180deg)" }}
              />{" "}
              &nbsp; Export
            </Button>
            <Button
              className="rounded-3 "
              variant="outline-secondary"
              size="sm"
              style={{ padding: "4px 14px", border: "1px solid #1C1C1C29" }}
            >
              <LuCloudDownload className=" fs-5" /> &nbsp; Import
            </Button>
            <Button
              className="rounded-3 "
              variant="outline-secondary"
              size="sm"
              style={{ padding: "4px 14px", border: "1px solid #1C1C1C29" }}
            >
              <TfiFilter className="fw-semibold fs-5" /> &nbsp; Filter
            </Button>
            <Link to="/addstudents" style={{ textDecoration: "none" }}>
              <Button
                className="rounded-3 "
                variant="primary"
                size="sm"
                style={{ padding: "4px 18px" }}
              >
                + Add New Student
              </Button>
            </Link>
          </div>
        </Card.Header>

        <Card.Body className="p-0">
          <Table hover responsive className="align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th style={{ fontSize: "20px", color: "#007AFF" }}>
                  <MdOutlineIndeterminateCheckBox />
                </th>
                <th>S.N.</th>
                <th>Photo</th>
                <th>Student Name</th>
                <th>Class</th>
                <th>Section</th>
                <th>DOB</th>
                <th>Admission No.</th>
                <th>Parent Contact</th>
                <th>Status</th>
                <th>Class Teacher</th>
                <th>Fee Status</th>
                <th>Att %</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.id} onClick={()=>navigate(`/studentProfile/${s.id}`)} >
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="text-secondary">{s.id}</td>
                  <td>
                    <img
                      src={s.photo}
                      alt="student"
                      className="rounded-circle"
                      width="35"
                      height="35"
                    />
                  </td>
                  <td className="text-secondary">{s.name}</td>
                  <td className="text-secondary">{s.class}</td>
                  <td className="text-secondary">{s.section}</td>
                  <td className="text-secondary">{s.doa}</td>
                  <td className="text-secondary">{s.admissionNo}</td>
                  <td className="text-secondary">{s.contact}</td>
                  <td className="text-secondary">
                    {s.status}
                    {/* <Badge bg={getBadgeColor(s.status)}>{s.status}</Badge> */}
                  </td>
                  <td className="text-secondary">{s.teacher}</td>
                  <td>
                    <span
                      style={{
                        display: "inline-block",
                        backgroundColor: feeColors[s.fee]?.bg || "#ccc",
                        color: feeColors[s.fee]?.color || "#000",
                        padding: "2px 8px",
                        borderRadius: "8px",
                        fontWeight: "500",
                        fontSize: "0.85rem",
                      }}
                    >
                      {s.fee}
                    </span>
                  </td>
                  <td className="text-secondary">{s.attendance}</td>
                  <td className="position-relative">
                    <div className="dropdown ">
                      <PiDotsThreeVertical
                        className="cursor-pointer"
                        data-bs-toggle="dropdown"
                        style={{ cursor: "pointer" }}
                      />

                      <ul
                        className="dropdown-menu shadow-sm border-0"
                        style={{ borderRadius: "8px", minWidth: "80px" }}
                      >
                        <li>
                          <button
                            className="dropdown-item"
                            style={{ borderRadius: "6px" }}
                            onMouseEnter={(e) =>
                              (e.target.style.background = "#cfe2ff")
                            }
                            onMouseLeave={(e) =>
                              (e.target.style.background = "transparent")
                            }
                            onMouseDown={(e) =>
                              (e.target.style.background = "#cfe2ff")
                            }
                          >
                            Edit
                          </button>
                        </li>

                        <li>
                          <button
                            className="dropdown-item"
                            style={{ borderRadius: "6px" }}
                            onMouseEnter={(e) =>
                              (e.target.style.background = "#cfe2ff")
                            }
                            onMouseLeave={(e) =>
                              (e.target.style.background = "transparent")
                            }
                            onMouseDown={(e) =>
                              (e.target.style.background = "#cfe2ff")
                            }
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>

        <Card.Footer className=" d-flex justify-content-between align-items-center">
          <Button
            className="rounded-3 "
            variant="outline-secondary"
            size="sm"
            style={{ border: "1px solid #1C1C1C29" }}
          >
            <FaAngleLeft /> Back
          </Button>
          <span className="text-muted">Page 101 of 1250</span>
          <Button
            className="rounded-3 "
            variant="outline-secondary"
            size="sm"
            style={{ border: "1px solid #1C1C1C29" }}
          >
            Next <FaChevronRight />
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Students;
