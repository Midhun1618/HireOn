import React from "react";
import { jwtDecode } from "jwt-decode";
import './sidebar.css';

const Sidebar = () => {
  const token = localStorage.getItem("token");

  let userName = "UserName";
  let userEmail = "user@gmail.com";
  let firstLetter = "U";
  let userType = "Freelancer";
  let role = "Role";
  let services = [];

  if (token) {
    try {
      const decoded = jwtDecode(token);
      userName = decoded.name || userName;
      userEmail = decoded.email || userEmail;
      firstLetter = userName.charAt(0).toUpperCase();
      userType = decoded.userType || userType;
      role = decoded.role || role;
      services = decoded.services || [];
    } catch (e) {
      console.error("Token error", e);
    }
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-dot" />
      <div className="sidebar-avatar">{firstLetter}</div>
      <div className="sidebar-user">
        <p className="username">{userName}</p>
        <p className="email">{userEmail}</p>
        <div className="btn-blue">{userType}</div>
        <div className="btn-orange">{role}</div>
        <div className="skills-box">
          {services.map((skill, idx) => (
            <span key={idx} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
      <div className="task-summary">
        <div className="task-row">
          <span>Task Completed</span>
          <span>03</span>
        </div>
        <div className="task-row">
          <span>Delivered on time</span>
          <span>02</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;