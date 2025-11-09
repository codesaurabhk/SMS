import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineUserGroup } from "react-icons/hi2";
import {
  IoMdArrowUp,
  IoMdArrowDown,
  IoIosArrowDown,
  IoIosMore,
} from "react-icons/io";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
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

/* ================== images ===================== */

import DashboardGoPremium from "../../assets/images/dashboard-go-premium.png";
import eva from "../../assets/images/eva.jpg";
import lady from "../../assets/images/lady.jpg";
import girl from "../../assets/images/girl.jpg";

/* ---------------------- upcoming event images ------------------------ */
import holi from "../../assets/images/holi.jpg";
import cake from "../../assets/images/cake.jpg";
import meeting from "../../assets/images/meeting.jpg";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [year, setYear] = useState(2025);
  const [showModal, setShowModal] = useState(false);
  const [attendanceType, setAttendanceType] = useState("teacher");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedClassPending, setSelectedClassPending] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [filterClass, setFilterClass] = useState("");
  const [value, setValue] = useState(new Date());

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

  {
    /* <===== Month Filter =====> */
  }
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
  const [years, setYears] = useState(new Date().toISOString().slice(0, 10));

  {
    /* <---------------------------------Chart Dummy Data -----------------------------------> */
  }
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

  {
    /* <================================ Attendance Dataset  ==============================> */
  }
  const attendanceDataSets = {
    staff: {
      donut: [90, 10], // present, absent
      line: [80, 75, 78, 85, 90, 88, 92, 95, 89, 87, 90, 93],
      summary: "90% Attendance this Month",
      change: "+4% from last month",
      tableData: [
        {
          Sn: 1,
          Name: "Raj",
          Class: "6A",
          Reason: "Medical Reason",
        },
        {
          Sn: 1,
          Name: "Anshu",
          Class: "6A",
          Reason: "Medical Reason",
        },
        {
          Sn: 2,
          Name: "Rashmi",
          Class: "6A",
          Reason: "Medical Reason",
        },
        {
          Sn: 3,
          Name: "Ankita",
          Class: "6A",
          Reason: "Medical Reason",
        },
      ],
    },

    teacher: {
      donut: [88, 12],
      line: [70, 75, 78, 80, 85, 82, 86, 90, 88, 92, 85, 89],
      summary: "88% Attendance this Month",
      change: "+2% from last month",
      tableData: [
        {
          Sn: 1,
          Name: "Raj",
          Class: "6A",
          Reason: "Medical Reason",
        },
        {
          Sn: 2,
          Name: "Aditya",
          Class: "6A",
          Reason: "Medical Reason",
        },
        {
          Sn: 3,
          Name: "Akash",
          Class: "6A",
          Reason: "Medical Reason",
        },
        {
          Sn: 4,
          Name: "Rohan Raj",
          Class: "8A",
          Reason: "Medical Reason",
        },
        {
          Sn: 5,
          Name: "Raju",
          Class: "2c",
          Reason: "Medical Reason",
        },
        {
          Sn: 6,
          Name: "Raja",
          Class: "5A",
          Reason: "Medical Reason",
        },
        {
          Sn: 7,
          Name: "Raj Kumar",
          Class: "6A",
          Reason: "Medical Reason",
        },
        {
          Sn: 8,
          Name: "Ram",
          Class: "6D",
          Reason: "Medical Reason",
        },
        {
          Sn: 9,
          Name: "Ramu Kaka",
          Class: "9B",
          Reason: "Medical Reason",
        },
        {
          Sn: 10,
          Name: "Mohan Chamar",
          Class: "6A",
          Reason: "Medical Reason",
        },
      ],
    },
    student: {
      donut: [85, 15],
      line: [60, 68, 70, 72, 75, 78, 80, 85, 83, 88, 84, 90],
      summary: "85% Attendance this Month",
      change: "+5% from last month",
      tableData: [
        {
          Sn: 1,
          Name: "Raj",
          Class: "6A",
          Reason: "Medical Reason",
        },
        {
          Sn: 2,
          Name: "Aditya",
          Class: "6A",
          Reason: "Medical Reason",
        },
        {
          Sn: 3,
          Name: "Akash",
          Class: "6A",
          Reason: "Medical Reason",
        },
        {
          Sn: 4,
          Name: "Rohan Raj",
          Class: "8A",
          Reason: "Medical Reason",
        },
        {
          Sn: 5,
          Name: "Raju",
          Class: "2c",
          Reason: "Medical Reason",
        },
        {
          Sn: 6,
          Name: "Raja",
          Class: "5A",
          Reason: "Medical Reason",
        },
        {
          Sn: 7,
          Name: "Raj Kumar",
          Class: "6A",
          Reason: "Medical Reason",
        },
        {
          Sn: 8,
          Name: "Ram",
          Class: "6D",
          Reason: "Medical Reason",
        },
        {
          Sn: 9,
          Name: "Ramu Kaka",
          Class: "9B",
          Reason: "Medical Reason",
        },
      ],
    },
  };

  {
    /* <------------------------------ pending fess Data -------------------------------> */
  }

  const pendingFeesData = [
    {
      id: 1,
      name: "Raj",
      class: "6",
      amount: "Rs. 3,000",
      dueDate: "10th July 25",
      contact: "9866******",
    },
    {
      id: 2,
      name: "Manshi",
      class: "7",
      amount: "Rs. 3,000",
      dueDate: "10th July 25",
      contact: "9866******",
    },
    {
      id: 3,
      name: "Nikita",
      class: "9",
      amount: "Rs. 3,000",
      dueDate: "10th July 25",
      contact: "9866******",
    },
    {
      id: 4,
      name: "Prerna",
      class: "8",
      amount: "Rs. 3,000",
      dueDate: "10th July 25",
      contact: "9866******",
    },
    {
      id: 5,
      name: "Raju",
      class: "6",
      amount: "Rs. 3,000",
      dueDate: "10th July 25",
      contact: "9866******",
    },
    {
      id: 6,
      name: "Raja",
      class: "10",
      amount: "Rs. 3,000",
      dueDate: "10th July 25",
      contact: "9866******",
    },
  ];

  {
    /* =============================== topStudent ================================> */
  }

  const topStudentsData = [
    {
      id: 1,
      name: "Raj",
      class: "6A",
      field: "Academic",
      gpa: "99.6 %",
      rank: 1,
    },
    {
      id: 2,
      name: "Manshi",
      class: "12B",
      field: "Swimming",
      gpa: "99.6 %",
      rank: 1,
    },
    {
      id: 3,
      name: "Nikita",
      class: "12B",
      field: "Basket Ball",
      gpa: "99.6 %",
      rank: 1,
    },
    {
      id: 4,
      name: "Prerna",
      class: "12B",
      field: "Cricket",
      gpa: "99.6 %",
      rank: 1,
    },
    {
      id: 5,
      name: "Nikita",
      class: "12B",
      field: "Badminton",
      gpa: "99.6 %",
      rank: 1,
    },
  ];

  // === Select based on attendanceType ===
  const selected = attendanceDataSets[attendanceType];

  // === Select based on class ===
  const selectedClasspending = pendingFeesData[selectedClassPending];

  // Filter Pending Fees based on selected Class & Section
  const filteredPendingFees = pendingFeesData.filter((item) => {
    const classMatch = selectedClassPending
      ? item.class === selectedClassPending
      : true;
    const sectionMatch = selectedSection
      ? item.section === selectedSection
      : true;
    return classMatch && sectionMatch;
  });

  const donutStats = {
    present: selected.donut[0],
    absent: selected.donut[1],
    summary: selected.summary,
    change: selected.change,
  };

  const donutOptions = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  const dynamicDonutData = {
    labels: ["Present", "Absent"],
    datasets: [
      {
        data: selected.donut,
        backgroundColor: ["#C889FF", "#FAD370"], // blue & gray
        borderWidth: 0,
        cutout: "70%",
      },
    ],
  };

  // const dynamicLineData = {
  //   labels: [
  //     "Jan",
  //     "Feb",
  //     "Mar",
  //     "Apr",
  //     "May",
  //     "Jun",
  //     "Jul",
  //     "Aug",
  //     "Sep",
  //     "Oct",
  //     "Nov",
  //     "Dec",
  //   ],
  //   datasets: [
  //     {
  //       label: `${attendanceType} Attendance`,
  //       data: selected.line,
  //       borderColor: "#2563eb",
  //       backgroundColor: "rgba(37,99,235,0.1)",
  //       fill: true,
  //       tension: 0.4,
  //       pointBackgroundColor: "#2563eb",
  //       pointRadius: 5,
  //       pointHoverRadius: 7,
  //       borderWidth: 2.5,
  //     },
  //   ],
  // };

  // const donutStats = {
  //   present: selected.donut[0],
  //   absent: selected.donut[1],
  //   summary: selected.summary,
  //   change: selected.change,
  // };

  // const donutOptions = {
  //   plugins: {
  //     legend: { display: false },
  //     tooltip: { enabled: true },
  //   },
  // };

  // const lineOptions = {
  //   responsive: true,
  //   plugins: {
  //     legend: { display: false },
  //     tooltip: {
  //       backgroundColor: "#007bff",
  //       titleFont: { size: 12 },
  //       bodyFont: { size: 14 },
  //       displayColors: false,
  //       callbacks: {
  //         label: (context) => `${context.parsed.y}%`,
  //       },
  //     },
  //   },
  //   scales: {
  //     y: {
  //       beginAtZero: true,
  //       grid: { color: "#f1f1f1" },
  //       ticks: { callback: (val) => val + "%" },
  //     },
  //     x: { grid: { display: false } },
  //   },
  // };

  const classList = [...new Set(pendingFeesData.map((item) => item.class))];

  // Filter table data based on selected class
  const filteredData = filterClass
    ? pendingFeesData.filter((item) => item.class === filterClass)
    : pendingFeesData;

  /* <--------------------------- Dummy data For Event table ----------------------------->  */

  const eventData = [
    {
      id: 1,
      title: "Parent-Teacher Meeting",
      dateTime: "11 Nov 10:30 AM",
      status: "Upcoming",
    },
    {
      id: 2,
      title: "Science Exhibition",
      dateTime: "15 Nov 9:00 AM",
      status: "Completed",
    },
    {
      id: 3,
      title: "Annual Sports Day",
      dateTime: "25 Nov 8:30 AM",
      status: "Missed",
    },
    {
      id: 4,
      title: "Cultural Fest",
      dateTime: "2 Dec 12:00 PM",
      status: "Upcoming",
    },
    {
      id: 5,
      title: "Board Exam Orientation",
      dateTime: "8th Dec 2025, 09:00 AM",
      status: "Upcoming",
    },
  ];

  /* <===================================== Dummy Data for Your Task ==============================> */

  const tasks = [
    {
      id: 1,
      date: "11 Nov",
      time: "10:00 AM",
      title: "Create the time table",
      description: "For all class create the time table ",
      bgColor: "#F2E4FE",
    },

    {
      id: 2,
      date: "12 Nov",
      time: "02:30 PM",
      title: "Check assignment submissions",
      description: "Check all summar holiday home Work",
      bgColor: "#FFF2D3",
    },
    {
      id: 3,
      date: "13 Nov",
      time: "09:00 AM,",
      title: "Parent-teacher meeting follow-up",
      description: "All student parents teacher meeting",
      bgColor: "#DAFFDF",
    },
  ];

  /* <-------------------------------- Dummy Data For Recent Activity --------------------------------> */

  const activities = [
    {
      img: eva,
      message:
        "Please ensure the monthly attendance report is accurate before the April 30th deadline",
      time: "9:00 AM",
    },
    {
      img: girl,
      message: "All staff are required to update their timesheets by Friday.",
      time: "11:30 AM",
    },
    {
      img: lady,
      message:
        "Meeting scheduled for 2:00 PM regarding new project allocation.",
      time: "1:45 PM",
    },
  ];

  {
    /* <--------------------------------- Dummy Data For Upcoming Event --------------------------------> */
  }

  const events = [
    {
      imgs: cake,
      title: "PTM (Parent Teacher Meeting)",
      description: "Discussion of student progress and performance.",
      month: "April",
      date: "23",
      year: "2025",
    },
    {
      imgs: holi,
      title: "Annual Sports Day",
      description: "Celebrating physical fitness and teamwork.",
      month: "February",
      date: "14",
      year: "2025",
    },
    {
      imgs: meeting,
      title: "Science Exhibition",
      description: "Showcasing innovative student projects and experiments.",
      month: "September",
      date: "10",
      year: "2025",
    },
  ];

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

        {/* <----------------------------------- Dashboard Cards -----------------------------------> */}
        <div className="row mt-4">
          {dashboardData.map((item, index) => (
            <div
              className="dashboard-card col-12 col-sm-4 col-lg-2"
              key={index}
            >
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
                      className={`${item.color} sign d-flex align-items-center `}
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

      {/* <===================================== Charts Section ===================================> */}
      <div className="d-flex gap-4 mt-3">
        <div className="w-65">
          {/* <-------------------------------- Earnings Chart ----------------------------------> */}
          <div className="p-4 bg-white rounded shadow mb-2">
            <div className="d-flex justify-content-between align-items-center ">
              <h5 className="fw-bold">Earnings</h5>
              <div className="d-flex align-items-center gap-2">
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="form-select fw-semibold text-secondry border border-2 text-muted"
                  style={{
                    width: "90px",
                  }}
                >
                  {[2025, 2024, 2023].map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
                <button
                  className="btn border border-2 border border-secondary text-white shadow bg-secondary rounded fw-semibold"
                  onClick={() => setShowModal(true)}
                >
                  View Details
                </button>
              </div>
            </div>

            <Bar data={chartData} options={chartOptions} height={120} />

            <div className="d-flex align-items-center justify-content-center gap-5 mt-3 ">
              <span className="fw-semibold text-primary">
                Rs. 11,30,650.00 Earnings this year
              </span>
              <span className="text-success fw-semibold">
                +20% ↑ from last year
              </span>
            </div>
          </div>

          {/* ============================ Attendance Chart ============================= */}
          <div className="p-4 bg-white rounded shadow">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex align-items-center gap-2">
                <select
                  value={attendanceType}
                  onChange={(e) => setAttendanceType(e.target.value)}
                  className="form-select fw-semibold border-0"
                  style={{
                    width: "200px",
                  }}
                >
                  <option value="staff">Staff Attendance</option>
                  <option value="teacher">Teacher Attendance</option>
                  <option value="student">Student Attendance</option>
                </select>
              </div>

              <div className="d-flex align-items-center gap-2">
                {/*  <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="form-select border border-2 fw-semibold bg-secondry"
                  style={{
                    width: "110px",
                  }}
                >
                  {["Monthly", "Weekly", "Daily"].map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select> */}

                <div
                  className="dtpkr border border-2 rounded px-2 py-1 d-flex align-items-center justify-content-center fw-semibold "
                  style={{
                    width: "150px",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    document.getElementById("DatePicker").showPicker()
                  }
                >
                  <DatePicker
                    id="DatePicker"
                    type="date"
                    className="form-control form-control-sm bg-transparent border-0 fw-semibold text-center p-0"
                    style={{
                      width: "100%",
                      cursor: "pointer",
                    }}
                    value={years}
                    onChange={(e) => setYear(e.target.value)}
                  />
                  <IoIosArrowDown />
                </div>

                <button
                  className="btn border border-2 fw-semibold p-2 bg-primary text-white"
                  onClick={() => setShowModal(true)}
                >
                  View Details
                </button>
              </div>
            </div>

            {/* === Chart Layout === */}
            <div className="d-flex align-items-center justify-content-between gap-4">
              {/* <============================ Donut Chart Section =============================> */}
              <div className="text-center" style={{ width: "250px" }}>
                <Doughnut data={dynamicDonutData} options={donutOptions} />

                <div className="mt-4 text-center ">
                  {/* Present */}
                  <div className="mb-3">
                    <span className="fw-bold text-dark fs-2 d-flex">
                      {donutStats.present}%
                    </span>

                    <div className="d-flex align-items-center gap-2">
                      <span
                        style={{
                          display: "inline-block",
                          width: "30px",
                          height: "8px",
                          backgroundColor: "#C889FF",
                          borderRadius: "2px",
                          marginLeft: "6px",
                        }}
                      ></span>
                      <span className="text-secondary fw-semibold">
                        Present
                      </span>
                    </div>
                  </div>

                  {/* Absent */}
                  <div>
                    <span className="fw-bold text-dark fs-2 d-flex">
                      {donutStats.absent}%
                    </span>

                    <div className="d-flex align-items-center gap-2">
                      <span
                        style={{
                          display: "inline-block",
                          width: "30px",
                          height: "8px",
                          backgroundColor: "#FAD370",
                          borderRadius: "2px",
                          marginLeft: "6px",
                        }}
                      ></span>
                      <span className="text-secondary fw-semibold">Absent</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* === Line Chart Section === */}
              {/* <div style={{ flex: 1 }}>
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
              </div> */}

              {/* <============================ Attendance Table Code =============================> */}
              <div className="table">
                <table className="table table-bordered-bottom align-middle text-center mb-0">
                  <thead className="table-light">
                    <tr className="">
                      <th className="">S.N</th>
                      <th>
                        <select
                          className="form-select form-select-sm table-select fw-bold fs-6"
                          value={attendanceType}
                          onChange={(e) => setAttendanceType(e.target.value)}
                        >
                          <option value="teacher" className="fw-bold fs-6">
                            Absentees(Teacher)
                          </option>
                          <option value="staff" className="fw-bold fs-6">
                            Absentees(Staff)
                          </option>
                          <option value="student" className="fw-bold fs-6">
                            Absentees(Teacher)
                          </option>
                        </select>
                      </th>
                      <th>Class Teacher</th>
                      <th>Reasons</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selected.tableData.map((row, i) => (
                      <tr key={i}>
                        <td>{row.Sn}</td>
                        <td className="text-start">{row.Name}</td>
                        <td>{row.Class}</td>
                        <td>{row.Reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div></div>
            </div>
          </div>

          <div className="p-4 bg-white rounded shadow-sm mt-4">
            {/* <========================= Pending Fees Table ======================> */}
            <div className="mb-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold mb-0">Pending Fees List</h5>
                <div className="d-flex gap-2">
                  <select
                    className="dtpkr border border-2 rounded px-2 py-1 d-flex align-items-center justify-content-center bg-transparent"
                    value={selectedClasspending}
                    onChange={(e) => setSelectedClassPending(e.target.value)}
                    style={{ width: "120px" }}
                  >
                    <option value="" className="">
                      Class
                    </option>
                    <option value="1">Class 1</option>
                    <option value="2">Class 2</option>
                    <option value="3">Class 3</option>
                    <option value="4">Class 4</option>
                    <option value="5">Class 5</option>
                    <option value="6">Class 6</option>
                    <option value="7">Class 7</option>
                    <option value="8">Class 8</option>
                    <option value="9">Class 9</option>
                    <option value="10">Class 10</option>
                  </select>

                  <select
                    className="dtpkr border border-2 rounded px-2 py-1 d-flex align-items-center justify-content-center"
                    value={selectedSection}
                    onChange={(e) => setSelectedSection(e.target.value)}
                    style={{ width: "120px" }}
                  >
                    <option value="">Section</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="B">C</option>
                    <option value="B">D</option>
                  </select>

                  <button className="btn btn-dark fw-semibold btn-sm px-3">
                    View All
                  </button>
                </div>
              </div>
              <div className="table">
                <table className="table table-border-bottom align-middle text-center">
                  <thead className="table-light border-bottom">
                    <tr>
                      <th>S.N</th>
                      <th className="text-start">Student Name</th>
                      <th>
                        <select
                          className="dtpkr px-2 py-1 d-flex align-items-center justify-content-center bg-transparent border border-0 fw-bold"
                          value={selectedClasspending}
                          onChange={(e) =>
                            setSelectedClassPending(e.target.value)
                          }
                        >
                          <option value="">Class</option>
                          <option value="1">Class 1</option>
                          <option value="2">Class 2</option>
                          <option value="3">Class 3</option>
                          <option value="4">Class 4</option>
                          <option value="5">Class 5</option>
                          <option value="6">Class 6</option>
                          <option value="7">Class 7</option>
                          <option value="8">Class 8</option>
                          <option value="9">Class 9</option>
                          <option value="10">Class 10</option>
                        </select>
                      </th>
                      <th>Amount Due</th>
                      <th>Last Due Date</th>
                      <th>Parent Contact</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPendingFees.length > 0 ? (
                      filteredPendingFees.map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td className="text-start">{item.name}</td>
                          <td>Class {item.class}</td>
                          <td>{item.amount}</td>
                          <td>{item.dueDate}</td>
                          <td>{item.contact}</td>
                          <td>
                            <IoIosMore size={18} />
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="7"
                          className="text-center text-secondary py-3"
                        >
                          No pending fees for this selection.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* <======================= Top Performing Students Table ========================> */}
            <div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold mb-0">Top Performing Students</h5>
                <div className="d-flex gap-2">
                  <select
                    className="dtpkr border border-2 rounded px-2 py-1 d-flex align-items-center justify-content-center"
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    style={{ width: "120px" }}
                  >
                    <option value="">Class</option>
                    <option value="6A">6A</option>
                    <option value="12B">12B</option>
                  </select>

                  <select
                    className="dtpkr border border-2 rounded px-2 py-1 d-flex align-items-center justify-content-center"
                    value={selectedSection}
                    onChange={(e) => setSelectedSection(e.target.value)}
                    style={{ width: "120px" }}
                  >
                    <option value="">Section</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                  </select>

                  <button className="btn btn-dark fw-semibold btn-sm px-3">
                    View All
                  </button>
                </div>
              </div>

              <div className="table">
                <table className="table table-border-bottom align-middle text-center">
                  <thead className="table-light border-bottom">
                    <tr>
                      <th>S.N</th>
                      <th className="text-start">Student Name</th>
                      <th>Class</th>
                      <th>Field</th>
                      <th>GPA/Score</th>
                      <th>Rank</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {topStudentsData.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td className="text-start">{item.name}</td>
                        <td>{item.class}</td>
                        <td>{item.field}</td>
                        <td>{item.gpa}</td>
                        <td>{item.rank}</td>
                        <td>
                          <IoIosMore size={18} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* <================================ Right Side Code ================================> */}
        <div className="bg-white rounded w-35 p-3">
          <div className="img d-flex rounded justify-content-between p-4">
            <div className="text-white">
              <span className="fs-6">Mun_C</span>
              <div className="mt-4">
                <span className="fs-6">Go Premium</span>
              </div>
              <div className="dashboard-member mt-1">
                <span>Explore 25k+ Feature With life time membership</span>
              </div>
              <div className="mt-4">
                <div
                  className="btn btn-primary px-4 d-flex align-items-center justify-content-center"
                  style={{ height: "30px" }}
                >
                  <span className="dashboard-member">Get Full Access</span>
                </div>
              </div>
            </div>
            <div className="" style={{ width: "220px", height: "180px" }}>
              <img
                className=""
                src={DashboardGoPremium}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          </div>
          {/* <============================= Holiday Calender ============================> */}
          <div className="mt-2 ">
            <div className="d-flex justify-content-between">
              <span className="holiday fw-bold">Holiday Calender </span>
              <span className="dtpkr btn ">
                <button className="btn btn-dark fw-semibold btn-sm px-3">
                  View All
                </button>
              </span>
            </div>

            <div className="mt-3">
              <div>
                <Calendar onChange={setValue} value={value} />
              </div>
            </div>
          </div>

          {/* <=============================== Reminder Table =============================> */}
          <div className="mt-2">
            <div className="d-flex justify-content-between">
              <span className="holiday fw-bold">Reminder</span>
              <span className="dtpkr btn ">
                <button className="btn btn-dark fw-semibold btn-sm px-3">
                  View All
                </button>
              </span>
            </div>
            <div className="table">
              <table className="table table-border-bottom align-middle text-center">
                <thead className="table-light border-bottom">
                  <tr className="reminder">
                    <th className="text-start">Title</th>
                    <th className="text-start">Date & Time</th>
                    <th className="text-start">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {eventData.map((event) => (
                    <tr
                      className="reminder-table text-start fw-light"
                      key={event.id}
                    >
                      <td className="event-title-table">{event.title}</td>
                      <td className="date-time-table">{event.dateTime}</td>
                      <td>
                        <span
                          className={`badge status-badge px-3 py-2 rounded-pill fw-semibold ${
                            event.status === "Upcoming"
                              ? "upcoming" // Light blue background, dark text
                              : event.status === "Completed"
                              ? "completed" // Green background, white text
                              : event.status === "Missed"
                              ? "missed" // Red background, white text
                              : "bg-secondary text-white" // Default fallback
                          }`}
                        >
                          {event.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* <================================ Task ==================================>*/}
          <div className="mt-2">
            <div className="d-flex justify-content-between">
              <span className="holiday fw-bold">Your Task</span>
              <span className="dtpkr btn ">
                <button className="btn btn-dark fw-semibold btn-sm px-3">
                  View All
                </button>
              </span>
            </div>
            {tasks.map((task) => (
              <div
                key={task.id}
                className="task d-flex rounded mt-2 shadow-sm"
                style={{ backgroundColor: task.bgColor }}
              >
                <div className="time-date w-25">
                  <div>{task.time}</div>
                  <div>{task.date}</div>
                </div>
                <div className="border border-2 border-white"></div>
                <div className="task-right w-75">
                  <div className="task-dis">{task.title}</div>
                  <div className="time-date">{task.description}</div>
                </div>
              </div>
            ))}
          </div>

          {/* <--------------------------------- Recent Activity ------------------------> */}
          <div className="mt-2">
            <div className="d-flex justify-content-between">
              <span className="holiday fw-bold">Recent Activities</span>
              <span className="dtpkr btn ">
                <button className="btn btn-dark fw-semibold btn-sm px-3">
                  View All
                </button>
              </span>
            </div>
            {activities.map((activity, index) => (
              <div className="d-flex align-items-center" key={index}>
                <div className="w-25 px-2 py-2">
                  <img
                    src={activity.img}
                    className="rounded-circle"
                    alt=""
                    style={{ width: "64px", height: "64px" }}
                  />
                </div>

                <div className="activity w-75">
                  <div className="time px-2 py-2">
                    {activity.message}
                    <br />
                    <span className="recent-activity-time mt-1">
                      {activity.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <=============================== Upcoming Event ============================> */}
          <div className="mt-2">
            <div className="d-flex justify-content-between">
              <span className="holiday fw-bold">Upcoming Event</span>
              <span className="dtpkr btn ">
                <button className="btn btn-dark fw-semibold btn-sm px-3">
                  View All
                </button>
              </span>
            </div>

            {events.map((event, index) => (
              <div className="d-flex mt-1" key={index}>
                <div className="w-75 d-flex gap-2">
                  <div className="">
                    <img
                      src={event.imgs}
                      alt=""
                      className="rounded-3"
                      style={{ width: "104px", height: "64px" }}
                    />
                  </div>
                  <div>
                    <div>
                      <span>{event.title}</span>
                    </div>
                    <div>
                      <span>{event.description}</span>
                    </div>
                  </div>
                </div>
                <div className="w-25">
                  <div>{event.month}</div>
                  <div>{event.date}</div>
                  <div>{event.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================= Modal =========================== */}
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
