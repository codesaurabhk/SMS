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

const Teachers = () => {
  const navigate = useNavigate();
  const [students] = useState(
 [
  {
    "sn": 1,
    "photo": "https://i.pravatar.cc/40?img=1",
    "teacherName": "Mr. Sumit Sharma",
    "assignedClass": "6",
    "assignedSection": "C",
    "department": "Science",
    "employeeId": "ws454353424",
    "contactNo": "8786 765 765",
    "status": "Active",
    "doj": "15th June 2013",
    "portalAccess": "Enabled",
    "attPercent": "59%"
  },
  {
    "sn": 2,
    "photo": "https://i.pravatar.cc/40?img=2",
    "teacherName": "Mrs. Shalini Mehta",
    "assignedClass": "12",
    "assignedSection": "B",
    "department": "Arts",
    "employeeId": "ws454353424",
    "contactNo": "9123456780",
    "status": "Resigned",
    "doj": "15th July 2013",
    "portalAccess": "Enabled",
    "attPercent": "59%"
  },
  {
    "sn": 3,
    "photo": "https://i.pravatar.cc/40?img=3",
    "teacherName": "Mrs. Riya Sharma",
    "assignedClass": "7",
    "assignedSection": "A",
    "department": "Chemistry",
    "employeeId": "ws454353424",
    "contactNo": "9811122333",
    "status": "On Leave",
    "doj": "15th June 2013",
    "portalAccess": "Disabled",
    "attPercent": "58%"
  },
  {
    "sn": 4,
    "photo": "https://i.pravatar.cc/40?img=4",
    "teacherName": "Mrs. Ananya Nair",
    "assignedClass": "NA",
    "assignedSection": "NA",
    "department": "Biology",
    "employeeId": "ws454353424",
    "contactNo": "9765432109",
    "status": "Active",
    "doj": "15th June 2013",
    "portalAccess": "Enabled",
    "attPercent": "59%"
  },
  {
    "sn": 5,
    "photo": "https://i.pravatar.cc/40?img=5",
    "teacherName": "Mrs. Poonam Verma",
    "assignedClass": "4",
    "assignedSection": "B",
    "department": "Physics",
    "employeeId": "ws454353424",
    "contactNo": "9090909090",
    "status": "Active",
    "doj": "15th June 2013",
    "portalAccess": "Enabled",
    "attPercent": "59%"
  },
  {
    "sn": 6,
    "photo": "https://i.pravatar.cc/40?img=6",
    "teacherName": "Mrs. Kavya Iyer",
    "assignedClass": "1",
    "assignedSection": "A",
    "department": "Maths",
    "employeeId": "ws454353424",
    "contactNo": "9898989898",
    "status": "Active",
    "doj": "15th June 2013",
    "portalAccess": "Enabled",
    "attPercent": "59%"
  },
  {
    "sn": 7,
    "photo": "https://i.pravatar.cc/40?img=7",
    "teacherName": "Mrs. Kavita Joshi",
    "assignedClass": "2",
    "assignedSection": "D",
    "department": "English",
    "employeeId": "ws454353424",
    "contactNo": "9823234455",
    "status": "Active",
    "doj": "15th June 2013",
    "portalAccess": "Enabled",
    "attPercent": "59%"
  },
  {
    "sn": 8,
    "photo": "https://i.pravatar.cc/40?img=8",
    "teacherName": "Mr. Manoj Batra",
    "assignedClass": "9",
    "assignedSection": "C",
    "department": "Junior",
    "employeeId": "ws454353424",
    "contactNo": "9933445566",
    "status": "Active",
    "doj": "15th June 2013",
    "portalAccess": "Enabled",
    "attPercent": "59%"
  },
  {
    "sn": 9,
    "photo": "https://i.pravatar.cc/40?img=9",
    "teacherName": "Mrs. Radhika Sen",
    "assignedClass": "9",
    "assignedSection": "C",
    "department": "Hindi/Regional Lang",
    "employeeId": "ws454353424",
    "contactNo": "9001122333",
    "status": "Active",
    "doj": "15th June 2013",
    "portalAccess": "Enabled",
    "attPercent": "59%"
  },
  {
    "sn": 10,
    "photo": "https://i.pravatar.cc/40?img=10",
    "teacherName": "Mrs. Anjali Desai",
    "assignedClass": "9",
    "assignedSection": "C",
    "department": "History",
    "employeeId": "ws454353424",
    "contactNo": "9856741230",
    "status": "Active",
    "doj": "15th June 2013",
    "portalAccess": "Enabled",
    "attPercent": "59%"
  },
  {
    "sn": 11,
    "photo": "https://i.pravatar.cc/40?img=11",
    "teacherName": "Mrs. Megha Pillai",
    "assignedClass": "9",
    "assignedSection": "C",
    "department": "Home Science",
    "employeeId": "ws454353424",
    "contactNo": "9786543210",
    "status": "Active",
    "doj": "15th June 2013",
    "portalAccess": "Enabled",
    "attPercent": "59%"
  },
  {
    "sn": 12,
    "photo": "https://i.pravatar.cc/40?img=12",
    "teacherName": "Mr. Karan Malhotra",
    "assignedClass": "9",
    "assignedSection": "C",
    "department": "Sycology",
    "employeeId": "ws454353424",
    "contactNo": "9129876546",
    "status": "Active",
    "doj": "15th June 2013",
    "portalAccess": "Enabled",
    "attPercent": "59%"
  },
  {
    "sn": 13,
    "photo": "https://i.pravatar.cc/40?img=13",
    "teacherName": "Mrs. Neelam Gupta",
    "assignedClass": "9",
    "assignedSection": "C",
    "department": "Commerce",
    "employeeId": "ws454353424",
    "contactNo": "9965677888",
    "status": "Active",
    "doj": "15th June 2013",
    "portalAccess": "Enabled",
    "attPercent": "50%"
  },
  {
    "sn": 14,
    "photo": "https://i.pravatar.cc/40?img=14",
    "teacherName": "Mrs. Ishita Choudhary",
    "assignedClass": "9",
    "assignedSection": "C",
    "department": "Law",
    "employeeId": "ws454353424",
    "contactNo": "9956677888",
    "status": "Active",
    "doj": "15th June 2013",
    "portalAccess": "Enabled",
    "attPercent": "59%"
  },
  {
    "sn": 15,
    "photo": "https://i.pravatar.cc/40?img=15",
    "teacherName": "Mrs. Priya Menon",
    "assignedClass": "9",
    "assignedSection": "C",
    "department": "Accounts",
    "employeeId": "ws454353424",
    "contactNo": "9123456788",
    "status": "Active",
    "doj": "15th June 2013",
    "portalAccess": "Enabled",
    "attPercent": "59%"
  },
  {
    "sn": 16,
    "photo": "https://i.pravatar.cc/40?img=16",
    "teacherName": "Mr. Ramesh Joshi",
    "assignedClass": "9",
    "assignedSection": "C",
    "department": "Economics",
    "employeeId": "ws454353424",
    "contactNo": "9890011223",
    "status": "Active",
    "doj": "15th June 2013",
    "portalAccess": "Enabled",
    "attPercent": "59%"
  },
  {
    "sn": 17,
    "photo": "https://i.pravatar.cc/40?img=17",
    "teacherName": "Mrs. Tanvi Kapoor",
    "assignedClass": "9",
    "assignedSection": "C",
    "department": "Social Science",
    "employeeId": "ws454353424",
    "contactNo": "9776655443",
    "status": "Active",
    "doj": "15th June 2013",
    "portalAccess": "Enabled",
    "attPercent": "59%"
  },
  {
    "sn": 18,
    "photo": "https://i.pravatar.cc/40?img=18",
    "teacherName": "Mr. Sanjay D’Souza",
    "assignedClass": "9",
    "assignedSection": "C",
    "department": "Computer",
    "employeeId": "ws454353424",
    "contactNo": "9023456789",
    "status": "Active",
    "doj": "15th June 2013",
    "portalAccess": "Enabled",
    "attPercent": "59%"
  },
  {
    "sn": 19,
    "photo": "https://i.pravatar.cc/40?img=19",
    "teacherName": "Mrs. Meera Kulkarni",
    "assignedClass": "9",
    "assignedSection": "C",
    "department": "Humanities",
    "employeeId": "ws454353424",
    "contactNo": "9911223344",
    "status": "Active",
    "doj": "15th June 2013",
    "portalAccess": "Enabled",
    "attPercent": "59%"
  },
  {
    "sn": 20,
    "photo": "https://i.pravatar.cc/40?img=20",
    "teacherName": "Mr. Vikram Rao",
    "assignedClass": "9",
    "assignedSection": "C",
    "department": "Environmental studies",
    "employeeId": "ws454353424",
    "contactNo": "9887766554",
    "status": "Active",
    "doj": "15th June 2013",
    "portalAccess": "Enabled",
    "attPercent": "59%"
  },
  {
    "sn": 21,
    "photo": "https://i.pravatar.cc/40?img=21",
    "teacherName": "Mrs. Aarti Chhabra",
    "assignedClass": "9",
    "assignedSection": "C",
    "department": "Physical Education",
    "employeeId": "ws454353424",
    "contactNo": "9877001122",
    "status": "Active",
    "doj": "15th June 2013",
    "portalAccess": "Enabled",
    "attPercent": "59%"
  },
  {
    "sn": 22,
    "photo": "https://i.pravatar.cc/40?img=22",
    "teacherName": "Mr. Harish Patel",
    "assignedClass": "9",
    "assignedSection": "C",
    "department": "Music",
    "employeeId": "ws454353424",
    "contactNo": "9810098765",
    "status": "Active",
    "doj": "15th June 2013",
    "portalAccess": "Enabled",
    "attPercent": "59%"
  },
  {
    "sn": 23,
    "photo": "https://i.pravatar.cc/40?img=23",
    "teacherName": "Mrs. Sneha Pillai",
    "assignedClass": "9",
    "assignedSection": "C",
    "department": "Dance",
    "employeeId": "ws454353424",
    "contactNo": "9933221100",
    "status": "Active",
    "doj": "15th June 2013",
    "portalAccess": "Enabled",
    "attPercent": "59%"
  }
]


);
  const [showLowAttendance, setShowLowAttendance] = useState(false);
  const [openMenuId, setOpenMenuId] = useState(null);

  const overviewCards = [
    { title: "Total Teachers", value: 6000, color: "#c79d7c" },
    { title: "Active Teachers Today", value: 6000, color: "#d8c26a" },
    { title: "Teachers On Leave Today", value: 6000, color: "#e18bd9" },
    { title: "New Joiners This Month", value: 6000, color: "#8DDE6F" },
    { title: "Class Assigned Teachers", value: 6000, color: "#7fb5f0" },
    { title: "Portal Access Teachers", value: 6000, color: "#ec8a8a" },
  ];

  const feeColors = {
    Enabled: { bg: "#ECFDF3", color: "#00B515" },
    Disabled: { bg: "#FDECEC", color: "#911808" },
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
            <h3 className=" mb-1"> Teacher Overview</h3>
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
                    <h4 className="fw-semibold text-dark mb-0 ms-4">{card.value}</h4>
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
            <h5 className="mb-0  fw-semibold">Teachers</h5>
            <span
              style={{
                backgroundColor: "#F7FAFF",
                color: "#0070FF",
                marginTop: "2px",
              }}
            >
              40
            </span>
          </div>
          <div className="d-flex gap-3  ">
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
            
            <input  className="rounded-3 text-secondary"  variant="outline-secondary" type="date" size="sm"
              style={{ padding: "4px 14px", border: "1px solid #1C1C1C29" }} />
           
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
            <Link to="/addteachers" style={{ textDecoration: "none" }}>
              <Button
                className="rounded-3"
                variant="primary"
                size="sm"
                style={{ padding: "4px 18px" }}
              >
                + Add New Teacher
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
                <th>Teacher Name</th>
                <th>Assigned <br />Class</th>
                <th>Assigned<br /> Section</th>
                <th>Department</th>
                <th>Employee ID</th>
                <th>Contact No.</th>
                <th>Status</th>
                <th>DOJ</th>
                <th>Portal Access</th>
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
                  <td className="text-secondary">{s.sn}</td>
                  <td>
                    <img
                      src={s.photo}
                      alt="student"
                      className="rounded-circle"
                      width="35"
                      height="35"
                    />
                  </td>
                  <td className="text-secondary">{s.teacherName}</td>
                  <td className="text-secondary">{s.assignedClass}</td>
                  <td className="text-secondary">{s.assignedSection}</td>
                  <td className="text-secondary text-wrap" style={{ maxWidth: "120px" }}> {s.department}</td>

                  <td className="text-secondary">{s.employeeId}</td>
                  <td className="text-secondary">{s.contactNo}</td>
                  <td className="text-secondary">
                    {s.status}
                    {/* <Badge bg={getBadgeColor(s.status)}>{s.status}</Badge> */}
                  </td>
                  <td className="text-secondary">{s.doj}</td>
                  <td>
                    <span
                      style={{
                        display: "inline-block",
                        backgroundColor: feeColors[s.portalAccess]?.bg || "#ccc",
                        color: feeColors[s.portalAccess]?.color || "#000",
                        padding: "2px 8px",
                        borderRadius: "8px",
                        fontWeight: "500",
                        fontSize: "0.85rem",
                      }}
                    >
                      {s.portalAccess}
                    </span>
                  </td>
                  <td className="text-secondary">{s.attPercent}</td>
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

export default Teachers;

