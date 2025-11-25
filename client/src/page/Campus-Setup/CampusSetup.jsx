import React, { useState, useEffect, useRef } from "react";
import background from "../../assets/images/background.png";
import school from "../../assets/images/school.png";
import logo from "../../assets/images/logo.png";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosWarning } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
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

{
  /* <==================================================== Dummy Data for Maintaince Alert ========================================> */
}
const issuesData = [
  {
    id: 1,
    title: "Window issue in Class 6A",
    campus: "Main campus",
    block: "Block A",
    floor: "Floor 3",
    classroom: "Class 6A",
    description: "The classroom window lock is broken and needs repair.",
    reportedBy: "Kajal",
    reportedOn: "23/09/2029",
    status: "Pending",
  },
  {
    id: 2,
    title: "Projector not working in Class 9B",
    campus: "Main campus",
    block: "Block B",
    floor: "Floor 2",
    classroom: "Class 9B",
    description: "The projector is not turning on since morning.",
    reportedBy: "Rohan",
    reportedOn: "12/01/2030",
    status: "In Progress",
  },
];

function CampusSetup() {
  const [open, setOpen] = useState(false);
  const performanceChartRef = useRef();
  const occupancyChartRef = useRef();
  const roomsChartRef = useRef();
  const roomsLegendRef = useRef();
  const chartRef = useRef();
  const legendRef = useRef();

  // 🔥 Track window width & re-render charts on resize
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      // Time labels (STATIC position)
      svg
        .selectAll(".time-text")
        .data(data)
        .enter()
        .append("text")
        .attr("x", width - 130) // 🔥 FIXED POSITION
        .attr("y", (d, i) => i * barHeight + barHeight - 20)
        .text((d) => d.time)
        .attr("font-size", "13px") // 🔥 FIXED SIZE
        .attr("text-anchor", "end") // right-aligned
        .attr("fill", "#888");

      // Percentage labels (move below bar on small screens)
      // Percentage labels (FIXED position, stays on right always)
      svg
        .selectAll(".percentage-text")
        .data(data)
        .enter()
        .append("text")
        .attr("x", width - 50) // 🔥 always place at right side
        .attr("y", (d, i) => i * barHeight + 30) // 🔥 aligned middle of bar
        .text((d) => `${d.percentage}%`)
        .attr("font-size", width < 500 ? "12px" : "14px") // 🔥 only TEXT SIZE changes
        .attr("font-weight", "700")
        .attr("fill", "#000")
        .attr("text-anchor", "end"); // align text to the right
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
    if (!roomsChartRef.current || !roomsLegendRef.current) return;

    const container = roomsChartRef.current.parentNode;
    const width = container.offsetWidth;
    const height = 300;
    const margin = { top: 30, right: 20, bottom: 40, left: 50 };

    // Clear previous chart + legend + any old tooltip
    d3.select(roomsChartRef.current).selectAll("*").remove();
    d3.select(roomsLegendRef.current).selectAll("*").remove();
    d3.select("body").selectAll(".rooms-tooltip").remove();

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
      .padding(0.8);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(roomsData, (d) => d.occupied + d.available + d.under)])
      .nice()
      .range([height - margin.bottom - margin.top, 0]);

    const stackedData = d3.stack().keys(keys)(roomsData);

    // 🟦 Y-axis Grid Lines
    svg
      .append("g")
      .attr("class", "y-axis")
      .call(
        d3
          .axisLeft(y)
          .ticks(5)
          .tickSize(-(width - margin.left - margin.right))
          .tickPadding(10)
      )
      .call((g) => g.select(".domain").remove())
      .selectAll("text")
      .attr("font-size", "12px")
      .attr("fill", "#666");

    svg
      .selectAll("g.y-axis .tick line")
      .attr("stroke", "#E9EEF3")
      .attr("stroke-width", 2)
      .attr("opacity", 0.8);

    // ================================
    // 🔥 Tooltip
    // ================================
    const tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "rooms-tooltip")
      .style("position", "absolute")
      .style("padding", "6px 12px")
      .style("background", "#fff")
      .style("border-radius", "6px")
      .style("box-shadow", "0 4px 10px rgba(0,0,0,0.15)")
      .style("font-size", "13px")
      .style("font-weight", "600")
      .style("pointer-events", "none")
      .style("opacity", 0);

    // ================================
    // 🟩 Draw Bars
    // ================================
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
      .on("mouseover", function (event, d) {
        const value = d[1] - d[0]; // rooms count

        d3.select(this)
          .transition()
          .duration(150)
          .attr("opacity", 0.85)
          .attr("transform", "translate(0,-4)");

        tooltip
          .style("opacity", 1)
          .html(`<strong>${value} Rooms</strong>`)
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
          .duration(150)
          .attr("opacity", 1)
          .attr("transform", "translate(0,0)");

        tooltip.style("opacity", 0);
      });

    // ================================
    // 🟫 X Axis
    // ================================
    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom - margin.top})`)
      .call(d3.axisBottom(x))
      .call((g) => g.select(".domain").remove())
      .selectAll("text")
      .attr("font-size", "13px")
      .attr("fill", "#555")
      .attr("dy", "1em");

    // ================================
    // 🏷 X Label
    // ================================
    svg
      .append("text")
      .attr("x", (width - margin.left - margin.right) / 2)
      .attr("y", height - margin.bottom + 5)
      .attr("text-anchor", "middle")
      .attr("font-size", "13px")
      .attr("fill", "#666")
      .text("Building");

    // ================================
    // 🟨 LEGEND (Rectangles)
    // ================================
    const totals = {
      occupied: d3.sum(roomsData, (d) => d.occupied),
      available: d3.sum(roomsData, (d) => d.available),
      under: d3.sum(roomsData, (d) => d.under),
    };

    const legendData = [
      { key: "occupied", label: "Occupied", value: totals.occupied },
      { key: "available", label: "Available", value: totals.available },
      { key: "under", label: "Under Construction", value: totals.under },
    ];

    const legend = d3
      .select(roomsLegendRef.current)
      .append("div")
      .style("display", "flex")
      .style("justify-content", "space-between")
      .style("gap", "20px")
      .style("color", "#1C212D")
      .style("font-size", "15px");

    legend
      .selectAll(".legend-item")
      .data(legendData)
      .enter()
      .append("div")
      .style("display", "flex")
      .style("align-items", "center")
      .style("gap", "8px")
      .html(
        (d) => `
        <svg width="25" height="10">
          <rect width="25" height="10" fill="${colorScale(d.key)}" rx="3" />
        </svg>
        <div>
          <div style="font-weight:600;">${d.label}</div>
          <div style="color:#000; font-size:14px;">${d.value} Rooms</div>
        </div>
      `
      );
  }, [roomsData]);

  {
    /* < -------------------------------------- Multilayer Chart -------------------------------------->  */
  }

  const roomTypes = [
    { label: "Class Rooms", value: 456, color: "#2E86C1" },
    { label: "Staff Rooms", value: 92, color: "#C0392B" },
    { label: "Washrooms", value: 124, color: "#F4D03F" },
    { label: "Sports Area", value: 88, color: "#28B463" },
    { label: "Labs", value: 241, color: "#5DADE2" },
    { label: "Stationary", value: 400, color: "#AF7AC5" },
  ];

  useEffect(() => {
    if (!chartRef.current || !legendRef.current) return;

    const drawChart = () => {
      const container = chartRef.current.parentNode;
      const width = container.offsetWidth;
      const height = width * 0.65;

      const radius = Math.min(width * 0.55, height * 0.7) / 2;

      // Cleanup
      d3.select(chartRef.current).selectAll("*").remove();
      d3.select(legendRef.current).selectAll("*").remove();

      // ================= SVG BASE =================
      const svg = d3
        .select(chartRef.current)
        .attr("width", width * 0.45) // PIE SIZE AREA
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${(width * 0.6) / 2}, ${height / 2.5})`); // CENTER PIE AREA

      // ================= PIE SETUP =================
      const pie = d3
        .pie()
        .sort(null)
        .value((d) => d.value);

      const arc = d3.arc().innerRadius(0).outerRadius(radius);

      const arcLabel = d3
        .arc()
        .innerRadius(radius * 0.6)
        .outerRadius(radius * 0.6);

      const total = d3.sum(roomTypes, (d) => d.value);

      // ================= DRAW PIE =================
      svg
        .selectAll("path")
        .data(pie(roomTypes))
        .enter()
        .append("path")
        .attr("d", arc)
        .attr("fill", (d) => d.data.color)
        .attr("opacity", 0.95)
        .style("cursor", "pointer")
        .on("mouseover", function () {
          d3.select(this)
            .transition()
            .duration(200)
            .attr("transform", "scale(1.06)");
        })
        .on("mouseout", function () {
          d3.select(this)
            .transition()
            .duration(200)
            .attr("transform", "scale(1)");
        });

      // ================= LABELS INSIDE PIE =================
      svg
        .selectAll("text")
        .data(pie(roomTypes))
        .enter()
        .append("text")
        .text((d) => `${Math.round((d.data.value / total) * 100)}%`)
        .attr("transform", (d) => `translate(${arcLabel.centroid(d)})`)
        .attr("fill", "#fff")
        .attr("font-size", width < 500 ? "10px" : "14px")
        .attr("font-weight", "600")
        .attr("text-anchor", "middle");

      // ================= LEGEND (LEFT SIDE) =================
      const legendWrap = d3
        .select(legendRef.current)
        .style("display", "flex")
        .style("flex-direction", "column")
        .style("gap", "12px");

      const legendItem = legendWrap
        .selectAll(".legend-item")
        .data(roomTypes)
        .enter()
        .append("div")
        .attr("class", "legend-item")
        .style("display", "flex")
        .style("align-items", "center")
        .style("gap", "10px");

      // Dot color
      legendItem
        .append("div")
        .style("width", "12px")
        .style("height", "12px")
        .style("border-radius", "50%")
        .style("background", (d) => d.color);

      // Label + number
      const labelGroup = legendItem
        .append("div")
        .style("display", "flex")
        .style("justify-content", "space-between")
        .style("width", "160px");

      labelGroup
        .append("span")
        .style("font-weight", "500")
        .text((d) => d.label);

      labelGroup
        .append("b")
        .style("font-size", "14px")
        .text((d) => d.value);
    };

    // Draw on load
    drawChart();

    // Responsive redraw
    const observer = new ResizeObserver(drawChart);
    observer.observe(chartRef.current.parentNode);

    return () => observer.disconnect();
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
        <div className="campus-slider d-flex gap-3 p-2 overflowY-scroll">
          {campusData.map((item) => (
            <div
              key={item.id}
              className="campus-card d-flex bg-white shadow-sm p-3 rounded flex-shrink-0 "
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
      <div className="down-side mt-3">
        <div className="campus-left">
          {/* <--------------------------------- Building / Department Table ------------------------------------> */}
          <div className="rounded shadow-sm bg-white rounded p-2">
            <div className="overview-head position-relative">
              <h5>Building / Department</h5>
             <Link to="/block-setup" style={{textDecoration:'none'}}>
              <button className="btn btn-primary d-flex gap-2 align-items-center add-button">
                <FaPlus />
                <span>Add New Building</span>
              </button>
             </Link>
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
                      <td className="text-start">
                        <Link to="/campusoverview" style={{textDecoration:'none', outline:'none', color:'#717376'}}>{block.blockName}</Link>
                      </td>
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

          {/* 1 */}
          <div className="top-two-graph all-graph gap-4 mt-3 ">
            {/* <=================================== Performane Chart =======================================> */}
            <div
              className="performance-chart mt-3 bg-white rounded shadow-sm "
              style={{ height: "400px" }}
            >
              <div className="p-4">
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
            </div>

            {/* <=================================== Occupancy Chart =======================================> */}

            <div
              className="occupancy-chart mt-3 bg-white rounded shadow-sm "
              style={{ height: "400px" }}
            >
              <div className="occupancy-chart p-4 ">
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
                  <div
                    style={{ marginTop: "-20px" }}
                    className="d-flex justify-content-center gap-4"
                  >
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

          {/* 2 */}
          <div className="bottom-two-graph gap-4 mt-3">
            {/* <----------------------------------------------- Rooms per count -----------------------------------------------> */}
            <div className="rooms-graph mt-3">
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
                  <div ref={roomsLegendRef}></div>
                  <svg ref={roomsChartRef}></svg>
                </div>
              </div>
            </div>

            {/* multi layer bar grapg*/}
            <div className="multi-layer-graph mt-3">
              <div className=" p-4 bg-white rounded shadow-sm">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h6 className="fw-bold mb-0">Rooms Type</h6>
                  <button className="btn btn-outline-secondary btn-sm rounded-pill">
                    year
                  </button>
                </div>
                <div className="d-flex justify-content-between gap-3 mb-2  text-muted"></div>

                <div className="d-flex justify-content-between align-items-start">
                  <div ref={legendRef} style={{ width: "45%" }}></div>

                  <svg ref={chartRef} style={{ width: "55%" }}></svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <-------------------------------------- right side card ---------------------------------> */}
        <div className="campus-right">
          <div className="setup-card p-4 rounded shadow-sm bg-white">
            {/* ======= Item 1 ======== */}
            <div className="setup-item mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="fw-bold mb-1">Campus Setup</h6>
                <button className="update-btn">Update</button>
              </div>

              <div className="progress mt-2 mb-2" style={{ height: "6px" }}>
                <div className="progress-bar" style={{ width: "60%" }}></div>
              </div>

              <div className="d-flex justify-content-between">
                <div>
                  <span className="fw-bold" style={{ fontSize: "17px" }}>
                    60%
                  </span>
                  <span className="text-muted"> Completed</span>
                </div>
                <div className="text-muted small text-end">
                  Last Update
                  <br />
                  <span>10th Aug 24, 7:30 AM</span>
                </div>
              </div>
            </div>

            {/* ======= Item 2 ======== */}
            <div className="setup-item">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="fw-bold mb-1">Your Profile Setup</h6>
                <button className="update-btn">Update</button>
              </div>

              <div className="progress mt-2 mb-2" style={{ height: "6px" }}>
                <div className="progress-bar" style={{ width: "50%" }}></div>
              </div>

              <div className="d-flex justify-content-between">
                <div>
                  <span className="fw-bold" style={{ fontSize: "17px" }}>
                    50%
                  </span>
                  <span className="text-muted"> Completed</span>
                </div>
                <div className="text-muted small text-end">
                  Last Update
                  <br />
                  <span>10th Aug 24, 7:30 AM</span>
                </div>
              </div>
            </div>
          </div>
          {/* <-------------------------------------- Maintainance Alert ---------------------------------> */}
          <div className="maintainance-card p-4 rounded shadow-sm bg-white mt-3">
            <div className="d-flex justify-content-between align-items-center mb-1 gap-20px">
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#1C212D",
                }}
              >
                Maintainance Alerts
              </span>
              <span
                style={{
                  backgroundColor: "#434E67",
                  padding: "7px 8px",
                  borderRadius: "6px",
                  fontSize: "9px",
                  fontWeight: "600",
                }}
              >
                <button className="bg-transparent border-0 rounded text-white">
                  View All
                </button>
              </span>
            </div>
            <div>
              <div className="py-4">
                {issuesData.map((item) => (
                  <div
                    key={item.id}
                    className="card shadow-sm p-3 rounded-4 border-0 p-4 mb-3"
                  >
                    {/* ICON + TITLE */}
                    <div className="d-flex align-items-center gap-3">
                      <div className="alert-box d-flex justify-content-center align-items-center">
                        <span className="img-fluid">
                          <IoIosWarning style={{ color: "#ff0000" }} />
                        </span>
                      </div>
                      <span className="issues m-0">{item.title}</span>
                    </div>

                    {/* TAGS */}
                    <div className="d-flex gap-2 mt-3 flex-wrap">
                      <span className="badge campus-tag px-3 py-2">
                        {item.campus}
                      </span>
                      <span className="badge campus-tag px-3 py-2">
                        {item.block}
                      </span>
                      <span className="badge campus-tag px-3 py-2">
                        {item.floor}
                      </span>
                      <span className="badge campus-tag px-3 py-2">
                        {item.classroom}
                      </span>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="text-muted mt-3">{item.description}</p>

                    <hr />

                    {/* FOOTER */}
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="m-0 fw-medium">
                        Reported By:{" "}
                        <span className="fw-semibold">{item.reportedBy}</span> —
                        {item.reportedOn}
                      </p>

                      <span className="badge pending-badge px-3 py-2">
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* map */}
          <div
            style={{
              width: "100%",
              height: "350px",
              borderRadius: "20px",
              overflow: "hidden",
              marginTop: "10px",
            }}
          >
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.217064855766!2d77.20799317462794!3d28.61393919141061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2ddea3c1c23%3A0xa486f16e2945f5de!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1700000000000"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampusSetup;
