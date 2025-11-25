import React from "react";
import { FaImages } from "react-icons/fa6";
import { LuUpload } from "react-icons/lu";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiFile } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";

function AddGround() {
  return (
    <div className="bg-white p-4 rounded gap-3">
      <div className="d-flex">
        <div className="w-75 ">
        <div className="row">
          <div className="col">
            <label
              className="form-label fw-semibold text-muted"
              style={{ fontSize: "13px" }}
            >
              Facility Name
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Basketball Court"
              />
            </div>
          </div>
          <div className="col">
            <label
              className="form-label fw-semibold text-muted"
              style={{ fontSize: "13px" }}
            >
              Facility ID
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="GRD-VB001"
              />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <label
              className="form-label fw-semibold text-muted"
              style={{ fontSize: "13px" }}
            >
              Facility Category
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Indoor | Outdoor"
              />
            </div>
          </div>
          <div className="col">
            <label
              className="form-label fw-semibold text-muted"
              style={{ fontSize: "13px" }}
            >
              Ground Shape
            </label>
            <div className="input-group">
              <select className="form-select">
                <option>Oval, Rectangular, Circular</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <div className="d-flex gap-3">
              <div className="d-flex flex-column w-50">
                <label
                  className="form-label fw-semibold text-muted"
                  style={{ fontSize: "13px" }}
                >
                  Length
                </label>
                <div className="input-group">
                  <select className="form-select">
                    <option>23 M</option>
                  </select>
                </div>
              </div>
              <div className="d-flex flex-column w-50">
                <label
                  className="form-label fw-semibold text-muted"
                  style={{ fontSize: "13px" }}
                >
                  Width
                </label>
                <div className="input-group">
                  <select className="form-select">
                    <option>25 m</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <label
              className="form-label fw-semibold text-muted"
              style={{ fontSize: "13px" }}
            >
              Total Area (sq.m)
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="42 sq.m"
              />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <label
              className="form-label fw-semibold text-muted"
              style={{ fontSize: "13px" }}
            >
              siting Capacity(if any)
            </label>
            <div className="input-group">
              <input type="number" className="form-control" placeholder="150" />
            </div>
          </div>
          <div className="col">
            <label
              className="form-label fw-semibold text-muted"
              style={{ fontSize: "13px" }}
            >
              nearby Block/Building
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Near Science Block"
              />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <label
              className="form-label fw-semibold text-muted"
              style={{ fontSize: "13px" }}
            >
              Surface Type
            </label>
            <div className="input-group">
              <select className="form-select">
                <option>Clay Grass Artifical Tuff</option>
              </select>
            </div>
          </div>
          <div className="col">
            <label
              className="form-label fw-semibold text-muted"
              style={{ fontSize: "13px" }}
            >
              Fancining Netting info
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Fenced with 10 ft high net"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label
              className="form-label fw-semibold text-muted"
              style={{ fontSize: "13px" }}
            >
              Primary Sport
            </label>
            <div className="input-group">
              <select className="form-select">
                <option>Basket Ball</option>
              </select>
            </div>
          </div>
          <div className="col">
            <label
              className="form-label fw-semibold text-muted"
              style={{ fontSize: "13px" }}
            >
              Secondry Use
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Assembly yoga"
              />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <label
              className="form-label fw-semibold text-muted"
              style={{ fontSize: "13px" }}
            >
              Assigned Staff / Coach
            </label>
            <div className="input-group">
              <select className="form-select">
                <option>Diwakar</option>
              </select>
            </div>
          </div>
          <div className="col">
            <label
              className="form-label fw-semibold text-muted"
              style={{ fontSize: "13px" }}
            >
              Assigned Class / Group
            </label>
            <div className="input-group">
              <select className="form-select">
                <option>Class 9 & 10</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <label
              className="form-label fw-semibold text-muted"
              style={{ fontSize: "13px" }}
            >
              Timings Available
            </label>
            <div className="input-group">
              <input
                type="time"
                className="form-control"
                placeholder="Basketball Court"
              />
            </div>
          </div>
          <div className="col">
            <label
              className="form-label fw-semibold text-muted"
              style={{ fontSize: "13px" }}
            >
              Associated Equipment
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="2 Vollyball 4 Nets"
              />
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <label
              className="form-label fw-semibold text-muted"
              style={{ fontSize: "13px" }}
            >
              Next Maintanance Due
            </label>
            <div className="input-group">
              <input
                type="date"
                className="form-control"
                placeholder="Good Needs Repair"
              />
            </div>
          </div>
          <div className="col">
            <label
              className="form-label fw-semibold text-muted"
              style={{ fontSize: "13px" }}
            >
              Last Maintainance Date
            </label>
            <div className="input-group">
              <input
                type="date"
                className="form-control"
                placeholder="Available Booked Reserved"
              />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <label
              className="form-label fw-semibold text-muted"
              style={{ fontSize: "13px" }}
            >
              Maintenance Status
            </label>
            <div className="input-group">
              <input
                type="time"
                className="form-control"
                placeholder="Basketball Court"
              />
            </div>
          </div>
          <div className="col">
            <label
              className="form-label fw-semibold text-muted"
              style={{ fontSize: "13px" }}
            >
              Availability Status
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="2 Vollyball 4 Nets"
              />
            </div>
          </div>
        </div>

        {/* <================================= Documents Area Related ====================================> */}

        <div className="mt-5">
          <span>Document</span>
          <div className="mt-3">
            <label
              className="form-label fw-semibold text-muted"
              style={{ fontSizzed: "13px" }}
            >
              Sports Area Related Documents
            </label>
          </div>
          <div className="mt-3 gap-4 d-flex justify-content-start">
            <div className="d-flex align-items-center gap-2">
              <input type="checkbox" />
              <span>Ground Layout Plan</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <input type="checkbox" />
              <span>Facility Photo</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <input type="checkbox" className="border border-primary" />
              <span>Safety Certificate / Permit</span>
            </div>
          </div>
        </div>
        <div>
          <span>
            Marked fields/documents are mandatory must be submitted for
            successfull registration
          </span>
        </div>
        
      </div>
      <div className="w-25">
        <div className="p-3">
          <div
            className=" border-primary border-2 border-dashed rounded-3  mt-2 p-5 ms-4 text-center"
            style={{
              backgroundColor: "#ECF0FA",
              borderStyle: "dashed",
              maxWidth: "290px",
              maxHeight: "315px",
              // margin: "50px auto",
            }}
          >
            <h5 className="fw-semibold mb-3">Attach Documents</h5>
            <FaImages size={40} color="#0066ff" className="mb-3" />
            <p className="mb-2 text-secondary">Drag and Drop Files here or</p>

            <label
              className="btn btn-outline-primary px-4"
              style={{ cursor: "pointer" }}
            >
              Browse Files
              <input type="file" hidden />
            </label>
          </div>
          <div
            className="d-flex align-items-center p-2 justify-content-between mt-4 shadow-sm rounded-3"
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
                      background: "linear-gradient(to left, #007bff, #60a5fa)",
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
            <div
              className="p-2 ms-2  rounded-3 mt-2"
              style={{ width: "290px", border: "1px dashed #2632381A" }}
            >
              {/* <div>Files</div> */}
              <div className="d-flex justify-content-between">
                <div>
                  {" "}
                  <FiFile /> Pdf_file.pdf
                </div>
                <div style={{ color: "#911808" }}>
                  {" "}
                  <AiFillDelete />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      </div>
      <div className="d-flex gap-3 ms-2 justify-content-end">
            <div className="mt-4 text-end ">
              <button
                type="submit"
                className="btn btn-outline-secondary "
                style={{ width: "95px" }}
              >
                Cancel
              </button>
            </div>
            <div className="mt-4 text-end">
              <button
                type="submit"
                className="btn btn-outline-primary"
                style={{ width: "95px" }}
              >
                Save
              </button>
            </div>
            <div className="mt-4 text-end">
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "95px" }}
              >
                Next
              </button>
            </div>
      </div>
    </div>
  );
}

export default AddGround;
