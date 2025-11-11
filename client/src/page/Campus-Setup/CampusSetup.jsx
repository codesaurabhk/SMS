import React, { useState, useEffect, useRef } from "react";
import background from "../../assets/images/background.png";
import school from "../../assets/images/school.png";
import logo from "../../assets/images/logo.png";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { BsThreeDotsVertical } from "react-icons/bs";
import * as d3 from "d3";

{
  /* <=============================================== Dummy Data for Cards ===============================================> */
}

const campusData = [
  {
    id: 1,
    title: "Total Campus",
    count: 3,
    status: "All Operational",
    color: "text-success",
    icon: <HiOutlineBuildingLibrary size={50} className="text-primary" />,
  },
  {
    id: 2,
    title: "Total Bulidings",
    count: 5,
    status: "2 Under Construction",
    color: "text-success",
    icon: <HiOutlineBuildingLibrary size={50} className="text-warning" />,
  },
  {
    id: 3,
    title: "Total Classrooms",
    count: 30,
    status: "2 Available for Bookinng",
    color: "text-info",
    icon: <HiOutlineBuildingLibrary size={50} className="text-info" />,
  },
  {
    id: 4,
    title: "Labs",
    count: 1,
    status: "1 Under Maintenance",
    color: "text-success",
    icon: <HiOutlineBuildingLibrary size={50} className="text-danger" />,
  },
  {
    id: 5,
    title: "Hostel Rooms",
    count: 8,
    status: "Upgraded Facilities",
    color: "text-success",
    icon: <HiOutlineBuildingLibrary size={50} className="text-secondary" />,
  },
  {
    id: 6,
    title: "Sport Complex",
    count: 10,
    status: "",
    color: "text-success",
    icon: <HiOutlineBuildingLibrary size={50} className="text-success" />,
  },
  {
    id: 7,
    title: "Canteen",
    count: 4,
    status: "Under Renovation",
    color: "text-warning",
    icon: <HiOutlineBuildingLibrary size={50} className="text-warning" />,
  },
  {
    id: 8,
    title: "Parking",
    count: 3,
    status: "New Equipment Added",
    color: "text-success",
    icon: <HiOutlineBuildingLibrary size={50} className="text-primary" />,
  },
];

{
  /* <================================================= Table Dummy Data =================================================> */
}

const blockData = [
  {
    id: 1,
    blockName: "Science Block",
    code: "BLK-SC01",
    grade: "A+",
    buildings: 2,
    rooms: 24,
    floors: 3,
    coordinate: "John Smith",
    phone: "+91 9876543210",
    status: "Active",
  },
  {
    id: 2,
    blockName: "Commerce Block",
    code: "BLK-CM02",
    grade: "A",
    buildings: 1,
    rooms: 18,
    floors: 2,
    coordinate: "Priya Mehta",
    phone: "+91 9821345678",
    status: "Active",
  },
  {
    id: 3,
    blockName: "Arts Block",
    code: "BLK-AR03",
    grade: "B+",
    buildings: 2,
    rooms: 20,
    floors: 3,
    coordinate: "Ravi Kumar",
    phone: "+91 9812233445",
    status: "Under Maintenance",
  },
];

