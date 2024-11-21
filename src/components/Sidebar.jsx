import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Importing NavLink
import { FaUsers, FaChartLine, FaStore, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import Logout from './Logout';
import "../styles/sidebar.css";

const Sidebar = ({ isMobile, username }) => {
  const [collapsed, setCollapsed] = useState(true); // Default to collapsed state

  const toggleSidebar = () => {
    setCollapsed(!collapsed); // Toggle collapse state
  };

  return (
    <nav className={`sidebar ${collapsed ? 'collapsed' : 'expanded'}`}>
      {/* Sidebar Header with Arrow */}
      <div className="sidebar-header" onClick={toggleSidebar}>
        {/* Arrow icon */}
        {collapsed ? (
          <FaChevronRight className="toggle-icon" />
        ) : (
          <FaChevronLeft className="toggle-icon" />
        )}
      </div>
      
      <div className="sidebar-content">
        {isMobile && (
          <div className="mobile-user-info">
            <span className="username">{username}</span>
            <Logout />
          </div>
        )}
        
        <ul className="sidebar-links">
          <li>
            <NavLink to="/user-acquisitions" activeClassName="active-link" className="sidebar-link">
              <FaUsers className="icon" />
              <span className={`link-text ${collapsed ? 'hidden' : ''}`}>User Acquisitions</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/transaction-volume" activeClassName="active-link" className="sidebar-link">
              <FaChartLine className="icon" />
              <span className={`link-text ${collapsed ? 'hidden' : ''}`}>Transaction Volume</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/merchant-tracker" activeClassName="active-link" className="sidebar-link">
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
