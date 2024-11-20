import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUsers, FaChartLine, FaStore} from 'react-icons/fa';
import Logout from './Logout';
import '../styles/sidebar.css';

const Sidebar = ({ isOpen, isMobile, username }) => {
  return (
    <nav className={`sidebar ${isOpen ? 'mobile-open' : ''}`}>
      <div className="sidebar-content">
        {isMobile && (
          <div className="mobile-user-info">
            <span className="username">{username}</span>
            <Logout />
          </div>
        )}
        <ul className="sidebar-links">
          <li>
            <NavLink to="/user-acquisitions" activeClassName="active-link">
              <FaUsers className="icon" /> User Acquisitions
            </NavLink>
          </li>
          <li>
            <NavLink to="/transaction-volume" activeClassName="active-link">
              <FaChartLine className="icon" /> Transaction Volume
            </NavLink>
          </li>
          <li>
            <NavLink to="/merchant-tracker" activeClassName="active-link">
              <FaStore className="icon" /> Merchant Tracker
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
