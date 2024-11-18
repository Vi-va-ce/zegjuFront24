import React, { useState } from 'react';
import { ham, Zegeju, close1 } from '../../assets';
import MenuOverlay from './MenuOverlay';

function MapNavBar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <nav className='flex'>
        <div>
          <img className="w-[80px] h-[45px] ml-[20px] mt-[43px]" src={Zegeju} />
        </div>
        <div className='ml-[60px] mt-[45px]'>
          <p className='w-[48px] h-[18px] text-[18px] font-bold font-inter'>profile</p>
        </div>
        <div className='ml-[104px] mt-[49px]'>
          <img
            className={`w-[28px] h-[26px] mr-1.5 ${menuVisible ? 'filter-invert' : ''}`}
            src={menuVisible ? close1 : ham}
            onClick={toggleMenu}
          />
        </div>
      </nav>

      {menuVisible && <MenuOverlay />}
    </>
  );
}

export default MapNavBar;