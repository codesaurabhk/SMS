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

  const [activeTab, setActiveTab] = useState("student-details");

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
          <ul className="nav nav-tabs student-tabs mb-4 border-0">
            {[
              { id: "student-details", label: "Teacher Details" },
               { id: "contact-details", label: "Contact Details" },
              { id: "admission-details", label: "Admission Details" },
              {
                id: "parents-guardian-details",
                label: "Parents/Guardian Details",
              },
             
              { id: "fees-details", label: "Fees Details" },
              { id: "facilities-services", label: "Facilities & Services" },
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
        {/* student details  */}
        {activeTab === "student-details" && (
          <div className="d-flex text-secondary">
            <div style={{ width: "100%" }}>
              <form onSubmit={handleSubmit} className=" p-4">
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
        {/* admission details  */}
        {activeTab === "admission-details" && (
          <div className="d-flex text-secondary">
            <div style={{ width: "100%" }}>
              <form onSubmit={handleSubmit} className=" p-4">
                {/* <h5>Admission ID #0767976</h5> */}

                <div className="row mt-0">
                  <div className="col-md-4">
                    <label>Admission Date</label>
                    <input
                      type="Date"
                      name="firstName"
                      className="form-control"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
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
                    <label>Admission type </label>
                    <select
                      className="form-select"
                      name="admissiontype"
                      onChange={handleChange}
                    >
                      <option value="New Admission">New Admission </option>
                      <option value="Re-Admission">Re-Admission</option>
                      <option value="Transfer">Transfer</option>
                      <option value=" Promotion"> Promotion</option>
                    </select>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>Admission Category </label>
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
                    <label>Admission Mode </label>
                    <select
                      className="form-select"
                      name="admissionmode"
                      onChange={handleChange}
                    >
                      <option value="Online">Online</option>
                      <option value="Offline">Offline</option>
                      <option value="Walk-in">Walk-in</option>
                      <option value="Referal">Referal</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label>Reason for Admission</label>
                    <input
                      type="text"
                      name="ReasonforAdmission"
                      className="form-control"
                      value={formData.ReasonforAdmission}
                      onChange={handleChange}
                      placeholder="Text (relocation, etc.)"
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-2">
                    <label>Class</label>
                    <select
                      className="form-select"
                      name="nationality"
                      onChange={handleChange}
                    >
                      <option value="">Select...</option>
                      <option value="1st">1st</option>
                      <option value="2nd">2nd</option>
                      <option value="3rd">3rd</option>
                    </select>
                  </div>
                  <div className="col-md-2">
                    <label>Section</label>
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
                    <label>Academic Year</label>
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
                    <label>Class Teacher Name</label>
                    <input
                      type="text"
                      name="motherTongue"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>Class Roll Number</label>
                    <input
                      type="text"
                      name="motherTongue"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-4">
                    <label>Education Medium</label>
                    <select
                      className="form-select"
                      name="speciallyAbled"
                      onChange={handleChange}
                    >
                      <option value="">Select...</option>
                      <option value="english">English</option>
                      <option value="hindi">Hindi</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label>Stream</label>
                    <select
                      className="form-select"
                      name="religion"
                      onChange={handleChange}
                    >
                      <option value="">Select...</option>
                      <option value="science">Science</option>
                      <option value="commerce">Commerce</option>
                      <option value="arts">Arts</option>
                    </select>
                  </div>

                  {/* <div className="col-md-4">
            <label>Upload Documents</label>
            <input type="file" multiple className="form-control" />
          </div> */}
                </div>
                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>Fee Category</label>

                    <select
                      className="form-select"
                      name="speciallyAbled"
                      onChange={handleChange}
                    >
                      <option value="">Select...</option>
                      <option value="english">English</option>
                      <option value="hindi">Hindi</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="col-md-4">
                    <label>Previous School Name (If Any)</label>
                    <input
                      type="text"
                      name="motherTongue"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Transfer Certificate No.</label>
                    <input
                      type="text"
                      name="motherTongue"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>Transport Requirement</label>

                    <select
                      className="form-select"
                      name="speciallyAbled"
                      onChange={handleChange}
                    >
                      <option value="">Select...</option>
                      <option value="english">Yes</option>
                      <option value="hindi">No</option>
                    </select>
                  </div>

                  <div className="col-md-4">
                    <label>Hostel Requirement</label>
                    <select
                      className="form-select"
                      name="speciallyAbled"
                      onChange={handleChange}
                    >
                      <option value="">Select...</option>
                      <option value="english">Yes</option>
                      <option value="hindi">No</option>
                    </select>
                  </div>
                </div>
              </form>

              <div className="mt-4">
                <h5 className="fw-semibold mb-3">Document Check List</h5>

                {/* Birth & Identity Proof */}
                <h6 className="fw-semibold mt-4">Birth & Identity Proof</h6>
                <div className="row mt-2">
                  <div className="col-md-3">
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input text-primary"
                        type="checkbox"
                      />
                      <label className="form-check-label">
                        Birth Certificate
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Visa / Residence Permit (For foreign students)
                      </label>
                    </div>
                  </div>

                  <div className="col-md-2">
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">Aadhar Card</label>
                    </div>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Caste/Category Certificate
                      </label>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Student’s Passport Size Photos (5)
                      </label>
                    </div>

                    <div className="form-check mb-3">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Sibling Certificate(For sibling-based admissions or fee
                        concessions)
                      </label>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Passport (if applicable)
                      </label>
                    </div>
                    <div className="form-check mb-4">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Sports / Extra-Curricular Certificates
                      </label>
                    </div>
                  </div>
                </div>

                {/* Previous Education Records */}
                <h6 className="fw-semibold ">Previous Education Records</h6>
                <div className="row mt-2">
                  <div className="col-md-3">
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Transfer Or School Leaving Certificate (SLC)
                      </label>
                    </div>
                  </div>

                  <div className="col-md-2">
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Previous Report Card
                      </label>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Character Certificate
                      </label>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Migration Certificate
                      </label>
                    </div>
                  </div>
                </div>

                {/* Medical & Health Records */}
                <h6 className="fw-semibold mt-2">Medical & Health Records</h6>
                <div className="row mt-2">
                  <div className="col-md-3">
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Medical Certificate / Fitness Certificate
                      </label>
                    </div>
                  </div>

                  <div className="col-md-2">
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Immunization / Vaccination Record
                      </label>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Disability Certificate (if applicable)
                      </label>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Allergy/Chronic Illness Declaration
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
        {/* parents guardian details  */}
        {activeTab === "parents-guardian-details" && (
          <div className="d-flex text-secondary">
            <div style={{ width: "100%" }}>
              <form onSubmit={handleSubmit} className=" p-4">
                {/* <h5>Admission ID #0767976</h5> */}

                <div className="row mt-0">
                  <div className="col-md-4">
                    <label>Fathers Name</label>
                    <input
                      type="Date"
                      name="fathersName"
                      className="form-control"
                      value={formData.fathersName}
                      onChange={handleChange}
                      placeholder="Mr. Rajesh Gupta"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Father's Occuption</label>
                    <input
                      type="text"
                      name="fatheroccupation"
                      className="form-control"
                      value={formData.fatheroccupation}
                      onChange={handleChange}
                      placeholder="Govt. Officer"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Father's Contact No </label>
                    <input
                      type="number"
                      name="fathercontact"
                      className="form-control"
                      value={formData.fathercontact}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>Mother's Name </label>
                    <input
                      type="text"
                      name="mothersName"
                      className="form-control"
                      value={formData.mothersName}
                      onChange={handleChange}
                      placeholder="Mrs. Suman Gupta"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Mother's Occupation </label>
                    <input
                      type="text"
                      name="mothersoccupation"
                      className="form-control"
                      value={formData.mothersoccupation}
                      onChange={handleChange}
                      placeholder="Housewife"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Mother's Contact No.</label>
                    <input
                      type="number"
                      name="mothercontact"
                      className="form-control"
                      value={formData.mothercontact}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>Guardian's Name</label>
                    <input
                      type="text"
                      name="guardianName"
                      className="form-control"
                      value={formData.guardianName}
                      onChange={handleChange}
                      placeholder="Mr. Anil Kumar"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Guardian's Relation</label>
                    <input
                      type="text"
                      name="guardianRelation"
                      className="form-control"
                      value={formData.guardianRelation}
                      onChange={handleChange}
                      placeholder="Massi"
                    />
                  </div>

                  <div className="col-md-4">
                    <label>Guardian's Contact No.</label>
                    <input
                      type="number"
                      name="guardianContact"
                      className="form-control"
                      onChange={handleChange}
                      placeholder="+91 9876957987"
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>Father's Email Address</label>
                    <input
                      type="email"
                      name="fatherEmail"
                      className="form-control"
                      onChange={handleChange}
                      placeholder="RajeshGupta@gmail.com"
                    />
                  </div>

                  <div className="col-md-4">
                    <label>Mother's Email Address</label>
                    <input
                      type="email"
                      name="motherEmail"
                      className="form-control"
                      onChange={handleChange}
                      placeholder="ManglaGupta@gmail.com"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Guardian's Email Address</label>
                    <input
                      type="email"
                      name=" guardianEmail"
                      className="form-control"
                      onChange={handleChange}
                      placeholder="ManglaGupta@gmail.com"
                    />
                  </div>

                  {/* <div className="col-md-4">
            <label>Upload Documents</label>
            <input type="file" multiple className="form-control" />
          </div> */}
                </div>
              </form>

              <div className="mt-4">
                <h5 className="fw-semibold mb-3">Document Check List</h5>

                {/* Birth & Identity Proof */}
                <h6 className="fw-semibold mt-4">
                  Parent/Guardian Related Documents
                </h6>
                <div className="row mt-2">
                  <div className="col-md-2">
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input text-primary"
                        type="checkbox"
                      />
                      <label className="form-check-label">
                        Father's Aadhar Card
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Father's Employment Certificate
                      </label>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Mother's Aadhar Card
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Mother's Employment Certificate (if Any)
                      </label>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Guardian's Aadhar Card
                      </label>
                    </div>

                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Passport/Visa (For International Students)
                      </label>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Passport size Photgraph(1 Each)
                      </label>
                    </div>
                  </div>
                </div>

                {/* Previous Education Records */}
                <h6 className="fw-semibold ">Residence & Adress Proof</h6>
                <div className="row mt-2">
                  <div className="col-md-3">
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Ration Card / Utility Bill / Rent Agreement
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
                            "linear-gradient(to right, #1570EF, #2E90FA)",
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
                            "linear-gradient(to right, #1570EF, #2E90FA)",
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
        {activeTab === "fees-details" && (
          <div className="d-flex text-secondary">
            <div style={{ width: "100%" }}>
              <form onSubmit={handleSubmit} className=" p-4">
                <h5>Basic FeeDetails</h5>

                <div className="row mt-0">
                  <div className="col-md-4">
                    <label>Fee Category</label>
                    <select
                      className="form-select"
                      name="feeCategory"
                      onChange={handleChange}
                    >
                      <option value="tuition">Tuition</option>
                      <option value="admission">Admission</option>
                      <option value="hostel">Hostel</option>
                      <option value="transport"> Transport</option>
                      <option value="others"> Others</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label>Fee Structure / Plan</label>
                    <select
                      className="form-select"
                      name="feeStructure"
                      onChange={handleChange}
                    >
                      <option value="standard">Standard</option>
                      <option value="customized">Customized</option>
                      <option value="scholarship-based">
                        Scholarship-based
                      </option>
                      <option value="others"> Others</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label>Total Fees Amount </label>
                    <input
                      type="number"
                      name="totalFees"
                      className="form-control"
                      value={formData.fathercontact}
                      onChange={handleChange}
                      placeholder="5000"
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>Discount / Concession Type </label>
                    <select
                      className="form-select"
                      name="discountType"
                      onChange={handleChange}
                    >
                      <option value="Sibling">Sibling</option>
                      <option value="StaffChild">Staff Child</option>
                      <option value="Merit-based">Merit-based</option>
                      <option value="Goverment">Goverment</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label>Discount / Concession Amount </label>
                    <input
                      type="number"
                      name="discountAmount"
                      className="form-control"
                      value={formData.discountAmount}
                      onChange={handleChange}
                      placeholder="5000"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Net Payable Fee</label>
                    <input
                      type="number"
                      name="netPayableFee"
                      className="form-control"
                      value={formData.netPayableFee}
                      onChange={handleChange}
                      placeholder="Net Payable Fee"
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>Scholarship Details</label>
                    <input
                      type="text"
                      name="scholarshipDetails"
                      className="form-control"
                      value={formData.scholarshipDetails}
                      onChange={handleChange}
                      placeholder="Scholarship Name"
                    />
                  </div>
                </div>

                <h5 className="mt-4">Payment Details</h5>

                <div className="row mt-0">
                  <div className="col-md-4">
                    <label>Fee Payment Mode</label>
                    <select
                      className="form-select"
                      name="feePaymentMode"
                      onChange={handleChange}
                    >
                      <option value="Cash">Cash</option>
                      <option value="Cheque">Cheque</option>
                      <option value="BankTransfer">Bank Transfer</option>
                      <option value="UPI">UPI</option>
                      <option value="Card">Card</option>
                      <option value="OnlinePayment">Online Payment</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label>Installment Plan</label>
                    <select
                      className="form-select"
                      name="installmentPlan"
                      onChange={handleChange}
                    >
                      <option value="Monthly">Monthly</option>
                      <option value="Quarterly">Quarterly</option>
                      <option value="Annual">Annual</option>
                      <option value="Custom">Custom</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label>Installment Due Dates</label>
                    <input
                      type="date"
                      name="installmentDueDates"
                      className="form-control"
                      value={formData.fathercontact}
                      onChange={handleChange}
                      placeholder="Due dates for installments"
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>Fee Payment Status</label>
                    <select
                      className="form-select"
                      name="discountType"
                      onChange={handleChange}
                    >
                      <option value="Sibling">Paid</option>
                      <option value="StaffChild">Unpaid</option>
                      <option value="Merit-based">Partilly Paid</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label>Last Payment Date</label>
                    <input
                      type="date"
                      name="lastPaymentDate"
                      className="form-control"
                      value={formData.discountAmount}
                      onChange={handleChange}
                      placeholder="Date of Last Payment"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Transaction / Receipt No.</label>
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

                <h5 className="mt-4">Late fee Details</h5>

                <div className="row mt-0">
                  <div className="col-md-4">
                    <label>Late Fee Applicable</label>
                    <div className="col-md-4 d-flex gap-5">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          value="Female"
                          onChange={handleChange}
                        />
                        <label className="form-check-label">Yes</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          value="Others"
                          onChange={handleChange}
                        />
                        <label className="form-check-label">No</label>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <label>Late Fee Amount</label>
                    <input
                      type="number"
                      name="lateFeeAmount"
                      className="form-control"
                      value={formData.fathercontact}
                      onChange={handleChange}
                      placeholder="300"
                    />
                  </div>
                </div>

                <h5 className="mt-4">Additional Info</h5>

                <div className="row mt-0">
                  <div className="col-md-4">
                    <label>Outstanding Fees</label>
                    <input
                      type="number"
                      name="outstandingFees"
                      className="form-control"
                      value={formData.outstandingFees}
                      onChange={handleChange}
                      placeholder="2000"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Refundable Security Deposit</label>
                    <input
                      type="number"
                      name="refundableDeposit"
                      className="form-control"
                      value={formData.refundableDeposit}
                      onChange={handleChange}
                      placeholder="3000"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Fee remarks/Notes</label>
                    <input
                      type="text"
                      name="feeRemarks"
                      className="form-control"
                      value={formData.feeRemarks}
                      onChange={handleChange}
                      placeholder="If required"
                    />
                  </div>
                </div>
              </form>

              <div className="mt-4">
                <h5 className="fw-semibold mb-3">Document Check List</h5>

                {/* Birth & Identity Proof */}
                <h6 className="fw-semibold mt-4">
                  Admission Application Documents
                </h6>
                <div className="row mt-2">
                  <div className="col-md-3">
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input text-primary"
                        type="checkbox"
                      />
                      <label className="form-check-label">
                        Duly Filled Admission Form
                      </label>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Fee Payment Receipt
                      </label>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Scholarship Application Form (if applicable)
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
                            "linear-gradient(to right, #1570EF, #2E90FA)",
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
                            "linear-gradient(to right, #1570EF, #2E90FA)",
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
        {activeTab === "facilities-services" && (
          <div className="d-flex text-secondary">
            <div style={{ width: "100%" }}>
              <form onSubmit={handleSubmit} className=" p-4">
                <div className="d-flex gap-3">
               <div> <h5>RFID Card Services Provided </h5> </div>
                <div class="form-check form-switch  fs-5">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                  </div></div>

                <div className="row mt-0">
                  <div className="col-md-4">
                    <label>RFID Card Number / UID</label>
                    <input
                      type="text"
                      name="rfidCardNumber"
                      className="form-control"
                      value={formData.rfidCardNumber}
                      onChange={handleChange}
                      placeholder="Unique RFID Card ID assigned to student"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Card Issue Date</label>
                    <input
                      type="date"
                      name="cardIssueDate"
                      className="form-control"
                      value={formData.cardIssueDate}
                      onChange={handleChange}
                      placeholder="Date of RFID Card issuance"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Card Expiry Date</label>
                    <input
                      type="date"
                      name="rfidCardexpiryDate"
                      className="form-control"
                      value={formData.rfidCardexpiryDate}
                      onChange={handleChange}
                      placeholder="Expiry Date (if applicable)"
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>RFID Activation Status</label>
                    <select
                      className="form-select"
                      name="rfidActivationStatus"
                      onChange={handleChange}
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                      <option value="Lost">Lost</option>
                      <option value="Blocked">Blocked</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label>Replacement Status</label>
                    <select
                      className="form-select"
                      name="replacementStatus"
                      onChange={handleChange}
                    >
                      <option value="Original">Original</option>
                      <option value="Replacement">Replacement</option>
                      <option value="Lost">Lost</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label>Issue Reason</label>
                    <select
                      className="form-select"
                      name="issueReason"
                      onChange={handleChange}
                    >
                      <option value="lost">New Admission</option>
                      <option value="newAdmission">Lost</option>
                      <option value="damaged">Damaged</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>RFID Card Type</label>
                    <select
                      className="form-select"
                      name="rfidCardType"
                      onChange={handleChange}
                    >
                      <option value="Active">Basic ID</option>
                      <option value="Inactive">Access Control</option>
                      <option value="Lost">Attendance Tracking</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label>Linked Services</label>
                    <select
                      className="form-select"
                      name="rfidCardType"
                      onChange={handleChange}
                    >
                      <option value="Attendance">Attendance</option>
                      <option value="Library">Library</option>
                      <option value="Transport">Transport</option>
                      <option value="Dormitory">Dormitory</option>
                      <option value="Canteen">Canteen</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label>Remarks</label>
                    <input
                      type="text"
                      name="outstandingFees"
                      className="form-control"
                      value={formData.outstandingFees}
                      onChange={handleChange}
                      placeholder="Any additional note related to RFID card"
                    />
                  </div>
                </div>
                <div className="d-flex mt-4 gap-3 ">
              <div>
                <h5 >Transport Service Opted</h5></div>
                <div class="form-check form-switch  fs-5">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                  </div></div>

                <div className="row mt-0">
                  <div className="col-md-4">
                    <label>Pickup Point/ Bus Stop</label>
                    <select
                      className="form-select"
                      name="pickupPoint"
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="Cheque">
                        Predefined stops or custom pickup points
                      </option>
                      <option value="BankTransfer">Bank Transfer</option>
                      <option value="UPI">UPI</option>
                      <option value="Card">Card</option>
                      <option value="OnlinePayment">Online Payment</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label>Drop Point / Bus Stop</label>
                    <select
                      className="form-select"
                      name="installmentPlan"
                      onChange={handleChange}
                    >
                      <option value="">select</option>
                      <option value="Quarterly">Same</option>
                      <option value="Annual">Annual</option>
                      <option value="Custom">Custom</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label>Route Number / Name</label>
                    <select
                      className="form-select"
                      name="installmentPlan"
                      onChange={handleChange}
                    >
                      <option value="">select</option>
                      <option value="Quarterly">Bus Route assigned</option>
                      <option value="Annual">Annual</option>
                      <option value="Custom">Custom</option>
                    </select>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>Bus Number / Vehicle Number</label>
                    <select
                      className="form-select"
                      name="discountType"
                      onChange={handleChange}
                    >
                      <option value="Sibling">Vehicle assigned</option>
                      <option value="StaffChild">Unpaid</option>
                      <option value="Merit-based">Partilly Paid</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label>Driver's Name</label>
                    <select
                      className="form-select"
                      name="discountType"
                      onChange={handleChange}
                    >
                      <option value="Sibling">Driver assigned</option>
                      <option value="StaffChild">Unpaid</option>
                      <option value="Merit-based">Partilly Paid</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label>Driver's Contact Number</label>
                    <input
                      type="number"
                      name="receiptNumber"
                      className="form-control"
                      value={formData.netPayableFee}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>Pickup Time</label>
                    <input
                      type="time"
                      name="receiptNumber"
                      className="form-control"
                      value={formData.netPayableFee}
                      onChange={handleChange}
                      placeholder="Scheduled pickup time"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Transport Fee Payment Status</label>
                    <select
                      className="form-select"
                      name="discountType"
                      onChange={handleChange}
                    >
                      <option value="Sibling">Paid</option>
                      <option value="StaffChild">Unpaid</option>
                      <option value="Merit-based">Partilly Paid</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label>Emergency Contact for Transport</label>
                    <input
                      type="text"
                      name="receiptNumber"
                      className="form-control"
                      value={formData.netPayableFee}
                      onChange={handleChange}
                      placeholder="Alternate contact in case of transport emergencies"
                    />
                  </div>
                </div>

                <div className="d-flex mt-4 gap-3">
                  <div>
                    <h5>Hostel/Dormitory Services </h5>{" "}
                  </div>
                  <div class="form-check form-switch  fs-5">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                </div>

                <div className="row mt-0">
                  <div className="col-md-4">
                    <label>Hostel Name / Building</label>
                    <input
                      type="text"
                      name="receiptNumber"
                      className="form-control"
                      value={formData.netPayableFee}
                      onChange={handleChange}
                      placeholder="Hostel/Dormitory Name"
                    />
                  </div>

                  <div className="col-md-4">
                    <label>Room Number / Bed Number</label>
                    <input
                      type="number"
                      name="lateFeeAmount"
                      className="form-control"
                      value={formData.fathercontact}
                      onChange={handleChange}
                      placeholder="Assigned room or bed number"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Room Type</label>
                    <input
                      type="text"
                      name="lateFeeAmount"
                      className="form-control"
                      value={formData.fathercontact}
                      onChange={handleChange}
                      placeholder="Single,Double,Tripple sharing,etc."
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>Hostel Fees</label>
                    <input
                      type="number"
                      name="receiptNumber"
                      className="form-control"
                      value={formData.netPayableFee}
                      onChange={handleChange}
                      placeholder="Fees for accommodation"
                    />
                  </div>

                  <div className="col-md-4">
                    <label>Fee Payment Status</label>

                    <select
                      className="form-select"
                      name="discountType"
                      onChange={handleChange}
                    >
                      <option value="Sibling">Paid</option>
                      <option value="StaffChild">Unpaid</option>
                      <option value="Merit-based">Partilly Paid</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label>Warden's Name</label>
                    <input
                      type="text"
                      name="lateFeeAmount"
                      className="form-control"
                      value={formData.fathercontact}
                      onChange={handleChange}
                      placeholder="Assigned hostel warden"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>Warden's Contact Number</label>
                    <input
                      type="text"
                      name="receiptNumber"
                      className="form-control"
                      value={formData.netPayableFee}
                      onChange={handleChange}
                      placeholder="for emergency purposes"
                    />
                  </div>

                  <div className="col-md-4">
                    <label>Check-In Date</label>

                    <input
                      type="date"
                      name="receiptNumber"
                      className="form-control"
                      value={formData.netPayableFee}
                      onChange={handleChange}
                      placeholder="Hostel check-in date"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Expected Check-Out Date </label>
                    <input
                      type="text"
                      name="lateFeeAmount"
                      className="form-control"
                      value={formData.fathercontact}
                      onChange={handleChange}
                      placeholder="Expected hostel leaving date"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>Visitor List / Guardian for Hostel Visit</label>
                    <input
                      type="text"
                      name="receiptNumber"
                      className="form-control"
                      value={formData.netPayableFee}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-4">
                    <label>Food Preference</label>

                    <select
                      className="form-select"
                      name="discountType"
                      onChange={handleChange}
                    >
                      <option value="Sibling">Vegetarian</option>
                      <option value="StaffChild">NOon-Vegetarian</option>
                      <option value="Merit-based">Special Diat</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label>Health / Allergy Concerns</label>
                    <input
                      type="text"
                      name="lateFeeAmount"
                      className="form-control"
                      value={formData.fathercontact}
                      onChange={handleChange}
                      placeholder="Any special health instructions"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>Emergency Hostel Contact</label>
                    <input
                      type="text"
                      name="receiptNumber"
                      className="form-control"
                      value={formData.netPayableFee}
                      onChange={handleChange}
                      placeholder="Emergency contact specific for hostel stays"
                    />
                  </div>

                  <div className="col-md-4">
                    <label>Hostel Attendence Required</label>

                    <select
                      className="form-select"
                      name="discountType"
                      onChange={handleChange}
                    >
                      <option value="Sibling">Yes</option>
                      <option value="StaffChild">No</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label>Remarks</label>
                    <input
                      type="text"
                      name="lateFeeAmount"
                      className="form-control"
                      value={formData.fathercontact}
                      onChange={handleChange}
                      placeholder="Additional notes (if any)"
                    />
                  </div>
                </div>
              </form>

              <div className="mt-4">
                <h5 className="fw-semibold mb-3">Document Check List</h5>

                {/* Birth & Identity Proof */}
                <h6 className="fw-semibold mt-4">
                  RFID Card Services-Documents Required
                </h6>
                <div className="row mt-2">
                  <div className="col-md-3">
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input text-primary"
                        type="checkbox"
                      />
                      <label className="form-check-label">
                        Student Photo (Passport Size)
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Old RFID Card (if replacement)
                      </label>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Student ID Proof
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        FIR Copy (if lost/stolen)
                      </label>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Parent/Guardian Signature
                      </label>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Application Form
                      </label>
                    </div>
                  </div>
                </div>

                {/* TransPort Service-Documents Required */}
                <h6 className="fw-semibold ">
                  TransPort Service-Documents Required
                </h6>
                <div className="row mt-2">
                  <div className="col-md-3">
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Transport Application Form
                      </label>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Recent Address proof
                      </label>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">Student Photo</label>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Payment Slip / Receipt
                      </label>
                    </div>
                  </div>
                </div>

                {/* Medical & Health Records */}
                <h6 className="fw-semibold mt-2">
                  Hostel/Dormitory Services - Documents Required{" "}
                </h6>
                <div className="row mt-2">
                  <div className="col-md-3">
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Hostel Application Form
                      </label>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Parent/Guardian Consent Form
                      </label>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Medical Certificate/Health Declaration
                      </label>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Fee Payment Receipt
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
                      Fees Receipt
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
                            "linear-gradient(to right, #1570EF, #2E90FA)",
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
                      Admission Form
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
                            "linear-gradient(to right, #1570EF, #2E90FA)",
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
                style={{ marginTop: "35rem" }}
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
                {/* <h5>Basic FeeDetails</h5> */}

                <div className="row mt-0">
                  <div className="col-md-4">
                    <label>Student's Contact No.</label>
                    <input
                      type="number"
                      name="totalFees"
                      className="form-control"
                      value={formData.fathercontact}
                      onChange={handleChange}
                      placeholder="N/A"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Father's Contact No.</label>
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
                    <label>Mother's Contact No.</label>
                    <input
                      type="number"
                      name="totalFees"
                      className="form-control"
                      value={formData.fathercontact}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>Father's Email Address</label>
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
                    <label>Mother's Email Address</label>
                    <input
                      type="email"
                      name="discountAmount"
                      className="form-control"
                      value={formData.discountAmount}
                      onChange={handleChange}
                      placeholder="Rajesh@gmail.com"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Guardian's Email Address</label>
                    <input
                      type="email"
                      name="netPayableFee"
                      className="form-control"
                      value={formData.netPayableFee}
                      onChange={handleChange}
                      placeholder="abc@gmail.com"
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
                <div><h5 className="">Permanent Address</h5></div>
                <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          value="Female"
                          onChange={handleChange}
                        />
                        <label className="form-check-label">Same as Above</label>
                      </div></div>

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
      </div>
    </div>
  );
}

export default AddTeachers;