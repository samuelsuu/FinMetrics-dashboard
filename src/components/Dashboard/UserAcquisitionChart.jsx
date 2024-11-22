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
import { getFilteredData } from '../../utils/userData'; // Import the data utility function

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
    const fetchData = () => {
      const filteredData = getFilteredData(filter, searchTerm); // Get filtered data
      setUserData(filteredData);
    };

    fetchData();
  }, [filter, searchTerm]); // Re-fetch data when filter or search term changes

  // Prepare data for the chart
  const chartData = {
    labels: userData.map((item) => item.date), // Use date as the x-axis labels
    datasets: [
      {
        label: 'Users Acquired',
        data: userData.map((item) => item.count), // Data for the y-axis
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
