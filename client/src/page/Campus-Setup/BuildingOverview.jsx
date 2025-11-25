import React from "react";
import { Table, Badge, Button, Form, Card } from "react-bootstrap";
import { TfiFilter } from "react-icons/tfi";
import { LuCloudDownload } from "react-icons/lu";
import { PiDotsThreeVertical } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

const floorData = [
  {
    id: 1,
    floorName: "Ground Floor",
    totalRooms: 12,
    roomTypes: "Classrooms, Labs, Office",
    area: "4500 sq.ft",
    status: "Active",
  },
  {
    id: 2,
    floorName: "First Floor",
    totalRooms: 10,
    roomTypes: "Classrooms, Staff Rooms",
    area: "4200 sq.ft",
    status: "Active",
  },
  {
    id: 3,
    floorName: "Second Floor",
    totalRooms: 8,
    roomTypes: "Library, Reading Room",
    area: "3800 sq.ft",
    status: "Under Maintenance",
  },
  {
    id: 4,
    floorName: "Third Floor",
    totalRooms: 6,
    roomTypes: "Labs, Project Rooms",
    area: "3600 sq.ft",
    status: "Inactive",
  },
  {
    id: 5,
    floorName: "Fourth Floor",
    totalRooms: 5,
    roomTypes: "Conference Hall, Seminar Hall",
    area: "3000 sq.ft",
    status: "Active",
  },
];


function CampusOverview() {
  return (
    <div className="bg-white rounded p-4">
      <h1 className="campush-header">Building Overview</h1>
      <div className="p-2 mt-4 ">
        <div className="row mt-4">
          <div className="col d-flex flex-column gap-2">
            <label className="campush-overview-label">Building Name</label>
            <span className="campush-overview-data">Main acedemic Block</span>
          </div>
          <div className="col d-flex flex-column gap-2">
            <label className="campush-overview-label">Building Code</label>
            <span className="campush-overview-data">BLK001</span>
          </div>
          <div className="col d-flex flex-column gap-2">
            <label className="campush-overview-label">Total Floors</label>
            <span className="campush-overview-data">5</span>
          </div>
          <div className="col d-flex flex-column gap-2">
            <label className="campush-overview-label">
              Assigned Campus
            </label>
            <span className="campush-overview-data">Delhi Campus</span>
          </div>
          <div className="col d-flex flex-column gap-2">
            <label className="campush-overview-label">Contruction Year</label>
            <span className="campush-overview-data">2025</span>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col d-flex flex-column gap-2">
            <label className="campush-overview-label">
              Status
            </label>
            <span className="campush-overview-data">2</span>
          </div>
          <div className="col d-flex flex-column gap-2">
            <label className="campush-overview-label">Remarks</label>
            <span className="campush-overview-data">Remarks</span>
          </div>
          <div className="col d-flex flex-column gap-2">
            <label className="campush-overview-label">Created On</label>
            <span className="campush-overview-data">15-Aug-2024</span>
          </div>
          <div className="col d-flex flex-column gap-2">
            <label className="campush-overview-label">Created Time</label>
            <span className="campush-overview-data">12 : 50 A.M</span>
          </div>
          <div className="col d-flex flex-column gap-2">
            <label className="campush-overview-label">Created By</label>
            <span className="campush-overview-data">Diwakar</span>
          </div>
        </div>
      </div>

      <Card className="shadow border-0 rounded-3 bg-white mt-3">
        <Card.Header className="d-flex justify-content-between align-items-center bg-white border-0 rounded-3 py-3">
          <div className="d-flex gap-2 ms-1">
            <h5 className="mb-0  fw-semibold">Floor List</h5>
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
                <th>Floor Name</th>
                <th>Total Rooms</th>
                <th>Types of Rooms</th>
                <th>Total Area </th>
                <th>Status</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {floorData.map((bld, index) => (
                <tr key={bld.id}>
                  <td>{index + 1}</td>
                  <td>{bld.floorName}</td>
                  <td>{bld.totalRooms}</td>
                  <td>{bld.roomTypes}</td>
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
                  <td>
                    <Link to="/FloorOverview" style={{color:"#BC8869"}}>
                    <span>View Floor Details</span>
                    </Link>
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
    </div>
  );
}

export default CampusOverview;
