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
  const roomsChartRef = useRef();

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
    if (!performanceChartRef.current) return;

    const container = performanceChartRef.current.parentNode;

    const drawChart = () => {
      const width = container.offsetWidth || 440; // 👈 fallback width
      const barHeight = 58;
      const height = data.length * barHeight + 20;

      // Clear previous chart
      const svg = d3
        .select(performanceChartRef.current)
        .attr("width", width)
        .attr("height", height)
        .style("font-family", "Inter, sans-serif");

      svg.selectAll("*").remove();

      const xScale = d3
        .scaleLinear()
        .domain([0, 100])
        .range([0, width - 120]);

      // Background (main)
      svg
        .selectAll(".bar-bg-main")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", 10)
        .attr("y", (d, i) => i * barHeight - 1)
        .attr("width", width - 120 - 10)
        .attr("height", barHeight - 10)
        .attr("rx", 8)
        .attr("fill", "#F2F7FA");

      // Background (percentage area)
      svg
        .selectAll(".bar-bg-percent")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", width - 100)
        .attr("y", (d, i) => i * barHeight - 1)
        .attr("width", 80)
        .attr("height", barHeight - 10)
        .attr("rx", 8)
        .attr("fill", "#F2F7FA");

      // Filled green bars
      svg
        .selectAll(".bar-fill")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", 20)
        .attr("y", (d, i) => i * barHeight + barHeight - 20)
        .attr("width", 0)
        .attr("height", 8)
        .attr("rx", 5)
        .attr("fill", "#00C853")
        .transition()
        .duration(1000)
        .attr("width", (d) => xScale(d.percentage));

      // Service labels
      svg
        .selectAll(".service-text")
        .data(data)
        .enter()
        .append("text")
        .attr("x", 20)
        .attr("y", (d, i) => i * barHeight + 20)
        .text((d) => d.service)
        .attr("font-size", width < 400 ? "12px" : "14px")
        .attr("fill", "#333")
        .attr("font-weight", "600");

      // Time labels
      svg
        .selectAll(".time-text")
        .data(data)
        .enter()
        .append("text")
        // 👇 dynamically position x depending on screen width
        .attr("x", () => {
          if (width > 800) return width * 0.85; // Desktop: far right
          if (width > 500) return width * 0.75; // Tablet: move slightly left
          return 20; // Mobile: align to left
        })
        // 👇 adjust y position based on screen width
        .attr("y", (d, i) => {
          if (width < 500) {
            // on mobile, put below the bar
            return i * barHeight + barHeight;
          }
          // otherwise, stay beside bar
          return i * barHeight + barHeight - 20;
        })
        .text((d) => d.time)
        .attr("font-size", () => {
          if (width > 800) return "13px";
          if (width > 500) return "12px";
          return "11px";
        })
        // 👇 adjust text alignment for small screens
        .attr("text-anchor", width < 500 ? "start" : "end")
        .attr("fill", "#888");

      // Percentage labels (move below bar on small screens)
      svg
        .selectAll(".percentage-text")
        .data(data)
        .enter()
        .append("text")
        .attr("x", width < 400 ? 20 : width - 60)
        .attr("y", (d, i) =>
          width < 400 ? i * barHeight + barHeight - 5 : i * barHeight + 25
        )
        .text((d) => `${d.percentage}%`)
        .attr("font-size", width < 400 ? "13px" : "14px")
        .attr("font-weight", "700")
        .attr("fill", "#000");
    };

    // Draw once on mount
    drawChart();

    // 👇 Use ResizeObserver for smooth responsive redraws
    const resizeObserver = new ResizeObserver(() => {
      drawChart();
    });

    resizeObserver.observe(container);

    // Cleanup
    return () => {
      resizeObserver.disconnect();
    };
  }, [data]);

  /* --------------------------------- 🔹 Occupancy Chart Data --------------------------------- */
  const occupancyData = [
    { label: "Class Room", value: 45, color: "#D07C27" },
    { label: "Staff Room", value: 25, color: "#004D40" },
    { label: "Labs", value: 15, color: "#7BA13A" },
    { label: "Others", value: 15, color: "#673AB7" },
  ];

  useEffect(() => {
    if (!occupancyChartRef.current) return;

    const drawChart = () => {
      const container = occupancyChartRef.current.parentNode;
      const width = container.offsetWidth; // 👈 dynamic width
      const height = width * 0.65; // maintain aspect ratio (adjust as needed)
      const radius = Math.min(width, height) / 3.2;

      // === Clear previous SVG ===
      d3.select(occupancyChartRef.current).selectAll("*").remove();

      // === Create SVG Container ===
      const svg = d3
        .select(occupancyChartRef.current)
        .attr("width", "100%") // 👈 let CSS handle width
        .attr("height", height)
        .attr("viewBox", `0 0 ${width} ${height}`)
        .attr("preserveAspectRatio", "xMidYMid meet")
        .append("g")
        .attr(
          "transform",
          `translate(${width / 2 - width * 0.05}, ${
            height / 2 + height * 0.02
          })`
        );

      // === Shadow effect ===
      const defs = svg.append("defs");
      const shadow = defs
        .append("filter")
        .attr("id", "shadow")
        .attr("x", "-100%")
        .attr("y", "-100%")
        .attr("width", "300%")
        .attr("height", "300%")
        .attr("filterUnits", "userSpaceOnUse");

      shadow
        .append("feDropShadow")
        .attr("dx", "2")
        .attr("dy", "3")
        .attr("stdDeviation", "4")
        .attr("flood-color", "#000");

      // === Pie + Arc setup ===
      const pie = d3
        .pie()
        .sort(null)
        .value((d) => d.value)
        .padAngle(0.08);

      const arc = d3
        .arc()
        .innerRadius(radius - 5)
        .outerRadius(radius + 2)
        .cornerRadius(10);

      // === Tooltip ===
      d3.select(".d3-tooltip").remove();
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

      // === Draw Donut Slices ===
      svg
        .selectAll(".arc")
        .data(pie(occupancyData))
        .enter()
        .append("path")
        .attr("class", "arc")
        .attr("d", arc)
        .attr("fill", (d) => d.data.color)
        .attr("filter", "url(#shadow)")
        .attr("opacity", 0.95)
        .style("cursor", "pointer")
        .on("mouseover", function (event, d) {
          const distance = 15;
          const angle = (d.startAngle + d.endAngle) / 2;
          const dx = Math.cos(angle) * distance;
          const dy = Math.sin(angle) * distance;

          d3.select(this)
            .transition()
            .duration(250)
            .ease(d3.easeBackOut)
            .attr("transform", `translate(${dx}, ${dy})`)
            .attr("opacity", 1);

          const [xOuter, yOuter] = arc.outerRadius(radius + 10).centroid(d);
          svg
            .append("line")
            .attr("class", "hover-line")
            .attr("x1", xOuter)
            .attr("y1", yOuter)
            .attr("x2", xOuter)
            .attr("y2", yOuter)
            .attr("stroke", d.data.color)
            .attr("stroke-width", 3)
            .transition()
            .duration(250)
            .attr("x2", xOuter * 1.25)
            .attr("y2", yOuter * 1.25);

          tooltip
            .style("opacity", 1)
            .html(
              `
            <div style="font-weight:600; color:${d.data.color};">${d.data.label}</div>
            <div style="font-size:14px;">${d.data.value}% occupancy</div>
          `
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
            .duration(250)
            .ease(d3.easeBackIn)
            .attr("transform", "translate(0,0)")
            .attr("opacity", 0.95);

          svg.selectAll(".hover-line").remove();
          tooltip.transition().duration(200).style("opacity", 0);
        });

      return () => tooltip.remove();
    };

    // === Initial draw
    drawChart();

    // === Redraw on container resize
    const resizeObserver = new ResizeObserver(() => drawChart());
    resizeObserver.observe(occupancyChartRef.current.parentNode);

    return () => resizeObserver.disconnect();
  }, []);

  {
    /* < -------------------------------------- Room Count per Building -------------------------------------- > */
  }
  const roomsData = [
    { building: "B1", occupied: 160, available: 25, under: 15 },
    { building: "B2", occupied: 100, available: 20, under: 10 },
    { building: "B3", occupied: 70, available: 15, under: 10 },
    { building: "B4", occupied: 150, available: 30, under: 15 },
    { building: "B5", occupied: 110, available: 20, under: 10 },
    { building: "B6", occupied: 90, available: 15, under: 8 },
    { building: "B7", occupied: 130, available: 25, under: 10 },
  ];

  useEffect(() => {
    if (!roomsChartRef.current) return;

    const container = roomsChartRef.current.parentNode;
    const width = container.offsetWidth;
    const height = 300;
    const margin = { top: 30, right: 20, bottom: 40, left: 50 };

    // Clear any previous chart
    d3.select(roomsChartRef.current).selectAll("*").remove();

    const svg = d3
      .select(roomsChartRef.current)
      .attr("width", "100%")
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const keys = ["under", "available", "occupied"];
    const colorScale = d3
      .scaleOrdinal()
      .domain(keys)
      .range(["#8FC9FF", "#007BFF", "#0047AB"]);

    const x = d3
      .scaleBand()
      .domain(roomsData.map((d) => d.building))
      .range([0, width - margin.left - margin.right])
      .padding(0.55);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(roomsData, (d) => d.occupied + d.available + d.under)])
      .nice()
      .range([height - margin.bottom - margin.top, 0]);

    const stackedData = d3.stack().keys(keys)(roomsData);

    // 🩶 1️⃣ Add horizontal Y grid lines first (behind bars)
    svg
      .append("g")
      .call(
        d3
          .axisLeft(y)
          .ticks(5)
          .tickSize(-(width - margin.left - margin.right))
          .tickPadding(10)
      )
      .call((g) => g.select(".domain").remove()) // remove Y axis line
      .selectAll("text")
      .attr("font-size", "12px")
      .attr("fill", "#666");

    // 🩶 Style grid lines
    svg
      .selectAll(".tick line")
      .attr("stroke", "#E9EEF3")
      .attr("stroke-width", 1)
      .attr("opacity", 0.8);

    // 🟩 2️⃣ Draw stacked bars (on top of grid)
    svg
      .selectAll(".layer")
      .data(stackedData)
      .enter()
      .append("g")
      .attr("fill", (d) => colorScale(d.key))
      .selectAll("rect")
      .data((d) => d)
      .enter()
      .append("rect")
      .attr("x", (d) => x(d.data.building))
      .attr("y", (d) => y(d[1]))
      .attr("height", (d) => y(d[0]) - y(d[1]))
      .attr("width", x.bandwidth())
      .attr("opacity", 1)
      .on("mouseover", function () {
        d3.select(this)
          .transition()
          .duration(150)
          .attr("opacity", 0.85)
          .attr("transform", "translate(0,-4)");
      })
      .on("mouseout", function () {
        d3.select(this)
          .transition()
          .duration(150)
          .attr("opacity", 1)
          .attr("transform", "translate(0,0)");
      });

    // 🧭 3️⃣ Add X Axis (bottom labels only)
    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom - margin.top})`)
      .call(d3.axisBottom(x))
      .call((g) => g.select(".domain").remove()) // remove X axis line
      .selectAll("text")
      .attr("dy", "1em")
      .attr("font-size", "13px")
      .attr("fill", "#555");

      
    // 🏷️ Add X-axis label (centered)
    svg
      .append("text")
      .attr("x", (width - margin.left - margin.right) / 2) // horizontally centered
      .attr("y", height - margin.bottom + 5) // just below axis labels
      .attr("text-anchor", "middle")
      .attr("font-size", "13px")
      .attr("fill", "#666")
      .text("Building");

    // 🏷️ 4️⃣ Add Y-axis label
    // svg
    //   .append("text")
    //   .attr("x", -margin.left + 10)
    //   .attr("y", -10)
    //   .attr("text-anchor", "start")
    //   .attr("font-size", "13px")
    //   .attr("fill", "#666")
    //   .text("Rooms Count");
  }, [roomsData]);

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
          <div className="top-two-graph gap-4 mt-3 ">
            {/* <=================================== Performane Chart =======================================> */}
            <div className="performance-chart mt-3 w-50">
              <div className="p-4 bg-white rounded shadow-sm">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h6 className="fw-bold mb-0">
                    Campus Performance Chart
                    <span className="text-danger">• Live</span>
                  </h6>
                  <button className="btn btn-outline-secondary btn-sm rounded-pill">
                    Select Campus
                  </button>
                </div>

                <div className="d-flex justify-content-between mb-2 fw-semibold text-muted mb-3">
                  <span
                    style={{
                      padding: "0px 20px",
                      fontWeight: "400",
                      color: "#1C212D",
                      fontSize: "16px",
                    }}
                  >
                    Services
                  </span>
                  <span
                    style={{
                      padding: "0px 25px",
                      fontWeight: "400",
                      color: "#1C212D",
                      fontSize: "16px",
                    }}
                  >
                    Percentage
                  </span>
                </div>

                <div className="performance-chart-container">
                  <svg ref={performanceChartRef}></svg>
                </div>
              </div>
              {/* <----------------------------------------------- Rooms per count -----------------------------------------------> */}
              <div className="mt-3">
                <div className=" p-4 bg-white rounded shadow-sm">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h6 className="fw-bold mb-0">Rooms per Count</h6>
                    <button className="btn btn-outline-secondary btn-sm rounded-pill">
                      year
                    </button>
                  </div>
                  <div className="d-flex justify-content-between gap-3 mb-2  text-muted">
                    {/* <div>
                      <span className="me-2" style={{ color: "#0047AB" }}>
                        
                      </span>
                      Occupied <br />
                      <span className="ms-1 text-dark ">600 Rooms</span>
                    </div>
                    <div>
                      <span className="me-2" style={{ color: "#007BFF" }}>
                        
                      </span>
                      Available <br />
                      <span className="ms-1 text-dark ">97 Rooms</span>
                    </div>
                    <div>
                      <span className="me-2" style={{ color: "#8FC9FF" }}>
                        
                      </span>
                      Under Construction <br />
                      <span className="ms-1 text-dark">81 Rooms</span>
                    </div> */}
                  </div>

                  <div>
                    <svg ref={roomsChartRef}></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* <=================================== Occupancy Chart =======================================> */}
            <div className="occupancy-chart mt-3 w-50">
              <div className="occupancy-chart p-4 bg-white rounded shadow-sm ">
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className="fw-bold mb-0">Campus Occupancy</h6>
                  <button className="btn btn-outline-secondary btn-sm rounded-pill">
                    2025
                  </button>
                </div>

                <div className="" style={{}}>
                  <svg ref={occupancyChartRef}></svg>
                </div>
                <div>
                  <div className="d-flex justify-content-center gap-4">
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
        </div>
        <div className="w-25 bg-white">Campus setup</div>
      </div>
    </div>
  );
}

export default CampusSetup;
