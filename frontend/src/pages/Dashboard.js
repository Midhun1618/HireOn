import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="home-logo">
          <span className="orange-text">H</span>
          <span className="gray-texst">ire</span>
          <span className="orange-text">On</span>
        </div>
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
        <div className="icon-avatar" />
      </header>

      <main className="dashboard-main">
        <aside className="sidebar">
          <div className="sidebar-dot" />
          <div className="sidebar-avatar" />
          <div className="sidebar-user">
            <p className="username">UserName</p>
            <p className="email">username@gmail.com</p>
            <button className="btn-blue">Freelancer</button>
            <br />
            <button className="btn-orange">Web Designer</button>
          </div>

          <div className="skills-box">
            <div className="skills-row">
              <span className="skill-tag">Web Designer</span>
              <span className="skill-tag">Web Designer</span>
            </div>
            <div className="skills-row">
              <span className="skill-tag">Web Designer</span>
              <span className="skill-tag">Web Designer</span>
            </div>
            <div>
              <span className="skill-tag">Web Designer</span>
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