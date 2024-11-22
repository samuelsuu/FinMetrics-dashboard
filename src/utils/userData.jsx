const mockData = [
    { date: '2024-11-01', username: 'john_doe', count: 100 },
    { date: '2024-11-02', username: 'jane_doe', count: 150 },
    { date: '2024-11-03', username: 'samuel', count: 200 },
    { date: '2024-10-30', username: 'mary_jane', count: 120 },
    { date: '2024-10-28', username: 'alex_smith', count: 180 },
    { date: '2024-09-15', username: 'michael_lee', count: 210 },
  ];
  
  // Function to filter data based on timeframe
  export const getFilteredData = (filter, searchTerm = '') => {
    const now = new Date();
  
    // Filter by search term
    const filteredBySearchTerm = mockData.filter((item) =>
      item.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    // Apply timeframe filtering
    return filteredBySearchTerm.filter((item) => {
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
  