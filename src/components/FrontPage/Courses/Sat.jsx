import React from 'react'
import { sat } from '../../../assets'
import { Link } from 'react-router-dom';

function Sat({onClickButton , SatButtonStatus}) {
    const handleClick = () => {
        onClickButton('scroll');
      }; 
  return (
    <div className=' bg-[rgba(226,185,235,1)]  w-[166px] md:w-[264px] h-[176px] md:h-[280px] rounded-md'>
        <div className='flex items-center justify-between'>
            <div>
            <p className='text-[18px] md:text-[24px] font-semibold font-mulish pt-4 md:pt-6 pl-4 md:pl-6'>
                SAT
            </p>
            </div>

            <div className='pt-4 md:pt-6 pr-4 md:pr-6'>
                <img src={sat} className='w-[24px] h-[25px] md:w-[38px] md:h-[40px] '></img>
            </div>


        </div>

        <div className='pl-4 md:pl-6 pt-1 md:pt-6'>
            <p className='font-mulish text-[12px] md:text-[16px]'>Effective SAT study <br/> techniques for <br className='md:hidden'/>Ethiopian <br className='hidden md:block'/> students</p>
        </div>
        <div className='pt-1'>
        <div className='flex pl-4 md:pl-6 mt-1 md:mt-4'>
        <p className='text-[#966ded] text-[13px] md:text-[20px] font-bold'>
        749.99 ETB</p> <p className='text-[#966ded] text-[10px] md:text-[16px] font-medium pt-1'> /  1 semester </p>
        
    </div>
        </div>


        

<div className='pl-1.5 md:pl-6 pt-0 md:pt-2'>
                <div className='flex justify-between items-center'>
                    <div className='space-x-2 md:space-x-5'>
                        <button onClick={handleClick} className={`w-[${SatButtonStatus === 'Continue Preparing' ? '160px' : '60px'}] md:w-[${SatButtonStatus === 'Continue Preparing' ? '170px' : '64px'}] h-[28px] md:h-[30px] border-solid border-2 border-fuchsia-500 rounded-md hover:bg-fuchsia-600 text-[#c23fcd] hover:text-white`}>
                            <p className='text-[16px]'>
                                {SatButtonStatus || 'Enroll'}
                            </p>
                        </button>

                        {SatButtonStatus !== 'Continue Preparing' && (

                            <Link to='/SAT2'>
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

export default Sat