import React from 'react'
import { airline } from '../../../assets'

function Eaa({onClickButton , EaaButtonStatus}) {
    const handleClick = () => {
        onClickButton('scroll');
      };

    return (
        <div className='bg-[#b3fbea] w-[166px] md:w-[264px] h-[176px] md:h-[280px] rounded-md'>
            <div className='flex items-center justify-between'>
                <div>
                    <p className='text-[18px] md:text-[24px] font-semibold font-mulish pt-4 md:pt-6 pl-4 md:pl-6'>
                        EAA
                    </p>
                </div>

                <div className='pt-4 md:pt-6 pr-4 md:pr-6'>
                    <img src={airline} className='w-[24px] h-[25px] md:w-[38px] md:h-[40px] '></img>
                </div>
            </div>

            <div className='pl-4 md:pl-6 pt-1 md:pt-6'>
                <p className='font-mulish text-[12px] md:text-[16px]'>Ethiopian Aviation Academy  <br/> entrance practice test </p>
            </div>

            {EaaButtonStatus !== 'Continue Preparing' && (
                <div className='pt-1'>
                    <div className='flex pl-4 md:pl-6 mt-1 md:mt-4'>
                        <p className='text-[#966ded] text-[13px] md:text-[20px] font-bold'>
                            549.99 ETB
                        </p>
                        <p className='text-[#966ded] text-[10px] md:text-[16px] font-medium pt-1'> / 1 semester </p>
                    </div>
                </div>
            )}

<div className='pl-1.5 md:pl-6 pt-2 md:pt-6'>

<div className='flex justify-between items-center'>
    <div className=''>
        
        <div className='mr-16'><p className='font-semibold  md:text-[16px] text-[14px] text-amber-600'>Coming soon</p></div>
    </div>

</div>

</div>
        </div>
    )
}

export default Eaa