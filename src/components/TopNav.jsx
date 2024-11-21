// Header.js
import React from 'react';

const Header = ({ searchTerm, handleSearchChange, filter, handleFilterChange }) => {
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
        </div>
        <select onChange={handleFilterChange} value={filter} className="filter-select">
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="custom">Custom</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