function CampusSetup() {
  const [open, setOpen] = useState(false);
  const performanceChartRef = useRef();
  const occupancyChartRef = useRef();

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleSelect = (option) => {
    alert(`You selected: ${option}`);
    setOpen(false);
  };

  {
    /* <---------------------------------------- Perfomance Chart Dummy Data ---------------------------------> */
  }
  const data = [
    { service: "Garden", percentage: 53, time: "10:15 pm" },
    { service: "Wifi", percentage: 12, time: "10:15 pm" },
    { service: "Camera", percentage: 4, time: "10:15 pm" },
    { service: "Water Purifier", percentage: 31, time: "10:15 pm" },
  ];
  useEffect(() => {
    const width = 440;
    const barHeight = 60;
    const height = data.length * barHeight + 20;

    d3.select(performanceChartRef.current).selectAll("*").remove();

    const svg = d3
      .select(performanceChartRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("font-family", "Inter, sans-serif");

    const xScale = d3
      .scaleLinear()
      .domain([0, 100])
      .range([0, width - 120]);

    // ✅ Background for left (main area)
    svg
      .selectAll(".bar-bg-main")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar-bg-main")
      .attr("x", 10)
      .attr("y", (d, i) => i * barHeight - 1)
      .attr("width", width - 120 - 10) // leave space for red section
      .attr("height", barHeight - 10)
      .attr("rx", 8)
      .attr("fill", "#F2F7FA");

    // ✅ Background for right (percentage area)
    svg
      .selectAll(".bar-bg-percent")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar-bg-percent")
      .attr("x", width - 100) // start near right edge
      .attr("y", (d, i) => i * barHeight - 1)
      .attr("width", 80)
      .attr("height", barHeight - 10)
      .attr("rx", 8)
      .attr("fill", "#F2F7FA"); // light red background

    // ✅ Filled green bars
    svg
      .selectAll(".bar-fill")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar-fill")
      .attr("x", 20)
      .attr("y", (d, i) => i * barHeight + barHeight - 20)
      .attr("width", 0)
      .attr("height", 8)
      .attr("rx", 5)
      .attr("fill", "#00C853")
      .transition()
      .duration(1000)
      .attr("width", (d) => xScale(d.percentage));

    // ✅ Service labels
    svg
      .selectAll(".service-text")
      .data(data)
      .enter()
      .append("text")
      .attr("x", 20)
      .attr("y", (d, i) => i * barHeight + 20)
      .text((d) => d.service)
      .attr("font-size", "14px")
      .attr("fill", "#333")
      .attr("font-weight", "600");

    // ✅ Time labels
    svg
      .selectAll(".time-text")
      .data(data)
      .enter()
      .append("text")
      .attr("x", 260)
      .attr("y", (d, i) => i * barHeight + barHeight - 20)
      .text((d) => d.time)
      .attr("font-size", "12px")
      .attr("fill", "#888");

    // ✅ Percentage labels (inside red background)
    svg
      .selectAll(".percentage-text")
      .data(data)
      .enter()
      .append("text")
      .attr("x", width - 60)
      .attr("y", (d, i) => i * barHeight + 25)
      .text((d) => `${d.percentage}%`)
      .attr("font-size", "14px")
      .attr("font-weight", "700")
      .attr("fill", "#000"); // deep red text
  }, []);

  /* --------------------------------- 🔹 Occupancy Chart Data --------------------------------- */
  const occupancyData = [
    { label: "Class Room", value: 45, color: "#D07C27" },
    { label: "Staff Room", value: 25, color: "#004D40" },
    { label: "Labs", value: 15, color: "#7BA13A" },
    { label: "Others", value: 15, color: "#673AB7" },
  ];

  /* --------------------------------- 🔹 Occupancy Chart (Semi Donut) --------------------------------- */
 useEffect(() => {
  const width = 400;
  const height = 280;
  const radius = 110;

  // Clear previous SVG
  d3.select(occupancyChartRef.current).selectAll("*").remove();

  const svg = d3
    .select(occupancyChartRef.current)
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${width / 2.2}, ${height / 1.4})`);

  // ===== Shadow effect =====
  const defs = svg.append("defs");
  const shadow = defs
    .append("filter")
    .attr("id", "shadow")
    .attr("x", "-50%")
    .attr("y", "-50%")
    .attr("width", "200%")
    .attr("height", "200%");
  shadow
    .append("feDropShadow")
    .attr("dx", "2")
    .attr("dy", "3")
    .attr("stdDeviation", "3")
    .attr("flood-color", "#b5b5b5");

  // ===== Pie and Arc setup =====
  const pie = d3
    .pie()
    .sort(null)
    .value((d) => d.value)
    .startAngle(-Math.PI / 1.2)
    .endAngle(Math.PI / 1.2);

  const arc = d3
    .arc()
    .innerRadius(radius - 25)
    .outerRadius(radius)
    .cornerRadius(10);

  const arcHover = d3
    .arc()
    .innerRadius(radius - 25)
    .outerRadius(radius + 10)
    .cornerRadius(10);

  // ===== Tooltip =====
  const tooltip = d3
    .select("body")
    .append("div")
    .attr("class", "d3-tooltip")
    .style("position", "absolute")
    .style("background", "#fff")
    .style("padding", "8px 12px")
    .style("border-radius", "6px")
    .style("box-shadow", "0 4px 10px rgba(0,0,0,0.15)")
    .style("font-size", "13px")
    .style("font-weight", "500")
    .style("color", "#333")
    .style("pointer-events", "none")
    .style("opacity", 0);

  // ===== Draw Arcs =====
  const arcs = svg
    .selectAll(".arc")
    .data(pie(occupancyData))
    .enter()
    .append("path")
    .attr("class", "arc")
    .attr("d", arc)
    .attr("fill", (d) => d.data.color)
    .attr("filter", "url(#shadow)")
    .attr("opacity", 0.95)
    .on("mouseover", function (event, d) {
      d3.select(this)
        .transition()
        .duration(300)
        .attr("d", arcHover)
        .attr("opacity", 1);

      tooltip
        .style("opacity", 1)
        .html(
          `<strong>${d.data.label}</strong><br/>${d.data.value}% occupancy`
        )
        .style("left", event.pageX + 15 + "px")
        .style("top", event.pageY - 20 + "px");
    })
    .on("mousemove", function (event) {
      tooltip
        .style("left", event.pageX + 15 + "px")
        .style("top", event.pageY - 20 + "px");
    })
    .on("mouseout", function () {
      d3.select(this)
        .transition()
        .duration(300)
        .attr("d", arc)
        .attr("opacity", 0.95);

      tooltip.transition().duration(200).style("opacity", 0);
    })
    .transition()
    .duration(1000)
    .attrTween("d", function (d) {
      const i = d3.interpolate(d.startAngle + 0.1, d.endAngle);
      return function (t) {
        d.endAngle = i(t);
        return arc(d);
      };
    });
     // ===== Optional: Label Line + Text for "Class Room" =====
  const labelArc = d3
    .arc()
    .innerRadius(radius + 30)
    .outerRadius(radius + 30);

  const labelData = pie(occupancyData)[0]; // Class Room arc
  const [x, y] = labelArc.centroid(labelData);

  svg
    .append("line")
    .attr("x1", x - 10)
    .attr("y1", y)
    .attr("x2", x + 30)
    .attr("y2", y - 20)
    .attr("stroke", "#D07C27")
    .attr("stroke-width", 2);

  svg
    .append("text")
    .attr("x", x + 50)
    .attr("y", y - 25)
    .attr("text-anchor", "start")
    .attr("fill", "#D07C27")
    .attr("font-size", "18px")
    .attr("font-weight", "600")
    .text("Class Rooms");

  // ===== Cleanup tooltip on unmount =====
  return () => {
    tooltip.remove();
  };
}, []);

  return (
    <div className="container-fluid">
      {/* <============================== School Name & Logo ==============================> */}
      <div className="campus-header">
        {/* Background */}
        <img src={background} alt="Background" className="campus-bg" />

        {/* Text Section */}
        <div className="school-content">
          <h2 className="school-text">International</h2>
          <h1 className="school-name">School</h1>

          {/* Info Bar */}
          <div className="info-bar">
            <div className="info-item">
              <span> +123 456 789</span>
            </div>
            <div className="info-item">
              <span> www.web.com</span>
            </div>
          </div>
        </div>

        {/* School Image */}
        <img src={school} alt="School Building" className="school-img" />

        {/* Logo */}
        <img src={logo} alt="Logo" className="logo-img" />
      </div>

      {/* <----------------------------------- campus Cards & add -----------------------------------> */}
      <div className="overview shadow p-3 rounded bg-white mt-3">
        {/* === Header Section === */}
        <div className="overview-head position-relative">
          <h3>Overview</h3>
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

        {/* <=================================== Slide-cards ======================================> */}
        <div className="campus-slider d-flex gap-3 overflow-auto p-2">
          {campusData.map((item) => (
            <div
              key={item.id}
              className="campus-card d-flex bg-white shadow-sm p-3 rounded flex-shrink-0"
              style={{ width: "260px" }}
            >
              {/* Left: Text */}
              <div className="flex-grow-1">
                <div className="fs-5 fw-semibold">
                  <span>{item.title}</span>
                </div>
                <div className="fs-2 fw-bold">
                  <span>{item.count}</span>
                </div>
                <div className={`${item.color} fs-6`}>
                  <span>{item.status}</span>
                </div>
              </div>

              {/* Right: Icon */}
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ width: "70px" }}
              >
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <======================================= Left & Right Side Code ===================================> */}
      <div className="down-side gap-4 mt-3">
        <div className="w-75">
          <div className="rounded shadow-sm bg-white rounded p-2">
            <div className="overview-head position-relative">
              <h5>Building / Department</h5>
              <button className="btn btn-primary d-flex gap-2 align-items-center add-button">
                <FaPlus />
                <span>Add New Building</span>
              </button>
            </div>
            <div className="table-responsive">
              <table className="table table-border-bottom align-middle text-center">
                <thead className="table-light border-bottom">
                  <tr>
                    <th>S.N</th>
                    <th className="text-start">Block Name</th>
                    <th>Code</th>
                    <th>Grade</th>
                    <th>Buildings</th>
                    <th>Rooms</th>
                    <th>Floors</th>
                    <th>Co ordinate</th>
                    <th>Phone No.</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {blockData.map((block) => (
                    <tr key={block.id}>
                      <td>{block.id}</td>
                      <td className="text-start">{block.blockName}</td>
                      <td>
                        <span className="text-start">{block.code}</span>
                      </td>
                      <td>
                        <span className="text-start">{block.grade}</span>
                      </td>
                      <td>
                        <span className="text-start">{block.buildings}</span>
                      </td>
                      <td>
                        <span className="text-start">{block.rooms}</span>
                      </td>
                      <td>
                        <span className="text-start">{block.floors}</span>
                      </td>
                      <td>
                        <span className="text-start">{block.coordinate}</span>
                      </td>
                      <td>
                        <span className="text-start">{block.phone}</span>
                      </td>
                      <td>
                        <span className="text-start">{block.status}</span>
                      </td>
                      <td>
                        <span className="text-start">
                          <BsThreeDotsVertical size={18} />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* <--------------------------------- All chart ------------------------------------> */}
          <div className="d-flex gap-4 mt-3">
            {/* <=================================== Performane Chart =======================================> */}
            <div className="mt-3">
              <div
                className="p-4 bg-white rounded shadow-sm"
                style={{ width: "480px" }}
              >
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h6 className="fw-bold mb-0">
                    Campus Performance Chart{" "}
                    <span className="text-danger">• Live</span>
                  </h6>
                  <button className="btn btn-outline-secondary btn-sm rounded-pill">
                    Select Campus
                  </button>
                </div>

                <div className="d-flex justify-content-between mb-2 fw-semibold text-muted">
                  <span>Services</span>
                  <span>Percentage</span>
                </div>

                <svg ref={performanceChartRef}></svg>
              </div>
            </div>

            {/* <=================================== Occupancy Chart =======================================> */}
            <div
              className="p-4 bg-white rounded shadow-sm mt-3"
              style={{ width: "400px" }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="fw-bold mb-0">Campus Occupancy</h6>
                <button className="btn btn-outline-secondary btn-sm rounded-pill">
                  2025
                </button>
              </div>

              <svg ref={occupancyChartRef}></svg>
              <div>
                <div className="d-flex justify-content-center gap-4 mt-3">
                  {occupancyData.map((d, i) => (
                    <div key={i} className="d-flex align-items-center gap-2">
                      <div
                        style={{
                          width: 12,
                          height: 12,
                          backgroundColor: d.color,
                          borderRadius: 3,
                        }}
                      ></div>
                      <span style={{ fontSize: 13 }}>{d.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
        <div className="w-25 bg-white">Campus setup</div>
      </div>
    </div>
  );
}

export default CampusSetup;
