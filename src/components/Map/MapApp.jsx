import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MapNavBar from './MapNavBar';
import MenuOverlay from './MenuOverlay';
import Footer2 from '../../components/Homepage/Footer2';
import Maps from './Maps';
import Loader from '../../Loader';

function MapApp() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('v5/student/getMapData');
        setData(response.data);
        setLoading(false); // Stop loading once data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Stop loading if there's an error
      }
    };

    fetchData();
  }, []);

  const hover = 'hover'; 

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">
    <div><Loader/></div>
  </div> // Display the loader while loading
  }

  return (
    <div>
      <div className="flex">
        <div className='hidden md:block'>
          <MenuOverlay hover={hover} /> 
        </div>
      
        <div className='ml-[23px] md:ml-[400px]'>
          <div className='md:hidden'>
            <MapNavBar />
          </div>
          <div className='ml-[-10px]'>
            <Maps data={data} /> {/* Pass the fetched data to Maps */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapApp;
