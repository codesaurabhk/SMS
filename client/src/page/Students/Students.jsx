import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Badge, Button, Form, Card } from "react-bootstrap";
import { FaSchool } from "react-icons/fa";

const StudentDashboard = () => {
  const [students] = useState([
    { id: 1, photo: "https://i.pravatar.cc/40?img=1", name: "Neha Pal", class: "5", section: "C", doa: "15th June 2013", admissionNo: "WS454353424", contact: "9876543210", status: "Active", teacher: "Anjali Mishra", fee: "Paid", attendance: "59%" },
    { id: 2, photo: "https://i.pravatar.cc/40?img=2", name: "Neha Kapoor", class: "7", section: "A", doa: "15th June 2013", admissionNo: "WS454353424", contact: "9123456780", status: "Transferred", teacher: "Rakesh Sharma", fee: "Due", attendance: "59%" },
    { id: 3, photo: "https://i.pravatar.cc/40?img=3", name: "Riya Mehta", class: "8", section: "A", doa: "15th June 2013", admissionNo: "WS454353424", contact: "9811223344", status: "Drop Out", teacher: "Pooja Nair", fee: "Paid", attendance: "59%" },
    { id: 4, photo: "https://i.pravatar.cc/40?img=4", name: "Arjun Verma", class: "8", section: "C", doa: "15th June 2013", admissionNo: "WS454353424", contact: "9765432190", status: "Alumni", teacher: "Sandeep Verma", fee: "Due", attendance: "59%" },
    { id: 5, photo: "https://i.pravatar.cc/40?img=5", name: "Sneha Nair", class: "4", section: "B", doa: "15th June 2013", admissionNo: "WS454353424", contact: "9090909090", status: "Inactive", teacher: "Neelam Gupta", fee: "Paid", attendance: "59%" },
  ]);

  const getBadgeColor = (status) => {
    switch (status) {
      case "Active": return "success";
      case "Transferred": return "secondary";
      case "Drop Out": return "danger";
      case "Alumni": return "info";
      case "Inactive": return "warning";
      default: return "light";
    }
  };

  const overviewCards = [
    { title: "Total Students", value: 6000, color: "#c79d7c" },
    { title: "Active Students", value: 6000, color: "#d8c26a" },
    { title: "Pending Fees", value: 6000, color: "#e18bd9" },
    { title: "Inactive/Transferred Students", value: 6000, color: "#7fb5f0" },
    { title: "Low Attendance Students", value: 6000, color: "#ec8a8a" },
  ];

  return (
    <div className="container-fluid bg-light p-4" style={{ minHeight: "100vh" }}>
      {/* 🧭 Fixed Header */}
      <header className="d-flex justify-content-between align-items-center bg-white shadow-sm p-3 mb-4 rounded-3 sticky-top" style={{ zIndex: 10 }}>
        <h5 className="fw-bold mb-0">Student Management Dashboard</h5>
        <div className="d-flex align-items-center gap-3">
          <Form.Control type="search" placeholder="Search students..." style={{ width: "250px" }} />
          <img src="https://i.pravatar.cc/35" alt="User" className="rounded-circle border" />
        </div>
      </header>

      {/* 📊 Student Overview Section */}
      <Card className="shadow-sm border-0 rounded-4 mb-4">
        <Card.Body className="bg-white">
          <h5 className="fw mb-4">Student Overview</h5>
          <div className="d-flex flex-wrap gap-3">
            {overviewCards.map((card, index) => (
              <Card
                key={index}
                className="border-0 shadow-sm rounded-4 d-flex flex-row align-items-center"
                style={{
                  width: "230px",
                  borderLeft: `8px solid ${card.color}`,
                  backgroundColor: "#E3E3E3",
                }}
              >
                <div className="p-3 flex-grow-1 text-start">
                  <Card.Title className="fs-6 fw-semibold text-dark">{card.title}</Card.Title>
                  <h4 className="">{card.value}</h4>
                  <small className="text-success fw-semibold">20% ↑</small>
                </div>
                <div
                  className="me-3"
                  style={{
                    color: card.color,
                    fontSize: "2rem",
                  }}
                >
                  <FaSchool />
                </div>
              </Card>
            ))}
          </div>
        </Card.Body>
      </Card>

      {/* 👩‍🎓 Students Table */}
      <Card className="shadow-sm border-0 rounded-4">
        <Card.Header className="d-flex justify-content-between align-items-center bg-white">
          <h5 className="mb-0 fw-bold">Students</h5>
          <div className="d-flex gap-2">
            <Form.Select size="sm" style={{ width: "150px" }}>
              <option>All Classes</option>
              <option>Class 8</option>
              <option>Class 9</option>
            </Form.Select>
            <Button variant="outline-secondary" size="sm">Export</Button>
            <Button variant="outline-secondary" size="sm">Import</Button>
            <Button variant="primary" size="sm">+ Add New Student</Button>
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
                  <td><img src={s.photo} alt="student" className="rounded-circle" width="35" height="35" /></td>
                  <td>{s.name}</td>
                  <td>{s.class}</td>
                  <td>{s.section}</td>
                  <td>{s.doa}</td>
                  <td>{s.admissionNo}</td>
                  <td>{s.contact}</td>
                  <td><Badge bg={getBadgeColor(s.status)}>{s.status}</Badge></td>
                  <td>{s.teacher}</td>
                  <td><Badge bg={s.fee === "Paid" ? "success" : "danger"}>{s.fee}</Badge></td>
                  <td>{s.attendance}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>

        <Card.Footer className="bg-white d-flex justify-content-between align-items-center">
          <Button variant="outline-secondary" size="sm">‹ Back</Button>
          <span className="text-muted">Page 101 of 1250</span>
          <Button variant="outline-secondary" size="sm">Next ›</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default StudentDashboard;
