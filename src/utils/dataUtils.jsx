export const fetchData = async (dataType) => {
    // Simulate a data fetch; replace this with actual API calls
    const mockData = {
      userAcquisitions: [
        { date: '2024-11-01', count: 100 },
        { date: '2024-11-02', count: 120 },
        { date: '2024-11-04', count: 200 },
        { date: '2024-11-06', count: 100 },
      ],
      transactionVolume: [
        { date: '2024-11-01', volume: 5000 },
        { date: '2024-11-02', volume: 7000 },
        { date: '2024-11-04', volume: 2000 },
        { date: '2024-11-06', volume: 6000 },
      ],
      merchantData: [
        { name: 'Merchant 1', engagement: 75 },
        { name: 'Merchant 2', engagement: 60 },
        { name: 'Merchant 3', engagement: 80 },
        { name: 'Merchant 4', engagement: 20 },
      ],
    };
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData[dataType]);
      }, 1000); // Simulating network delay
    });
  };
  