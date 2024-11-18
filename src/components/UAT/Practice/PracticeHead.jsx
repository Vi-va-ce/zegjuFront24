import React from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { unilogo } from '../../../assets';

function PracticeHead() {

const handleRefreshClick = () => {
    window.location.reload();
  };
const navigate = useNavigate();

  const handleClick = () => {
    const confirmed = window.confirm('Are you sure you want to logout?');
    if (confirmed) {
      // Delete the refresh_token cookie
      Cookies.remove('refresh_token');
      navigate('/'); // Navigate to the root path "/"
    }
  };

  return (
    <nav className="md:pl-7 pl-4 w-full flex py-3.5 md:justify-between items-center navbar pt-[30px] md:pt-[50px]">
      <img src={unilogo} className="md:w-[124px] md:h-[25px] w-[74.53px] h-[28.24px]" alt="Uni Logo" />

      <div className='md:pl-[870px] ml-[138px] '>
      <p className='md:text-[18px] font-bold text-teal-700 md:text-lg md:font-bold font-bold text-[16px]  cursor-pointer' onClick={handleRefreshClick}> Courses</p>
     
    </div>
      <a
        onClick={handleClick}
        className="pr-16 md:text-[18px] text-teal-700  md:mr-[58px] ml-[50px] md:text-lg md:font-bold font-bold text-[16px] cursor-pointer"
      >
        Logout
      </a>
    </nav>
  );
}



export default PracticeHead