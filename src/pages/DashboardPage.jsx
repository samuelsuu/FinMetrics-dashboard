import React, { useState } from 'react';
import UserAcquisitionChart from '../components/Dashboard/UserAcquisitionChart';
import TransactionVolumeGraph from '../components/Dashboard/TransactionVolumeGraph';
import MerchantTracker from '../components/Dashboard/MerchantTracker';
import '../styles/dashboard.css';

const DashboardPage = ({ filter, searchTerm }) => {
  const [activeChart, setActiveChart] = useState('userAcquisition'); // State to control which chart to show

  const handleChartSwitch = (chartType) => {
    setActiveChart(chartType); // Set active chart based on user selection
  };

  return (
    <div className="dashboard-container">
      {/* Add buttons to switch between different charts */}
      <div className="chart-toggle">
        <button
          onClick={() => handleChartSwitch('userAcquisition')}
          className={activeChart === 'userAcquisition' ? 'active' : ''}
        >
          User Acquisition
        </button>
        <button
          onClick={() => handleChartSwitch('transactionVolume')}
          className={activeChart === 'transactionVolume' ? 'active' : ''}
        >
          Transaction Volume
        </button>
        <button
          onClick={() => handleChartSwitch('merchant')}
          className={activeChart === 'merchant' ? 'active' : ''}
        >
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
