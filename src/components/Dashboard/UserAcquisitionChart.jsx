import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { fetchData } from '../../utils/dataUtils'; // Fetch function

const UserAcquisitionChart = ({ filter }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch and filter data based on the selected filter
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const acquisitions = await fetchData('userAcquisitions');
      setData(filterData(acquisitions, filter));
      setLoading(false);
    };
    loadData();
  }, [filter]); // Trigger effect when filter changes

  // Function to filter data based on the selected time period
  const filterData = (data, filterType) => {
    const now = new Date();
    switch (filterType) {
      case 'daily':
        return data.filter((entry) => {
          const entryDate = new Date(entry.date);
          return entryDate.toDateString() === now.toDateString();
        });
      case 'weekly':
        const startOfWeek = now.getDate() - now.getDay();
        const endOfWeek = startOfWeek + 6;
        return data.filter((entry) => {
          const entryDate = new Date(entry.date);
          return entryDate >= new Date(now.setDate(startOfWeek)) && entryDate <= new Date(now.setDate(endOfWeek));
        });
      case 'monthly':
        return data.filter((entry) => {
          const entryDate = new Date(entry.date);
          return entryDate.getMonth() === now.getMonth() && entryDate.getFullYear() === now.getFullYear();
        });
      case 'custom':
        { const startDate = new Date('2024-11-01');
        const endDate = new Date('2024-11-06');
        return data.filter((entry) => {
          const entryDate = new Date(entry.date);
          return entryDate >= startDate && entryDate <= endDate;
        }); }
      default:
        return data;
    }
  };

  if (loading) return <div>Loading Chart...</div>;

  return (
    <div className="chart-container">
      <h2>User Acquisitions</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid stroke="#ddd" strokeDasharray="5 5" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserAcquisitionChart;
