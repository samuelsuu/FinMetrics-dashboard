import React from 'react';
import { FaSearch } from 'react-icons/fa';
import profile from "../assets/pro.jpeg";
import "../styles/topnav.css";
import { NavLink } from 'react-router-dom';

const TopNav = ({ searchTerm, handleSearchChange, filter, handleFilterChange }) => {
  return (
    <div className="header">
      <h1 className="dashboard-title"><NavLink 
  to="/" 
  className={({ isActive }) => 
    isActive ? "nav-link active" : "nav-link"
  }
>
  FinMetrics Dashboard
</NavLink>
</h1>
      <div className="search-and-filter">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by username..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
          <FaSearch className="search-icon" />
        </div>
        <select 
          onChange={handleFilterChange} 
          value={filter} 
          className="filter-select"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="custom">Custom</option>
        </select>
      </div>
      <div className="profile-section">
        <img src={profile} alt="User Profile" className="profile-pic" />
      </div>
    </div>
  );
};

export default TopNav;
