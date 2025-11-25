import React from "react";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { LuUpload } from "react-icons/lu";
import { FiFile } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { RiAddLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

function BlockSetup() {
  return (
    <div className="bg-white p-4 rounded">
      <div className="d-flex justify-content-between">
        <span className="fw-semibold fs-4">Block Setup</span>
        <button className="btn btn-primary d-flex gap-2 align-items-center add-button">
          <FaPlus />
          <span>Add New Block</span>
        </button>
      </div>
      <div className="">
        {/* <=============================== Top ==========================================> */}
        <div className="row mt-3 d-flex justify-content-between">
          <div className="col d-flex flex-column">
            <span className="fw-semibold" style={{ color: "#666666" }}>
              Block Name
            </span>
            <div className="input-border rounded">
              <input
                type="text"
                className="input-form rounded w-100"
                placeholder="Sunrise Main Campus"
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
              Block Type
            </span>
            <div className="input-border rounded">
              <select
                type="text"
                className="input-form rounded w-100"
                placeholder="Academic / Admin / Hostel / Sport / Activity"
              />
            </div>
          </div>
        </div>
        {/* <------------------------------ Middle --------------------------------->*/}

        <div className="row mt-3 d-flex justify-content-between">
          <div className="col d-flex flex-column">
            <span className="fw-semibold" style={{ color: "#666666" }}>
              Total Building
            </span>
            <div className="input-border rounded">
              <input
                type="text"
                className="input-form rounded w-100"
                placeholder="3"
              />
            </div>
          </div>
          <div className="col d-flex flex-column">
            <span className="fw-semibold" style={{ color: "#666666" }}>
              Total Floors
            </span>
            <div className="input-border rounded">
              <input
                type="text"
                className="input-form rounded w-100"
                placeholder="3"
              />
            </div>
          </div>
          <div className="col d-flex flex-column">
            <span className="fw-semibold" style={{ color: "#666666" }}>
              Tootal Rooms
            </span>
            <div className="input-border rounded">
              <input
                type="text"
                className="input-form rounded w-100"
                placeholder="30"
              />
            </div>
          </div>
        </div>

        {/* <=================================== Last ======================================> */}
        <div className="row mt-3 d-flex justify-content-between">
          <div className="col d-flex flex-column">
            <span className="fw-semibold" style={{ color: "#666666" }}>
              Block Incharge
            </span>
            <div className="input-border rounded">
              <input
                type="text"
                className="input-form rounded w-100"
                placeholder="Diwakar Jitu"
              />
            </div>
          </div>
          <div className="col d-flex flex-column">
            <span className="fw-semibold" style={{ color: "#666666" }}>
              Construction Status
            </span>
            <div className="input-border rounded">
              <input
                type="text"
                className="input-form rounded w-100"
                placeholder="Active / Under Construction"
              />
            </div>
          </div>
          <div className="col d-flex flex-column">
            <span className="fw-semibold" style={{ color: "#666666" }}>
              Block Location
            </span>
            <div className="input-border rounded">
              <input
                type="text"
                className="input-form rounded w-100"
                placeholder="North Wing / Near Library"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <div className="mt-3">
          <span className="attach-file">Attach building layout/Blue Print</span>
        </div>
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
            {/* <div>Files</div> */}
            <div className="d-flex justify-content-between">
              <div>
                {" "}
                <FiFile /> Pan card.pdf
              </div>
              <div style={{ color: "#911808" }}>
                {" "}
                <AiFillDelete />
              </div>
            </div>
          </div>
        </div>
        {/* <========================================= Add Buildin & Add Ground ===========================================>*/}
        <div className="add-building d-flex flex-column flex-start mt-3 p-3 gap-3 fw-semibold">
          <Link to="/building-setup" style={{ textDecoration: "none" }}>
            <span className="btn border border-1 border-primary rounded">
              <RiAddLine /> Add Building
            </span>
          </Link>
          <Link to="/ground">
            <span className="btn border border-1  border-primary rounded">
              <RiAddLine /> Add Ground
            </span>
          </Link>
        </div>

        {/* <=========================================== Cancel & save ==============================================> */}
        <div className="d-flex justify-content-end gap-3 p-2">
          <span className="btn border border-1 border-muted rounded cancel">
            Cancel
          </span>
          <span className="btn border border-1 border-primary rounded cancel">
            Save
          </span>
        </div>
      </div>
    </div>
  );
}

export default BlockSetup;
