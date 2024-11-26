import React, { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { getFilteredMerchants, getEngagementOverTime } from '../../utils/merchantData';

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MerchantTracker = ({ filter }) => {
  const [merchantData, setMerchantData] = useState([]);
  const [engagementData, setEngagementData] = useState([]);

  useEffect(() => {
    const filteredMerchants = getFilteredMerchants(filter);
    setMerchantData(filteredMerchants);

    // Prepare engagement data for the line chart
    const engagement = getEngagementOverTime(filteredMerchants);
    setEngagementData(engagement);
  }, [filter]);

  // Prepare data for the line chart (engagement over time)
  const lineChartData = {
    labels: engagementData.map((item) => item.date),
    datasets: [
      {
        label: 'Engagement Over Time (Line)',
        data: engagementData.map((item) => item.engagement),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        type: 'line',
      },
    ],
  };

  // Prepare data for the bar chart (merchant engagement comparison)
  const barChartData = {
    labels: merchantData.map((item) => item.name),
    datasets: [
      {
        label: 'Merchant Engagement (Bar)',
        data: merchantData.map((item) => item.engagement),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
        type: 'bar',
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Merchant Engagement',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `Engagement: ${tooltipItem.raw}%`,
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
