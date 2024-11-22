import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DashboardPage from './pages/DashboardPage';
import TopNav from './components/TopNav';
import './App.css';

const UserAcquisitionChart = React.lazy(() => import('./components/Dashboard/UserAcquisitionChart'));
const TransactionVolumeGraph = React.lazy(() => import('./components/Dashboard/TransactionVolumeGraph'));
const MerchantTracker = React.lazy(() => import('./components/Dashboard/MerchantTracker'));

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [filter, setFilter] = useState('daily');
  const [searchTerm, setSearchTerm] = useState('');

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
        <div className="main-layout">
          <Sidebar isOpen={isSidebarOpen} isMobile={isMobile} username="Samuel Uwaeme" />

          <div className="content">
            {/* Use TopNav component */}
            <TopNav
              searchTerm={searchTerm}
              handleSearchChange={(e) => setSearchTerm(e.target.value)}
              filter={filter}
              handleFilterChange={(e) => setFilter(e.target.value)}
            />

            <React.Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route
                  path="/"
                  element={<DashboardPage filter={filter} searchTerm={searchTerm} />}
                />
                <Route
                  path="/user-acquisitions"
                  element={<UserAcquisitionChart filter={filter} searchTerm={searchTerm} />}
                />
                <Route
                  path="/transaction-volume"
                  element={<TransactionVolumeGraph filter={filter} searchTerm={searchTerm} />}
                />
                <Route
                  path="/merchant-tracker"
                  element={<MerchantTracker filter={filter} searchTerm={searchTerm} />}
                />
              </Routes>
            </React.Suspense>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
