import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { jwtDecode } from "jwt-decode";

const Dashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [showPopover, setShowPopover] = useState(false);
  const popoverRef = useRef(null);

  let userName = "UserName";
  let userEmail = "username@gmail.com";
  let firstLetter = null;
  let userType = "Freelancer";
  let role = "Role";
  let services = [];

  if (token) {
    try {
      const decoded = jwtDecode(token);
      console.log("Decoded token:", decoded);
      userName = decoded.name || userName;
      userEmail = decoded.email || userEmail;
      firstLetter = userName.charAt(0).toUpperCase();
      userType = decoded.userType || userType;
      role = decoded.role || role;
      services = decoded.services || [];
    } catch (e) {
      console.error("Failed to decode token", e);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    setShowPopover(false);
    navigate("/");
  };

  const handleAvatarClick = () => {
    setShowPopover((prev) => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setShowPopover(false);
      }
    }
    if (showPopover) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopover]);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="home-logo">
          <span className="orange-text">H</span>
          <span className="gray-texst">ire</span>
          <span className="orange-text">On</span>
        </div>
        <div className="masked-header">
          <input
            type="text"
            placeholder="Search for Jobs"
            className="search-bar"
          />
          <div className="header-icons">
            <div className="icon-circle" />
            <div className="icon-circle" />
            <div className="icon-circle" />
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <div
            className="icon-avatar"
            onClick={handleAvatarClick}
            style={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: "20px",
              backgroundColor: "#ff6600",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              userSelect: "none",
            }}
          >
            {firstLetter || "U"}
          </div>
          {showPopover && (
            <div
              className="popover"
              ref={popoverRef}
              style={{
                position: "absolute",
                top: "50px",
                right: 0,
                background: "white",
                border: "1px solid #ddd",
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                borderRadius: "4px",
                zIndex: 1000,
                width: "100px",
              }}
            >
              <div
                className="popover-item"
                onClick={handleLogout}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  textAlign: "center",
                  color: "#333",
                  fontWeight: "500",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#ff6600") &&
                  (e.currentTarget.style.color = "white")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "white") &&
                  (e.currentTarget.style.color = "#333")
                }
              >
                Logout
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="dashboard-main">
        <aside className="sidebar">
          <div className="sidebar-dot" />
          <div
            className="sidebar-avatar"
            style={{
              backgroundColor: "#ff6600",
              color: "white",
              fontWeight: "bold",
              fontSize: "24px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              userSelect: "none",
            }}
          >
            {firstLetter || "U"}
          </div>
          <div className="sidebar-user">
            <p className="username">{userName}</p>
            <p className="email">{userEmail}</p>
            <div className="btn-blue">{userType}</div>
            <div className="btn-orange">{role}</div>
            <div className="skills-box">
              {services.length > 0 &&
                services.map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    {skill}
                  </span>
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

        <section className="main-content">
          <div className="content-box">
            <p className="content-title">Active Tasks</p>
          </div>
          <div className="content-box"></div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
