import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="container mt-4 mb-5  bg-white rounded-4 shadow border-0">
      <h3 className="mb-4 pt-3 ps-3 ">Add New Student</h3>

      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <a className="nav-link active" href="#student-details">
            Student Details
          </a>
        </li>
        <li className="nav-item"><a className="nav-link" href="#">Admission Details</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Parents/Guardian Details</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Contact Details</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Fees Details</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Facilities & Services</a></li>
      </ul>

      <form onSubmit={handleSubmit} className=" p-4 ">
        <h5>Admission ID #0767976</h5>

        <div className="row mt-3">
          <div className="col-md-4">
            <label>First Name</label>
            <input type="text" name="firstName" className="form-control" value={formData.firstName} onChange={handleChange} />
          </div>
          <div className="col-md-4">
            <label>Middle Name</label>
            <input type="text" name="middleName" className="form-control" value={formData.middleName} onChange={handleChange} />
          </div>
          <div className="col-md-4">
            <label>Last Name</label>
            <input type="text" name="lastName" className="form-control" value={formData.lastName} onChange={handleChange} />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-4">
            <label>Gender</label><br />
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" value="Male" onChange={handleChange} />
              <label className="form-check-label">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" value="Female" onChange={handleChange} />
              <label className="form-check-label">Female</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" value="Others" onChange={handleChange} />
              <label className="form-check-label">Others</label>
            </div>
          </div>

          <div className="col-md-4">
            <label>Date of Birth</label>
            <input type="date" name="dob" className="form-control" onChange={handleChange} />
          </div>


        </div>

        <div className="row mt-3">
          <div className="col-md-4">
            <label>Nationality</label>
            <select className="form-select" name="nationality" onChange={handleChange}>
              <option value="">Select...</option>
              <option value="Indian">Indian</option>
              <option value="American">American</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="col-md-4">
            <label>Mother Tongue</label>
            <input type="text" name="motherTongue" className="form-control" onChange={handleChange} />
          </div>
          <div className="col-md-4">
            <label>Blood Group</label>
            <select className="form-select" name="bloodGroup" onChange={handleChange}>
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
            <label>Caste</label><br />
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
            <select className="form-select" name="speciallyAbled" onChange={handleChange}>
              <option value="">Select...</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="col-md-4">
            <label>Religion</label>
            <select className="form-select" name="religion" onChange={handleChange}>
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
  );
}

export default AddStudent;
