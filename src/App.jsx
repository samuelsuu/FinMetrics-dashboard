import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import './App.css';

const UserAcquisitionChart = React.lazy(() => import('./components/Dashboard/UserAcquisitionChart'));
const TransactionVolumeGraph = React.lazy(() => import('./components/Dashboard/TransactionVolumeGraph'));
const MerchantTracker = React.lazy(() => import('./components/Dashboard/MerchantTracker'));

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const updateMobileView = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    updateMobileView();
    window.addEventListener('resize', updateMobileView);
    return () => window.removeEventListener('resize', updateMobileView);
  }, []);

  return (
    <Router>
      <div className="app-container">
        <TopNav toggleSidebar={toggleSidebar} isMobile={isMobile} username="Samuel Uwaeme" />
        <div className="main-layout">
          <Sidebar isOpen={isSidebarOpen} isMobile={isMobile} username="Samuel Uwaeme" />
          <div className="content">
            <React.Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/user-acquisitions" element={<UserAcquisitionChart />} />
                <Route path="/transaction-volume" element={<TransactionVolumeGraph />} />
                <Route path="/merchant-tracker" element={<MerchantTracker />} />
              </Routes>
            </React.Suspense>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
