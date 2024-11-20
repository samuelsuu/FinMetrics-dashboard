import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { fetchData } from '../../utils/dataUtils';

const MerchantTracker = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData('merchantData').then((response) => {
      setData(response);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading Merchant Data...</div>;

  return (
    <div className="tracker-container">
      <h2>Merchant Tracker</h2>
      <div className="merchant-list">
        {data.map((merchant, index) => (
          <div key={index} className="merchant-item">
            <h3>{merchant.name}</h3>
            <div className="engagement-bar">
              <div
                className="progress"
                style={{
                  width: `${merchant.engagement}%`,
                  backgroundColor: merchant.engagement > 70 ? 'green' : 'orange',
                }}
              >
                {merchant.engagement}%
              </div>
            </div>
          </div>
        ))}
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="engagement" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MerchantTracker;
