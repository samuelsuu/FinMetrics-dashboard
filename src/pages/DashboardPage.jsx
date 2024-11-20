import React, { useState } from 'react';
import UserAcquisitionChart from '../components/Dashboard/UserAcquisitionChart';

const DashboardPage = () => {
  const [filter, setFilter] = useState('daily');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="dashboard-container">
      <h1>FinMetrics Dashboard</h1>

      <div className="filters">
        <select onChange={handleFilterChange} value={filter}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="custom">Custom</option>
        </select>
      </div>

      {/* Pass the filter prop to the UserAcquisitionChart */}
      <UserAcquisitionChart filter={filter} />
    </div>
  );
};

export default DashboardPage;
