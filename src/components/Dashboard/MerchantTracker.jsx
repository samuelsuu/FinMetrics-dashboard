import React, { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2'; // Importing both Line and Bar charts from react-chartjs-2
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement, // Import BarElement for the Bar chart
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
  BarElement, // Register BarElement for the Bar chart
  Title,
  Tooltip,
  Legend
);

const MerchantTracker = ({ filter }) => {
  const [merchantData, setMerchantData] = useState([]);
  const [engagementData, setEngagementData] = useState([]);

  useEffect(() => {
    // Simulate data fetching and filtering
    const fetchData = async () => {
      const mockData = [
        { date: '2024-11-01', name: 'Merchant A', engagement: 80 },
        { date: '2024-11-02', name: 'Merchant B', engagement: 60 },
        { date: '2024-11-03', name: 'Merchant C', engagement: 90 },
        { date: '2024-10-30', name: 'Merchant D', engagement: 70 },
        { date: '2024-10-28', name: 'Merchant E', engagement: 85 },
        { date: '2024-09-15', name: 'Merchant F', engagement: 75 },
      ];

      // Apply filter based on the selected timeframe (Daily, Weekly, Monthly)
      const now = new Date();
      const filteredData = mockData.filter(item => {
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

      setMerchantData(filteredData);

      // Prepare engagement data for the line chart (over time)
      const engagementOverTime = filteredData.map(item => ({
        date: item.date,
        engagement: item.engagement,
      }));

      setEngagementData(engagementOverTime);
    };

    fetchData();
  }, [filter]); // Re-fetch data when filter changes

  // Prepare data for the line chart (engagement over time)
  const lineChartData = {
    labels: engagementData.map(item => item.date), // Use date as the x-axis labels
    datasets: [
      {
        label: 'Engagement Over Time (Line)',
        data: engagementData.map(item => item.engagement), // Data for the y-axis
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true, // Fill the area under the line
        type: 'line', // Line chart type
      },
    ],
  };

  // Prepare data for the bar chart (merchant engagement comparison)
  const barChartData = {
    labels: merchantData.map(item => item.name), // Use merchant name as the x-axis labels
    datasets: [
      {
        label: 'Merchant Engagement (Bar)',
        data: merchantData.map(item => item.engagement), // Data for the y-axis
        backgroundColor: 'rgba(153, 102, 255, 0.6)', // Bar chart color
        borderColor: 'rgba(153, 102, 255, 1)', // Bar chart border color
        borderWidth: 1,
        type: 'bar', // Bar chart type
      },
    ],
  };

  // Chart options to make it more readable
  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Merchant Engagement',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `Engagement: ${tooltipItem.raw}%`; // Tooltip format
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date / Merchant',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Engagement (%)',
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <h3>Merchant Engagement Tracker</h3>
      {merchantData.length > 0 ? (
        <>
          {/* Line Chart for Engagement Over Time */}
          <div>
          <h4>Engagement Comparison Across Merchants</h4>
          <Bar data={barChartData} options={chartOptions} />
          </div>
          <hr /> {/* Divider */}
          {/* Bar Chart for Engagement Comparison */}
          <div>
          <h4>Engagement Over Time</h4>
          <Line data={lineChartData} options={chartOptions} />
          </div>
        </>
      ) : (
        <p>No data available for the selected time period.</p>
      )}
    </div>
  );
};

export default MerchantTracker;
