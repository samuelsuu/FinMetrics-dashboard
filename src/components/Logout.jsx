import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';

const Logout = () => {

  const handleLogout = () => {
  
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    
    
    if (confirmLogout) {
      alert("You have been logged out.");
      
    }
  };

  return (
    <div>
      <FaSignOutAlt className="logout-icon" title="Logout" onClick={handleLogout} />
    </div>
  );
}

export default Logout;
