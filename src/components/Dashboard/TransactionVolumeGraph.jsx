import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { getFilteredTransactions } from '../../utils/transactionData';

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

const TransactionVolumeGraph = ({ filter }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch filtered transactions
    const filteredTransactions = getFilteredTransactions(filter);
    setTransactions(filteredTransactions);
  }, [filter]);

  // Prepare data for the chart
  const chartData = {
    labels: transactions.map((item) => item.date), // Use date as the x-axis labels
    datasets: [
      {
        label: 'Transaction Volume',
        data: transactions.map((item) => item.amount), // Data for the y-axis
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
