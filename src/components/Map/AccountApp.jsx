import React from 'react';
import MapNavBar from './MapNavBar';
import MenuOverlay from './MenuOverlay';
import Footer2 from '../../components/Homepage/Footer2';
import Maps from './Maps';
import Account from './Account';

function AccountApp() {
  const hover = 'hover2'; 
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
          <Account/>

        </div>
      </div>
      
    </div>
  
    </div>
  );
}

export default AccountApp