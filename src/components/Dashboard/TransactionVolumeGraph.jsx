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

const TransactionVolumeGraph = ({ filter, searchTerm }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Simulate data fetching and filtering
    const fetchData = async () => {
      const mockData = [
        { date: '2024-11-01', amount: 5000 },
        { date: '2024-11-02', amount: 3000 },
        { date: '2024-11-03', amount: 6000 },
        { date: '2024-10-30', amount: 8000 },
        { date: '2024-10-28', amount: 6500 },
        { date: '2024-09-15', amount: 2000 },
      ];

      // Apply filter logic as shown before
      const now = new Date();
      const filteredData = mockData.filter(item => {
        const itemDate = new Date(item.date);
        const diffTime = now - itemDate;
        const diffDays = diffTime / (1000 * 3600 * 24);

        switch (filter) {
          case 'daily':
            return diffDays <= 1;
          case 'weekly':
            return diffDays <= 7;
          case 'monthly':
            return diffDays <= 30;
          default:
            return true;
        }
      });

      setTransactions(filteredData);
    };

    fetchData();
  }, [filter, searchTerm]);

  // Prepare data for the chart
  const chartData = {
    labels: transactions.map(item => item.date), // Use date as the x-axis labels
    datasets: [
      {
        label: 'Transaction Volume',
        data: transactions.map(item => item.amount), // Data for the y-axis
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
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
        text: 'Transaction Volume Over Time',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `Amount: $${tooltipItem.raw}`; // Tooltip format
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
          text: 'Transaction Volume ($)',
        },
        ticks: {
          callback: function (value) {
            return `$${value}`; // Format the y-axis ticks to show the dollar sign
          },
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <h3>Transaction Volume</h3>
      {transactions.length > 0 ? (
        <Line data={chartData} options={chartOptions} />
      ) : (
        <p>No transactions for the selected time period.</p>
      )}
    </div>
  );
};

export default TransactionVolumeGraph;
