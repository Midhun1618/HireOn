import React from "react";
import "./JobDetail.css";
import img_banner from './components/detailsBanner.png'

const JobDetail = () => {
  return (
    <div className="jobdetails-body">
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
        <div className="icon-avatar" />
      </header>
      <div className="jobdetails-container">
        <div className="jobdetails">
          <img className="jobdetails-banner" src={img_banner} aria-label="Green banner"/>

          <h2 className="job-title">Web Designing</h2>
          <p className="short-description">This is a short description about the task</p>

          <div className="tags">
            <span className="tag">UI Designing</span>
            <span className="tag">React Native</span>
          </div>

          <p className="detailed-description">
            This is a well detailed description about the task the like, how it should be done,
            what all things are important and what all things shouldn’t be done. This is a well
            detailed description about the task the like, how it should be done, what all things are
            important and what all things shouldn’t be done. This is a well detailed description
            about the task the like, how it should be done, what all things are important and what
            all things shouldn’t be done.
          </p>

          <p className="attachments-label">Attachments</p>
          <div className="attachments">
            <button className="attachment-btn">2 Image (5.6 mb)</button>
            <button className="attachment-btn">3 Videos (150 mb)</button>
          </div>
        </div>
        <div className="taskdetails">
          <div>
            <h3 className="task-detail-title">Task Detail</h3>
            <div className="job-info-row">
              <span>Payment</span>
              <span>$89</span>
            </div>
            <div className="job-info-row">
              <span>Deadline</span>
              <span>23 May</span>
            </div>
            <div className="job-info-row">
              <span>Posted on</span>
              <span>15 May</span>
            </div>
            <div className="job-info-row">
              <span>Applied</span>
              <span>3</span>
            </div>
          </div>
          <button className="apply-btn">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
