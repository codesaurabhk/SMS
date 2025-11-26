import React, { useState } from "react";
import { Table, Badge, Button, Form, Card } from "react-bootstrap";
import { TfiFilter } from "react-icons/tfi";
import { LuCloudDownload } from "react-icons/lu";
import { PiDotsThreeVertical } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

const roomData = [
  {
    id: 1,
    roomName: "Room 101",
    roomType: "Classroom",
    assignedFloor: "Ground Floor",
    capacity: 40,
    facilities: "Projector, Whiteboard, Fans",
    area: "550 sq.ft",
    status: "Active",
  },
  {
    id: 2,
    roomName: "Lab 201",
    roomType: "Computer Lab",
    assignedFloor: "First Floor",
    capacity: 32,
    facilities: "Computers, AC, High-Speed Internet",
    area: "600 sq.ft",
    status: "Active",
  },
  {
    id: 3,
    roomName: "Library-1",
    roomType: "Library",
    assignedFloor: "Second Floor",
    capacity: 120,
    facilities: "Bookshelves, Reading Tables, AC",
    area: "1200 sq.ft",
    status: "Under Maintenance",
  },
  {
    id: 4,
    roomName: "Seminar Hall",
    roomType: "Seminar",
    assignedFloor: "Third Floor",
    capacity: 80,
    facilities: "Projector, Sound System, Stage",
    area: "900 sq.ft",
    status: "Inactive",
  },
  {
    id: 5,
    roomName: "Room 402",
    roomType: "Staff Room",
    assignedFloor: "Fourth Floor",
    capacity: 20,
    facilities: "Tables, Chairs, Lockers",
    area: "500 sq.ft",
    status: "Active",
  },
];

