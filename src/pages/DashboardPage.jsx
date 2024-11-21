import React, { useState } from 'react';
import UserAcquisitionChart from '../components/Dashboard/UserAcquisitionChart';
import TransactionVolumeGraph from '../components/Dashboard/TransactionVolumeGraph'; // Importing the Transaction Volume component
import MerchantTracker from '../components/Dashboard/MerchantTracker'; // Import the Merchant Tracker component
import { FaSearch } from 'react-icons/fa'; // Importing the search icon
import "../styles/dashboard.css";

const DashboardPage = () => {
  const [filter, setFilter] = useState('daily');
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [activeChart, setActiveChart] = useState('userAcquisition'); // State to control which chart to show

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Update the search term
  };

  const handleChartSwitch = (chartType) => {
    setActiveChart(chartType); // Set active chart based on user selection
  };

  return (
    <div className="dashboard-container">
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
          <select onChange={handleFilterChange} value={filter} className="filter-select">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="custom">Custom</option>
          </select>
        </div>
        <div className="user-info">
          <div className="user-avatar">
            {/* Placeholder for user image */}
            <img src="https://via.placeholder.com/40" alt="User Avatar" className="avatar" />
          </div>
          <span className="username">Samuel Uwaeme</span>
        </div>
      </div>

      {/* Add buttons to switch between different charts */}
      <div className="chart-toggle">
        <button onClick={() => handleChartSwitch('userAcquisition')} className={activeChart === 'userAcquisition' ? 'active' : ''}>
          User Acquisition
        </button>
        <button onClick={() => handleChartSwitch('transactionVolume')} className={activeChart === 'transactionVolume' ? 'active' : ''}>
          Transaction Volume
        </button>
        <button onClick={() => handleChartSwitch('merchant')} className={activeChart === 'merchant' ? 'active' : ''}>
          Merchant Engagement
        </button>
      </div>

      {/* Conditionally render the active chart */}
      <div className="chart-container">
        {activeChart === 'userAcquisition' && <UserAcquisitionChart filter={filter} searchTerm={searchTerm} />}
        {activeChart === 'transactionVolume' && <TransactionVolumeGraph filter={filter} searchTerm={searchTerm} />}
        {activeChart === 'merchant' && <MerchantTracker filter={filter} searchTerm={searchTerm} />}
      </div>
    </div>
  );
};

export default DashboardPage;
