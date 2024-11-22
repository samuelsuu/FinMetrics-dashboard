import React from 'react';
import { FaSearch } from 'react-icons/fa';
import profile from "../assets/pro.jpeg";

const TopNav = ({ searchTerm, handleSearchChange, filter, handleFilterChange }) => {
  return (
    <div className="header">
      <h1 className="dashboard-title">FinMetrics Dashboard</h1>
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
      {/* Profile picture section */}
      <div className="profile-section">
        <img
          src={profile}
          alt="User Profile"
          className="profile-pic"
          height={40}
          style={{borderRadius: "50%"}}
        />
      </div>
    </div>
  );
};

export default TopNav;
