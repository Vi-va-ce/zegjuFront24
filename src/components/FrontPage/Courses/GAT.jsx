import React from 'react'
import { cape } from '../../../assets'
import { Link } from 'react-router-dom';

function GAT({onClickButton , GatButtonStatus, Gatpricetatus}) {
    const handleClick = () => {
        onClickButton('scroll');
      };

      const isUserLoggedIn = Boolean(localStorage.getItem('refresh_token'));

    // Display price status, defaulting to "219.00 ETB" if empty
    const displayPriceStatus = Gatpricetatus || "190.00";

    // Display button status with number if user is not logged in
    const displayButtonStatus = isUserLoggedIn 
        ? GatButtonStatus || 'Enroll' 
        : `${GatButtonStatus || 'Enroll'}`; // Replace '0' with the desired number

  return (
    <div className=' bg-[rgba(226,185,235,1)] w-[166px] md:w-[264px] h-[176px] md:h-[280px] rounded-md'>
        <div className='flex items-center justify-between'>
            <div>
            <p className='text-[18px] md:text-[24px] font-semibold font-mulish pt-4 md:pt-6 pl-4 md:pl-6'>
                GAT
            </p>
            </div>

            <div className='pt-4 md:pt-6 pr-4 md:pr-6'>
                <img src={cape} className='w-[24px] h-[25px] md:w-[38px] md:h-[40px] '></img>
            </div>


        </div>

        <div className='pl-4 md:pl-6 pt-1 md:pt-6'>
            <p className='font-mulish text-[12px] md:text-[16px]'>Top GAT practice exams for <br/>Ethiopian students </p>
        </div>
        {GatButtonStatus !== 'Continue Preparing' && (
                <div className='pt-6'>
                    <div className='flex pl-4 md:pl-6 mt-1 md:mt-4'>
                        <p className='text-[#966ded] text-[13px] md:text-[20px] font-bold'>
                        {displayPriceStatus} ETB
                        </p>
                        <p className='text-[#966ded] text-[10px] md:text-[16px] font-medium pt-1'> / 2 Months </p>
                    </div>
                </div>
            )}

            <div className='pl-1.5 md:pl-6 pt-2 md:pt-6'>
                <div className='flex justify-between items-center'>
                    <div className='space-x-2 md:space-x-5'>
                        <button onClick={handleClick} className={`w-[${GatButtonStatus === 'Continue Preparing' ? '160px' : '60px'}] md:w-[${GatButtonStatus === 'Continue Preparing' ? '170px' : '64px'}] h-[28px] md:h-[30px] border-solid border-2 border-fuchsia-500 rounded-md hover:bg-fuchsia-600 text-[#c23fcd] hover:text-white`}>
                            <p className='text-[16px]'>
                            {displayButtonStatus}
                            </p>
                        </button>

                        {GatButtonStatus !== 'Continue Preparing' && (

                            <Link to='/GAT2'>
                            <button className='bg-gradient-to-r from-[#c23fcd] to-[#966ded] text-white hover:text-black w-[87px] md:w-[93px] h-[28px] md:h-[30px] rounded-md hover:opacity-80 transition-opacity duration-300'>
                                <p className=' text-[16px]'>
                                    Free trial
                                </p>
                            </button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GAT