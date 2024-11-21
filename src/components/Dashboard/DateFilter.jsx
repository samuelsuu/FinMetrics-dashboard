import React, { useState } from 'react';

const DateFilter = ({ onDateChange }) => {
  const [isCustomRange, setIsCustomRange] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleDateChange = (event) => {
    const selectedFilter = event.target.value;
    if (selectedFilter === 'custom') {
      setIsCustomRange(true);
    } else {
      setIsCustomRange(false);
    }
    onDateChange(selectedFilter, startDate, endDate); // Pass filter and custom date range if selected
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
    onDateChange('custom', event.target.value, endDate);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
    onDateChange('custom', startDate, event.target.value);
  };

  return (
    <div className="date-filter-container">
      <select onChange={handleDateChange}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="custom">Custom</option>
      </select>

      {isCustomRange && (
        <div className="custom-date-range">
          <label>Start Date:</label>
          <input type="date" value={startDate} onChange={handleStartDateChange} />
          <label>End Date:</label>
          <input type="date" value={endDate} onChange={handleEndDateChange} />
        </div>
      )}
    </div>
  );
};

export default DateFilter;
