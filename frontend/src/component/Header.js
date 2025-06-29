import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Header = () => {
  const navigate = useNavigate();
  const [showPopover, setShowPopover] = useState(false);
  const popoverRef = useRef(null);

  const token = localStorage.getItem("token");

  let userName = "UserName";
  let firstLetter = "U";

  if (token) {
    try {
      const decoded = jwtDecode(token);
      userName = decoded.name || userName;
      firstLetter = userName.charAt(0).toUpperCase();
    } catch (e) {
      console.error("Token decode failed", e);
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
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showPopover]);

  return (
    <header className="dashboard-header">
      <div className="home-logo">
        <span className="orange-text">H</span>
        <span className="gray-text">ire</span>
        <span className="orange-text">On</span>
      </div>
      <div className="masked-header">
        <input type="text" placeholder="Search for Jobs" className="search-bar" />
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
        >
          {firstLetter}
        </div>
        {showPopover && (
          <div className="popover" ref={popoverRef}>
            <div className="popover-item" onClick={handleLogout}>
              Logout
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
