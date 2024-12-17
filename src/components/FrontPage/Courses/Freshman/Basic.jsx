import React from 'react';
import { di } from '../../../../assets';
import { Link } from 'react-router-dom';

function Basic({ BasicButtonStatus, BasicpriceStatus, onClickButton }) {
    const handleClick = () => {
        onClickButton('scroll');
    };

    // Check if refresh_token exists in local storage
    const isUserLoggedIn = Boolean(localStorage.getItem('refresh_token'));

    // Display price status, defaulting to "219.00 ETB" if empty
    const displayPriceStatus = BasicpriceStatus || "219.00";

    // Display button status with number if user is not logged in
    const displayButtonStatus = isUserLoggedIn 
        ? BasicButtonStatus || 'Enroll' 
        : `${BasicButtonStatus || 'Enroll'}`; // Replace '0' with the desired number

    return (
        <div className='bg-[#eadfff] w-[166px] md:w-[264px] h-[250px] md:h-[398px] rounded-md'>
            <div className='flex items-center justify-center pt-4'>
                <div>
                    <p className='text-[18px] md:text-[24px] font-semibold font-mulish text-[#553e87]'>
                        Basic
                    </p>
                </div>
            </div>

            <div className='flex items-center justify-center pt-2 md:pt-4'>
                <img src={di} className='w-[13px] md:w-[32px] h-[17px] md:h-[32px]'></img>
            </div>

            <ul className='pl-8 md:pl-16 pt-3 md:pt-6'>
                <li className='list-disc font-mulish text-[12px] md:text-[16px]'>Short notes</li>
                <li className='list-disc font-mulish text-[12px] md:text-[16px]'>Amharic Explanation</li>
            </ul>

            <div className='flex pl-4 md:pl-8 mt-6 md:mt-12'>
                <p className='text-[#966ded] text-[16px] md:text-[24px] font-bold'>
                    {displayPriceStatus} ETB
                </p>
                <p className='text-[#966ded] text-[10px] md:text-[16px] font-medium pt-2'> /  1 semester </p>
            </div>

            <div className='flex justify-center items-center pt-1 md:pt-6'>
                <div>
                    <button
                        onClick={handleClick}
                        className='bg-gradient-to-r from-[#c23fcd] to-[#966ded] hover:opacity-80 transition-opacity duration-300 text-white hover:text-black w-[141px] md:w-[224px] h-[24px] md:h-[38px] rounded-md'>
                        <p className='text-[16px] md:text-[17.5px]'>
                            {displayButtonStatus}
                        </p>
                    </button>

                    {/* Conditionally render the Free Trial button with pt-3 */}
                    {BasicButtonStatus !== 'Continue Preparing' && (
                        <div className='pt-3'>
                            <Link to="/Basics">
                                <button className='w-[141px] md:w-[224px] h-[24px] md:h-[38px] border-solid border-2 border-fuchsia-500 rounded-md hover:bg-fuchsia-600 text-[#c23fcd] hover:text-white'>
                                    <p className='text-[16px] md:text-[17.5px] font-bold mb-2 md:mb-0'>
                                        Free Trial
                                    </p>
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Basic;