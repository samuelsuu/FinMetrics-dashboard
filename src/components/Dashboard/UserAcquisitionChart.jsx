import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2'; // Importing Line chart from react-chartjs-2
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const UserAcquisitionChart = ({ filter, searchTerm }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Simulate data fetching and filtering
    const fetchData = async () => {
      const mockData = [
        { date: '2024-11-01', username: 'john_doe', count: 100 },
        { date: '2024-11-02', username: 'jane_doe', count: 150 },
        { date: '2024-11-03', username: 'samuel', count: 200 },
        { date: '2024-10-30', username: 'mary_jane', count: 120 },
        { date: '2024-10-28', username: 'alex_smith', count: 180 },
        { date: '2024-09-15', username: 'michael_lee', count: 210 },
      ];

      // Filter by search term
      const filteredData = mockData.filter(item =>
        item.username.toLowerCase().includes(searchTerm.toLowerCase())
      );

      // Apply filter based on the selected timeframe (Daily, Weekly, Monthly)
      const now = new Date();
      const filteredByTimeframe = filteredData.filter(item => {
        const itemDate = new Date(item.date);
        const diffTime = now - itemDate;
        const diffDays = diffTime / (1000 * 3600 * 24); // Convert time difference to days

        switch (filter) {
          case 'daily':
            return diffDays <= 1;
          case 'weekly':
            return diffDays <= 7;
          case 'monthly':
            return diffDays <= 30;
          case 'custom':
            // Custom filter logic (if needed)
            return true;
          default:
            return true;
        }
      });

      setUserData(filteredByTimeframe);
    };

    fetchData();
  }, [filter, searchTerm]); // Re-fetch data when filter or search term changes

  // Prepare data for the chart
  const chartData = {
    labels: userData.map(item => item.date), // Use date as the x-axis labels
    datasets: [
      {
        label: 'Users Acquired',
        data: userData.map(item => item.count), // Data for the y-axis
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true, // Fill the area under the line
      },
    ],
  };

  // Chart options to make it more readable
  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'User Acquisition Over Time',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `Users: ${tooltipItem.raw}`; // Tooltip format
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date', 
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Users',
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <h3>User Acquisition</h3>
      {userData.length > 0 ? (
        <Line data={chartData} options={chartOptions} />
      ) : (
        <p>No data available for the selected time period.</p>
      )}
    </div>
  );
};

export default UserAcquisitionChart;
