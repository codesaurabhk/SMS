import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaImages } from "react-icons/fa6";
import { FaUpload } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { LuUpload } from "react-icons/lu";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiFile } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";

function AddStudent() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    dob: "",
    nationality: "",
    motherTongue: "",
    bloodGroup: "",
    caste: "General",
    speciallyAbled: "",
    religion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };

    // Combine day, month, year into dob (YYYY-MM-DD)
    if (["day", "month", "year"].includes(name)) {
      const { day, month, year } = updatedData;
      if (day && month && year) {
        updatedData.dob = `${year}-${month.padStart(2, "0")}-${day.padStart(
          2,
          "0"
        )}`;
      }
    }

    setFormData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="p-3 ">
      <div className="container-fluid   bg-white rounded-4 shadow border-0 ">
      <h3 className="mb-4 pt-3 ps-3 ">Add New Student</h3>
<div style={{ borderBottom: "1px solid #EAECF0" }}>
      <ul className="nav nav-tabs student-tabs mb-4 border-0 "  >
        <li className="nav-item">
          <a className="nav-link active" href="#student-details">
            Student Details
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#admission-details">
            Admission Details
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#parents-guardian-details">
            Parents/Guardian Details
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact-details">
            Contact Details
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#fees-details">
            Fees Details
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#facilities-services">
            Facilities & Services
          </a>
        </li>
      </ul></div>

      <div className="d-flex ">
        <div 
        style={{width:"100%"}}
        >
        <form
         
          onSubmit={handleSubmit}
          className=" p-4"
        >
          <h5>Admission ID #0767976</h5>

          <div className="row mt-3">
            <div className="col-md-4">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label>Middle Name</label>
              <input
                type="text"
                name="middleName"
                className="form-control"
                value={formData.middleName}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-4">
              <label>Gender</label>
              <br />
              <div className="form-check form-check-inline mt-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleChange}
                />
                <label className="form-check-label">Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                />
                <label className="form-check-label">Female</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="Others"
                  onChange={handleChange}
                />
                <label className="form-check-label">Others</label>
              </div>
            </div>

            <div className="col-md-5">
              <label className="form-label">Date Of Birth</label>
              <div className="d-flex align-items-center gap-2 position-relative dob-wrapper">
                {/* Day */}
                <div className="position-relative flex-grow-1">
                  {/* <i className="bi bi-calendar-day dob-field-icon"></i> */}
                  <input
                    type="number"
                    name="day"
                    placeholder="Date"
                    className="form-control ps-3 dob-input"
                    min="1"
                    max="31"
                    value={formData.day || ""}
                    onChange={handleChange}
                  />
                </div>

                {/* Month */}
                <div className="position-relative flex-grow-1">
                  <i className="bi bi-calendar-month dob-field-icon"></i>
                  <input
                    type="number"
                    name="month"
                    placeholder="Month"
                    className="form-control ps-3 dob-input"
                    min="1"
                    max="12"
                    value={formData.month || ""}
                    onChange={handleChange}
                  />
                </div>

                {/* Year */}
                <div className="position-relative flex-grow-1">
                  <i className="bi bi-calendar-event dob-field-icon"></i>
                  <input
                    type="number"
                    name="year"
                    placeholder="Year"
                    className="form-control ps-3 dob-input"
                    min="1900"
                    max="2025"
                    value={formData.year || ""}
                    onChange={handleChange}
                  />
                </div>

                {/* Main calendar icon (opens hidden date picker) */}
                <MdOutlineCalendarMonth
                  className=" ms-2 dob-main-icon text-secondary fs-3 "
                  title="Pick a date"
                  onClick={() =>
                    document.getElementById("hiddenDate").showPicker()
                  }
                />

                {/* Hidden HTML date picker */}
                <input
                  type="date"
                  id="hiddenDate"
                  style={{ visibility: "hidden", position: "absolute" }}
                  onChange={(e) => {
                    const d = new Date(e.target.value);
                    setFormData({
                      ...formData,
                      day: d.getDate().toString(),
                      month: (d.getMonth() + 1).toString(),
                      year: d.getFullYear().toString(),
                      dob: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-4">
              <label>Nationality</label>
              <select
                className="form-select"
                name="nationality"
                onChange={handleChange}
              >
                <option value="">Select...</option>
                <option value="Indian">Indian</option>
                <option value="American">American</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="col-md-4">
              <label>Mother Tongue</label>
              <input
                type="text"
                name="motherTongue"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label>Blood Group</label>
              <select
                className="form-select"
                name="bloodGroup"
                onChange={handleChange}
              >
                <option value="">Select...</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="O+">O+</option>
                <option value="AB+">AB+</option>
              </select>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-4">
              <label>Caste</label>
              <br />
              {["General", "ST", "SC", "OBC", "Others"].map((caste) => (
                <div key={caste} className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="caste"
                    value={caste}
                    checked={formData.caste === caste}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">{caste}</label>
                </div>
              ))}
            </div>

            <div className="col-md-4">
              <label>Specially Abled</label>
              <select
                className="form-select"
                name="speciallyAbled"
                onChange={handleChange}
              >
                <option value="">Select...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="col-md-4">
              <label>Religion</label>
              <select
                className="form-select"
                name="religion"
                onChange={handleChange}
              >
                <option value="">Select...</option>
                <option value="Hindu">Hindu</option>
                <option value="Muslim">Muslim</option>
                <option value="Sikh">Sikh</option>
                <option value="Christian">Christian</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* <div className="col-md-4">
            <label>Upload Documents</label>
            <input type="file" multiple className="form-control" />
          </div> */}
          </div>

          <div className="mt-4 text-end">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        </div>
        <div className="p-3">
          <div
            className=" border-primary border-2 border-dashed rounded-3 mt-2 p-5 text-center"
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
            <div className="d-flex align-items-center gap-3" >
              <div
                className="d-flex align-items-center justify-content-center rounded-3"
                style={{
                  backgroundColor: "#1570EF",
                  width: "30px",
                  height: "33px",
                }}
              >
                {/* <FaUpload  /> */}
                <LuUpload size={20} color="#FFFFFF"/>
              </div>

              <div>
                <h6 className="fw-semibold mb-1 ms-5 " style={{ color: "#1e293b" }}>
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
          <div className="p-2 ms-2  rounded-3 " style={{width:"290px", border: "1px dashed #2632381A"}} >
            <div>Files</div>
            <div className="d-flex justify-content-between">
              <div> <FiFile /> Birth certificate.pdf</div>
              <div style={{color:"#911808"}}> <AiFillDelete /></div>
            </div>
            </div>
          <div className="p-2 ms-2 mt-3  rounded-3 " style={{width:"290px", border: "1px dashed #2632381A"}} >
            <div>Files</div>
            <div className="d-flex justify-content-between">
              <div> <FiFile /> Aadhar card.pdf</div>
              <div style={{color:"#911808"}}> <AiFillDelete /></div>
            </div>
            </div>
          <div className="p-2 ms-2  rounded-3 " style={{width:"290px", border: "1px dashed #2632381A"}} >
            <div>Files</div>
            <div className="d-flex justify-content-between">
              <div> <FiFile /> Pan card.pdf</div>
              <div style={{color:"#911808"}}> <AiFillDelete /></div>
            </div>
            </div>
          <div className="p-2 ms-2  rounded-3 " style={{width:"290px", border: "1px dashed #2632381A"}} >
            <div>Files</div>
            <div className="d-flex justify-content-between">
              <div> <FiFile /> Pdf_file.pdf</div>
              <div style={{color:"#911808"}}> <AiFillDelete /></div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AddStudent;
