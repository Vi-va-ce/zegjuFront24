import React from 'react'
import { uat } from '../../../assets'
import { Link } from 'react-router-dom';

function UAT({onClickButton , UatButtonStatus}) {
    const handleClick = () => {
        onClickButton('scroll');
      };
  return (
    <div className='bg-[#d2c8ef] w-[166px] md:w-[264px] h-[176px] md:h-[280px] rounded-md'>
        <div className='flex items-center justify-between'>
            <div>
            <p className='text-[18px] md:text-[24px] font-semibold font-mulish pt-4 md:pt-6 pl-4 md:pl-6'>
                UAT
            </p>
            </div>

            <div className='pt-4 md:pt-6 pr-4 md:pr-6'>
                <img src={uat} className='w-[24px] h-[25px] md:w-[38px] md:h-[40px] '></img>
            </div>


        </div>

        <div className='pl-4 md:pl-6 pt-1 md:pt-6'>
            <p className='font-mulish text-[12px] md:text-[16px]'>
            Prepare for AAU's UAT with Zegju's practice package <br/> for exam success.
            </p>
        </div>
        {UatButtonStatus !== 'Continue Preparing' && (
                <div className='pt-1'>
                    <div className='flex pl-4 md:pl-6 mt-1 md:mt-4'>
                        <p className='text-[#966ded] text-[13px] md:text-[20px] font-bold'>
                            289.99 ETB
                        </p>
                        <p className='text-[#966ded] text-[10px] md:text-[16px] font-medium pt-1'> / 2 Months </p>
                    </div>
                </div>
            )}

            <div className='pl-1.5 md:pl-6 pt-2 md:pt-6'>
                <div className='flex justify-between items-center'>
                    <div className='space-x-2 md:space-x-5'>
                        <button onClick={handleClick} className={`w-[${UatButtonStatus === 'Continue Preparing' ? '160px' : '60px'}] md:w-[${UatButtonStatus === 'Continue Preparing' ? '170px' : '64px'}] h-[28px] md:h-[30px] border-solid border-2 border-fuchsia-500 rounded-md hover:bg-fuchsia-600 text-[#c23fcd] hover:text-white`}>
                            <p className='text-[16px]'>
                                {UatButtonStatus || 'Enroll'}
                            </p>
                        </button>

                        {UatButtonStatus !== 'Continue Preparing' && (

                            <Link to='/UAT2'>
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

export default UAT