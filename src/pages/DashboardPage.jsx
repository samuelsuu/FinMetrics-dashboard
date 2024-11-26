import React, { useState } from 'react';
import UserAcquisitionChart from '../components/Dashboard/UserAcquisitionChart';
import TransactionVolumeGraph from '../components/Dashboard/TransactionVolumeGraph';
import MerchantTracker from '../components/Dashboard/MerchantTracker';
import '../styles/dashboard.css';

const DashboardPage = ({ filter, searchTerm }) => {
  const [activeChart, setActiveChart] = useState('userAcquisition'); 

  const handleChartSwitch = (chartType) => {
    setActiveChart(chartType);
  };

  return (
    <div className="dashboard-container">
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

      <div className="chart-container">
  {activeChart === 'userAcquisition' && (
    <React.Suspense fallback={<div>Loading User Acquisition Chart...</div>}>
      <UserAcquisitionChart filter={filter} searchTerm={searchTerm} />
    </React.Suspense>
  )}
  {activeChart === 'transactionVolume' && (
    <React.Suspense fallback={<div>Loading Transaction Volume Graph...</div>}>
      <TransactionVolumeGraph filter={filter} searchTerm={searchTerm} />
    </React.Suspense>
  )}
  {activeChart === 'merchant' && (
    <React.Suspense fallback={<div>Loading Merchant Tracker...</div>}>
      <MerchantTracker filter={filter} searchTerm={searchTerm} />
    </React.Suspense>
  )}
</div>

    </div>
  );
};

export default DashboardPage;
