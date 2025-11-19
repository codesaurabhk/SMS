import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { LuUpload } from "react-icons/lu";
import { FiFile } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { RiAddLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

const floorDummyData = [
  {
    floorName: "Ground Floor",
    totalFloor: 1,
    totalArea: "800 sqft",
    roomType: "Classroom",
    status: "Active",
  },
  {
    floorName: "First Floor",
    totalFloor: 1,
    totalArea: "1200 sqft",
    roomType: "Laboratory",
    status: "Inactive",
  },
  {
    floorName: "Second Floor",
    totalFloor: 1,
    totalArea: "1500 sqft",
    roomType: "Library",
    status: "Active",
  },
];

const roomsDummydata = [
  {
    roomName: "301",
    roomType: "LAB",
    assignendFloor: "3",
    capacity: "25",
    facility: "Wifi",
    status: "Active",
  },
  {
    roomName: "600",
    roomType: "ClassRoom",
    assignendFloor: "6",
    capacity: "400",
    facility: "Smart Board",
    status: "Inactive",
  },
]

function BuildingSetup() {
  const [showFloorInputs, setShowFloorInputs] = useState(false);
  const [floorSaved, setFloorSaved] = useState(false);
  const [showRoomsInputs, setShowRoomsInputs] = useState(false);
  const [roomsSaved, setRoomsSaved] = useState(false);

  // Toggle function
  const toggleFloorInputs = () => {
    setShowFloorInputs((prev) => !prev);
  };

  const handleCancel = () => {
    setShowFloorInputs(false);
    setFloorSaved(false);
  };

  const handleSaveFloor = () => {
    setFloorSaved(true); // show table
    setShowFloorInputs(false); // hide inputs
  };

  const handelCancelRooms = () => {
    setShowRoomsInputs(false);
    setRoomsSaved(false);
  };

  const handelSaveRooms = () => {
    setRoomsSaved(true);
    setShowSaved(false);
  };

  const toggleRoomInputs = () => {
    setShowRoomsInputs((prev) => !prev);
  };

  return (
    <div className="bg-white p-4 rounded">
      <div className="d-flex justify-content-between">
        <span className="fw-semibold fs-4">Building Setup</span>
        <button className="btn btn-primary d-flex gap-2 align-items-center add-button">
          <FaPlus />
          <span>Add more Building</span>
        </button>
      </div>
      <div className="">
        {/* <=============================== Top ==========================================> */}
        <div className="row mt-3 d-flex justify-content-between">
          <div className="col d-flex flex-column">
            <span className="fw-semibold" style={{ color: "#666666" }}>
              Building Name
            </span>
            <div className="input-border rounded">
              <input
                type="text"
                className="input-form rounded w-100"
                placeholder="Main Acedemic Block"
              />
            </div>
          </div>
          <div className="col d-flex flex-column">
            <span className="fw-semibold" style={{ color: "#666666" }}>
              Block Code
            </span>
            <div className="input-border rounded">
              <input
                type="text"
                className="input-form rounded w-100"
                placeholder="MAB001"
              />
            </div>
          </div>
          <div className="col d-flex flex-column">
            <span className="fw-semibold" style={{ color: "#666666" }}>
              Building Floor
            </span>
            <div className="input-border rounded">
              <input
                type="text"
                className="input-form rounded w-100"
                placeholder="3"
              />
            </div>
          </div>
        </div>
        {/* <------------------------------ Middle --------------------------------->*/}

        <div className="row mt-3 d-flex justify-content-between">
          <div className="col d-flex flex-column">
            <span className="fw-semibold" style={{ color: "#666666" }}>
              Assign Campush
            </span>
            <div className="input-border rounded">
              <input
                type="text"
                className="input-form rounded w-100"
                placeholder="Delhi Campus"
              />
            </div>
          </div>
          <div className="col d-flex flex-column">
            <span className="fw-semibold" style={{ color: "#666666" }}>
              Building Type
            </span>
            <div className="input-border rounded">
              <select
                className="p-2 w-100 border-0"
                defaultValue=""
                style={{
                  outline: "none",
                  borderRadius: "inherit",
                  color: "#a1a1a1",
                }}
              >
                <option value="" disabled hidden className="placeholder-option">
                  Academic / Admin / Sport / Library / Hostel
                </option>
              </select>
            </div>
          </div>
          <div className="col d-flex flex-column">
            <span className="fw-semibold" style={{ color: "#666666" }}>
              Contruction Year
            </span>
            <div className="input-border rounded">
              <input
                type="text"
                className="input-form rounded w-100"
                placeholder="2010"
              />
            </div>
          </div>
        </div>

        {/* <=================================== Last ======================================> */}
        <div className="row mt-3 d-flex justify-content-between">
          <div className="col d-flex flex-column">
            <span className="fw-semibold" style={{ color: "#666666" }}>
              Status
            </span>
            <div className="input-border rounded">
              <select
                className="p-2 w-100 border-0"
                defaultValue=""
                style={{
                  outline: "none",
                  borderRadius: "inherit",
                  color: "#a1a1a1",
                }}
              >
                <option value="" disabled hidden className="placeholder-option">
                  Active / Inactive
                </option>
              </select>
            </div>
          </div>
          <div className="col d-flex flex-column">
            <span className="fw-semibold" style={{ color: "#666666" }}>
              Remarks
            </span>
            <div className="input-border rounded">
              <input
                type="text"
                className="input-form rounded w-100"
                placeholder="Remarks"
              />
            </div>
          </div>
          <div className="col d-flex flex-column"></div>
        </div>
      </div>

      <div className="mt-3">
        {/* <-------------------------------------------- Attach file ------------------------------------------> */}
        <div className="d-flex gap-2 align-items-center">
          <div className="d-flex justify-content-between align-items-center p-2 border-primary border-1 border-dash mt-3 rounded gap-3 ms-2">
            <div
              className="d-flex flex-column align-items-center"
              style={{ fontSize: "12px" }}
            >
              <span className="fw-bold">Attach Photo</span>
              <span className="fw-light">Drag & Drop File here or</span>
            </div>
            <div>
              <span>
                <button className="btn btn-tranparent border border-primary border-1">
                  Browse Files
                </button>
              </span>
            </div>
          </div>
          {/* <------------------------------------------------ upload file ------------------------------------> */}
          <div>
            <div
              className="d-flex align-items-center p-2 justify-content-between mt-3 shadow-sm rounded-3"
              style={{
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                maxWidth: "450px",
                // margin: "40px auto",
              }}
            >
              {/* Left Section */}
              <div className="d-flex align-items-center gap-3">
                <div
                  className="d-flex align-items-center justify-content-center rounded-3 ms-2"
                  style={{
                    backgroundColor: "#1570EF",
                    width: "33px",
                    height: "33px",
                  }}
                >
                  {/* <FaUpload  /> */}
                  <LuUpload size={20} color="#FFFFFF" />
                </div>

                <div>
                  <h6
                    className="fw-semibold mb-1 ms-5 "
                    style={{ color: "#1e293b" }}
                  >
                    Profile Photo
                  </h6>
                  <p className="mb-2 text-secondary small">
                    File Format: PNG &nbsp;&nbsp; File Size: 12MB
                  </p>

                  {/* Progress Bar */}
                  <div
                    className="progress"
                    style={{
                      height: "6px",
                      width: "230px",
                      backgroundColor: "#e2e8f0",
                    }}
                  >
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: "90%",
                        background:
                          "linear-gradient(to left, #007bff, #60a5fa)",
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Right Section (Close button) */}
              <button
                className="btn btn-outline-light border-1 p-0 d-flex align-items-center justify-content-center"
                style={{
                  // borderRadius: "50%",
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#FFFFFD",
                  border: "1px solid #dddddfff",
                }}
              >
                <AiOutlineCloseCircle color="#667085" size={20} />
              </button>
            </div>
          </div>
          {/* <------------------------------------------------ Files ----------------------------------------------> */}
        </div>
        <div>
          <div className="mt-4 fs-5">Files</div>
          <div
            className="p-2 ms-2  rounded-3 mt-2 "
            style={{ width: "290px", border: "1px dashed #2632381A" }}
          >
            <div className="d-flex justify-content-between">
              <div>
                {" "}
                <FiFile /> Birth certificate.pdf
              </div>
              <div style={{ color: "#911808" }}>
                {" "}
                <AiFillDelete />
              </div>
            </div>
          </div>
          <div
            className="p-2 ms-2 mt-3  rounded-3 mt-2 "
            style={{ width: "290px", border: "1px dashed #2632381A" }}
          >
            {/* <div>Files</div> */}
            <div className="d-flex justify-content-between">
              <div>
                {" "}
                <FiFile /> Aadhar card.pdf
              </div>
              <div style={{ color: "#911808" }}>
                {" "}
                <AiFillDelete />
              </div>
            </div>
          </div>
          <div
            className="p-2 ms-2  rounded-3 mt-2"
            style={{ width: "290px", border: "1px dashed #2632381A" }}
          >
            <div className="d-flex justify-content-between">
              <div>
                <FiFile /> Pan card.pdf
              </div>
              <div style={{ color: "#911808" }}>
                <AiFillDelete />
              </div>
            </div>
          </div>
        </div>
        {/* <========================================= Add Buildin & Add Ground ===========================================> */}
        <div className="d-flex flex-column gap-3">
          {floorSaved && (
            <div className="mt-3">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Floor Name</th>
                    <th>Total Floor</th>
                    <th>Total Area</th>
                    <th>Room Type</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {floorDummyData.map((floor, index) => (
                    <tr key={index}>
                      <td>{floor.floorName}</td>
                      <td>{floor.totalFloor}</td>
                      <td>{floor.totalArea}</td>
                      <td>{floor.roomType}</td>
                      <td>{floor.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div className="add-building d-flex justify-content-between align-items-center w-100 flex-start mt-2 fw-semibold">
            <span className="florr-details" onClick={toggleFloorInputs}>
              Floor Details
            </span>
            {!showFloorInputs && (
              <span
                className="btn border border-1 border-primary rounded"
                onClick={toggleFloorInputs}
              >
                <RiAddLine /> Add Floor
              </span>
            )}
          </div>
          {showFloorInputs && (
            <>
              <div className="row mt-3 d-flex justify-content-between">
                <div className="col d-flex flex-column">
                  <span className="fw-semibold" style={{ color: "#666666" }}>
                    Floor Name
                  </span>
                  <div className="input-border rounded">
                    <input
                      type="text"
                      className="input-form rounded w-100"
                      placeholder="Main Acedemic Block"
                    />
                  </div>
                </div>
                <div className="col d-flex flex-column">
                  <span className="fw-semibold" style={{ color: "#666666" }}>
                    Total Floor
                  </span>
                  <div className="input-border rounded">
                    <input
                      type="text"
                      className="input-form rounded w-100"
                      placeholder="Main Acedemic Block"
                    />
                  </div>
                </div>
                <div className="col d-flex flex-column">
                  <span className="fw-semibold" style={{ color: "#666666" }}>
                    Total Area
                  </span>
                  <div className="input-border rounded">
                    <input
                      type="text"
                      className="input-form rounded w-100"
                      placeholder="Main Acedemic Block"
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-3 d-flex ">
                <div className="col d-flex flex-column">
                  <span className="fw-semibold" style={{ color: "#666666" }}>
                    Type of Rooms
                  </span>
                  <div className="input-border rounded">
                    <select
                      className="p-2 w-100 border-0"
                      defaultValue=""
                      style={{
                        outline: "none",
                        borderRadius: "inherit",
                        color: "#a1a1a1",
                      }}
                    >
                      <option
                        value=""
                        disabled
                        hidden
                        className="placeholder-option"
                      >
                        Academic / Admin / Sport / Library / Hostel
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col d-flex flex-column">
                  <span className="fw-semibold" style={{ color: "#666666" }}>
                    Status
                  </span>
                  <div className="input-border rounded">
                    <select
                      className="p-2 w-100 border-0"
                      defaultValue=""
                      style={{
                        outline: "none",
                        borderRadius: "inherit",
                        color: "#a1a1a1",
                      }}
                    >
                      <option
                        value=""
                        disabled
                        hidden
                        className="placeholder-option"
                      >
                        Academic / Admin / Sport / Library / Hostel
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col"></div>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <div className="d-flex justify-content-between align-items-center p-2 border-primary border-1 border-dash mt-3 rounded gap-3 ms-2">
                  <div
                    className="d-flex flex-column align-items-center"
                    style={{ fontSize: "12px" }}
                  >
                    <span className="fw-bold">Attach Photo</span>
                    <span className="fw-light">Drag & Drop File here or</span>
                  </div>
                  <div>
                    <span>
                      <button className="btn btn-tranparent border border-primary border-1">
                        Browse Files
                      </button>
                    </span>
                  </div>
                </div>
                {/* <------------------------------------------------ upload file ------------------------------------> */}
                <div>
                  <div
                    className="d-flex align-items-center p-2 justify-content-between mt-3 shadow-sm rounded-3"
                    style={{
                      backgroundColor: "#fff",
                      border: "1px solid #e5e7eb",
                      maxWidth: "450px",
                      // margin: "40px auto",
                    }}
                  >
                    {/* Left Section */}
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="d-flex align-items-center justify-content-center rounded-3 ms-2"
                        style={{
                          backgroundColor: "#1570EF",
                          width: "33px",
                          height: "33px",
                        }}
                      >
                        {/* <FaUpload  /> */}
                        <LuUpload size={20} color="#FFFFFF" />
                      </div>

                      <div>
                        <h6
                          className="fw-semibold mb-1 ms-5 "
                          style={{ color: "#1e293b" }}
                        >
                          Profile Photo
                        </h6>
                        <p className="mb-2 text-secondary small">
                          File Format: PNG &nbsp;&nbsp; File Size: 12MB
                        </p>

                        {/* Progress Bar */}
                        <div
                          className="progress"
                          style={{
                            height: "6px",
                            width: "230px",
                            backgroundColor: "#e2e8f0",
                          }}
                        >
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: "90%",
                              background:
                                "linear-gradient(to left, #007bff, #60a5fa)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* Right Section (Close button) */}
                    <button
                      className="btn btn-outline-light border-1 p-0 d-flex align-items-center justify-content-center"
                      style={{
                        // borderRadius: "50%",
                        width: "32px",
                        height: "32px",
                        backgroundColor: "#FFFFFD",
                        border: "1px solid #dddddfff",
                      }}
                    >
                      <AiOutlineCloseCircle color="#667085" size={20} />
                    </button>
                  </div>
                </div>
                {/* <------------------------------------------------ Files ----------------------------------------------> */}
              </div>
              <div>
                <div className="mt-4 fs-5">Files</div>
                <div
                  className="p-2 ms-2  rounded-3 mt-2 "
                  style={{ width: "290px", border: "1px dashed #2632381A" }}
                >
                  <div className="d-flex justify-content-between">
                    <div>
                      <FiFile /> Birth certificate.pdf
                    </div>
                    <div style={{ color: "#911808" }}>
                      <AiFillDelete />
                    </div>
                  </div>
                </div>
                <div
                  className="p-2 ms-2 mt-3  rounded-3 mt-2 "
                  style={{ width: "290px", border: "1px dashed #2632381A" }}
                >
                  {/* <div>Files</div> */}
                  <div className="d-flex justify-content-between">
                    <div>
                      {" "}
                      <FiFile /> Aadhar card.pdf
                    </div>
                    <div style={{ color: "#911808" }}>
                      {" "}
                      <AiFillDelete />
                    </div>
                  </div>
                </div>
                <div
                  className="p-2 ms-2  rounded-3 mt-2"
                  style={{ width: "290px", border: "1px dashed #2632381A" }}
                >
                  <div className="d-flex justify-content-between">
                    <div>
                      <FiFile /> Pan card.pdf
                    </div>
                    <div style={{ color: "#911808" }}>
                      <AiFillDelete />
                    </div>
                  </div>
                </div>
              </div>

              <>
                {/* your full input + select + files code here */}
                {/* Cancel & Save */}
                <div className="d-flex justify-content-end gap-3 p-2">
                  <span
                    className="btn border border-1 border-muted rounded cancel"
                    onClick={handleCancel}
                  >
                    Cancel
                  </span>

                  <span
                    className="btn border border-1 border-primary rounded cancel"
                    onClick={handleSaveFloor}
                  >
                    Save
                  </span>
                </div>
              </>
            </>
          )}
          {roomsSaved && (
            <>
            <div className="mt-3 ">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Room Name / Number</th>
                    <th>Room Type</th>
                    <th>Assigned Floor</th>
                    <th>Capacity</th>
                    <th>Facility</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                {roomsDummydata.map((room, index) => (
                    <tr key={index}>
                      <td>{room.roomName}</td>
                      <td>{room.roomType}</td>
                      <td>{room.assignendFloor}</td>
                      <td>{room.capacity}</td>
                      <td>{room.facility}</td>
                      <td>{room.status}</td>
                      <td></td>
                    </tr>
                  ))}
              </table>
            </div>
            </>
          )}

          <div className="add-building d-flex justify-content-between w-100 flex-star fw-semibold align-items-center">
            <span className="florr-details" onClick={toggleRoomInputs}>
              Room Details
            </span>
            {!showRoomsInputs && (
              <span
                className="btn border border-1  border-primary rounded"
                onClick={toggleRoomInputs}
              >
                <RiAddLine /> Add Rooms
              </span>
            )}
          </div>
          {showRoomsInputs && (
            <>
              <div className="row mt-3 d-flex justify-content-between">
                <div className="col d-flex flex-column">
                  <span className="fw-semibold" style={{ color: "#666666" }}>
                    Room Name / Number
                  </span>
                  <div className="input-border rounded">
                    <input
                      type="text"
                      className="input-form rounded w-100"
                      placeholder="Main Acedemic Block"
                    />
                  </div>
                </div>
                <div className="col d-flex flex-column">
                  <span className="fw-semibold" style={{ color: "#666666" }}>
                    Room Type
                  </span>
                  <div className="input-border rounded">
                    <select
                      className="p-2 w-100 border-0"
                      defaultValue=""
                      style={{
                        outline: "none",
                        borderRadius: "inherit",
                        color: "#a1a1a1",
                      }}
                    >
                      <option
                        value=""
                        disabled
                        hidden
                        className="placeholder-option"
                      >
                        Academic / Admin / Sport / Library / Hostel
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col d-flex flex-column">
                  <span className="fw-semibold" style={{ color: "#666666" }}>
                    Assigned Floor
                  </span>
                  <div className="input-border rounded">
                    <input
                      type="text"
                      className="input-form rounded w-100"
                      placeholder="Main Acedemic Block"
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-3 d-flex justify-content-between">
                <div className="col d-flex flex-column">
                  <span className="fw-semibold" style={{ color: "#666666" }}>
                    Capacity
                  </span>
                  <div className="input-border rounded">
                    <input
                      type="text"
                      className="input-form rounded w-100"
                      placeholder="Main Acedemic Block"
                    />
                  </div>
                </div>
                <div className="col d-flex flex-column">
                  <span className="fw-semibold" style={{ color: "#666666" }}>
                    Facility
                  </span>
                  <div className="input-border rounded">
                    <select
                      className="p-2 w-100 border-0"
                      defaultValue=""
                      style={{
                        outline: "none",
                        borderRadius: "inherit",
                        color: "#a1a1a1",
                      }}
                    >
                      <option
                        value=""
                        disabled
                        hidden
                        className="placeholder-option"
                      >
                        Academic / Admin / Sport / Library / Hostel
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col d-flex flex-column">
                  <span className="fw-semibold" style={{ color: "#666666" }}>
                    Status
                  </span>
                  <div className="input-border rounded">
                    <select
                      className="p-2 w-100 border-0"
                      defaultValue=""
                      style={{
                        outline: "none",
                        borderRadius: "inherit",
                        color: "#a1a1a1",
                      }}
                    >
                      <option
                        value=""
                        disabled
                        hidden
                        className="placeholder-option"
                      >
                        Academic / Admin / Sport / Library / Hostel
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row mt-3 d-flex justify-content-between">
                <div className="col d-flex flex-column">
                  <span className="fw-semibold" style={{ color: "#666666" }}>
                    Total Area
                  </span>
                  <div className="input-border rounded">
                    <input
                      type="text"
                      className="input-form rounded w-100"
                      placeholder="Main Acedemic Block"
                    />
                  </div>
                </div>
                <div className="col"></div>
                <div className="col"></div>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <div className="d-flex justify-content-between align-items-center p-2 border-primary border-1 border-dash mt-3 rounded gap-3 ms-2">
                  <div
                    className="d-flex flex-column align-items-center"
                    style={{ fontSize: "12px" }}
                  >
                    <span className="fw-bold">Attach Photo</span>
                    <span className="fw-light">Drag & Drop File here or</span>
                  </div>
                  <div>
                    <span>
                      <button className="btn btn-tranparent border border-primary border-1">
                        Browse Files
                      </button>
                    </span>
                  </div>
                </div>
                {/* <------------------------------------------------ upload file ------------------------------------> */}
                <div>
                  <div
                    className="d-flex align-items-center p-2 justify-content-between mt-3 shadow-sm rounded-3"
                    style={{
                      backgroundColor: "#fff",
                      border: "1px solid #e5e7eb",
                      maxWidth: "450px",
                      // margin: "40px auto",
                    }}
                  >
                    {/* Left Section */}
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="d-flex align-items-center justify-content-center rounded-3 ms-2"
                        style={{
                          backgroundColor: "#1570EF",
                          width: "33px",
                          height: "33px",
                        }}
                      >
                        {/* <FaUpload  /> */}
                        <LuUpload size={20} color="#FFFFFF" />
                      </div>

                      <div>
                        <h6
                          className="fw-semibold mb-1 ms-5 "
                          style={{ color: "#1e293b" }}
                        >
                          Profile Photo
                        </h6>
                        <p className="mb-2 text-secondary small">
                          File Format: PNG &nbsp;&nbsp; File Size: 12MB
                        </p>

                        {/* Progress Bar */}
                        <div
                          className="progress"
                          style={{
                            height: "6px",
                            width: "230px",
                            backgroundColor: "#e2e8f0",
                          }}
                        >
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: "90%",
                              background:
                                "linear-gradient(to left, #007bff, #60a5fa)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* Right Section (Close button) */}
                    <button
                      className="btn btn-outline-light border-1 p-0 d-flex align-items-center justify-content-center"
                      style={{
                        // borderRadius: "50%",
                        width: "32px",
                        height: "32px",
                        backgroundColor: "#FFFFFD",
                        border: "1px solid #dddddfff",
                      }}
                    >
                      <AiOutlineCloseCircle color="#667085" size={20} />
                    </button>
                  </div>
                </div>
                {/* <------------------------------------------------ Files ----------------------------------------------> */}
              </div>
              <div>
                <div className="mt-4 fs-5">Files</div>
                <div
                  className="p-2 ms-2  rounded-3 mt-2 "
                  style={{ width: "290px", border: "1px dashed #2632381A" }}
                >
                  <div className="d-flex justify-content-between">
                    <div>
                      <FiFile /> Birth certificate.pdf
                    </div>
                    <div style={{ color: "#911808" }}>
                      <AiFillDelete />
                    </div>
                  </div>
                </div>
                <div
                  className="p-2 ms-2 mt-3  rounded-3 mt-2 "
                  style={{ width: "290px", border: "1px dashed #2632381A" }}
                >
                  {/* <div>Files</div> */}
                  <div className="d-flex justify-content-between">
                    <div>
                      {" "}
                      <FiFile /> Aadhar card.pdf
                    </div>
                    <div style={{ color: "#911808" }}>
                      {" "}
                      <AiFillDelete />
                    </div>
                  </div>
                </div>
                <div
                  className="p-2 ms-2  rounded-3 mt-2"
                  style={{ width: "290px", border: "1px dashed #2632381A" }}
                >
                  <div className="d-flex justify-content-between">
                    <div>
                      <FiFile /> Pan card.pdf
                    </div>
                    <div style={{ color: "#911808" }}>
                      <AiFillDelete />
                    </div>
                  </div>
                </div>
              </div>
              <>
                {/* your full input + select + files code here */}
                {/* Cancel & Save */}
                <div className="d-flex justify-content-end gap-3 p-2">
                  <span
                    className="btn border border-1 border-muted rounded cancel"
                    onClick={handelCancelRooms}
                  >
                    Cancel
                  </span>

                  <span
                    className="btn border border-1 border-primary rounded cancel"
                    onClick={handelSaveRooms}
                  >
                    Save
                  </span>
                </div>
              </>
            </>
          )}
        </div>

        {/* <=========================================== Cancel & save ==============================================> */}
        <div className="d-flex justify-content-end gap-3 p-2">
          <Link to="/block-setup">
          <span className="btn border border-1 border-muted rounded cancel">
            Cancel
          </span>
          </Link>
          <span className="btn border border-1 border-primary rounded cancel">
            Save
          </span>
        </div>
      </div>
    </div>
  );
}

export default BuildingSetup;
