import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Logout from '../Logout/Logout';
import closeImage from './close.svg';
import logoImage from './logo.svg';
import menuImage from '../../assets/menu.svg';

const HomeNavbar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState();
  const [toggle, setToggle] = useState(false);

  const handleLinkClick = (title) => {
    if (title === 'Logout') {
      const confirmed = window.confirm('Are you sure you want to logout?');
      if (confirmed) {
        // Delete the refresh_token cookie
        Cookies.remove('refresh_token');
        navigate('/'); // Navigate to the root path "/"
      }
    } else if (title === 'about') {
      navigate('/About'); // Navigate to "/About"
    } else if (title === 'pricing') {
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }

    setActive(title);
  };

  return (
    <nav className="w-360px pt-[50px] flex py-6 justify-between items-center navbar">
      <img src={logoImage} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="pr-32 list-none sm:flex hidden items-center">
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] ${
            active === 'about' ? 'text-white' : 'text-dimWhite'
          }`}
          onClick={() => handleLinkClick('about')}
        >
          <a href="#about">about</a>
        </li>
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] ml-8 mr-8 ${
            active === 'pricing' ? 'text-white' : 'text-dimWhite'
          }`}
          onClick={() => handleLinkClick('pricing')}
        >
          <a href="#pricing">pricing</a>
        </li>
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] ${
            active === 'Logout' ? 'text-white' : 'text-dimWhite'
          }`}
        >
          <button onClick={() => handleLinkClick('Logout')} href="#Logout">Logout</button>
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 items-center pl-[180px]">
        {toggle ? (
          <img
            src={closeImage}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <img
            src={menuImage}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
        )}

        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } p-6 bg-black-gradient absolute top-20 right-0 my-2 w-[202px] h-[500px] rounded-l-lg sidebar pb-[330px]`}
          style={{ zIndex: 999 }} // Set a higher z-index value
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active === 'about' ? 'text-white' : 'text-dimWhite'
              }`}
              onClick={() => handleLinkClick('about')}
            >
              <a href="#about">about</a>
            </li>
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active === 'pricing' ? 'text-white' : 'text-dimWhite'
              }`}
              onClick={() => handleLinkClick('pricing')}
            >
              <a href="#pricing">pricing</a>
            </li>
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active === 'Logout' ? 'text-white' : 'text-dimWhite'
              }`}
              onClick={() => handleLinkClick('Logout')}
            >
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;