import React, { useEffect, useState } from 'react';

const LogoutNotification = () => {
  const [logoutMessage, setLogoutMessage] = useState(null);
  const currentUserAgent = navigator.userAgent;

  useEffect(() => {
    const eventSource = new EventSource('https://zegeju-1453f.uc.r.appspot.com/api/v12/student/logout-notification');

    eventSource.addEventListener('logout', (event) => {
      const receivedUserAgent = event.lastEventId;
      console.log('Received User Agent:', receivedUserAgent);
      console.log('Current User Agent:', currentUserAgent);

      if (currentUserAgent !== receivedUserAgent) {
        setLogoutMessage(event.data);
        console.log('Logout event received:', event.data); // Debugging line
        alert(event.data || 'You have been logged out due to a new login on another device.');
        window.location.href = '/SignIn';
      }
    });

    eventSource.onerror = (err) => {
      console.error('EventSource failed:', err);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, [currentUserAgent]);

  return (
    <div>
      {logoutMessage && (
        <div className="logout-notification">
          <p>{logoutMessage}</p>
        </div>
      )}
    </div>
  );
};

export default LogoutNotification;