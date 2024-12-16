import React from 'react';
import { Zegeju } from '../../assets';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function Header() {
  const navigate = useNavigate();
  const refreshToken = Cookies.get('refresh_token');

  const handleLogoutClick = () => {
    const confirmed = window.confirm('Are you sure you want to logout?');
    if (confirmed) {
      Cookies.remove('refresh_token');
      navigate('/');
    }
  };

  return (
    <div className="flex justify-between items-center">
      <img src={Zegeju} className="w-[63px] md:w-[87px] h-[25px] md:h-[39px]" alt="Zegeju logo" />
      <div>
        {refreshToken ? (
          <button
            className="mr-12 mb-2 border border-solid border-black w-[63px] md:w-[104px] h-[27px] md:h-[40px] rounded-md hover:bg-zinc-800 hover:text-white"
            onClick={handleLogoutClick}
          >
            <p className="text-[16px] text-inter font-semibold items-center">
              Logout
            </p>
          </button>
        ) : (
          <div className="flex gap-4 md:gap-12 mr-4 md:mr-24">
            <Link to='/SignIn'>
              <button
                className="border border-solid border-black w-[63px] md:w-[104px] h-[27px] md:h-[40px] rounded-md hover:bg-zinc-800 hover:text-white"
              >
                <p className="text-[16px] text-inter font-semibold items-center">
                  Log in
                </p>
              </button>
            </Link>
            <Link to='/SignUp2'>
              <button className="w-[74px] md:w-[104px] h-[27px] md:h-[40px] bg-black rounded-md hover:bg-zinc-500">
                <p className="text-[16px] text-white">Sign up</p>
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;