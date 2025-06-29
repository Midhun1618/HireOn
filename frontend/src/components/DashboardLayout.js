import React from "react";
import DashboardHeader from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import './DashboardLayout.css';



const DashboardLayout = () => {
  return (
    <div className="dashboard-container">
      <DashboardHeader />
      <main className="dashboard-main">
        <Sidebar />
        <section className="main-content">
          <Outlet /> 
        </section>
      </main>
    </div>
  );
};

export default DashboardLayout;
