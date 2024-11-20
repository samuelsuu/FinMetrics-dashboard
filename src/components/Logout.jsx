import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';

const Logout = () => {

  // Function to handle logout click
  const handleLogout = () => {
    // Show a confirmation dialog before logging out
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    
    // If the user confirms, log them out
    if (confirmLogout) {
      alert("You have been logged out.");
      // Add your logout logic here (e.g., clearing session, redirecting, etc.)
      // Example: localStorage.removeItem('user');
      // Redirect to login page or any other action needed
    }
  };

  return (
    <div>
      {/* On click of the icon, trigger the handleLogout function */}
      <FaSignOutAlt className="logout-icon" title="Logout" onClick={handleLogout} />
    </div>
  );
}

export default Logout;
