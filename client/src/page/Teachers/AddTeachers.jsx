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
import { Table, Form, Container } from "react-bootstrap";

function AddTeachers() {
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

  const [activeTab, setActiveTab] = useState("teacher-details");

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
  const [modules, setModules] = useState([
    { name: "Students Attendance", create: false, view: false, update: false, delete: false, approve: false },
    { name: "Your Attendance", create: true, view: true, update: true, delete: true, approve: true },
    { name: "Homework", create: true, view: true, update: true, delete: false, approve: false },
    { name: "Exam Module", create: true, view: false, update: false, delete: false, approve: false },
    { name: "Timetable", create: true, view: false, update: false, delete: false, approve: false },
    { name: "Assign Task to Staff", create: true, view: false, update: false, delete: false, approve: false },
    { name: "Assign Task to Teacher", create: true, view: false, update: false, delete: false, approve: false },
    { name: "Library Module", create: true, view: false, update: false, delete: false, approve: false },
    { name: "Dormitory Module", create: true, view: false, update: false, delete: false, approve: false },
    { name: "Fees", create: true, view: false, update: false, delete: false, approve: false },
    { name: "Transport Module", create: true, view: false, update: false, delete: false, approve: false },
    { name: "Fees", create: true, view: false, update: false, delete: false, approve: false },
  ]);

   const toggleCheckbox = (index, field) => {
    const updated = [...modules];
    updated[index][field] = !updated[index][field];
    setModules(updated);
  };

  return (
    
    <div className="p-3 ">
      <div className="container-fluid   bg-white rounded-4 shadow border-0 ">
        <h4 className="mb-4 pt-3 ps-3 ">Add New Teacher</h4>
        <div style={{ borderBottom: "1px solid #EAECF0" }}>
          <ul className="nav nav-tabs student-tabs mb-4 border-0">
            {[
              { id: "teacher-details", label: "Teacher Details" },
              { id: "contact-details", label: "Contact Details" },
              { id: "professional-details", label: "Professional Details" },
              {
                id: "salary-details",
                label: "Salary Details",
              },

              { id: "login-access-details", label: "Login & Access Details" },
            ].map((tab) => (
              <li className="nav-item" key={tab.id}>
                <button
                  type="button"
                  className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {activeTab === "teacher-details" && (
          <div className="d-flex text-secondary">
            <div style={{ width: "100%" }}>
              <form onSubmit={handleSubmit} className=" p-4">
                <h5 className="text-dark ">Employee ID #076</h5>

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
                  <div className="col-md-3">
                    <label className="mb-3">Marital Status</label>
                    <br />
                    {["Married", "Unmarried"].map((marritial) => (
                      <div
                        key={marritial}
                        className="form-check form-check-inline"
                      >
                        <input
                          className="form-check-input"
                          type="radio"
                          name="marritial"
                          value={marritial}
                          checked={formData.marritial === marritial}
                          onChange={handleChange}
                        />
                        <label className="form-check-label">{marritial}</label>
                      </div>
                    ))}
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
                </div>

                <div className="row mt-3">
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

                  <div className="col-md-4">
                    <label>Aadhar No.</label>
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="7584 7458 7458"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Pan No.</label>
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="AFHKG8765W"
                    />
                  </div>

                  {/* <div className="col-md-4">
            <label>Upload Documents</label>
            <input type="file" multiple className="form-control" />
          </div> */}
                </div>
              </form>
            </div>
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
                <h6 className="fw-semibold text-dark mb-2">Upload Photo</h6>
                <FaImages size={40} color="#0066ff" className="mb-3" />
                <p className="mb-2 text-secondary">
                  Drag and Drop Files here or
                </p>

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
              <div
                className="d-flex gap-3 ms-2 "
                style={{ marginTop: "10rem" }}
              >
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
          </div>
        )}
        {activeTab === "contact-details" && (
          <div className="d-flex text-secondary">
            <div style={{ width: "100%" }}>
              <form onSubmit={handleSubmit} className=" p-4">
                <h5 className="text-dark  mb-3">Employee ID #076</h5>
                <h5 className="mb-3">Contact & Emergency Details</h5>

                <div className="row mt-0">
                  <div className="col-md-4">
                    <label>Teacher Contact No.</label>
                    <input
                      type="number"
                      name="totalFees"
                      className="form-control"
                      value={formData.fathercontact}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Alternative No.</label>
                    <input
                      type="number"
                      name="totalFees"
                      className="form-control"
                      value={formData.fathercontact}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Work Email Id</label>
                    <input
                      type="email"
                      name="totalFees"
                      className="form-control"
                      value={formData.fathercontact}
                      onChange={handleChange}
                      placeholder="Rajesh@gmail.com"
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>Personal Mail ID</label>
                    <input
                      type="email"
                      name="totalFees"
                      className="form-control"
                      value={formData.fathercontact}
                      onChange={handleChange}
                      placeholder="Rajesh@gmail.com"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Emergency Contact Name & Relation</label>
                    <input
                      type="text"
                      name="discountAmount"
                      className="form-control"
                      value={formData.discountAmount}
                      onChange={handleChange}
                      placeholder="Mangla (Mother)"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Emergency Conatact No.</label>
                    <input
                      type="number"
                      name="netPayableFee"
                      className="form-control"
                      value={formData.netPayableFee}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <h5 className="mt-4">Current Address</h5>

                <div className="row mt-0">
                  <div className="col-md-4">
                    <label>Current Address</label>
                    <input
                      type="text"
                      name="netPayableFee"
                      className="form-control"
                      value={formData.netPayableFee}
                      onChange={handleChange}
                      placeholder="village , street , area"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Street Area</label>
                    <input
                      type="text"
                      name="netPayableFee"
                      className="form-control"
                      value={formData.netPayableFee}
                      onChange={handleChange}
                      placeholder="Civil Lines"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>City</label>
                    <input
                      type="text"
                      name="installmentDueDates"
                      className="form-control"
                      value={formData.fathercontact}
                      onChange={handleChange}
                      placeholder="Mumbai"
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>State</label>
                    <input
                      type="text"
                      name="installmentDueDates"
                      className="form-control"
                      value={formData.fathercontact}
                      onChange={handleChange}
                      placeholder="Mumbai"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Country</label>
                    <input
                      type="text"
                      name="lastPaymentDate"
                      className="form-control"
                      value={formData.discountAmount}
                      onChange={handleChange}
                      placeholder="India"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Pincode</label>
                    <input
                      type="number"
                      name="receiptNumber"
                      className="form-control"
                      value={formData.netPayableFee}
                      onChange={handleChange}
                      placeholder="254525"
                    />
                  </div>
                </div>
                <div className="d-flex gap-2 mt-4">
                  <div>
                    <h5 className="">Permanent Address</h5>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value="Female"
                      onChange={handleChange}
                    />
                    <label className="form-check-label">Same as Above</label>
                  </div>
                </div>

                <div className="row mt-0">
                  <div className="col-md-4">
                    <label>Current Address</label>
                    <input
                      type="text"
                      name="netPayableFee"
                      className="form-control"
                      value={formData.netPayableFee}
                      onChange={handleChange}
                      placeholder="village , street , area"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Street Area</label>
                    <input
                      type="text"
                      name="netPayableFee"
                      className="form-control"
                      value={formData.netPayableFee}
                      onChange={handleChange}
                      placeholder="Civil Lines"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>City</label>
                    <input
                      type="text"
                      name="installmentDueDates"
                      className="form-control"
                      value={formData.fathercontact}
                      onChange={handleChange}
                      placeholder="Mumbai"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>State</label>
                    <input
                      type="text"
                      name="installmentDueDates"
                      className="form-control"
                      value={formData.fathercontact}
                      onChange={handleChange}
                      placeholder="Mumbai"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Country</label>
                    <input
                      type="text"
                      name="lastPaymentDate"
                      className="form-control"
                      value={formData.discountAmount}
                      onChange={handleChange}
                      placeholder="India"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Pincode</label>
                    <input
                      type="number"
                      name="receiptNumber"
                      className="form-control"
                      value={formData.netPayableFee}
                      onChange={handleChange}
                      placeholder="254525"
                    />
                  </div>
                </div>

                <div
                  className="d-flex gap-3 mb-3 justify-content-end "
                  style={{ marginTop: "20rem" }}
                >
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
              </form>
            </div>
          </div>
        )}

        {activeTab === "professional-details" && (
          <div className="d-flex text-secondary">
            <div style={{ width: "100%" }}>
              <form onSubmit={handleSubmit} className=" p-4">
                <h5 className="text-dark  mb-3">Employee ID #076</h5>
                <h5 className="mb-3">Contact & Job Role Details</h5>

                <div className="row mt-0">
                  <div className="col-md-4">
                    <label>Designation</label>
                    <select
                      className="form-select"
                      name="admissiontype"
                      onChange={handleChange}
                    >
                      <option value="New Admission">PGT</option>
                      <option value="Re-Admission">TGT</option>
                      <option value="Transfer">Assistant Teacher</option>
                      {/* <option value=" Promotion"> Promotion</option> */}
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label>Department/Subject</label>
                    <select
                      className="form-select"
                      name="admissiontype"
                      onChange={handleChange}
                    >
                      <option value="New Admission">Math </option>
                      <option value="Re-Admission">Science</option>
                      <option value="Transfer">English</option>
                      {/* <option value=" Promotion"> Promotion</option> */}
                    </select>
                  </div>
                  <div className="col-md-2">
                    <label>Assigned Classes</label>
                    <select
                      className="form-select"
                      name="admissiontype"
                      onChange={handleChange}
                    >
                      <option value="New Admission">5th Standard</option>
                      <option value="Re-Admission">4th Standard</option>
                      <option value="Transfer">3th Standard</option>
                      <option value=" Promotion">2th Standard</option>
                      <option value=" Promotion">1th Standard</option>
                    </select>
                  </div>
                  <div className="col-md-2">
                    <label>Section</label>
                    <select
                      className="form-select"
                      name="admissiontype"
                      onChange={handleChange}
                    >
                      <option value="New Admission">A</option>
                      <option value="Re-Admission">B</option>
                      <option value="Transfer">C</option>
                      <option value=" Promotion">D</option>
                      <option value=" Promotion">E</option>
                    </select>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>Reporting Manager </label>
                    <select
                      className="form-select"
                      name="admissionCategory"
                      onChange={handleChange}
                    >
                      <option value="General">General</option>
                      <option value="Management">Management</option>
                      <option value="Staff Quota">Staff Quota</option>
                      <option value="Sibling Quota">Sibling Quota</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label>Joining Date</label>
                    <input
                      type="Date"
                      name="middleName"
                      className="form-control"
                      value={formData.middleName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Working Shift</label>
                    <select
                      className="form-select"
                      name="admissionCategory"
                      onChange={handleChange}
                    >
                      <option value="General">Morning</option>
                      <option value="Management">Day</option>
                      <option value="Staff Quota">Evening</option>
                      {/* <option value="Sibling Quota">Sibling Quota</option>
                      <option value="Others">Others</option> */}
                    </select>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>Job Location (branch)</label>
                    <select
                      className="form-select"
                      name="nationality"
                      onChange={handleChange}
                    >
                      <option value="">Select...</option>
                      <option value="1st">multi-campus school</option>
                      <option value="2nd">main branch</option>
                      <option value="3rd">branch 2</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label>Work Status</label>
                    <select
                      className="form-select"
                      name="nationality"
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="Indian">Active</option>
                      <option value="American">On Leave</option>
                      <option value="Other">Suspended</option>
                      <option value="Other">Resigned</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label>Employment Type</label>
                    <select
                      className="form-select"
                      name="nationality"
                      onChange={handleChange}
                    >
                      <option value="">Select...</option>
                      <option value="Indian">Full-Time</option>
                      <option value="American">Part-Time</option>
                      <option value="Other">Contractual</option>
                    </select>
                  </div>
                </div>

                <div className="d-flex gap-2 mt-4">
                  <div>
                    <h5 className="">Experience</h5>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value="Female"
                      onChange={handleChange}
                    />
                    <label className="form-check-label">Fresher</label>
                  </div>
                </div>

                <div className="row mt-0">
                  <div className="col-md-4">
                    <label>Company Name</label>
                    <input
                      type="text"
                      name="companyName"
                      className="form-control"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Artography Studio"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Role & Designation</label>
                    <input
                      type="text"
                      name="roleDesignation"
                      className="form-control"
                      value={formData.roleDesignation}
                      onChange={handleChange}
                      placeholder="Senior Teacher"
                    />
                  </div>
                  <div className="col-md-2">
                    <label>Year From</label>
                    <select
                      className="form-select"
                      name="yearFrom"
                      onChange={handleChange}
                    >
                      <option value="">Select...</option>
                      <option value="Indian">2015</option>
                      <option value="Indian">2016</option>
                      <option value="Indian">2017</option>
                      <option value="Indian">2018</option>
                      <option value="Indian">2019</option>
                      <option value="Indian">2020</option>
                    </select>
                  </div>
                  <div className="col-md-2">
                    <label>To</label>
                    <select
                      className="form-select"
                      name="to"
                      onChange={handleChange}
                    >
                      <option value="">Select...</option>
                      <option value="Indian">2021</option>
                      <option value="Indian">2022</option>
                      <option value="Indian">2023</option>
                      <option value="Indian">2024</option>
                      <option value="Indian">2025</option>
                    </select>
                  </div>
                </div>
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm rounded mt-3"
                >
                  + Add Experience
                </button>

                <h5 className="mb-1 mt-3">Quailification Details</h5>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>Master's Degree</label>
                    <input
                      type="text"
                      name="masterDegree"
                      className="form-control"
                      value={formData.masterDegree}
                      onChange={handleChange}
                      placeholder="Higest acadmic qualification"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>University Name</label>
                    <input
                      type="text"
                      name="universityName"
                      className="form-control"
                      value={formData.universityName}
                      onChange={handleChange}
                      placeholder="AU"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Score</label>
                    <input
                      type="text"
                      name="scores"
                      className="form-control"
                      value={formData.scores}
                      onChange={handleChange}
                      placeholder="78%"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>Graduation</label>
                    <input
                      type="text"
                      name="graduation"
                      className="form-control"
                      value={formData.graduation}
                      onChange={handleChange}
                      placeholder="E.Ed"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>University</label>
                    <input
                      type="text"
                      name="university"
                      className="form-control"
                      value={formData.university}
                      onChange={handleChange}
                      placeholder="DU"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Score</label>
                    <input
                      type="text"
                      name="score"
                      className="form-control"
                      value={formData.score}
                      onChange={handleChange}
                      placeholder="85%"
                    />
                  </div>
                </div>
              </form>

              <div className="p-4">
                <h5 className="fw-semibold mb-3">Document Check List</h5>

                {/* Birth & Identity Proof */}
                <h6 className="fw-semibold mt-4">
                  Parent/Guardian Related Documents
                </h6>
                <div className="row mt-2">
                  <div className="col-md-3">
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input text-primary"
                        type="checkbox"
                      />
                      <label className="form-check-label">
                        10th Class Marksheet
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Previous experience Letter
                      </label>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        12th class marksheet
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">Salary Slip</label>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        graduation Certificate
                      </label>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Masters Certificate
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3">
              <div
                className=" border-primary border-2 border-dashed rounded-3 mt-2 p-5 text-center ms-4"
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
                <p className="mb-2 text-secondary">
                  Drag and Drop Files here or
                </p>

                <label
                  className="btn btn-outline-primary px-4"
                  style={{ cursor: "pointer" }}
                >
                  Browse Files
                  <input type="file" hidden />
                </label>
              </div>
              <div
                className="d-flex align-items-center p-2 pb-4 justify-content-between mt-4 shadow-sm rounded-3"
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
                      className="fw-semibold mb-1  "
                      style={{ color: "#1e293b" }}
                    >
                      Aadhar Card
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
              <div
                className="d-flex align-items-center p-2 justify-content-between pb-4 mt-4 shadow-sm rounded-3 "
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
                      className="fw-semibold mb-1"
                      style={{ color: "#1e293b" }}
                    >
                      Birth Certificate
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
              <div>
                <div className="mt-4 fs-5">Files</div>
                <div
                  className="p-2 ms-2  rounded-3 mt-2 "
                  style={{ width: "290px", border: "1px dashed #2632381A" }}
                >
                  <div className="d-flex justify-content-between">
                    <div>
                      {" "}
                      <FiFile /> Degree Certificate.pdf
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
                      <FiFile /> Master Certificate.pdf
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
                      <FiFile /> 12th Marksheet
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
                      <FiFile /> 10th Marksheet
                    </div>
                    <div style={{ color: "#911808" }}>
                      {" "}
                      <AiFillDelete />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="d-flex gap-3 ms-2 mb-5 "
                style={{ marginTop: "15rem" }}
              >
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
          </div>
        )}

        {activeTab === "salary-details" && (
          <div className="d-flex text-secondary">
            <div style={{ width: "100%" }}>
              <form onSubmit={handleSubmit} className=" p-4">
                <div className="row mt-0">
                  <div className="col-md-4">
                    <label>Salary Type</label>
                    <select
                      className="form-select"
                      name="salaryType"
                      onChange={handleChange}
                    >
                      <option value="New Admission">Fixed</option>
                      <option value="Re-Admission">Hourly</option>
                      <option value="Transfer">Contract-based</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label>Monthly Gross Salary</label>
                    <input
                      type="number"
                      name="monthlygrossSalary"
                      className="form-control"
                      value={formData.monthlygrossSalary}
                      onChange={handleChange}
                      placeholder="Total salary"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>CTC</label>
                    <input
                      type="text"
                      name="ctc"
                      className="form-control"
                      value={formData.ctc}
                      onChange={handleChange}
                      placeholder="Yearly Salary"
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>Bank Account Number</label>
                    <input
                      type="number"
                      name="BankacNumber"
                      className="form-control"
                      value={formData.BankacNumber}
                      onChange={handleChange}
                      placeholder="For salary credit"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Bank Name</label>
                    <input
                      type="text"
                      name="bankName"
                      className="form-control"
                      value={formData.bankName}
                      onChange={handleChange}
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>IFSC Code</label>
                    <input
                      type="text"
                      name="ifsc"
                      className="form-control"
                      value={formData.ifsc}
                      onChange={handleChange}
                      placeholder="SBI1765"
                    />
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col-md-4">
                    <label>PF Number (Optional)</label>
                    <input
                      type="text"
                      name="pfNumber"
                      className="form-control"
                      value={formData.pfNumber}
                      onChange={handleChange}
                      placeholder="Provident Fund"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>UAN (Optional)</label>
                    <input
                      type="text"
                      name="uan"
                      className="form-control"
                      value={formData.uan}
                      onChange={handleChange}
                      placeholder="Universal Account Number(EPF)"
                    />
                  </div>
                </div>

                <div
                  className="d-flex gap-3 mb-3 justify-content-end "
                  style={{ marginTop: "20rem" }}
                >
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
              </form>
            </div>
          </div>
        )}
        {activeTab === "login-access-details" && (
          <div className="d-flex text-secondary">
            <div style={{ width: "100%" }}>
              <form onSubmit={handleSubmit} className=" p-4">
                <h5 className="text-dark mb-3">Employee ID #076</h5>
                <div className="row mt-0">
                  <div className="col-md-4">
                    <div className="d-flex justify-content-between">
                      <div>
                        
                        <p>System Access Required </p>{" "}
                      </div>
                      <div class="form-check form-switch  fs-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex justify-content-between">
                      <div className="fw-semibold">
                        {" "}
                        <p>Show Last Login History</p>{" "}
                      </div>
                      <div class="form-check form-switch  fs-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex justify-content-between">
                      <div className="fs-5 fw-bold">
                        {" "}
                        <p>System Access Required</p>{" "}
                      </div>
                      <div class="form-check form-switch  fs-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mt-0">
                  <div className="col-md-4">
                    <label>Log In Role</label>
                    <select
                      className="form-select"
                      name="salaryType"
                      onChange={handleChange}
                    >
                      <option value="New Admission">Teacher</option>
                      <option value="Re-Admission">HOD</option>
                      <option value="Transfer">Exam In-charge</option>
                      <option value="Transfer">Librarian</option>
                      <option value="Transfer">Admin</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label>User name Id</label>
                    <input
                      type="number"
                      name="monthlygrossSalary"
                      className="form-control"
                      value={formData.monthlygrossSalary}
                      onChange={handleChange}
                      placeholder="Usually auto-generated (e.g., fiestname.testname@school.com)"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Temporary Password</label>
                    <input
                      type="text"
                      name="ctc"
                      className="form-control"
                      value={formData.ctc}
                      onChange={handleChange}
                      placeholder="Default password,required reset on first login"
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>Password Reset Link Sent</label>
                    <select
                      className="form-select"
                      name="salaryType"
                      onChange={handleChange}
                    >
                      <option value="New Admission">Yes</option>
                      <option value="Re-Admission">No</option>
                      <option value="Transfer">
                        Button For manual triggers
                      </option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label>Mobile App Access Enabled</label>
                    <select
                      className="form-select"
                      name="salaryType"
                      onChange={handleChange}
                    >
                      <option value="New Admission">Yes</option>
                      <option value="Re-Admission">No</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label>Log In Status</label>
                    <input
                      type="text"
                      name="ifsc"
                      className="form-control"
                      value={formData.ifsc}
                      onChange={handleChange}
                      placeholder="Active , Suspended, Locked , Password Reset Required"
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>Multi-Factor Auth (MFA)</label>
                    <select
                      className="form-select"
                      name="salaryType"
                      onChange={handleChange}
                    >
                      <option value="New Admission">Yes</option>
                      <option value="Re-Admission">No</option>
                    </select>
                  </div>
                </div>
  <Container className="mt-2  ms-0 w-50">
      <h5 className="mb-3 text-dark fw-bold">Module Access</h5>
<div >
      <Table  hover responsive >
        <thead className="table-bordered" >
          <tr >
            <th>S.N.</th>
            <th>Module Name</th>
            <th>Create</th>
            <th>View</th>
            <th>Update</th>
            <th>Delete</th>
            <th>Approve</th>
          </tr>
        </thead>

        <tbody >
          {modules.map((mod, index) => (
            <tr key={index} >
              <td>{index + 1}</td>
              <td>{mod.name}</td>

              {["create", "view", "update", "delete", "approve"].map((field) => (
                <td key={field} className="text-center">
                  <Form.Check
                    type="checkbox"
                    checked={mod[field]}
                    onChange={() => toggleCheckbox(index, field)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table></div>
    </Container>
                <div
                  className="d-flex gap-3 mb-3 justify-content-end "
                  style={{ marginTop: "20rem" }}
                >
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
              
              </form>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddTeachers;
