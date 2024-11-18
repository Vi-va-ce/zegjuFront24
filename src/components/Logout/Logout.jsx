import React from 'react';

function Logout() {
  const handleLogout = () => {
    // Logic to delete the refresh token from cookies
    document.cookie = 'refresh_token=; path=/;';
    // Perform any other logout-related tasks here

    // Redirect or perform any other action after logout if needed
    // window.location.href = '/login';
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default Logout;