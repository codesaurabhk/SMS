import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Badge, Button, Form, Card } from "react-bootstrap";
import { FaSchool } from "react-icons/fa";
import { FaSchoolFlag } from "react-icons/fa6";
import { TfiFilter } from "react-icons/tfi";
import { LuCloudDownload } from "react-icons/lu";

const StudentDashboard = () => {
  const [students] = useState([
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
      fee: "Due",
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
      fee: "Paid",
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
      fee: "Due",
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
      fee: "Paid",
      attendance: "59%",
    },
  ]);

  const getBadgeColor = (status) => {
    switch (status) {
      case "Active":
        return "success";
      case "Transferred":
        return "secondary";
      case "Drop Out":
        return "danger";
      case "Alumni":
        return "info";
      case "Inactive":
        return "warning";
      default:
        return "light";
    }
  };

  const overviewCards = [
    { title: "Total Students", value: 6000, color: "#c79d7c" },
    { title: "Active Students", value: 6000, color: "#d8c26a" },
    { title: "Pending Fees", value: 6000, color: "#e18bd9" },
    { title: "Students Not Assigned Class Yet", value: 6000, color: "#8DDE6F" },
    { title: "Inactive/Transferred Students", value: 6000, color: "#7fb5f0" },
    { title: "Low Attendance Students", value: 6000, color: "#ec8a8a" },
  ];

  return (
    <div
      className="container-fluid bg-light p-4"
      style={{ minHeight: "100vh", backgroundColor: "#f2f7fa" }}
    >

      {/*  Student Overview Section */}
      <Card className="shadow border-0 mb-4  rounded-4">
        <Card.Body >
          <h3 className="fw-semibold mb-4">📊 Student Overview</h3>
          <div className="d-flex flex-wrap gap-4">
            {overviewCards.map((card, index) => (
              <Card
                key={index}
                className="shadow-sm rounded-4 d-flex flex-row align-items-center position-relative"
                style={{
                  width: "234px",
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
                    < FaSchool style={{ fontSize: "2rem", color: card.color }} />
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
          <div className="d-flex gap-2"><h5 className="mb-0  fw-semibold">Students</h5> <span  style={{"backgroundColor":"#F7FAFF", "color":"#0070FF","marginTop":"2px"}} >40</span></div>
          <div className="d-flex gap-2">
            
            <Button variant="outline-secondary" size="sm">
             <LuCloudDownload /> Export
            </Button>
            <Button variant="outline-secondary" size="sm">
             <TfiFilter /> Filter 
            </Button>
            <Button className="rounded" variant="primary" size="sm">
              +  Add
            </Button>
          </div>
        </Card.Header>

        <Card.Body className="p-0">
          <Table hover responsive className="align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>S.N.</th>
                <th>Photo</th>
                <th>Student Name</th>
                <th>Class</th>
                <th>Section</th>
                <th>DOA</th>
                <th>Admission No.</th>
                <th>Parent Contact</th>
                <th>Status</th>
                <th>Class Teacher</th>
                <th>Fee Status</th>
                <th>Att %</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.id}>
                  <td>{s.id}</td>
                  <td>
                    <img
                      src={s.photo}
                      alt="student"
                      className="rounded-circle"
                      width="35"
                      height="35"
                    />
                  </td>
                  <td>{s.name}</td>
                  <td>{s.class}</td>
                  <td>{s.section}</td>
                  <td>{s.doa}</td>
                  <td>{s.admissionNo}</td>
                  <td>{s.contact}</td>
                  <td>
                    <Badge bg={getBadgeColor(s.status)}>{s.status}</Badge>
                  </td>
                  <td>{s.teacher}</td>
                  <td>
                    <Badge bg={s.fee === "Paid" ? "success" : "danger"}>
                      {s.fee}
                    </Badge>
                  </td>
                  <td>{s.attendance}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>

        <Card.Footer className=" d-flex justify-content-between align-items-center">
          <Button variant="outline-secondary" size="sm">
            ‹ Back
          </Button>
          <span className="text-muted">Page 101 of 1250</span>
          <Button variant="outline-secondary" size="sm">
            Next ›
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default StudentDashboard;
