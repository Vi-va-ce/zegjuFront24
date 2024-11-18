import React from 'react'
import { ielts, uat } from '../../../assets'

function Ielts() {
  return (
    <div className='bg-[#fcf597] w-[166px] md:w-[264px] h-[176px] md:h-[280px] rounded-md'>
        <div className='flex items-center justify-between'>
            <div>
            <p className='text-[18px] md:text-[24px] font-semibold font-mulish pt-4 md:pt-6 pl-4 md:pl-6'>
                IELTS
            </p>
            </div>

            <div className='pt-4 md:pt-6 pr-4 md:pr-6'>
                <img src={ielts} className='w-[24px] h-[25px] md:w-[38px] md:h-[40px] '></img>
            </div>


        </div>

        <div className='pl-4 md:pl-6 pt-1 md:pt-6'>
            <p className='font-mulish text-[12px] md:text-[16px]'>Effective IELTS study <br/> techniques for <br className='md:hidden'/>Ethiopian <br className='hidden md:block'/> students</p>
        </div>
        <div className='pt-1'>
        <div className='flex pl-4 md:pl-6 mt-1 md:mt-4'>
        <p className='text-[#966ded] text-[13px] md:text-[20px] font-bold'>
        999.99 ETB</p> <p className='text-[#966ded] text-[10px] md:text-[16px] font-medium pt-1'> /  Months </p>
        
    </div>
        </div>


        <div className='pl-1.5 md:pl-6 pt-2 md:pt-6'>

<div className='flex justify-between items-center'>
    <div className=''>
        
        <div className='mr-16'><p className='font-semibold  md:text-[16px] text-[14px] text-yellow-700'>Coming soon</p></div>
    </div>

</div>

</div>
        
    </div>
  )
}

export default Ielts