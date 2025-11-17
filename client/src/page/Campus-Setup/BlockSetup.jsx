import React from "react";
import { FaPlus } from "react-icons/fa6";

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
      <div>
        {/* <=============================== Top ==========================================> */}
        <div className="mt-3 d-flex justify-content-between">
          <div className="d-flex flex-column">
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
          <div className="d-flex flex-column">
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
          <div className="d-flex flex-column">
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
        <div>
            <div className="mt-3 d-flex justify-content-between">
          <div className="d-flex flex-column">
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
          <div className="d-flex flex-column">
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
          <div className="d-flex flex-column">
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
        </div>

        {/* <=================================== Last ======================================> */}
        <div>
            <div className="mt-3 d-flex justify-content-between">
          <div className="d-flex flex-column">
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
          <div className="d-flex flex-column">
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
          <div className="d-flex flex-column">
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

      </div>

      <div className="mt-3">
        <div className="mt-3">
        <span className="attach-file">Attach building layout/Blue Print</span>
      </div>
      {/* <-------------------------------------------- Attach file ------------------------------------------> */}
      <div className="dashed d-flex justify-content-between align-items-center p-4 border border-primary mt-3 rounded gap-5">
        <div className="d-flex flex-column align-items-center ">
            <span>Attach Photo</span>
            <span>Drag & Drop File here or</span>
        </div>
        <div>
            <span>
                <button className=" btn btn-primary border-1">Browse Files</button>
            </span>
        </div>
      </div>
      </div>
    </div>
  );
}

export default BlockSetup;
