const transactionData = [
    { date: '2024-11-01', amount: 5000 },
    { date: '2024-11-02', amount: 3000 },
    { date: '2024-11-03', amount: 6000 },
    { date: '2024-10-30', amount: 8000 },
    { date: '2024-10-28', amount: 6500 },
    { date: '2024-09-15', amount: 2000 },
  ];
  
  // Function to filter transactions based on the selected filter
  export const getFilteredTransactions = (filter) => {
    const now = new Date();
  
    return transactionData.filter((item) => {
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
        default:
          return true;
      }
    });
  };
  