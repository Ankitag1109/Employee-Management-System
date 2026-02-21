import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CreateODModal from "./CreateODModal.jsx";
import "../styles/Dashboard.css";

import NoRecord from "../assetss/no_records.svg";
import create from "../assetss/create.svg";
import idmsicon from "../assetss/idms_logo.svg";
import UserAvatar from "../assetss/user_avatar.svg";
import EmployeeIcon from "../assetss/employee.svg";
import LeavesIcon from "../assetss/leaves.svg";
import HolidaysIcon from "../assetss/holidays.svg";
import OutdoorDutyIcon from "../assetss/outdoor_duty.svg";
import ExpenseIcon from "../assetss/expense.svg";
import ITComputationIcon from "../assetss/it_computation.svg";
import ActionIcon from "../assetss/action.svg";

import PhotoIcon from "../assetss/photo.svg";
import TrainingIcon from "../assetss/training.svg";
import SupportIcon from "../assetss/support.svg";
import SearchIcon from "../assetss/search_icon.svg";
import SalaryIcon from "../assetss/salary.svg";
import ReportsIcon from "../assetss/reports.svg";
import PoliciesIcon from "../assetss/policies.svg";
import Attendance from "../assetss/attendance.svg";
import Documents from "../assetss/documents.svg";
import Performance from "../assetss/performance.svg";

const EmployeeSetup = () => {
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    department: "",
    designation: "",
    gender: "",
  });

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const sidebarItems = [
    { name: "Employee", icon: EmployeeIcon },
    { name: "Leaves", icon: LeavesIcon },
    { name: "Holidays", icon: HolidaysIcon },
    { name: "Outdoor Duty", icon: OutdoorDutyIcon },
    { name: "Expense", icon: ExpenseIcon },
    { name: "Attendance", icon: Attendance },
    { name: "IT Computation", icon: ITComputationIcon },
    { name: "Salary", icon: SalaryIcon },
    { name: "Documents", icon: Documents },
    { name: "Training & Dev.", icon: TrainingIcon },
    { name: "Performance", icon: Performance },
    { name: "HR Policies", icon: PoliciesIcon },
    { name: "Reports", icon: ReportsIcon },
    { name: "Support", icon: SupportIcon },
  ];

  const fetchEmployees = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `http://localhost:8082/api/employees?search=${search}&department=${filters.department}&designation=${filters.designation}&gender=${filters.gender}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setEmployees(res.data);
    } catch (error) {
      console.error("Failed to fetch employees:", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, [search, filters]);

  return (
    <>
      <div className="layout">
        <div className="sidebar">
          <div className="logo">
            <img src={idmsicon} alt="logo" className="logo1" />
          </div>
          <div className="menu">
            {sidebarItems.map((item, index) => (
              <div
                key={index}
                className={`menu-item ${index === 0 ? "active" : ""}`}
              >
                <span className="icon">
                  <img src={item.icon} alt={item.name} className="svg-icon" />
                </span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="main">
          <div className="topbar">
            <h2>Employee Setup</h2>
            <div className="profile-section">
              <img
                src={UserAvatar}
                alt="profile"
                className="profile-icon-svg"
              />
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>

          <div className="toolbar">
            <div className="search-box">
              <img src={SearchIcon} alt="search" className="svg-icon" />
              <input
                type="text"
                placeholder="Search by name, email, department..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <button className="svgcreate" onClick={() => setShowModal(true)}>
              <img src={create} alt="plus" />
            </button>
          </div>

          <div className="filters">
            <select
              value={filters.department}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, department: e.target.value }))
              }
            >
              <option value="">All Departments</option>
              <option value="HR">HR</option>
              <option value="IT">IT</option>
            </select>

            <select
              value={filters.designation}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, designation: e.target.value }))
              }
            >
              <option value="">All Designations</option>
              <option value="Manager">Manager</option>
              <option value="Developer">Developer</option>
            </select>

            <select
              value={filters.gender}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, gender: e.target.value }))
              }
            >
              <option value="">All Genders</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="content-area">
            {employees.length === 0 ? (
              <div className="empty-box">
                <img src={NoRecord} alt="empty" className="empty-svg" />
                <p>No Records to be displayed</p>
              </div>
            ) : (
              <table className="employee-table">
                <thead>
                  <tr>
                    <th>Emp loye Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Gender</th>
                    <th>Date of Birth</th>
                    <th>Department</th>
                    <th>Designation</th>
                    <th>Photo</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((emp) => (
                    <tr key={emp._id}>
                      <td>{emp.fullName}</td>
                      <td>{emp.email}</td>
                      <td>{emp.contact}</td>
                      <td>{emp.gender}</td>
                      <td>{new Date(emp.dob).toLocaleDateString()}</td>
                      <td>{emp.department}</td>
                      <td>{emp.designation}</td>
                      <td className="photo-cell">
                        <div className="photo-wrapper">
                          <img
                            src={PhotoIcon}
                            alt="View photo"
                            className="photo-icon"
                            onClick={() => {
                              if (emp.photo) {
                                window.open(
                                  `http://localhost:8082/${emp.photo}`,
                                  "_blank",
                                );
                              }
                            }}
                            style={{
                              cursor: emp.photo ? "pointer" : "default",
                            }}
                          />
                        </div>
                      </td>
                      <td>
                        <button className="action-btn">
                          <img
                            src={ActionIcon}
                            alt="Actions"
                            className="action-icon"
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <div className="pagination">
            <div className="total-records">
              Total Records &gt; {employees.length}
            </div>
            <div className="pager">
              <button>{"<"}</button>
              <span>Page 1</span>
              <button>{">"}</button>
            </div>
          </div>
        </div>
      </div>

      <CreateODModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSaved={(newEmp) => setEmployees((prev) => [newEmp, ...prev])}
      />
    </>
  );
};

export default EmployeeSetup;
