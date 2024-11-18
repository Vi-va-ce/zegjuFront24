import React from 'react';
import {home,Practice,Switcha,profile,E,Zegeju,Dashboard } from "../../assets"





import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function MenuOverlay({ hover }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmed = window.confirm('Are you sure you want to logout?');
    if (confirmed) {
      // Delete the refresh_token cookie
      Cookies.remove('refresh_token');
      navigate('/'); // Navigate to the root path "/"
    }
  };

  const homeButtonClasses = hover === 'hover' ? 'bg-green-300 w-40px h-10px' : '';
  const profileButtonClasses = hover === 'hover2' ? 'bg-green-300' : '';

  return (
    <div className="menu-overlay fixed w-full md:w-[10px] h-full z-50 flex ml-[179px] md:ml-0">
      <div className="menu absolute w-[204px] h-[582px] md:h-[200px] bg-white rounded-tl-none rounded-tr-none rounded-bl-full">
        <img className="w-[110px] h-[55px] ml-[55px] mt-[43px] hidden md:block" src={Zegeju} alt="Logo" />
        <ul className="ml-[60px]">
          <li className="mt-[55px] md:mt-[40px]">
            <Link to='/Map'>
              <button className={`flex items-center w-[170px] h-[30px] hover:bg-green-100 rounded-lg ${homeButtonClasses}`}>
                <img className="w-[19px] h-[19px] mr-1.5" src={home} alt="Home Icon" />
                <p className="font-bold text-[16px]">Home</p>
              </button>
            </Link>
          </li>

          <li className="mt-[35px]">
            <Link to="/Account">
              <button className={`flex items-center w-[170px] h-[30px] hover:bg-green-100 rounded-lg ${profileButtonClasses}`}>
                <img className="w-[19px] h-[19px] mr-1.5" src={profile} alt="Profile Icon" />
                <p className="font-bold text-[16px]">Profile</p>
              </button>
            </Link>
          </li>

          <li className="mt-[35px]">
            <button className="flex items-center w-[170px] h-[30px] hover:bg-green-100 rounded-lg">
              <img className="w-[19px] h-[19px] mr-1.5" src={Practice} alt="Practice Icon" />
              <p className="font-bold text-[16px]">Practice</p>
            </button>
          </li>

          <li className="mt-[35px]">
            <Link to='/ResultBoard'>
              <button className="flex items-center w-[170px] h-[30px] hover:bg-green-100 rounded-lg">
                <img className="w-[19px] h-[19px] mr-1.5" src={E} alt="Result Icon" />
                <p className="font-bold text-[16px]">Result</p>
              </button>
            </Link>
          </li>
          <li className="mt-[35px]">
            <Link to='/Dashboard'>
              <button className="flex items-center w-[170px] h-[30px] hover:bg-green-100 rounded-lg">
                <img className="w-[19px] h-[19px] mr-1.5" src={Dashboard} alt="Dashboard Icon" />
                <p className="font-bold text-[16px]">Dashboard</p>
              </button>
            </Link>
          </li>
          <li className="mt-[30px]">
            <button className="flex items-center w-[170px] h-[30px] hover:bg-green-100 rounded-lg" onClick={handleLogout}>
              <img className="w-[19px] h-[19px] mr-1.5" src={Switcha} alt="Logout Icon" />
              <p className="font-bold text-[16px]">Logout</p>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuOverlay;