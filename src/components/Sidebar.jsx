import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaUsers, FaChartLine, FaStore, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import Logout from './Logout';
import "../styles/sidebar.css";

const Sidebar = ({ isMobile, username }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <nav className={`sidebar ${collapsed ? 'collapsed' : 'expanded'}`}>
      {/* Sidebar Header */}
      <div className="sidebar-header" onClick={toggleSidebar}>
        {collapsed ? (
          <FaChevronRight className="toggle-icon" />
        ) : (
          <FaChevronLeft className="toggle-icon" />
        )}
      </div>

      {/* Sidebar Content */}
      <div className="sidebar-content">
        {isMobile && (
          <div className="mobile-user-info">
            <span className="username">{username}</span>
            <Logout />
          </div>
        )}
        <ul className="sidebar-links">
          <li>
            <NavLink to="/user-acquisitions" className="sidebar-link">
              <FaUsers className="icon" />
              <span className={`link-text ${collapsed ? 'hidden' : ''}`}>User Acquisitions</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/transaction-volume" className="sidebar-link">
              <FaChartLine className="icon" />
              <span className={`link-text ${collapsed ? 'hidden' : ''}`}>Transaction Volume</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/merchant-tracker" className="sidebar-link">
              <FaStore className="icon" />
              <span className={`link-text ${collapsed ? 'hidden' : ''}`}>Merchant Tracker</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
