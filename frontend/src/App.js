import React, { useState, useEffect } from "react";
import "./App.css";
import image from "./image.png";
import Particles from "react-tsparticles";

function App() {
  const [data, setData] = useState({});
  const [employee, setEmployee] = useState("");
  const [department, setDepartment] = useState("");
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    fetch("http://10.2.13.126:5000/api/metadata")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, []);

  // 🔥 GLOBAL EMPLOYEES
  let employees = Object.keys(data);

  // 🔥 GLOBAL DEPARTMENTS (unique across all employees)
  let departments = Array.from(
    new Set(
      Object.values(data).flatMap((emp) => Object.keys(emp))
    )
  );

  // 🔥 FILTER LOGIC (BIDIRECTIONAL)

  // If department selected → filter employees
  if (department) {
    employees = employees.filter(
      (emp) => data[emp] && data[emp][department]
    );
  }

  // If employee selected → filter departments
  if (employee) {
    departments = Object.keys(data[employee] || {});
  }

  const fetchSchedule = async () => {
    const res = await fetch(
      `http://10.2.13.126:5000/api/schedule?employee=${employee}&department=${department}`
    );
    const result = await res.json();
    setSchedule(result);
  };

  const handleReset = () => {
    setEmployee("");
    setDepartment("");
    setSchedule([]);
  };

  // 🌌 PARTICLES BACKGROUND
  const particlesOptions = {
    fullScreen: { enable: true, zIndex: -1 },
    background: { color: "transparent" },
    particles: {
      number: { value: 45, density: { enable: true, area: 900 } },
      color: { value: ["#7c3aed", "#06b6d4", "#22c55e", "#f97316"] },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: { min: 2, max: 5 } },
      move: {
        enable: true,
        speed: 0.8,
        outModes: "out",
      },
      links: {
        enable: true,
        distance: 160,
        color: "#a78bfa",
        opacity: 0.25,
        width: 1,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 120 },
        push: { quantity: 3 },
      },
    },
  };

  return (
    <>
      {/* BACKGROUND */}
      <Particles options={particlesOptions} />

      {/* LOGO */}
      <div className="taskbar">
        <img src={image} alt="logo" className="top-logo" />
      </div>

      {/* TITLE */}
      <div>
        <h2>Factoryflow Planner</h2>
      </div>

      <div className="container">
        <header>
          <h1>WORKFORCE OPTIMIZER</h1>
          <p>Smart Workforce Scheduling System</p>
        </header>

        <div className="filter-card">

          {/* EMPLOYEE DROPDOWN */}
          <select
            value={employee}
            onChange={(e) => setEmployee(e.target.value)}
          >
            <option value="">All Employees</option>
            {employees.map((e) => (
              <option key={e}>{e}</option>
            ))}
          </select>

          {/* DEPARTMENT DROPDOWN */}
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="">All Departments</option>
            {departments.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>

          <div className="button-group">
            <button
              onClick={fetchSchedule}
              disabled={!employee || !department}
            >
              View Schedule
            </button>

            <button className="reset-btn" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>

        {/* TABLE */}
        {schedule.length > 0 ? (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Shift</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, i) => (
                  <tr key={i}>
                    <td>{row.day}</td>
                    <td>{row.shift}</td>
                    <td>{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="placeholder">
            Select employee & department to view schedule
          </p>
        )}
      </div>
    </>
  );
}

export default App;