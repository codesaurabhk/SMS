import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { IoMdArrowUp, IoMdArrowDown } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [year, setYear] = useState(2025);
  const [showModal, setShowModal] = useState(false);
  const [attendanceType, setAttendanceType] = useState("staff");

  const handleToggle = () => setOpen(!open);
  const handleSelect = (option) => {
    alert(`You clicked: ${option}`);
    setOpen(false);
  };

  // ===== Dashboard Card Data =====
  const dashboardData = [
    {
      value: "50,000",
      label: "New Admission",
      percent: 20,
      icon: <HiOutlineUserGroup />,
      color: "text-success",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      value: "30,000",
      label: "Total Students",
      percent: 20,
      icon: <HiOutlineUserGroup />,
      color: "text-success",
      gradient: "linear-gradient(135deg, #ff0844 0%, #ffb199 100%)",
    },
    {
      value: "12,000",
      label: "Total Teacher ",
      percent: 20,
      icon: <HiOutlineUserGroup />,
      color: "text-success",
      gradient: "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)",
    },
    {
      value: "5,000",
      label: "Total Staff",
      percent: 20,
      icon: <HiOutlineUserGroup />,
      color: "text-success",
      gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
    },
    {
      value: "2,000",
      label: "Fees Dues",
      percent: 20,
      icon: <HiOutlineUserGroup />,
      color: "text-success",
      gradient: "linear-gradient(135deg, #36d1dc 0%, #5b86e5 100%)",
    },
    {
      value: "2,000",
      label: "Fees Collected",
      percent: 20,
      icon: <HiOutlineUserGroup />,
      color: "text-success",
      gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    },
  ];

  // ===== Month Filter =====
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  // ===== Chart Dummy Data =====
  const chartMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const earnings = [50, 45, 20, 15, 25, 30, 10, 28, 26, 8, 35, 30];
  const expenses = [40, 35, 15, 25, 28, 35, 32, 25, 27, 15, 20, 18];

  const chartData = {
    labels: chartMonths,
    datasets: [
      {
        label: "Total Earnings",
        data: earnings,
        backgroundColor: "#28a745",
        borderRadius: 8,
        barThickness: 20,
      },
      {
        label: "Total Expenses",
        data: expenses,
        backgroundColor: "#bcd5f7",
        borderRadius: 8,
        barThickness: 20,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: { usePointStyle: true, boxWidth: 8 },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { callback: (value) => value + "L" },
        grid: { color: "#f1f1f1" },
      },
      x: { grid: { display: false } },
    },
  };

  // === Attendance Dataset Config ===
  const attendanceDataSets = {
    staff: {
      donut: [90, 10], // present, absent
      line: [80, 75, 78, 85, 90, 88, 92, 95, 89, 87, 90, 93],
      summary: "90% Attendance this Month",
      change: "+4% from last month",
    },
    teacher: {
      donut: [88, 12],
      line: [70, 75, 78, 80, 85, 82, 86, 90, 88, 92, 85, 89],
      summary: "88% Attendance this Month",
      change: "+2% from last month",
    },
    student: {
      donut: [85, 15],
      line: [60, 68, 70, 72, 75, 78, 80, 85, 83, 88, 84, 90],
      summary: "85% Attendance this Month",
      change: "+5% from last month",
    },
  };

  // === Dynamic Chart Data Based on Selection ===
  const selected = attendanceDataSets[attendanceType];

  const dynamicDonutData = {
    labels: ["Present", "Absent"],
    datasets: [
      {
        data: selected.donut,
        backgroundColor: ["#4f46e5", "#e5e7eb"], // blue & gray
        borderWidth: 0,
        cutout: "70%",
      },
    ],
  };

  const dynamicLineData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: `${attendanceType} Attendance`,
        data: selected.line,
        borderColor: "#2563eb",
        backgroundColor: "rgba(37,99,235,0.1)",
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#2563eb",
        pointRadius: 5,
        pointHoverRadius: 7,
        borderWidth: 2.5,
      },
    ],
  };

  const donutStats = {
    present: selected.donut[0],
    absent: selected.donut[1],
    summary: selected.summary,
    change: selected.change,
  };

  const donutOptions = {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#007bff",
        titleFont: { size: 12 },
        bodyFont: { size: 14 },
        displayColors: false,
        callbacks: {
          label: (context) => `${context.parsed.y}%`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: "#f1f1f1" },
        ticks: { callback: (val) => val + "%" },
      },
      x: { grid: { display: false } },
    },
  };

  return (
    <div className="dashboard">
      <div className="overview shadow p-3 rounded bg-white">
        {/* === Header Section === */}
        <div className="overview-head ">
          <h3>Overview</h3>

          <div className="d-flex align-items-center gap-4 position-relative">
            {/* Month Filter */}
            <div
              className="month-filter border px-2 py-2 rounded-pill d-flex align-items-center justify-content-between"
              style={{ width: "220px" }}
            >
              <select
                className="form-select border-0 bg-transparent fw-semibold text-secondary"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(Number(e.target.value))}
              >
                {months.map((month, index) => (
                  <option key={index} value={index}>
                    {`01 ${month} - ${new Date(currentYear, index + 1, 0)
                      .getDate()
                      .toString()
                      .padStart(2, "0")} ${month}`}
                  </option>
                ))}
              </select>
            </div>

            {/* Add Dropdown */}
            <div className="position-relative">
              <button
                className="btn btn-primary d-flex gap-2 align-items-center add-button"
                onClick={handleToggle}
              >
                <FaPlus />
                <span>Add</span>
              </button>

              {open && (
                <div
                  className="dropdown-menu show shadow"
                  style={{
                    position: "absolute",
                    top: "100%",
                    right: 0,
                    marginTop: "5px",
                    borderRadius: "10px",
                    overflow: "hidden",
                    zIndex: 1000,
                  }}
                >
                  {[
                    "Add New Student",
                    "Add New Teacher",
                    "Add New Staff",
                    "Add Exam Schedule",
                    "Upload Circular",
                    "Add Event",
                  ].map((option, index) => (
                    <button
                      key={index}
                      className="dropdown-item"
                      onClick={() => handleSelect(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* === Dashboard Cards === */}
        <div className="row mt-4">
          {dashboardData.map((item, index) => (
            <div className="dashboard-card col-12 col-sm-4 col-lg-2" key={index}>
              <div
                className="new-admission-dashboard p-2 shadow rounded text-white"
                style={{
                  background: item.gradient,
                }}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <div className="box-first">
                    {["Fees Dues", "Fees Collected"].includes(item.label)
                      ? "₹"
                      : ""}
                    {item.value}
                  </div>
                  <div className="user-icon" style={{ color: "#ffffff98" }}>
                    {item.icon}
                  </div>
                </div>

                <div className="dashboard-card mt-1 mb-2">{item.label}</div>

                <div className="d-flex justify-content-between align-items-center mt-1 gap-1">
                  <div className="card-bottom">
                    <span
                      className= { `${item.color} sign d-flex align-items-center `}
                    >
                      {item.percent}%
                      {item.percent >= 0 ? <IoMdArrowUp /> : <IoMdArrowDown />}
                    </span>
                  </div>
                  <div className="percent d-flex align-items-center">
                    
                      <IoIosArrowDown /> Monthly
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === Charts Section === */}
      <div className="d-flex gap-4 mt-4">
        <div className="w-75">
          {/* Earnings Chart */}
          <div className="earing-graph p-4 bg-white rounded shadow mb-4">
            <div className="d-flex justify-content-between align-items-center ">
              <h5 className="fw-bold">Earnings</h5>
              <div className="d-flex align-items-center gap-2">
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="form-select border-0 fw-semibold"
                  style={{
                    width: "90px",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "20px",
                  }}
                >
                  {[2025, 2024, 2023].map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
                <button
                  className="btn btn-outline-primary rounded-pill fw-semibold"
                  onClick={() => setShowModal(true)}
                >
                  View Details
                </button>
              </div>
            </div>

            <Bar data={chartData} options={chartOptions} height={120} />
  
            <div className="text-center mt-3">
              <p className="fw-semibold text-primary mb-0">
                Rs. 11,30,650.00 Earnings this year
              </p>
              <span className="text-success fw-semibold">
                20% ↑ from last year
              </span>
            </div>
          </div>

          {/* === Attendance Chart === */}
          <div className="p-4 bg-white rounded shadow">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex align-items-center gap-2">
                <select
                  value={attendanceType}
                  onChange={(e) => setAttendanceType(e.target.value)}
                  className="form-select border-0 fw-semibold"
                  style={{
                    width: "180px",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "20px",
                  }}
                >
                  <option value="staff">Staff Attendance</option>
                  <option value="teacher">Teacher Attendance</option>
                  <option value="student">Student Attendance</option>
                </select>
              </div>

              <div className="d-flex align-items-center gap-2">
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="form-select border-0 fw-semibold"
                  style={{
                    width: "110px",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "20px",
                  }}
                >
                  {["Monthly", "Weekly", "Daily"].map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
                <button
                  className="btn btn-outline-primary rounded-pill fw-semibold"
                  onClick={() => setShowModal(true)}
                >
                  View Details
                </button>
              </div>
            </div>

            {/* === Chart Layout === */}
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-4">
              {/* === Donut Chart Section === */}
              <div className="text-center" style={{ width: "250px" }}>
                <Doughnut data={dynamicDonutData} options={donutOptions} />
                <div className="mt-3">
                  <p className="fw-bold mb-1">{donutStats.present}%</p>
                  <p className="text-secondary mb-0">Present</p>
                  <p className="fw-bold mb-1 mt-3">{donutStats.absent}%</p>
                  <p className="text-secondary mb-0">Absent</p>
                </div>
              </div>

              {/* === Line Chart Section === */}
              <div style={{ flex: 1 }}>
                <div
                  className="bg-white rounded position-relative shadow-sm"
                  style={{
                    boxShadow:
                      "8px 8px 15px rgba(0,0,0,0.1), -8px 8px 15px rgba(0,0,0,0.05)",
                    borderRadius: "15px",
                    padding: "10px 15px",
                  }}
                >
                  <Line
                    data={dynamicLineData}
                    options={lineOptions}
                    height={100}
                  />
                </div>

                <div className="text-center mt-3">
                  <p className="fw-semibold text-primary mb-0">
                    {donutStats.summary}
                  </p>
                  <span className="text-success fw-semibold">
                    {donutStats.change}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 bg-white rounded w-25"></div>
      </div>

      {/* === Modal === */}
      {showModal && (
        <div
          className="modal fade show"
          style={{
            display: "block",
            backgroundColor: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(3px)",
          }}
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            style={{ maxWidth: "800px" }}
          >
            <div className="modal-content rounded-4 shadow">
              <div className="modal-header">
                <h5 className="modal-title fw-bold">
                  {year} Earnings & Expenses
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <Bar data={chartData} options={chartOptions} height={100} />

                <table className="table mt-4 table-striped align-middle">
                  <thead>
                    <tr>
                      <th>Month</th>
                      <th>Earnings (₹L)</th>
                      <th>Expenses (₹L)</th>
                      <th>Net (₹L)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chartMonths.map((m, i) => (
                      <tr key={i}>
                        <td>{m}</td>
                        <td>{earnings[i]}</td>
                        <td>{expenses[i]}</td>
                        <td
                          className={
                            earnings[i] - expenses[i] >= 0
                              ? "text-success"
                              : "text-danger"
                          }
                        >
                          {earnings[i] - expenses[i]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary rounded-pill"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