function CampusOverview() {
  const [viewFloorPopup, setViewFloorPopup] = useState(false);

  const handleViewFloorPopup = () => {
    setViewFloorPopup(true);
  };

  const handleViewFloorPopupClose = () => {
    setViewFloorPopup(false);
  };

  return (
    <div className="bg-white rounded p-4">
      <h1 className="campush-header">Floor Overview</h1>
      <div className="p-2 mt-4 ">
        <div className="row mt-4">
          <div className="col d-flex flex-column gap-2">
            <label className="campush-overview-label">Floor Name</label>
            <span className="campush-overview-data">ground Floor</span>
          </div>
          <div className="col d-flex flex-column gap-2">
            <label className="campush-overview-label">Total Rooms</label>
            <span className="campush-overview-data">15</span>
          </div>
          <div className="col d-flex flex-column gap-2">
            <label className="campush-overview-label">Types of Rooms</label>
            <span className="campush-overview-data">Class Room</span>
          </div>
          <div className="col d-flex flex-column gap-2">
            <label className="campush-overview-label">Total Area</label>
            <span className="campush-overview-data"> 35 Sq.m</span>
          </div>
          <div className="col d-flex flex-column gap-2">
            <label className="campush-overview-label">Status</label>
            <span className="campush-overview-data">Active</span>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col d-flex flex-column gap-2">
            <label className="campush-overview-label">Created On</label>
            <span className="campush-overview-data">25-Nov-2025</span>
          </div>
          <div className="col d-flex flex-column gap-2">
            <label className="campush-overview-label">Created Times</label>
            <span className="campush-overview-data">10 : 24 A.M</span>
          </div>
          <div className="col d-flex flex-column gap-2">
            <label className="campush-overview-label">Created By</label>
            <span className="campush-overview-data">Diwakar</span>
          </div>
          <div className="col d-flex flex-column gap-2"></div>
          <div className="col d-flex flex-column gap-2"></div>
        </div>
      </div>

      <Card className="shadow border-0 rounded-3 bg-white mt-4">
        <Card.Header className="d-flex justify-content-between align-items-center bg-white border-0 rounded-3 py-3">
          <div className="d-flex gap-2 ms-1">
            <h5 className="mb-0  fw-semibold">Room List</h5>
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
            <Button
              className="rounded-3 "
              variant="outline-secondary"
              size="sm"
              style={{ padding: "4px 14px", border: "1px solid #1C1C1C29" }}
            >
              <LuCloudDownload
                className=" fs-5"
                style={{ transform: "rotate(180deg)" }}
              />
              &nbsp; Export
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
                + Add New Building
              </Button>
            </Link>
          </div>
        </Card.Header>

        <Card.Body className="p-0">
          <Table hover responsive className="align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>S.N.</th>
                <th>Room Name/Number</th>
                <th>Rooms Type</th>
                <th>Assigned Floor</th>
                <th>Capacity </th>
                <th>Facilities</th>
                <th>total Area</th>
                <th>Status</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {roomData.map((bld, index) => (
                <tr key={bld.id}>
                  <td>{index + 1}</td>
                  <td>{bld.roomName}</td>
                  <td>{bld.roomType}</td>
                  <td>{bld.assignedFloor}</td>
                  <td>{bld.capacity}</td>
                  <td>{bld.facilities}</td>
                  <td>{bld.area}</td>
                  <td>
                    <span
                      className={`badge ${
                        bld.status === "Active"
                          ? "text-success"
                          : bld.status === "Inactive"
                          ? "text-danger"
                          : "text-warning"
                      }`}
                    >
                      {bld.status}
                    </span>
                  </td>

                  <td
                    style={{ color: "#BC8869" }}
                    onClick={handleViewFloorPopup}
                  >
                    <span>View Floor Details</span>
                  </td>
                  <td>
                    <PiDotsThreeVertical />
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
      {viewFloorPopup && (
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "fixed",
            top: 0,
            right: 0,
            background: "#1d1c1c63",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius:'8px',
              width:'639px',
              height:"400px"
            }}
          >
            <h1 className="campush-header">Room Overview</h1>
            <div className="p-2 mt-4 ">
              <div className="row mt-2">
              <div className="col d-flex flex-column gap-2">
                <label className="campush-overview-label">Floor Name / Number</label>
                <span className="campush-overview-data">Science lab</span>
              </div>
              <div className="col d-flex flex-column gap-2">
                <label className="campush-overview-label">Assigned Floor</label>
                <span className="campush-overview-data">Ground Floor</span>
              </div>
              <div className="col d-flex flex-column gap-2">
                <label className="campush-overview-label">Types of Rooms</label>
                <span className="campush-overview-data">Class Room</span>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col d-flex flex-column gap-2">
                <label className="campush-overview-label">Capacity</label>
                <span className="campush-overview-data">40</span>
              </div>
              <div className="col d-flex flex-column gap-2">
                <label className="campush-overview-label">Facilities</label>
                <span className="campush-overview-data">A.C, Projecter Class Rooms</span>
              </div>
              <div className="col d-flex flex-column gap-2">
                <label className="campush-overview-label">Area</label>
                <span className="campush-overview-data">35 Sq.m</span>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col d-flex flex-column gap-2">
                <label className="campush-overview-label">Status</label>
                <span className="campush-overview-data">Active</span>
              </div>
              <div className="col d-flex flex-column gap-2">
                <label className="campush-overview-label">Created On</label>
                <span className="campush-overview-data">15-Aug-2025</span>
              </div>
              <div className="col d-flex flex-column gap-2">
                <label className="campush-overview-label">Created Time</label>
                <span className="campush-overview-data">10:24 A.M</span>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col d-flex flex-column gap-2">
                <label className="campush-overview-label">Created By</label>
                <span className="campush-overview-data">Diwakar Kumar</span>
              </div>
              <div className="col d-flex flex-column gap-2">
              </div>
              <div className="col d-flex flex-column gap-2">
              </div>
            </div>
            </div>
            <div className="d-flex justify-content-end " 
              onClick={handleViewFloorPopupClose}>
              <span className="border rounded p-2">Cancel</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CampusOverview;
