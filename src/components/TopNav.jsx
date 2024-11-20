import React from "react";
import { FaBars } from "react-icons/fa";
import "../styles/topnav.css";
import img from "../assets/pro.jpeg";
import Logout from "./Logout";

const TopNav = ({ toggleSidebar, username }) => {
  return (
    <div className="top-nav">
      <div className="company-name">FinMetrics</div>
      <div className="nav-name">
        <img src={img} alt="samuel" />
        {username}
        <Logout />
      </div>
      
      <button className="hamburger-btn" onClick={toggleSidebar}>
        <FaBars />
      </button>
    </div>
  );
};

export default TopNav;
