import React from 'react';

const DateFilter = ({ onDateChange }) => {
  const handleDateChange = (event) => {
    onDateChange(event.target.value);
  };

  return (
    <select onChange={handleDateChange}>
      <option value="daily">Daily</option>
      <option value="weekly">Weekly</option>
      <option value="monthly">Monthly</option>
      <option value="custom">Custom</option>
    </select>
  );
};

export default DateFilter;
