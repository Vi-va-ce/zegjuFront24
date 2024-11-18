import React, { useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { setAccessToken } from './accessToken';

let access_token = null; // Define access_token variable outside the component

const FetchAccessToken = async () => {
  const refreshAccessToken = async () => {
    try {
      const refresh_token = Cookies.get('refresh_token');
      const response = await axios.post(
        'v4/student/refresh-token',
        {
          refresh_token,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      access_token = response.data.access_token;
      setAccessToken(access_token); // Set the access token in the accessToken module

      console.log('Access token updated successfully');
    } catch (error) {
      console.error('Error refreshing access token:', error);
    }
  };

  useEffect(() => {
    refreshAccessToken(); // Initial refresh on component mount

    const interval = setInterval(() => {
      refreshAccessToken(); // Refresh access token every 30 seconds
    }, 30000);

    return () => {
      clearInterval(interval); // Clean up interval on component unmount
    };
  }, []);

  return null; // Since this component is responsible for refreshing the access token, it doesn't render anything
};

export { access_token }; // Export the access_token variable
export default FetchAccessToken;