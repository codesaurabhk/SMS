import { useState } from "react";
import {
  Table,
  Button,
  Badge,
  Card,
  ListGroup,
  ProgressBar,
} from "react-bootstrap";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaCircleUser } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import { LuCloudDownload } from "react-icons/lu";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";
import { IoDocumentOutline } from "react-icons/io5";
import { MdDelete, MdOutlineDownload } from "react-icons/md";
import AcadmicPerformace from "../../assets/images/Acadamicperfromace.png";
import { PiBuildingLight } from "react-icons/pi";
import { FaSchool } from "react-icons/fa";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell
} from "recharts";
import { Smile } from "lucide-react";


const StudentProfile = () => {
  const [selectedSection, setSelectedSection] = useState("Basic Details");

  // ------- Main Content Renderer -------
  const renderContent = () => {
    switch (selectedSection) {
      case "Basic Details":
        return (
          <>
            {/* MAIN INFORMATION */}
            <div className="d-flex  justify-content-between gap-4 ">
              <div className="w-100">
                <Card className="shadow border-0 rounded-4 p-4 h-auto ">
                  <div style={{ marginBottom: "120px" }}>
                    <Card className=" border-0  rounded-4 p-2 ms-2">
                      <h5 className="fw-semibold mb-4 ">
                        Identification & Basic Information
                      </h5>{" "}
                      <div className="ms-4">
                        <div className="row mb-3">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Gender</p>
                            <p className="text-secondary">Female</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Date of Birth</p>
                            <p className="text-secondary">16th March 2000</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Blood Group</p>
                            <p className="text-secondary">B+</p>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Nationality</p>
                            <p className="text-secondary">Indian</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Religion</p>
                            <p className="text-secondary">Hinduism</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Category / Caste</p>
                            <p className="text-secondary">OBC</p>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Aadhar Number</p>
                            <p className="text-secondary">222555555555</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">
                              Birth Certificate No.
                            </p>
                            <p className="text-secondary">256102452555254552</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Place Of Birth</p>
                            <p className="text-secondary">Allahabad</p>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Mother Tongue</p>
                            <p className="text-secondary">Hindi</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">
                              Medical Conditions
                            </p>
                            <p className="text-secondary">None</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Disability</p>
                            <p className="text-secondary">No</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Card>
              </div>
              <div className="w-25">
                <Card className="shadow border-0 rounded-4 p-3 text-center ">
                  <div>
                    <img
                      src="https://i.pravatar.cc/200?img=8"
                      className=" mb-3 mt-1 p-3 "
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <h5 className="fw-bold fs-5">Neha Pal</h5>
                  <p className="text-secondary">Student ID : ST65432</p>

                  <div className="text-start mt-0 px-3">
                    <p className="fw-semibold text-dark mb-1">E-Mail ID</p>
                    <p className="text-secondary">neha.pal@DPS.com</p>

                    <p className="fw-semibold text-dark mb-1">
                      Class & Section
                    </p>
                    <p className="text-secondary">Class 5th C</p>

                    <p className="fw-semibold text-dark mb-1">Roll No.</p>
                    <p className="text-secondary">63</p>
                  </div>
                </Card>
              </div>
            </div>
          </>
        );

      case "Academic Performance":
        const summaryCards = [
          {
            title: "Fees Status",
            value: "6000",
            underline: "#DFA97B",
            iconColor: "#C07B41",
            badge: { text: "Due", bg: "#FFE8E8", color: "#E26A6A" },
          },
          {
            title: "Attendance",
            value: "89%",
            underline: "#7ED957",
            iconColor: "#41B34D",
            badge: { text: "20%↑", bg: "#E6FFE8", color: "#41B34D" },
          },
          {
            title: "Admission No.",
            value: "ST4321",
            underline: "#E5B4F1",
            iconColor: "#C17AD7",
          },
          {
            title: "Roll No",
            value: "50",
            underline: "#F2C88E",
            iconColor: "#E8A948",
          },
        ];

        const examData = [
          {
            subject: "Mathematics",
            t1: 90,
            t2: 95,
            t3: 100,
            total: 285,
            percent: "95%",
            grade: "A+",
          },
          {
            subject: "English",
            t1: 87,
            t2: 83,
            t3: 72,
            total: 242,
            percent: "81%",
            grade: "B+",
          },
          {
            subject: "Science",
            t1: 65,
            t2: 71,
            t3: 73,
            total: 209,
            percent: "70%",
            grade: "B",
          },
          {
            subject: "History",
            t1: 83,
            t2: 89,
            t3: 92,
            total: 264,
            percent: "88%",
            grade: "A",
          },
          {
            subject: "Art",
            t1: 99,
            t2: 98,
            t3: 100,
            total: 297,
            percent: "99%",
            grade: "A+",
          },
          {
            subject: "Geography",
            t1: 65,
            t2: 55,
            t3: 73,
            total: 193,
            percent: "64%",
            grade: "C",
          },
          {
            subject: "Computer Science",
            t1: 55,
            t2: 63,
            t3: 68,
            total: 186,
            percent: "62%",
            grade: "C",
          },
          {
            subject: "GK",
            t1: 85,
            t2: 89,
            t3: 94,
            total: 268,
            percent: "89%",
            grade: "A",
          },
        ];
        const data = [
          { subject: "Art", score: 50, trend: 40 },
          { subject: "Sci", score: 70, trend: 58 },
          { subject: "His", score: 42, trend: 30 },
          { subject: "Geo", score: 58, trend: 40 },
          { subject: "Mat", score: 12, trend: 10, isLow: true },
          { subject: "MS", score: 55, trend: 40 },
          { subject: "San", score: 98, trend: 85, fill: "#008000" },
          { subject: "Hin", score: 48, trend: 38 },
          { subject: "Eng", score: 58, trend: 50 },
          { subject: "SST", score: 38, trend: 20 },
        ];
        const rows4 = [
          {
            year: "2024-25",
            classSec: "8A",
            gpa: "9.2 / A",
            remarks: "Excellent",
            result: "Pass",
            teacher: "Mrs.Lawrence",
            feeStatus: "Paid",
            promotedTo: "Class 9",
          },
          {
            year: "2023-24",
            classSec: "7D",
            gpa: "8.5 / B+",
            remarks: "Needs focus in Science",
            result: "Pass",
            teacher: "Mrs.Lawrence",
            feeStatus: "Paid",
            promotedTo: "Class 8",
          },
          {
            year: "2022-23",
            classSec: "6A",
            gpa: "8.5 / B+",
            remarks: "Good",
            result: "Pass",
            teacher: "Mrs.Lawrence",
            feeStatus: "Paid",
            promotedTo: "Class 7",
          },
          {
            year: "2021-22",
            classSec: "5C",
            gpa: "8.5 / B+",
            remarks: "Good",
            result: "Pass",
            teacher: "Mrs.Lawrence",
            feeStatus: "Paid",
            promotedTo: "Class 6",
          },
          {
            year: "2020-21",
            classSec: "4B",
            gpa: "8.5 / B+",
            remarks: "Good",
            result: "Pass",
            teacher: "Mrs.Lawrence",
            feeStatus: "Paid",
            promotedTo: "Class 5",
          },
          {
            year: "2019-20",
            classSec: "3D",
            gpa: "8.5 / B+",
            remarks: "Good",
            result: "Pass",
            teacher: "Mrs.Lawrence",
            feeStatus: "Paid",
            promotedTo: "Class 4",
          },
          {
            year: "2018-19",
            classSec: "2A",
            gpa: "8.5 / B+",
            remarks: "Good",
            result: "Pass",
            teacher: "Mrs.Lawrence",
            feeStatus: "Paid",
            promotedTo: "Class 3",
          },
        ];



        return (
          <>
            <div>
              <img className="img-fluid" src={AcadmicPerformace} alt="no image" />
            </div>
            <div className="d-flex  justify-content-between gap-3 ">
              <div className="container-fluid mt-3">
                {/* ====== SUMMARY CARDS ====== */}
                <div className="d-flex gap-3 flex-wrap">
                  {summaryCards.map((card, i) => (
                    <Card
                      key={i}
                      className="shadow-sm border-0 rounded-4 px-3 py-2"
                      style={{ width: "180px", height: "95px", borderRadius: "20px" }}
                    >
                      <div className="d-flex justify-content-between align-items-center h-100">

                        {/* LEFT SIDE */}
                        <div style={{ marginRight: "6px" }}>
                          <p className="fw-semibold mb-1" style={{ fontSize: "13px" }}>
                            {card.title}
                          </p>

                          <h4 className="fw-bold mb-1" style={{ fontSize: "20px" }}>
                            {card.value}
                          </h4>

                          <div
                            style={{
                              width: "45px",
                              height: "4px",
                              backgroundColor: card.underline,
                              borderRadius: "5px",
                            }}
                          />
                        </div>

                        {/* CENTER DIVIDER */}
                        <div
                          style={{
                            width: "2px",
                            height: "45px",
                            background: "#D4D4D4",
                            margin: "0 10px",
                          }}
                        />

                        {/* RIGHT SIDE */}
                        <div className="text-center d-flex flex-column align-items-center">
                          <FaSchool
                            size={30}
                            style={{ color: card.iconColor, marginBottom: "3px" }}
                          />

                          {card.badge && (
                            <span
                              className="px-2 py-0 rounded-5 small fw-semibold"
                              style={{
                                backgroundColor: card.badge.bg,
                                color: card.badge.color,
                                fontSize: "10px",
                              }}
                            >
                              {card.badge.text}
                            </span>
                          )}
                        </div>

                      </div>
                    </Card>
                  ))}
                </div>



                {/* ====== MAIN EXAM TABLE ====== */}
                <Card className="shadow-sm border-0 rounded-4 p-4 mt-3">
                  <h5 className="fw-semibold mb-2">Exam Scores</h5>

                  <Table hover className="align-middle">
                    <thead>
                      <tr className="text-secondary" style={{ fontSize: "14px" }}>
                        <th>S.N</th>
                        <th>Subject Name</th>
                        <th className="text-center">
                          <span className="text-secondary">10 Jul 24</span> <br />
                          <small>Term 1</small>
                        </th>
                        <th className="text-center">
                          <span className="text-secondary"> 10 Oct 24</span><br />
                          <small>Term 2</small>
                        </th>
                        <th className="text-center">
                          <span className="text-secondary"> 10 Feb 25</span><br />
                          <small>Term 3</small>
                        </th>
                        <th>Total</th>
                        <th>%</th>
                        <th>Grade</th>
                        <th></th>
                      </tr>
                    </thead>

                    <tbody>
                      {examData.map((r, i) => (
                        <tr key={i} style={{ fontSize: "14px" }}>
                          <td>{i + 1}</td>
                          <td>{r.subject}</td>
                          <td className="text-center">{r.t1}</td>
                          <td className="text-center">{r.t2}</td>
                          <td className="text-center">{r.t3}</td>
                          <td>{r.total}</td>
                          <td>{r.percent}</td>
                          <td>{r.grade}</td>
                          <td>
                            <BsThreeDotsVertical
                              size={18}
                              className="text-secondary"
                            />
                          </td>
                        </tr>
                      ))}

                      {/* ====== RESULT ROW ====== */}
                      <tr className="fw-bold">
                        <td colSpan={2}>Result</td>
                        <td className="text-center">629</td>
                        <td className="text-center">643</td>
                        <td className="text-center">672</td>
                        <td>1944</td>
                        <td>81%</td>
                        <td>B+</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </Table>

                  {/* ====== RESULT STATUS ====== */}
                  <div className="d-flex justify-content-between mt-0 px-2">
                    <p className="fw-semibold mb-0">Result Status</p>
                    <p className="fw-semibold text-success">Pass</p>
                  </div>
                </Card>
              </div>
              <div className="w-25 ">
                <Card className="shadow border-0 rounded-4 p-3 text-center  " >
                  <div>
                    <img
                      src="https://i.pravatar.cc/200?img=8"
                      className=" mb-3 mt-1 p-3 "
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <h5 className="fw-bold fs-5">Neha Pal</h5>
                  <p className="text-secondary">Student ID : ST65432</p>

                  <div className="text-start mt-0 px-3">
                    <p className="fw-semibold text-dark mb-1">E-Mail ID</p>
                    <p className="text-secondary">neha.pal@DPS.com</p>

                    <p className="fw-semibold text-dark mb-1">
                      Class & Section
                    </p>
                    <p className="text-secondary">Class 5th C</p>

                    <p className="fw-semibold text-dark mb-1">Roll No.</p>
                    <p className="text-secondary">63</p>
                  </div>
                </Card>
              </div>
            </div>
            <div className="d-flex justify-content-between gap-3">

              {/* ================= LEFT SECTION ================= */}
              <div className="p-3 flex-grow-1 bg-white rounded-4 mt-4 shadow">
                <h5 className="fw-semibold mb-3">Advanced Academic Metrics</h5>

                <div className="d-flex gap-3">

                  {/* LEFT METRICS CARDS */}
                  <div
                    className="d-flex flex-wrap gap-3"
                    style={{ width: "380px" }}
                  >

                    {/* CARD */}
                    <div
                      className="card rounded-4 border-0 bg-white p-3 shadow"
                      style={{ width: "180px" }}
                    >
                      <h6 className="fw-bold mb-1" style={{ fontSize: "0.85rem" }}>
                        Homework Completion Rate
                      </h6>
                      <h2 className="fw-bold mb-2">85%</h2>

                      <div className="progress" style={{ height: 8 }}>
                        <div className="progress-bar bg-success" style={{ width: "85%" }}></div>
                      </div>
                    </div>

                    {/* CARD */}
                    <div
                      className="card rounded-4 border-0 bg-white p-3 shadow"
                      style={{ width: "180px" }}
                    >
                      <h6 className="fw-bold mb-1" style={{ fontSize: "0.85rem" }}>
                        Practical Scores
                      </h6>
                      <h2 className="fw-bold mb-2">78%</h2>

                      <div className="progress" style={{ height: 8 }}>
                        <div className="progress-bar bg-success" style={{ width: "78%" }}></div>
                      </div>
                    </div>

                    {/* CARD */}
                    <div
                      className="card rounded-4 border-0 bg-white p-3 shadow"
                      style={{ width: "180px" }}
                    >
                      <h6 className="fw-bold mb-1" style={{ fontSize: "0.85rem" }}>
                        Exam Improvement
                      </h6>
                      <h2 className="fw-bold mb-2">15%</h2>

                      <div className="progress" style={{ height: 8 }}>
                        <div className="progress-bar bg-success" style={{ width: "15%" }}></div>
                      </div>
                    </div>

                    {/* CARD */}
                    <div
                      className="card rounded-4 border-0 bg-white p-3 shadow"
                      style={{ width: "180px" }}
                    >
                      <h6 className="fw-bold mb-1" style={{ fontSize: "0.85rem" }}>
                        Sports
                      </h6>
                      <p className="text-secondary mb-1" style={{ fontSize: "0.75rem" }}>
                        State Level
                      </p>

                      <h2 className="fw-bold mb-2">
                        85% <span style={{ fontSize: "1.2rem" }}>Cricket</span>
                      </h2>

                      <div className="progress" style={{ height: 8 }}>
                        <div className="progress-bar bg-success" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                  </div>


                  {/* ================= CHART CARD ================= */}
                  <div className="card rounded-4 border-0 bg-white p-4 shadow-sm flex-grow-1" style={{ height: "320px", width: "390px" }}>


                    <div className="position-relative mb-4">
                      <h6 className="fw-bold text-dark">Performance Trend</h6>

                      <div className="d-flex align-items-center gap-3 bg-white border rounded-3 px-3 py-2 shadow-sm position-absolute end-0 top-0">
                        <div className="bg-success rounded-circle d-flex justify-content-center align-items-center" style={{ width: 24, height: 24 }}>
                          <Smile className="text-white" size={16} />
                        </div>
                        <div className="lh-1">
                          <div className="fw-bold text-success" style={{ fontSize: "0.9rem" }}>98%</div>
                          <div className="text-secondary" style={{ fontSize: "0.7rem" }}>Term 3, Feb'2025</div>
                        </div>
                      </div>
                    </div>


                    <div style={{ height: 300 }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart data={data} margin={{ top: 20, right: 0, bottom: 0, left: -25 }}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                          <XAxis dataKey="subject" dy={10} tick={{ fill: "#64748b", fontSize: 12 }} tickLine={false} axisLine={false} />
                          <YAxis ticks={[0, 50, 100]} tick={{ fill: "#64748b", fontSize: 12 }} tickLine={false} axisLine={false} />
                          <Bar dataKey="score" barSize={26} radius={[4, 4, 4, 4]}>
                            {data.map((entry, i) => (
                              <Cell key={i} fill={entry.fill || (entry.isLow ? "#fee2e2" : "#9ca3af")} fillOpacity={entry.isLow ? 1 : 0.7} />
                            ))}
                          </Bar>
                          <Line type="monotone" dataKey="trend" stroke="#008000" strokeWidth={2}
                            dot={{ r: 3, fill: "white", stroke: "#008000", strokeWidth: 2 }} />
                        </ComposedChart>
                      </ResponsiveContainer>
                    </div>


                    <div className="mt-4">
                      <h6 className="fw-bold mb-2">Teacher Remarks</h6>
                      <div className="d-flex gap-2">
                        <h3 className="fw-bold mb-0">30%</h3>
                        <p className="text-secondary mb-0">Academic performance improved,<br /> compared to the previous term.</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* ================= RIGHT SECTION ================= */}

              <div
                className="d-flex bg-white p-3 rounded-4 shadow mt-4 flex-wrap gap-3"
                style={{ width: "395px", height: "auto" }}
              >

                {/* CARD 1 */}
                <div
                  className="card shadow border-0 rounded-4 p-3"
                  style={{ width: "170px", height: "168px" }}
                >
                  <p className="fw-semibold text-secondary mb-1" style={{ fontSize: "0.85rem" }}>Class Rank</p>
                  <h3 className="fw-bold mb-0" style={{ fontSize: "1.5rem" }}>15th</h3>
                  <p className="text-secondary mb-2" style={{ fontSize: "0.75rem" }}>out of 56 students</p>

                  <div className="d-flex flex-column gap-1">
                    <div className="d-flex align-items-center gap-2">
                      <div style={{ width: 8, height: 8, background: "#fde68a" }}></div>
                      <p className="mb-0 text-secondary" style={{ fontSize: "0.75rem" }}>Term 1 : 19th</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <div style={{ width: 8, height: 8, background: "#fcd34d" }}></div>
                      <p className="mb-0 text-secondary" style={{ fontSize: "0.75rem" }}>Term 2 : 10th</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <div style={{ width: 8, height: 8, background: "#fbbf24" }}></div>
                      <p className="mb-0 text-secondary" style={{ fontSize: "0.75rem" }}>Term 3 : 5th</p>
                    </div>
                  </div>
                </div>

                {/* CARD 2 */}
                <div
                  className="card shadow border-0 rounded-4 p-3"
                  style={{ width: "170px", height: "168px" }}
                >
                  <p className="fw-semibold text-secondary mb-1" style={{ fontSize: "0.85rem" }}>GPA/Grade</p>
                  <h3 className="fw-bold mb-2" style={{ fontSize: "1.5rem" }}>8.5/A</h3>

                  <div className="d-flex flex-column gap-1">
                    <div className="d-flex align-items-center gap-2">
                      <div style={{ width: 8, height: 8, background: "#fde68a" }}></div>
                      <p className="mb-0 text-secondary" style={{ fontSize: "0.75rem" }}>Term 1 : 87%</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <div style={{ width: 8, height: 8, background: "#fcd34d" }}></div>
                      <p className="mb-0 text-secondary" style={{ fontSize: "0.75rem" }}>Term 2 : 90%</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <div style={{ width: 8, height: 8, background: "#fbbf24" }}></div>
                      <p className="mb-0 text-secondary" style={{ fontSize: "0.75rem" }}>Term 3 : 95%</p>
                    </div>
                  </div>
                </div>

                {/* CARD 3 */}
                <div
                  className="card shadow border-0 rounded-4 p-3"
                  style={{ width: "170px", height: "168px" }}
                >
                  <p className="fw-semibold text-success mb-1" style={{ fontSize: "0.85rem" }}>Best Subject</p>
                  <h3 className="fw-bold mb-0" style={{ fontSize: "1.5rem" }}>Art</h3>
                  <p className="text-secondary mb-2" style={{ fontSize: "0.75rem" }}>Scored 99%</p>

                  <div className="d-flex flex-column gap-1">
                    <div className="d-flex align-items-center gap-2">
                      <div style={{ width: 8, height: 8, background: "#fde68a" }}></div>
                      <p className="mb-0 text-secondary" style={{ fontSize: "0.75rem" }}>Term 1 : 19th</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <div style={{ width: 8, height: 8, background: "#fcd34d" }}></div>
                      <p className="mb-0 text-secondary" style={{ fontSize: "0.75rem" }}>Term 2 : 10th</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <div style={{ width: 8, height: 8, background: "#fbbf24" }}></div>
                      <p className="mb-0 text-secondary" style={{ fontSize: "0.75rem" }}>Term 3 : 5th</p>
                    </div>
                  </div>
                </div>

                {/* CARD 4 */}
                <div
                  className="card shadow border-0 rounded-4 p-3"
                  style={{ width: "170px", height: "168px" }}
                >
                  <p className="fw-semibold text-danger mb-1" style={{ fontSize: "0.85rem" }}>Weakest Subject</p>
                  <h3 className="fw-bold mb-0" style={{ fontSize: "1.5rem" }}>Computer</h3>
                  <p className="text-secondary mb-2" style={{ fontSize: "0.75rem" }}>Scored 62%</p>

                  <div className="d-flex flex-column gap-1">
                    <div className="d-flex align-items-center gap-2">
                      <div style={{ width: 8, height: 8, background: "#fde68a" }}></div>
                      <p className="mb-0 text-secondary" style={{ fontSize: "0.75rem" }}>Term 1 : 87%</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <div style={{ width: 8, height: 8, background: "#fcd34d" }}></div>
                      <p className="mb-0 text-secondary" style={{ fontSize: "0.75rem" }}>Term 2 : 90%</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <div style={{ width: 8, height: 8, background: "#fbbf24" }}></div>
                      <p className="mb-0 text-secondary" style={{ fontSize: "0.75rem" }}>Term 3 : 95%</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
            <Card className="shadow-sm border-0 p-3 rounded-4 mt-4 ">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-semibold mb-0">Year-wise Acadmic History</h5>

                <div className="d-flex gap-2">
                  <Button variant="light" className="border rounded-3 px-3">
                    <LuCloudDownload
                      size={16}
                      className="me-1"
                      style={{ transform: "rotate(180deg)" }}
                    />{" "}
                    Export
                  </Button>
                  <Button variant="light" className="border rounded-3 px-3">
                    <FiFilter size={16} className="me-1" /> Filter
                  </Button>
                </div>
              </div>

              <div className="table-responsive mb-5">
                <Table hover className="align-middle">
                  <thead>
                    <tr
                      className="text-secondary"
                      style={{ fontSize: "14px" }}
                    >
                      <th>S.N</th>
                      <th>Academic Yr</th>
                      <th>Class & Sec</th>
                      <th>GPA/Grade</th>
                      <th>Exam Remarks</th>
                      <th>Result</th>
                      <th>Class Teacher</th>
                      <th>Fee Status</th>
                      <th>Promoted To</th>

                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    {rows4.map((r, i) => (
                      <tr key={i} style={{ fontSize: "14px" }}>
                        <td>{i + 1}</td>
                        <td>{r.year}</td>
                        <td>{r.classSec}</td>
                        <td>{r.gpa}</td>
                        <td>{r.remarks}</td>
                        <td>{r.result}</td>
                        <td>{r.teacher}</td>
                        <td > <span style={{
                          borderRadius: "20px",
                          padding: "5px 12px",
                          backgroundColor: "00E31A",
                          // backgroundColor:"green",
                          color: "#00B515",
                        }}>{r.feeStatus}</span></td>
                        <td>{r.promotedTo}</td>

                        <td>
                          <BsThreeDotsVertical
                            size={18}
                            className="text-secondary"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card>






          </>
        );

      case "Academic Details":
        return (
          <>
            <div className="d-flex justify-content-between gap-4 ">
              <div className="w-100">
                <Card className="shadow border-0 rounded-4 p-4 h-auto ">
                  <div className="p-2 ms-3 " style={{ marginBottom: "76px" }}>
                    <h5 className=" mb-4">Academic Details</h5>

                    <div className="ms-3">
                      {/* ROW 1 */}
                      <div className="row mb-2">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Academic Year</p>
                          <p className="text-secondary">2024-2025</p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Admission Date</p>
                          <p className="text-secondary">1st Feb 2018</p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Admission Type</p>
                          <p className="text-secondary">
                            New / Transfer / Re-admission
                          </p>
                        </div>
                      </div>

                      {/* ROW 2 */}
                      <div className="row ">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">House/Club</p>
                          <p className="text-secondary">
                            Green/Blue/Yellow/Red
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Medium of Instruction
                          </p>
                          <p className="text-secondary">English, Hindi, etc.</p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Current Status</p>
                          <p className="text-secondary ">
                            Active / Transferred / Dropped / Alumni
                          </p>
                        </div>
                      </div>

                      {/* ROW 3 */}
                      <div className="row ">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Promotion Status</p>
                          <p className="text-secondary">
                            Promoted / Detained / Repeating
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Class Teacher</p>
                          <p className="text-secondary">Mrs. Mathews</p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">TC Issued?</p>
                          <p className="text-secondary">Yes / No</p>
                        </div>
                      </div>
                    </div>
                    {/* ---- Previous School Details ---- */}
                    <p className=" fs-5 mt-0 mb-3">Previous School Details</p>
                    <div className="ms-3">
                      <div className="row mb-4">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Previous School Name
                          </p>
                          <p className="text-secondary">
                            Yes/Girls High School
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">City/State/Country</p>
                          <p className="text-secondary">Allahabad/UP/India</p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Reason Of Transfer</p>
                          <p className="text-secondary">Parental request</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="w-25">
                <Card className="shadow border-0 rounded-4 p-3 text-center ">
                  <div>
                    <img
                      src="https://i.pravatar.cc/200?img=8"
                      className=" mb-3 mt-1 p-3 "
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <h5 className="fw-bold fs-5">Neha Pal</h5>
                  <p className="text-secondary">Student ID : ST65432</p>

                  <div className="text-start mt-0 px-3">
                    <p className="fw-semibold text-dark mb-1">E-Mail ID</p>
                    <p className="text-secondary">neha.pal@DPS.com</p>

                    <p className="fw-semibold text-dark mb-1">
                      Class & Section
                    </p>
                    <p className="text-secondary">Class 5th C</p>

                    <p className="fw-semibold text-dark mb-1">Roll No.</p>
                    <p className="text-secondary">63</p>
                  </div>
                </Card>
              </div>
            </div>
          </>
        );

      case "Fees & Billing Info":
        const rows = [
          {
            year: "2023–24",
            cls: "9A",
            plan: "Regular Plan",
            fee: "₹40,000",
            paid: "₹40,000",
            balance: "₹0",
            mode: "Online (UPI)",
            txn: "TXN12345UPI",
          },
          {
            year: "2022–23",
            cls: "8C",
            plan: "Standard Plan",
            fee: "₹40,000",
            paid: "₹40,000",
            balance: "₹0",
            mode: "Cash",
            txn: "TXN12345Cash",
          },
          {
            year: "2021–22",
            cls: "7B",
            plan: "Discounted",
            fee: "₹40,000",
            paid: "₹40,000",
            balance: "₹0",
            mode: "Cheque",
            txn: "TXN12345Cheque",
          },
          {
            year: "2020–21",
            cls: "6A",
            plan: "Standard Plan",
            fee: "₹40,000",
            paid: "₹40,000",
            balance: "₹0",
            mode: "Fund Transfer",
            txn: "TXN12345FT",
          },
          {
            year: "2019–20",
            cls: "5D",
            plan: "Standard Plan",
            fee: "₹40,000",
            paid: "₹40,000",
            balance: "₹0",
            mode: "NEFT",
            txn: "TXN12345FT",
          },
          {
            year: "2018–19",
            cls: "4A",
            plan: "Standard Plan",
            fee: "₹40,000",
            paid: "₹40,000",
            balance: "₹0",
            mode: "Online Transfer",
            txn: "TXN12345FT",
          },
          {
            year: "2018–19",
            cls: "3B",
            plan: "Standard Plan",
            fee: "₹40,000",
            paid: "₹40,000",
            balance: "₹0",
            mode: "Cash",
            txn: "TXN12345FT",
          },
          {
            year: "2017–18",
            cls: "2A",
            plan: "Standard Plan",
            fee: "₹40,000",
            paid: "₹40,000",
            balance: "₹0",
            mode: "Cash",
            txn: "TXN12345FT",
          },
        ];
        return (
          <>
            <div>
              <div className="d-flex  justify-content-between gap-4 ">
                <div className="w-100">
                  <Card className="shadow border-0 rounded-4 p-4  ">
                    <div className="p-2 ms-3" style={{ marginBottom: "90px" }}>
                      <h4 className="fw-semibold mb-4">Fees & Billing Info</h4>

                      <div className="ms-3">
                        {/* ROW 1 */}
                        <div className="row mb-4">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-1">Fee Plan</p>
                            <p className="text-secondary small mb-0">
                              Monthly/Yearly/Quarterly
                            </p>
                          </div>

                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-1">
                              Discounts / Concessions
                            </p>
                            <p className="text-secondary small mb-0">
                              e.g., sibling, scholarship
                            </p>
                          </div>

                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-1">Discount Amount</p>
                            <p className="text-secondary small mb-0">20000</p>
                          </div>
                        </div>

                        {/* ROW 2 */}
                        <div className="row mb-4">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-1">Total Fee Amount</p>
                            <p className="text-secondary small mb-0">
                              2,00,000/Year
                            </p>
                          </div>

                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-1">Amount Paid</p>
                            <p className="text-secondary small mb-0">
                              1,50,000 INR
                            </p>
                          </div>

                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-1">Balance Due</p>
                            <p className="text-secondary small mb-0">
                              30000 INR
                            </p>
                          </div>
                        </div>

                        {/* ROW 3 */}
                        <div className="row mb-4">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-1">
                              Refundable Deposit
                            </p>
                            <p className="text-secondary small mb-0">15000</p>
                          </div>

                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-1">
                              Last Payment Date
                            </p>
                            <p className="text-secondary small mb-0">
                              2nd July 2025
                            </p>
                          </div>

                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-1">Fee Status</p>
                            <p className="small mb-0">
                              <span style={{ color: "green" }}>Paid</span> /{" "}
                              <span style={{ color: "red" }}>Unpaid</span> /{" "}
                              <span style={{ color: "orange" }}>Partial</span>
                            </p>
                          </div>
                        </div>

                        {/* ROW 4 - Remarks */}
                        <div className="row mb-4">
                          <div className="col-12">
                            <p className="fw-semibold mb-1">
                              Fee Remarks / Notes
                            </p>
                            <p className="text-secondary small">
                              Fee payment delayed due to cheque bounce. Parent
                              notified. Replacement payment initiated. Admin
                              advised to monitor closely. Temporary block on ID
                              card until payment is cleared.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
                <div className="w-25 mb-3">
                  <Card className="shadow border-0 rounded-4 p-3 text-center ">
                    <div>
                      <img
                        src="https://i.pravatar.cc/200?img=8"
                        className=" mb-3 mt-1 p-3 "
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                    <h5 className="fw-bold fs-5">Neha Pal</h5>
                    <p className="text-secondary">Student ID : ST65432</p>

                    <div className="text-start mt-0 px-3">
                      <p className="fw-semibold text-dark mb-1">E-Mail ID</p>
                      <p className="text-secondary">neha.pal@DPS.com</p>

                      <p className="fw-semibold text-dark mb-1">
                        Class & Section
                      </p>
                      <p className="text-secondary">Class 5th C</p>

                      <p className="fw-semibold text-dark mb-1">Roll No.</p>
                      <p className="text-secondary">63</p>
                    </div>
                  </Card>
                </div>
              </div>

              <Card className="shadow border-0 rounded-4   h-auto">
                <div className="container ">
                  <h4 className="fw-semibold mb-3">Fees Metrics</h4>

                  <div className="d-flex gap-3 flex-wrap">
                    {/* Total Paid Till Date */}
                    <Card
                      className="shadow-sm border-0 p-3 rounded-4"
                      style={{ width: "188px" }}
                    >
                      <p className="text-secondary mb-1 fw-semibold">
                        Total Paid Till Date
                      </p>
                      <h4 className="text-success mb-0">₹5,20,000</h4>
                    </Card>

                    {/* No. Of Transactions */}
                    <Card
                      className="shadow-sm border-0 p-3 rounded-4"
                      style={{ width: "188px" }}
                    >
                      <p className="text-secondary mb-1 fw-semibold">
                        No. Of Transactions
                      </p>
                      <h4 className="mb-0">10</h4>
                    </Card>

                    {/* Fees Paid On Time */}
                    <Card
                      className="shadow-sm border-0 p-3 rounded-4"
                      style={{ width: "188px" }}
                    >
                      <p className="text-secondary mb-1 fw-semibold">
                        Fees Always Paid On Time
                      </p>
                      <h4 className="mb-1 ">85%</h4>
                      <ProgressBar
                        now={85}
                        variant="success"
                        style={{ width: "85%", height: "6px" }}
                        className="progrees-bar"
                      />
                    </Card>

                    {/* Pending Fees */}
                    <Card
                      className="shadow border-0 p-3 rounded-4"
                      style={{ width: "188px" }}
                    >
                      <p className="text-secondary mb-1 fw-semibold">
                        Pending Fees
                      </p>
                      <h4 className="text-danger mb-1">₹5000</h4>
                      <p className="text-secondary small mb-0">
                        From Class 7th
                      </p>
                    </Card>

                    {/* Next Due Date */}
                    <Card
                      className="shadow-sm border-0 p-3 rounded-4"
                      style={{ width: "188px" }}
                    >
                      <p className="text-secondary mb-1 fw-semibold">
                        Next Due Date
                      </p>
                      <h4 className="mb-0">10 Aug’25</h4>
                    </Card>

                    {/* Pending Fees Again */}
                    <Card
                      className="shadow-sm border-0 p-3 rounded-4"
                      style={{ width: "188px" }}
                    >
                      <p className="text-secondary mb-1 fw-semibold">
                        Pending Fees
                      </p>
                      <h4 className="text-danger mb-1">₹5000</h4>
                      <p className="text-secondary small mb-0">
                        From Class 7th
                      </p>
                    </Card>
                  </div>
                </div>
              </Card>
              <Card className="shadow-sm border-0 p-3 rounded-4 mt-4 ">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="fw-semibold mb-0">Fees & Billing History</h5>

                  <div className="d-flex gap-2">
                    <Button variant="light" className="border rounded-3 px-3">
                      <LuCloudDownload
                        size={16}
                        className="me-1"
                        style={{ transform: "rotate(180deg)" }}
                      />{" "}
                      Export
                    </Button>
                    <Button variant="light" className="border rounded-3 px-3">
                      <FiFilter size={16} className="me-1" /> Filter
                    </Button>
                  </div>
                </div>

                <div className="table-responsive mb-5">
                  <Table hover className="align-middle">
                    <thead>
                      <tr
                        className="text-secondary"
                        style={{ fontSize: "14px" }}
                      >
                        <th>S.N</th>
                        <th>Academic Year</th>
                        <th>Class</th>
                        <th>Fee Plan</th>
                        <th>Total Fee</th>
                        <th>Paid Amount</th>
                        <th>Balance</th>
                        <th>Mode of Payment</th>
                        <th>Transaction ID / Receipt No.</th>
                        <th>Status</th>
                        <th></th>
                      </tr>
                    </thead>

                    <tbody>
                      {rows.map((r, i) => (
                        <tr key={i} style={{ fontSize: "14px" }}>
                          <td>{i + 1}</td>
                          <td>{r.year}</td>
                          <td>{r.cls}</td>
                          <td>{r.plan}</td>
                          <td>{r.fee}</td>
                          <td>{r.paid}</td>
                          <td>{r.balance}</td>
                          <td>{r.mode}</td>
                          <td>{r.txn}</td>
                          <td>
                            <span
                              // bg="success"
                              style={{
                                borderRadius: "20px",
                                padding: "5px 12px",
                                backgroundColor: "00E31A",
                                // backgroundColor:"green",
                                color: "#00B515",
                              }}
                            >
                              Paid
                            </span>
                          </td>
                          <td>
                            <BsThreeDotsVertical
                              size={18}
                              className="text-secondary"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Card>
            </div>
          </>
        );

      case "RFID & Access Card":
        const timelineData = [
          {
            date: "17 July 2025",
            time: "6:30 AM",
            location: "Main Gate",
            action: "Attendance",
            status: "Success",
            notes: "Morning check-in",
          },
          {
            date: "17 July 2025",
            time: "6:30 AM",
            location: "Library Entry",
            action: "Library Visit",
            status: "Success",
            notes: "Book Issued",
          },
          {
            date: "17 July 2025",
            time: "6:30 AM",
            location: "Canteen  Counter",
            action: "Canteen Purchase",
            status: "Success",
            notes: "Lunch",
          },
          {
            date: "17 July 2025",
            time: "6:30 AM",
            location: "Bus Entry",
            action: "Transport",
            status: "Success",
            notes: "Afternoon Drop In",
          },
          {
            date: "17 July 2025",
            time: "6:30 AM",
            location: "Main Gate",
            action: "Attendance",
            status: "Failed",
            notes: "RFID Blocked",
          },
          {
            date: "17 July 2025",
            time: "6:30 AM",
            location: "Main Gate ",
            action: "Attendance",
            status: "Success",
            notes: "Morning check-in",
          },
        ];
        return (
          <>
            <div className="d-flex  justify-content-between gap-4 ">
              <div className="w-100">
                <Card className="shadow border-0 rounded-4 p-4 h-auto ">
                  <div className="p-2" style={{ marginBottom: "135px" }}>
                    <h4 className="fw-semibold mb-4">
                      RFID & Access Card Info
                    </h4>

                    <div className="ms-3">
                      {/* ROW 1 */}
                      <div className="row mb-4">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">ID Card Type</p>
                          <p className="text-secondary small mb-0">RFID Card</p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">ID Card Number</p>
                          <p className="text-secondary small mb-0">
                            RFID card number
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Card Status</p>
                          <p className="text-secondary small mb-0">
                            Active / Inactive / Lost / Replaced / Blocked
                          </p>
                        </div>
                      </div>

                      {/* ROW 2 */}
                      <div className="row mb-4">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Linked Modules (Multiselect)
                          </p>
                          <p className="text-secondary small mb-0">
                            Multipurpose/Attendance/Library/Cateen
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Issue Date</p>
                          <p className="text-secondary small mb-0">
                            2nd Feb 2024
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Expiry Date</p>
                          <p className="text-secondary small mb-0">
                            2nd Feb 2025
                          </p>
                        </div>
                      </div>

                      {/* ROW 3 */}
                      <div className="row mb-4">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Replacement Status</p>
                          <p className="text-secondary small mb-0">
                            Original / Reissued / Lost
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Linked to Guardian App
                          </p>
                          <p className="text-secondary small mb-0">Yes / No</p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Expiry Date</p>
                          <p className="text-secondary small mb-0">
                            2nd Feb 2025
                          </p>
                        </div>
                      </div>

                      {/* ROW 4 – Remarks */}
                      <div className="row mb-4">
                        <div className="col-12">
                          <p className="fw-semibold mb-1">Remarks / Notes</p>
                          <p className="text-secondary small mb-1">
                            Any admin notes related to RFID
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="w-25">
                <Card className="shadow border-0 rounded-4 p-3 text-center ">
                  <div>
                    <img
                      src="https://i.pravatar.cc/200?img=8"
                      className=" mb-3 mt-1 p-3 "
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <h5 className="fw-bold fs-5">Neha Pal</h5>
                  <p className="text-secondary">Student ID : ST65432</p>

                  <div className="text-start mt-0 px-3">
                    <p className="fw-semibold text-dark mb-1">E-Mail ID</p>
                    <p className="text-secondary">neha.pal@DPS.com</p>

                    <p className="fw-semibold text-dark mb-1">
                      Class & Section
                    </p>
                    <p className="text-secondary">Class 5th C</p>

                    <p className="fw-semibold text-dark mb-1">Roll No.</p>
                    <p className="text-secondary">63</p>
                  </div>
                </Card>
              </div>
            </div>
            <Card className="shadow border-0 rounded-4 mt-4 h-auto">
              <div className="container">
                <h4 className="fw-semibold mb-3">ID Card Metrics</h4>

                <div className="d-flex gap-3 flex-wrap">
                  {/* Last Scan Location */}
                  <Card
                    className="shadow-sm border-0 p-3 rounded-4"
                    style={{ width: "188px" }}
                  >
                    <p className="mb-4 fw-semibold">📍 Last Scan Location</p>
                    <h4 className="mb-0">Main Gate</h4>
                  </Card>

                  {/* RFID Status */}
                  <Card
                    className="shadow-sm border-0 p-3 rounded-4"
                    style={{ width: "188px" }}
                  >
                    <p className="mb-4 fw-semibold">🔄️ RFID Status</p>
                    <h4 className="mb-0">Active</h4>
                  </Card>

                  {/* Last Used */}
                  <Card
                    className="shadow-sm border-0 p-3 rounded-4"
                    style={{ width: "188px" }}
                  >
                    <p className="mb-1 fw-semibold">🕒 Last Used</p>
                    <h4 className="mt-3">1 hour ago</h4>
                  </Card>

                  {/* RFID Card Reissued */}
                  <Card
                    className="shadow-sm border-0 p-3 rounded-4"
                    style={{ width: "188px" }}
                  >
                    <p className="mb-2 fw-semibold small">
                      🧾 RFID Card Reissued
                    </p>
                    <h4 className="mb-0 mt-1">2 Times</h4>
                    <p className="text-secondary fw-semibold small mb-0">
                      (2022, 2024)
                    </p>
                  </Card>

                  {/* Average Usage Per Day */}
                  <Card
                    className="shadow-sm border-0 p-3 rounded-4"
                    style={{ width: "188px" }}
                  >
                    <p className="mb-1 small  fw-semibold">
                      📈Average usage per day
                    </p>
                    <h4 className="mb-0">3 scans</h4>
                  </Card>

                  {/* Charges Due */}
                  <Card
                    className="shadow-sm border-0 p-3 rounded-4"
                    style={{ width: "188px" }}
                  >
                    <p className="mb-1 fw-semibold">Charges Due</p>
                    <h4 className="text-danger mb-1">₹5000</h4>
                    <p className="text-secondary small fw-semibold mb-0">
                      Last Date 12 June 2025
                    </p>
                  </Card>
                </div>
              </div>
            </Card>
            <Card className="shadow border-0 rounded-4 p-4 mt-3">
              <h4 className="fw-semibold mb-4">
                RFID Usage History (Track Record)
              </h4>

              <div className="ps border-3 border-start ">
                {timelineData.map((item, index) => (
                  <div key={index} className="d-flex mb-4 position-relative">
                    {/* Dot */}
                    <div
                      className="position-absolute top-0 start-0  shadow translate-middle bg-white d-flex justify-content-center align-items-center"
                      style={{
                        width: "27px",
                        height: "27px",
                        border: "2px solid #F9CFFA",
                        borderRadius: "50%",
                        marginTop: "13px",
                      }}
                    >
                      <FaRegCircleCheck className="text-success" />
                    </div>

                    {/* Content */}
                    <div className="ms-4 d-flex flex-wrap gap-5">
                      {/* Date */}
                      <div style={{ width: "140px" }}>
                        <p className="fw-semibold mb-0">{item.date}</p>
                        <p className="text-secondary small mb-0">{item.time}</p>
                      </div>

                      {/* Location */}
                      <div style={{ width: "140px" }}>
                        <p className="fw-semibold mb-0">{item.location}</p>
                        <p className="text-secondary small mb-0">
                          {item.action}
                        </p>
                      </div>

                      {/* Status */}
                      <div style={{ width: "140px" }}>
                        <p className="fw-semibold mb-0">Status</p>
                        <p
                          className={`small mb-0 ${item.status === "Success"
                            ? "text-success"
                            : "text-danger"
                            }`}
                        >
                          {item.status}
                        </p>
                      </div>

                      {/* Notes */}
                      <div style={{ width: "140px" }}>
                        <p className="fw-semibold mb-0">Notes</p>
                        <p className="text-secondary small mb-0">
                          {item.notes}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-3">
                <Button variant="light" className="rounded-pill px-4">
                  View More
                </Button>
              </div>
            </Card>
          </>
        );

      case "Transport Details":
        const rows2 = [
          {
            year: "2023–24",
            cls: "9A",
            route: "Route 4",
            vehicle: "UP32 BU 1234",
            plan: "Monthly fees",
            fee: "₹9000",
            paid: "₹9000",
            balance: "₹0",
            mode: "Online (UPI)",
            txn: "TXN12345UPI",
            status: "Paid",
          },
          {
            year: "2022–23",
            cls: "8C",
            route: "Route 4",
            vehicle: "UP32 BU 1234",
            plan: "Quarterly fees",
            fee: "₹9000",
            paid: "₹9000",
            balance: "₹0",
            mode: "Cash",
            txn: "TXN12345Cash",
            status: "Paid",
          },
          {
            year: "2021–22",
            cls: "7B",
            route: "N/A",
            vehicle: "N/A",
            plan: "N/A",
            fee: "₹0",
            paid: "₹0",
            balance: "₹0",
            mode: "N/A",
            txn: "-",
            status: "Not Opted",
          },
          {
            year: "2020–21",
            cls: "6A",
            route: "Route 4",
            vehicle: "UP32 BU 1234",
            plan: "Monthly fees",
            fee: "₹9000",
            paid: "₹9000",
            balance: "₹0",
            mode: "Fund Transfer",
            txn: "TXN12345FT",
            status: "Paid",
          },
          {
            year: "2019–20",
            cls: "5D",
            route: "Route 4",
            vehicle: "UP32 BU 1234",
            plan: "Monthly fees",
            fee: "₹9000",
            paid: "₹9000",
            balance: "₹0",
            mode: "NEFT",
            txn: "TXN12345NEFT",
            status: "Paid",
          },
          {
            year: "2018–19",
            cls: "4A",
            route: "Route 4",
            vehicle: "UP32 BU 1234",
            plan: "Monthly fees",
            fee: "₹9000",
            paid: "₹9000",
            balance: "₹0",
            mode: "Online Transfer",
            txn: "TXN12345OT",
            status: "Paid",
          },
          {
            year: "2018–19",
            cls: "3B",
            route: "Route 4",
            vehicle: "UP32 BU 1234",
            plan: "Monthly fees",
            fee: "₹9000",
            paid: "₹9000",
            balance: "₹0",
            mode: "Cash",
            txn: "TXN12345Cash2",
            status: "Paid",
          },
          {
            year: "2017–18",
            cls: "2A",
            route: "Route 4",
            vehicle: "UP32 BU 1234",
            plan: "Monthly fees",
            fee: "₹9000",
            paid: "₹9000",
            balance: "₹0",
            mode: "Cash",
            txn: "TXN12345Cash3",
            status: "Paid",
          },
        ];

        return (
          <>
            <div className="d-flex  justify-content-between gap-4 ">
              <div className="w-100">
                <Card className="shadow border-0 rounded-4 p-4 h-auto ">
                  <div className="p-2" style={{ marginBottom: "58px" }}>
                    <h4 className="fw-semibold mb-4">Transport Details</h4>

                    <div className="ms-3">
                      {/* ROW 1 */}
                      <div className="row mb-4">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Opted for Transport
                          </p>
                          <p className="text-secondary small mb-0">Yes / No</p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Route Number</p>
                          <p className="text-secondary small mb-0">
                            School route
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Vehicle Number</p>
                          <p className="text-secondary small mb-0">UP32 8495</p>
                        </div>
                      </div>

                      {/* ROW 2 */}
                      <div className="row mb-4">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Driver Name</p>
                          <p className="text-secondary small mb-0">
                            Mr. Sehdev Mishra
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Driver Contact</p>
                          <p className="text-secondary small mb-0">
                            +91 9876 656 654
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Pickup Point</p>
                          <p className="text-secondary small mb-0">
                            Sunrise Apartments Gate
                          </p>
                        </div>
                      </div>

                      {/* ROW 3 */}
                      <div className="row mb-4">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Pickup Time</p>
                          <p className="text-secondary small mb-0">7:00 AM</p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Drop Time</p>
                          <p className="text-secondary small mb-0">2:00 PM</p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Drop Point</p>
                          <p className="text-secondary small mb-0">
                            Sunrise Apartments Gate
                          </p>
                        </div>
                      </div>

                      {/* ROW 4 */}
                      <div className="row mb-4">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Attendant / Helper Name
                          </p>
                          <p className="text-secondary small mb-0">
                            Optional (for primary school buses)
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Transport Fee Plan</p>
                          <p className="text-secondary small mb-0">
                            Monthly / Quarterly / Annually
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Transport Fee Amount
                          </p>
                          <p className="text-secondary small mb-0">
                            ₹9000/Year
                          </p>
                        </div>
                      </div>

                      {/* ROW 5 */}
                      <div className="row mb-4">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Fee Payment Status</p>
                          <p className="text-secondary small mb-0">
                            Paid / Unpaid / Partially Paid
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Fees Paid</p>
                          <p className="text-secondary small mb-0">₹8000</p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Fees Due</p>
                          <p className="text-secondary small mb-0">₹1000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="w-25">
                <Card className="shadow border-0 rounded-4 p-3 text-center ">
                  <div>
                    <img
                      src="https://i.pravatar.cc/200?img=8"
                      className=" mb-3 mt-1 p-3 "
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <h5 className="fw-bold fs-5">Neha Pal</h5>
                  <p className="text-secondary">Student ID : ST65432</p>

                  <div className="text-start mt-0 px-3">
                    <p className="fw-semibold text-dark mb-1">E-Mail ID</p>
                    <p className="text-secondary">neha.pal@DPS.com</p>

                    <p className="fw-semibold text-dark mb-1">
                      Class & Section
                    </p>
                    <p className="text-secondary">Class 5th C</p>

                    <p className="fw-semibold text-dark mb-1">Roll No.</p>
                    <p className="text-secondary">63</p>
                  </div>
                </Card>
              </div>
            </div>
            <Card className="shadow border-0 rounded-4 mt-4 h-auto">
              <div className="container">
                <h4 className="fw-semibold mb-3">Transportation Metrics</h4>

                <div className="d-flex gap-3 flex-wrap">
                  {/* Last Bus Location */}
                  <Card
                    className="shadow-sm border-0 p-3 rounded-4"
                    style={{ width: "188px" }}
                  >
                    <p className="mb-4 fw-semibold">📍 Last Bus Location</p>
                    <h4 className="mb-0 fw-semibold">Parking</h4>
                  </Card>

                  {/* Assigned Bus Capacity */}
                  <Card
                    className="shadow-sm border-0 p-3 rounded-4"
                    style={{ width: "188px" }}
                  >
                    <p className="mb-2 fw-semibold">🚌Assigned Bus Capacity</p>
                    <h4 className="mb-0 fw-semibold">50</h4>
                  </Card>

                  {/* Bus Stop Distance */}
                  <Card
                    className="shadow-sm border-0 p-3 rounded-4"
                    style={{ width: "188px" }}
                  >
                    <p className="mb-1 fw-semibold">
                      🚶‍♂️Bus Stop Distance
                      <br />
                      from Home
                    </p>
                    <h4 className="mb-0 fw-semibold mt-2">500M</h4>
                  </Card>

                  {/* Pickup Guardian */}
                  <Card
                    className="shadow-sm border-0 p-3 rounded-4"
                    style={{ width: "188px" }}
                  >
                    <p className="mb-1 fw-semibold">
                      🧑‍🤝‍🧑Pickup Authorized
                      <br />
                      Guardian
                    </p>
                    <h4 className="mb-0 fw-semibold mt-2">Mother</h4>
                  </Card>

                  {/* Teacher on Bus */}
                  <Card
                    className="shadow-sm border-0 p-3 rounded-4"
                    style={{ width: "188px" }}
                  >
                    <p className="mb-1 fw-semibold">👩‍🏫 Teacher On Bus</p>
                    <h4 className="mb-0 fw-semibold mt-2">Mrs. Mathews</h4>
                  </Card>

                  {/* Charges Due */}
                  <Card
                    className="shadow-sm border-0 p-3 rounded-4"
                    style={{ width: "188px" }}
                  >
                    <p className="mb-1 fw-semibold">🧾 Charges Due</p>
                    <h4 className="text-danger fw-semibold mb-1">₹5000</h4>
                    <p className="text-secondary small fw-semibold mb-0">
                      Last Date 12 June 2025
                    </p>
                  </Card>
                </div>
              </div>
            </Card>

            <Card className="shadow-sm border-0 p-3 rounded-4 mt-4">
              {/* Header */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-semibold mb-0">
                  Transport Fee & Usage History
                </h5>

                <div className="d-flex gap-2">
                  <Button variant="light" className="border rounded-3 px-3">
                    <LuCloudDownload
                      size={16}
                      className="me-1"
                      style={{ transform: "rotate(180deg)" }}
                    />
                    Export
                  </Button>
                  <Button variant="light" className="border rounded-3 px-3">
                    <FiFilter size={16} className="me-1" />
                    Filter
                  </Button>
                </div>
              </div>

              {/* Table */}
              <div className="table-responsive mb-5">
                <Table hover className="align-middle">
                  <thead>
                    <tr className="text-secondary" style={{ fontSize: "14px" }}>
                      <th>S.N</th>
                      <th>Academic Year</th>
                      <th>Class</th>
                      <th>Route</th>
                      <th>Vehicle No.</th>
                      <th>Fee Plan</th>
                      <th>Total Fee</th>
                      <th>Paid Amount</th>
                      <th>Balance</th>
                      <th>Mode of Payment</th>
                      <th>Status</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    {rows2.map((r, i) => (
                      <tr key={i} style={{ fontSize: "14px" }}>
                        <td>{i + 1}</td>
                        <td>{r.year}</td>
                        <td>{r.cls}</td>
                        <td>{r.route}</td>
                        <td>{r.vehicle}</td>
                        <td>{r.plan}</td>
                        <td>{r.fee}</td>
                        <td>{r.paid}</td>
                        <td>{r.balance}</td>
                        <td>{r.mode}</td>

                        {/* Status Badge */}
                        <td>
                          {r.status === "Paid" ? (
                            <span
                              style={{
                                borderRadius: "20px",
                                padding: "5px 12px",
                                backgroundColor: "#E6FFE9",
                                color: "#00B515",
                                fontWeight: 500,
                              }}
                            >
                              Paid
                            </span>
                          ) : (
                            <span
                              style={{
                                borderRadius: "20px",
                                padding: "5px 12px",
                                backgroundColor: "#F3F4F6",
                                color: "#6B7280",
                                fontWeight: 500,
                              }}
                            >
                              Not Opted
                            </span>
                          )}
                        </td>

                        <td>
                          <BsThreeDotsVertical
                            size={18}
                            className="text-secondary"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card>
          </>
        );

      case "Hostel / Dormitory Details":
        const rows3 = [
          {
            year: "2023–24",
            room: "204",
            building: "Sunrise Wing",
            type: "Double",
            plan: "Monthly fees",
            fee: "₹9000",
            paid: "₹9000",
            balance: "₹0",
            mode: "Online (UPI)",
            status: "Paid",
          },
          {
            year: "2022–23",
            room: "202",
            building: "Sunrise Wing",
            type: "Single",
            plan: "Quarterly fees",
            fee: "₹9000",
            paid: "₹9000",
            balance: "₹0",
            mode: "Cash",
            status: "Paid",
          },
          {
            year: "2021–22",
            room: "201",
            building: "Sunrise Wing",
            type: "Single",
            plan: "N/A",
            fee: "₹0",
            paid: "₹0",
            balance: "₹0",
            mode: "N/A",
            status: "Not Opted",
          },
          {
            year: "2020–21",
            room: "204",
            building: "Block A",
            type: "Single",
            plan: "Monthly fees",
            fee: "₹9000",
            paid: "₹9000",
            balance: "₹0",
            mode: "Fund Transfer",
            status: "Paid",
          },
          {
            year: "2019–20",
            room: "Not Opted",
            building: "-",
            type: "Single",
            plan: "Monthly fees",
            fee: "₹9000",
            paid: "₹9000",
            balance: "₹0",
            mode: "NEFT",
            status: "Paid",
          },
          {
            year: "2018–19",
            room: "4A",
            building: "Route 4",
            type: "Single",
            plan: "Monthly fees",
            fee: "₹9000",
            paid: "₹9000",
            balance: "₹0",
            mode: "Online Transfer",
            status: "Paid",
          },
          {
            year: "2018–19",
            room: "3B",
            building: "Route 4",
            type: "Single",
            plan: "Monthly fees",
            fee: "₹9000",
            paid: "₹9000",
            balance: "₹0",
            mode: "Cash",
            status: "Paid",
          },
          {
            year: "2017–18",
            room: "2A",
            building: "Route 4",
            type: "Single",
            plan: "Monthly fees",
            fee: "₹9000",
            paid: "₹9000",
            balance: "₹0",
            mode: "Cash",
            status: "Paid",
          },
        ];
        return (
          <>
            <div className="d-flex  justify-content-between gap-4 ">
              <div className="w-100">
                <Card className="shadow border-0 rounded-4 p-4 h-auto ">
                  <div className="p-2">
                    <h4 className="fw-semibold mb-4">
                      Hostel / Dormitory Details
                    </h4>

                    <div className="ms-3">
                      {/* ROW 1 */}
                      <div className="row mb-4">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Opted for Hostel</p>
                          <p className="text-secondary small mb-0">Yes / No</p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Room Type</p>
                          <p className="text-secondary small mb-0">
                            Single / Double / Dormitory
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Food Preference</p>
                          <p className="text-secondary small mb-0">
                            Veg / Non-Veg / Special Diet
                          </p>
                        </div>
                      </div>

                      {/* ROW 2 */}
                      <div className="row mb-4">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Hostel Name / Building
                          </p>
                          <p className="text-secondary small mb-0">
                            e.g., Sunrise Wing, Block C
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Room Name</p>
                          <p className="text-secondary small mb-0">
                            e.g., Room 202,
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Bed Number</p>
                          <p className="text-secondary small mb-0">
                            e.g., Room 202, Bed B
                          </p>
                        </div>
                      </div>

                      {/* ROW 3 */}
                      <div className="row mb-4">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Check-In Date</p>
                          <p className="text-secondary small mb-0">
                            Official hostel entry date
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Expected Check-Out Date
                          </p>
                          <p className="text-secondary small mb-0">
                            End-of-term or annual exit
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Actual Check-Out Date
                          </p>
                          <p className="text-secondary small mb-0">
                            Only filled if student leaves mid-term
                          </p>
                        </div>
                      </div>

                      {/* ROW 4 */}
                      <div className="row mb-4">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Hostel Fee Plan</p>
                          <p className="text-secondary small mb-0">
                            Monthly/Term-based
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Hostel Fee Amount</p>
                          <p className="text-secondary small mb-0">
                            ₹20000/Per Month
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Fees Due</p>
                          <p className="text-secondary small mb-0">₹0</p>
                        </div>
                      </div>

                      {/* ROW 5 */}
                      <div className="row mb-4">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Fee Status</p>
                          <p className="text-secondary small mb-0">
                            Paid / Unpaid
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Fees Paid</p>
                          <p className="text-secondary small mb-0">₹20000</p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Last Payment Date</p>
                          <p className="text-secondary small mb-0">
                            24th June 2024
                          </p>
                        </div>
                      </div>

                      {/* ROW 6 */}
                      <div className="row mb-4">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Warden Name</p>
                          <p className="text-secondary small mb-0">
                            Mrs. Swati Rastogi
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Warden Contact</p>
                          <p className="text-secondary small mb-0">
                            +91 7656 765 765
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Allergy / Medical Info
                          </p>
                          <p className="text-secondary small mb-0">
                            Critical notes like nuts, dairy allergy
                          </p>
                        </div>
                      </div>

                      {/* ROW 7 */}
                      <div className="row mb-4">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Visitor Guardian (Relation)
                          </p>
                          <p className="text-secondary small mb-0">
                            Mother/Sister/Brother/father
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Visitor Guardian No.
                          </p>
                          <p className="text-secondary small mb-0">
                            +91 7656 765 765
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4"></div>
                      </div>

                      {/* ROW 8 – Remarks */}
                      <div className="row mb-4">
                        <div className="col-12">
                          <p className="fw-semibold mb-1">Hostel Remarks</p>
                          <p className="text-secondary small mb-1">
                            Any special instructions, permissions, complaints
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="w-25">
                <Card className="shadow border-0 rounded-4 p-3 text-center ">
                  <div>
                    <img
                      src="https://i.pravatar.cc/200?img=8"
                      className=" mb-3 mt-1 p-3 "
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <h5 className="fw-bold fs-5">Neha Pal</h5>
                  <p className="text-secondary">Student ID : ST65432</p>

                  <div className="text-start mt-0 px-3">
                    <p className="fw-semibold text-dark mb-1">E-Mail ID</p>
                    <p className="text-secondary">neha.pal@DPS.com</p>

                    <p className="fw-semibold text-dark mb-1">
                      Class & Section
                    </p>
                    <p className="text-secondary">Class 5th C</p>

                    <p className="fw-semibold text-dark mb-1">Roll No.</p>
                    <p className="text-secondary">63</p>
                  </div>
                </Card>
              </div>
            </div>
            <Card className="shadow border-0 rounded-4 mt-4  h-auto">
              <div className="container mb-3">
                <h4 className="fw-semibold mb-3">Hostel Metrics</h4>

                <div className="d-flex gap-3 flex-wrap">
                  {/* Total Hostel Fee Paid */}
                  <Card
                    className=" border-0 p-3 rounded-4"
                    style={{
                      width: "188px",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    }}
                  >
                    <p className="mb-1 fw-semibold">Total Hostel Fee Paid</p>
                    <h4 className="mt-3 fw-bold">₹38,000</h4>
                  </Card>

                  {/* Duration in Hostel */}
                  <Card
                    className=" border-0 p-3 rounded-4"
                    style={{
                      width: "188px",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    }}
                  >
                    <p className="mb-1 fw-semibold">Duration in Hostel</p>
                    <h4 className="mb-0 fw-bold">
                      2 Years 3<br />
                      Months
                    </h4>
                  </Card>

                  {/* Emergency Contact */}
                  <Card
                    className=" border-0 p-3 rounded-4"
                    style={{
                      width: "188px",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    }}
                  >
                    <p className="mb-1 fw-semibold">Emergency Contact</p>
                    <h4 className="mb-0 fw-bold">Uncle –</h4>
                    <p className=" fw-semibold small mb-0">98100xxxxx</p>
                  </Card>

                  {/* Hostel Changed */}
                  <Card
                    className=" border-0 p-3 rounded-4"
                    style={{
                      width: "188px",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    }}
                  >
                    <p className="mb-1 fw-semibold">Hostel Changed</p>
                    <h4 className="mb-0 fw-bold">Yes</h4>
                    <p className=" fw-semibold small mb-0">2 Room Transfers</p>
                  </Card>

                  {/* Allergy Alert */}
                  <Card
                    className=" border-0 p-3 rounded-4"
                    style={{
                      width: "188px",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    }}
                  >
                    <p className="mb-1 fw-semibold">⚠ Allergy Alert</p>
                    <h5 className="mt-0 fw-bold">
                      Lactose
                      <br />
                      Intolerant
                    </h5>
                  </Card>

                  {/* Charges Due */}
                  <Card
                    className=" border-0 p-3 rounded-4"
                    style={{
                      width: "188px",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    }}
                  >
                    <p className="mb-1 fw-semibold">Charges Due</p>
                    <h4 className="text-danger fw-bold mb-1">₹5000</h4>
                    <p className=" small fw-semibold mb-0">
                      Last Date 12 June 2025
                    </p>
                  </Card>
                </div>
              </div>
            </Card>
            <Card className="shadow-sm border-0 p-3 rounded-4 mt-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-semibold mb-0">Hostel Room / Fee History</h5>

                <div className="d-flex gap-2">
                  <Button variant="light" className="border rounded-3 px-3">
                    <LuCloudDownload
                      size={16}
                      className="me-1"
                      style={{ transform: "rotate(180deg)" }}
                    />
                    Export
                  </Button>
                  <Button variant="light" className="border rounded-3 px-3">
                    <FiFilter size={16} className="me-1" />
                    Filter
                  </Button>
                </div>
              </div>

              <div className="table-responsive mb-5">
                <Table hover className="align-middle">
                  <thead>
                    <tr className="text-secondary" style={{ fontSize: "14px" }}>
                      <th>S.N</th>
                      <th>Academic Year</th>
                      <th>Room</th>
                      <th>Building</th>
                      <th>Room Type</th>
                      <th>Fee Plan</th>
                      <th>Total Fee</th>
                      <th>Paid Amount</th>
                      <th>Balance</th>
                      <th>Mode of Payment</th>
                      <th>Status</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    {rows3.map((r, i) => (
                      <tr key={i} style={{ fontSize: "14px" }}>
                        <td>{i + 1}</td>
                        <td>{r.year}</td>
                        <td>{r.room}</td>
                        <td>{r.building}</td>
                        <td>{r.type}</td>
                        <td>{r.plan}</td>
                        <td>{r.fee}</td>
                        <td>{r.paid}</td>
                        <td>{r.balance}</td>
                        <td>{r.mode}</td>

                        <td>
                          {r.status === "Paid" ? (
                            <span
                              style={{
                                borderRadius: "20px",
                                padding: "5px 12px",
                                backgroundColor: "#E6FFE9",
                                color: "#00B515",
                                fontWeight: 500,
                              }}
                            >
                              Paid
                            </span>
                          ) : (
                            <span
                              style={{
                                borderRadius: "20px",
                                padding: "5px 12px",
                                backgroundColor: "#F3F4F6",
                                color: "#6B7280",
                                fontWeight: 500,
                              }}
                            >
                              Not Opted
                            </span>
                          )}
                        </td>

                        <td>
                          <BsThreeDotsVertical
                            size={18}
                            className="text-secondary"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card>
          </>
        );

      case "Parent/Guardian Info":
        return (
          <>
            <div className="d-flex  justify-content-between gap-4 ">
              <div className="w-100">
                <Card className="shadow border-0 rounded-4 p-4 h-auto ">
                  <div className="p-2">
                    <h4 className="fw-semibold mb-4">
                      Parent / Guardian Information
                    </h4>

                    <div className="ms-3">
                      {/* ROW 1 */}
                      <div className="row mb-4">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Father's Name</p>
                          <p className="text-secondary small mb-0">
                            Full name – used on ID card
                          </p>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Father's Mobile Number
                          </p>
                          <p className="text-secondary small mb-0">
                            +91 7656 765 765
                          </p>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Alternate Mobile Number
                          </p>
                          <p className="text-secondary small mb-0">
                            +91 7656 765 765
                          </p>
                        </div>
                      </div>

                      {/* ROW 2 */}
                      <div className="row mb-4">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Father's Email ID</p>
                          <p className="text-secondary small mb-0">
                            Raj@gmail.com
                          </p>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Father's Occupation
                          </p>
                          <p className="text-secondary small mb-0">
                            For internal records or scholarship eligibility
                          </p>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Father's Annual Income
                          </p>
                          <p className="text-secondary small mb-0">
                            ₹20000/Per Month
                          </p>
                        </div>
                      </div>

                      {/* ROW 3 */}
                      <div className="row mb-4">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Mother's Name</p>
                          <p className="text-secondary small mb-0">
                            Full name – used on ID card
                          </p>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Mother's Mobile Number
                          </p>
                          <p className="text-secondary small mb-0">
                            +91 7656 765 765
                          </p>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Alternate Mobile Number
                          </p>
                          <p className="text-secondary small mb-0">
                            +91 7656 765 765
                          </p>
                        </div>
                      </div>

                      {/* ROW 4 */}
                      <div className="row mb-4">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Mother's Email ID</p>
                          <p className="text-secondary small mb-0">
                            Sangeeta@gmail.com
                          </p>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Mother's Occupation
                          </p>
                          <p className="text-secondary small mb-0">
                            House Wife
                          </p>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Mother's Annual Income
                          </p>
                          <p className="text-secondary small mb-0">—</p>
                        </div>
                      </div>

                      {/* ROW 5 */}
                      <div className="row mb-4">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Guardian’s Name</p>
                          <p className="text-secondary small mb-0">Manshi</p>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Guardian’s Mobile Number
                          </p>
                          <p className="text-secondary small mb-0">
                            +91 7656 765 765
                          </p>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Alternate Mobile Number
                          </p>
                          <p className="text-secondary small mb-0">
                            +91 7656 765 765
                          </p>
                        </div>
                      </div>

                      {/* ROW 6 */}
                      <div className="row mb-4">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Guardian’s Email ID
                          </p>
                          <p className="text-secondary small mb-0">
                            Sangeeta@gmail.com
                          </p>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Guardian’s Relationship With Student
                          </p>
                          <p className="text-secondary small mb-0">Maasi</p>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4"></div>
                      </div>

                      {/* ROW 7 */}
                      <div className="row mb-4">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Current Residential Address
                          </p>
                          <p className="text-secondary small mb-0">
                            House No.327
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Area</p>
                          <p className="text-secondary small mb-0">
                            Civil Lines
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">City</p>
                          <p className="text-secondary small mb-0">Allahabad</p>
                        </div>
                      </div>

                      {/* ROW 8 */}
                      <div className="row mb-4">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">State</p>
                          <p className="text-secondary small mb-0">UP</p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Country</p>
                          <p className="text-secondary small mb-0">India</p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Pincode</p>
                          <p className="text-secondary small mb-0">254254</p>
                        </div>
                      </div>

                      {/* ROW 9 */}
                      <div className="row mb-4">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Permanent Residential Address (if Different)
                          </p>
                          <p className="text-secondary small mb-0">
                            House No.327
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Area</p>
                          <p className="text-secondary small mb-0">
                            Civil Lines
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">City</p>
                          <p className="text-secondary small mb-0">Allahabad</p>
                        </div>
                      </div>

                      {/* ROW 10 */}
                      <div className="row mb-4">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">State</p>
                          <p className="text-secondary small mb-0">UP</p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Country</p>
                          <p className="text-secondary small mb-0">India</p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Pincode</p>
                          <p className="text-secondary small mb-0">254254</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="w-25">
                <Card className="shadow border-0 rounded-4 p-3 text-center ">
                  <div>
                    <img
                      src="https://i.pravatar.cc/200?img=8"
                      className=" mb-3 mt-1 p-3 "
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <h5 className="fw-bold fs-5">Neha Pal</h5>
                  <p className="text-secondary">Student ID : ST65432</p>

                  <div className="text-start mt-0 px-3">
                    <p className="fw-semibold text-dark mb-1">E-Mail ID</p>
                    <p className="text-secondary">neha.pal@DPS.com</p>

                    <p className="fw-semibold text-dark mb-1">
                      Class & Section
                    </p>
                    <p className="text-secondary">Class 5th C</p>

                    <p className="fw-semibold text-dark mb-1">Roll No.</p>
                    <p className="text-secondary">63</p>
                  </div>
                </Card>
              </div>
            </div>
          </>
        );
      case "Uploaded Documents":
        const documents = [
          "Birth Certificate.pdf",
          "Aadhar Card.pdf",
          "Pan Card.pdf",
          "pdf_file.pdf",
          "pdf_file.pdf",
          "pdf_file.pdf",
          "pdf_file.pdf",
          "pdf_file.pdf",
          "pdf_file.pdf",
        ];
        return (
          <>
            <div className="d-flex  justify-content-between gap-4 ">
              <div className="w-100">
                <Card className="shadow border-0 rounded-4 p-4 mt-4">
                  <h5 className="fw-semibold mb-4">Documents</h5>

                  <p className="fw-semibold mb-2">Files</p>

                  <div className="d-flex flex-column gap-3">
                    {documents.map((file, index) => (
                      <div
                        key={index}
                        className="d-flex justify-content-between align-items-center p-3 rounded-4"
                        style={{
                          border: "2px dashed #D6D6D6",
                          cursor: "pointer",
                        }}
                      >
                        {/* LEFT SIDE: FILE ICON + NAME */}
                        <div className="d-flex align-items-center gap-2">
                          <IoDocumentOutline
                            size={18}
                            className="text-secondary"
                          />

                          <span className="  text-secondary">{file}</span>
                        </div>

                        {/* RIGHT SIDE: DOWNLOAD + DELETE */}
                        <div className="d-flex align-items-center gap-3">
                          <MdOutlineDownload
                            size={18}
                            className="text-secondary cursor-pointer"
                          />

                          <MdDelete
                            size={18}
                            className="text-secondary cursor-pointer"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
              <div className="w-25">
                <Card className="shadow border-0 rounded-4 p-3 text-center ">
                  <div>
                    <img
                      src="https://i.pravatar.cc/200?img=8"
                      className=" mb-3 mt-1 p-3 "
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <h5 className="fw-bold fs-5">Neha Pal</h5>
                  <p className="text-secondary">Student ID : ST65432</p>

                  <div className="text-start mt-0 px-3">
                    <p className="fw-semibold text-dark mb-1">E-Mail ID</p>
                    <p className="text-secondary">neha.pal@DPS.com</p>

                    <p className="fw-semibold text-dark mb-1">
                      Class & Section
                    </p>
                    <p className="text-secondary">Class 5th C</p>

                    <p className="fw-semibold text-dark mb-1">Roll No.</p>
                    <p className="text-secondary">63</p>
                  </div>
                </Card>
              </div>
            </div>
          </>
        );

      case "Additional Info":
        return (
          <>
            <div className="d-flex  justify-content-between gap-4 ">
              <div className="w-100">
                <Card className="shadow border-0 rounded-4 p-4 h-auto ">
                  <div className="p-2">
                    <h4 className="fw-semibold mb-4">Additional Info</h4>

                    <div className="ms-3">
                      {/* ROW 1 */}
                      <div className="row mb-3">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Hobbies / Interests
                          </p>
                          <p className="text-secondary small mb-2">
                            Painting, Reading, Robotics, Singing
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Talent</p>
                          <p className="text-secondary small mb-2">
                            Mention interschool, state, or national awards
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Alternate Mobile Number
                          </p>
                          <p className="text-secondary small mb-2">
                            +91 7656 765 765
                          </p>
                        </div>
                      </div>

                      {/* ROW 2 */}
                      <div className="row mb-3">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Leadership Roles</p>
                          <p className="text-secondary small mb-2">
                            e.g., Class Monitor, School Captain, Event Volunteer
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Father's Occupation
                          </p>
                          <p className="text-secondary small mb-2">
                            For internal records or scholarship eligibility
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Father’s Annual Income
                          </p>
                          <p className="text-secondary small mb-2">
                            ₹20000/Per Month
                          </p>
                        </div>
                      </div>

                      {/* ROW 3 */}
                      <div className="row mb-3">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Mother’s Name</p>
                          <p className="text-secondary small mb-2">
                            Full name – used on ID card
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Mother’s Mobile Number
                          </p>
                          <p className="text-secondary small mb-2">
                            +91 7656 765 765
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Alternate Mobile Number
                          </p>
                          <p className="text-secondary small mb-2">
                            +91 7656 765 765
                          </p>
                        </div>
                      </div>

                      {/* ROW 4 */}
                      <div className="row mb-3">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Mother’s Email ID</p>
                          <p className="text-secondary small mb-2">
                            sangeeta@gmail.com
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Mother’s Occupation
                          </p>
                          <p className="text-secondary small mb-2">
                            House Wife
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Mother’s Annual Income
                          </p>
                          <p className="text-secondary small mb-2">—</p>
                        </div>
                      </div>

                      {/* ROW 5 */}
                      <div className="row mb-3">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Guardian's Name</p>
                          <p className="text-secondary small mb-2">Manshi</p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Guardian's Mobile Number
                          </p>
                          <p className="text-secondary small mb-2">
                            +91 7656 765 765
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Alternate Mobile Number
                          </p>
                          <p className="text-secondary small mb-2">
                            +91 7656 765 765
                          </p>
                        </div>
                      </div>

                      {/* ROW 6: Address */}
                      <div className="row mb-3">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Current Residential Address
                          </p>
                          <p className="text-secondary small mb-2">
                            House No.327
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Area</p>
                          <p className="text-secondary small mb-2">
                            Civil Lines
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">City</p>
                          <p className="text-secondary small mb-2">Allahabad</p>
                        </div>
                      </div>

                      {/* ROW 7 */}
                      <div className="row mb-3">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">State</p>
                          <p className="text-secondary small mb-2">UP</p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Country</p>
                          <p className="text-secondary small mb-2">India</p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Pincode</p>
                          <p className="text-secondary small mb-2">254254</p>
                        </div>
                      </div>

                      {/* ROW 8: Permanent Address (if different) */}
                      <div className="row mb-3">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">
                            Permanent Residential Address (if Different)
                          </p>
                          <p className="text-secondary small mb-2">
                            House No.327
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Area</p>
                          <p className="text-secondary small mb-2">
                            Civil Lines
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">City</p>
                          <p className="text-secondary small mb-2">Allahabad</p>
                        </div>
                      </div>

                      {/* ROW 9 */}
                      <div className="row mb-3">
                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">State</p>
                          <p className="text-secondary small mb-2">UP</p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Country</p>
                          <p className="text-secondary small mb-2">India</p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <p className="fw-semibold mb-1">Pincode</p>
                          <p className="text-secondary small mb-2">254254</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="w-25">
                <Card className="shadow border-0 rounded-4 p-3 text-center ">
                  <div>
                    <img
                      src="https://i.pravatar.cc/200?img=8"
                      className=" mb-3 mt-1 p-3 "
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <h5 className="fw-bold fs-5">Neha Pal</h5>
                  <p className="text-secondary">Student ID : ST65432</p>

                  <div className="text-start mt-0 px-3">
                    <p className="fw-semibold text-dark mb-1">E-Mail ID</p>
                    <p className="text-secondary">neha.pal@DPS.com</p>

                    <p className="fw-semibold text-dark mb-1">
                      Class & Section
                    </p>
                    <p className="text-secondary">Class 5th C</p>

                    <p className="fw-semibold text-dark mb-1">Roll No.</p>
                    <p className="text-secondary">63</p>
                  </div>
                </Card>
              </div>
            </div>
          </>
        );

      default:
        return (
          <div className="p-3">
            <h5 className="fw-semibold">{selectedSection}</h5>
            <p className="text-secondary">
              Content for {selectedSection} goes here.
            </p>
          </div>
        );
    }
  };

  const sidebarItems = [
    {
      title: "Basic Details",
      icon: <RiGraduationCapFill />,
      activeIcon: <FaCircleUser />,
    },
    {
      title: "Academic Performance",
      icon: <RiGraduationCapFill />,
      activeIcon: <FaCircleUser />,
    },
    {
      title: "Academic Details",
      icon: <RiGraduationCapFill />,
      activeIcon: <FaCircleUser />,
    },
    {
      title: "Fees & Billing Info",
      icon: <RiGraduationCapFill />,
      activeIcon: <FaCircleUser />,
    },
    {
      title: "RFID & Access Card",
      icon: <RiGraduationCapFill />,
      activeIcon: <FaCircleUser />,
    },
    {
      title: "Transport Details",
      icon: <RiGraduationCapFill />,
      activeIcon: <FaCircleUser />,
    },
    {
      title: "Hostel / Dormitory Details",
      icon: <RiGraduationCapFill />,
      activeIcon: <FaCircleUser />,
    },
    {
      title: "Parent/Guardian Info",
      icon: <RiGraduationCapFill />,
      activeIcon: <FaCircleUser />,
    },
    {
      title: "Uploaded Documents",
      icon: <RiGraduationCapFill />,
      activeIcon: <FaCircleUser />,
    },
    {
      title: "Additional Info",
      icon: <RiGraduationCapFill />,
      activeIcon: <FaCircleUser />,
    },
  ];

  return (
    <div
      className="container-fluid p-3"
      style={{ background: "#f2f7fa", minHeight: "100vh" }}
    >
      <div className="row g-4">
        {/* LEFT SIDEBAR */}
        <div className="col-12 col-md-3 col-lg-2 left-col">
          <Card
            className="shadow border-0 rounded-4 p-3 h-100"
            style={{ position: "relative" }}
          >
            {/* --- THREE DOT MENU BUTTON --- */}
            <div
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                background: "#F3F4F6",
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <BsThreeDotsVertical size={20} className="text-secondary" />
            </div>
            <div className="text-center mb-2">
              <div style={{ position: "relative", display: "inline-block" }}>
                <img
                  src="https://i.pravatar.cc/200?img=8"
                  alt="profile"
                  className="rounded-circle mb-3 mt-3"
                  width={95}
                  height={95}
                />
                {/* --- CAMERA ICON (BOTTOM RIGHT OF IMAGE) --- */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "8px",
                    right: "8px",
                    backgroundColor: "white",
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 2px 6px rgba(0,0,0,0.15)",
                    cursor: "pointer",
                  }}
                >
                  <FaCamera size={14} className="text-secondary" />
                </div>
              </div>
              <h5 className="fw-bold mb-0">Neha Pal</h5>
              <p className="text-secondary mb-0 small">Neha.Pal@DPS.com</p>
              <p style={{ color: "#A1A1A1" }} className="small">
                Last update: 12-11-2020
              </p>
            </div>

            <ListGroup variant="flush" className="mt-3">
              {sidebarItems.map((item, idx) => {
                const isActive = selectedSection === item.title;

                return (
                  <ListGroup.Item
                    key={idx}
                    action
                    onClick={() => setSelectedSection(item.title)}
                    className={`d-flex align-items-center gap-3 p-3 rounded border-0 
          ${isActive ? "active bg-white shadow" : ""}`}
                    style={{ cursor: "pointer" }}
                  >
                    {/* ICON BOX */}
                    <div
                      className={`fs-4 rounded d-flex justify-content-center align-items-center 
            ${isActive ? "bg-primary text-white" : "bg-light text-secondary"}`}
                      style={{ width: "42px", height: "42px" }}
                    >
                      {/* ICON CHANGES HERE */}
                      {isActive ? item.activeIcon : item.icon}
                    </div>

                    {/* TITLE */}
                    <span
                      className={`${isActive ? "fw-semibold text-dark" : "text-secondary"
                        }`}
                    >
                      {item.title}
                    </span>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Card>
        </div>

        {/* MAIN CONTENT (CHANGES) */}
        <div className="col-12 col-md-9 col-lg-10 right-col">
          {renderContent()}
        </div>
        {/* <div className="col-12 col-md-3 col-lg-2 right-col"> </div> */}

        {/* RIGHT SIDEBAR */}
        {/* <div className="col-12 col-md-3 col-lg-2 right-col">
          <Card className="shadow border-0 rounded-4 p-3 text-center ">
            <div>
              <img
                src="https://i.pravatar.cc/200?img=8"
                className=" mb-3 mt-1 p-3 "
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  borderRadius: "50%",
                }}
              />
            </div>
            <h5 className="fw-bold fs-5">Neha Pal</h5>
            <p className="text-secondary">Student ID : ST65432</p>

            <div className="text-start mt-0 px-3">
              <p className="fw-semibold text-dark mb-1">E-Mail ID</p>
              <p className="text-secondary">neha.pal@DPS.com</p>

              <p className="fw-semibold text-dark mb-1">Class & Section</p>
              <p className="text-secondary">Class 5th C</p>

              <p className="fw-semibold text-dark mb-1">Roll No.</p>
              <p className="text-secondary">63</p>
            </div>
          </Card>
        </div> */}
      </div>
    </div>
  );
};

export default StudentProfile;
