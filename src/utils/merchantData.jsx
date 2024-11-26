// Mock merchant data
const merchantData = [
    { date: '2024-11-01', name: 'Merchant A', engagement: 80 },
    { date: '2024-11-02', name: 'Merchant B', engagement: 60 },
    { date: '2024-11-03', name: 'Merchant C', engagement: 90 },
    { date: '2024-10-30', name: 'Merchant D', engagement: 70 },
    { date: '2024-10-28', name: 'Merchant E', engagement: 85 },
    { date: '2024-09-15', name: 'Merchant F', engagement: 75 },
  ];
  
  // Function to filter merchants based on the selected filter
  export const getFilteredMerchants = (filter) => {
    const now = new Date();
  
    return merchantData.filter((item) => {
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
        case 'custom':
          // Custom filter logic (if needed)
          return true;
        default:
          return true;
      }
    });
  };
  
  // Function to prepare engagement data over time
  export const getEngagementOverTime = (filteredMerchants) => {
    return filteredMerchants.map((item) => ({
      date: item.date,
      engagement: item.engagement,
    }));
  };
  