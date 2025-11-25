import React from "react";
import { Table, Badge, Button, Form, Card } from "react-bootstrap";
import { TfiFilter } from "react-icons/tfi";
import { LuCloudDownload } from "react-icons/lu";
import { PiDotsThreeVertical } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

const buildingData = [
  {
    id: 1,
    name: "Main Academic Block",
    code: "MAB-01",
    floors: 5,
    campus: "Central Campus",
    type: "Academic",
    year: 2015,
    status: "Active",
  },
  {
    id: 2,
    name: "Administration Block",
    code: "ADM-02",
    floors: 3,
    campus: "North Campus",
    type: "Administrative",
    year: 2010,
    status: "Under Maintenance",
  },
  {
    id: 3,
    name: "Sports Complex",
    code: "SPX-03",
    floors: 2,
    campus: "West Campus",
    type: "Sports",
    year: 2018,
    status: "Active",
  },
  {
    id: 4,
    name: "Hostel A",
    code: "HST-A",
    floors: 6,
    campus: "South Campus",
    type: "Hostel",
    year: 2012,
    status: "Inactive",
  },
  {
    id: 5,
    name: "Library Building",
    code: "LIB-05",
    floors: 4,
    campus: "Central Campus",
    type: "Library",
    year: 2016,
    status: "Active",
  },
];

function CampusOverview() {
  return (
    <div className="bg-white rounded p-4">
      <h1 className="campush-header">Campush Overview</h1>
      <div className="p-2 mt-4 ">
        <div className="row mt-4">
          <div className="col d-flex flex-column gap-2">
            <label className="campush-overview-label">Total no. of Block</label>
            <span className="campush-overview-data">05</span>
          </div>
          <div className="col d-flex flex-column gap-2">
            <label className="campush-overview-label">Block Code</label>
            <span className="campush-overview-data">BLK001</span>
          </div>
          <div className="col d-flex flex-column gap-2">
            <label className="campush-overview-label">Block Type</label>
            <span className="campush-overview-data">Acedemic</span>
          </div>
          <div className="col d-flex flex-column gap-2">
            <label className="campush-overview-label">
              Block Head \ Incharge
            </label>
            <span className="campush-overview-data">Jitu</span>
          </div>
          <div className="col d-flex flex-column gap-2">
            <label className="campush-overview-label">Contruction</label>
            <span className="campush-overview-data">2025</span>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col d-flex flex-column gap-2">
            <label className="campush-overview-label">
              Numbers of Entrances/Exits
            </label>
            <span className="campush-overview-data">2</span>
          </div>
          <div className="col d-flex flex-column gap-2">
            <label className="campush-overview-label">Length (m)</label>
            <span className="campush-overview-data">50 m</span>
          </div>
          <div className="col d-flex flex-column gap-2">
            <label className="campush-overview-label">Width (m)</label>
            <span className="campush-overview-data">25 m</span>
          </div>
          <div className="col d-flex flex-column gap-2">
            <label className="campush-overview-label">Total Area (sq.m)</label>
            <span className="campush-overview-data">1250 (sq.m)</span>
          </div>
          <div className="col d-flex flex-column gap-2">
            <label className="campush-overview-label">CCTV Installed</label>
            <span className="campush-overview-data">Yes</span>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col d-flex flex-column gap-2">
            <label className="campush-overview-label">
              Fire Safety Availability
            </label>
            <span className="campush-overview-data">Available</span>
          </div>
          <div className="col d-flex flex-column gap-2">
            <label className="campush-overview-label">Status</label>
            <span className="campush-overview-data">Active</span>
          </div>
          <div className="col d-flex flex-column gap-2">
            <label className="campush-overview-label">Remarks</label>
            <span className="campush-overview-data">Remarks</span>
          </div>
          <div className="col d-flex flex-column gap-2">
            <label className="campush-overview-label">Created on</label>
            <span className="campush-overview-data">15-Aug-2025</span>
          </div>
          <div className="col d-flex flex-column gap-2">
            <label className="campush-overview-label">Created Time</label>
            <span className="campush-overview-data">10 : 24 AM</span>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col d-flex flex-column gap-2">
            <label className="campush-overview-label">Created By</label>
            <span className="campush-overview-data">Mr. Diwakar</span>
          </div>
          <div className="col d-flex flex-column gap-2"></div>
          <div className="col d-flex flex-column gap-2"></div>
          <div className="col d-flex flex-column gap-2"></div>
          <div className="col d-flex flex-column gap-2"></div>
        </div>
      </div>

      <Card className="shadow border-0 rounded-3 bg-white mt-3">
        <Card.Header className="d-flex justify-content-between align-items-center bg-white border-0 rounded-3 py-3">
          <div className="d-flex gap-2 ms-1">
            <h5 className="mb-0  fw-semibold">Building List</h5>
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
                <th>Building Name</th>
                <th>Building Code</th>
                <th>Total Floors</th>
                <th>Assigned Campus</th>
                <th>Building Type</th>
                <th>Construction Year</th>
                <th>Status</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {buildingData.map((bld, index) => (
                <tr key={bld.id}>
                  <td>{index + 1}</td>
                  <td>{bld.name}</td>
                  <td>{bld.code}</td>
                  <td>{bld.floors}</td>
                  <td>{bld.campus}</td>
                  <td>{bld.type}</td>
                  <td>{bld.year}</td>

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
                    <Link to="/BuildingOverview" style={{color:"#BC8869"}}>
                    <span>View Building Details</span>
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
