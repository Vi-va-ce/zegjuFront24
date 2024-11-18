import React from 'react'
import { emails, location, phone } from '../../assets'

function NormalFooter() {
  return (

    <div className=''>
      <div className='flex items-center justify-center '>
          <p className='font-mulish text-[16px] md:text-[28px] font-bold'>
          Contact Us
          </p>
      </div>
      <div className='flex  items-center justify-between md:justify-center md:space-x-12 pt-8 md:pt-[100px] '>
       <div className='pl-2' >
        <div className='bg-[rgba(233,231,238,0.8)] w-[112px] md:w-[264px] h-[81px] md:h-[192px] rounded-md md:rounded-2xl'>
          <div className='flex items-center justify-center'>
            <img src={location} className=' mt-[-17px] md:w-[80px] md:h0[80px] '></img>
          </div>
          <div className='flex items-center justify-center mt-1'>
            <p className='text-[12px] md:text-[24px] font-mulish font-semibold'>Location</p>
          </div>
          <div className='flex items-center justify-center'>
          <p className='text-[8px] md:text-[20px] text-slate-600'>View on map</p>
          </div>
        </div>
       </div>

       <div>
        <div className='bg-[rgba(233,231,238,0.8)] w-[112px] md:w-[264px] h-[81px] md:h-[192px] rounded-md md:rounded-2xl'>
          <div className='flex items-center justify-center'>
            <img src={phone} className=' mt-[-17px] md:w-[80px] md:h0[80px] '></img>
          </div>
          <div className='flex items-center justify-center mt-1'>
            <p className='text-[12px] md:text-[24px] font-mulish font-semibold'>Contact</p>
          </div>
          <div className='flex items-center justify-center'>
            <div>
            <p className='text-[8px] md:text-[20px] text-slate-600'>+251 92 866 5592</p>
            <p className='text-[8px] md:text-[20px] text-slate-600'>+251 94 730 3054</p>
         
            </div>
           </div>
        </div>
      </div>

      <div className='pr-2'>
        <div className='bg-[rgba(233,231,238,0.8)]  w-[112px] md:w-[264px] h-[81px] md:h-[192px] rounded-md md:rounded-2xl'>
          <div className='flex items-center justify-center'>
            <img src={emails} className=' mt-[-17px] md:w-[80px] md:h0[80px] '></img>
          </div>
          <div className='flex items-center justify-center mt-1'>
            <p className='text-[12px] md:text-[24px] font-mulish font-semibold'>Email</p>
          </div>
          <div className='flex items-center justify-center'>
          <p className='text-[8px] md:text-[20px] text-slate-600'>zegjuexamprep@gmail.com</p>
          </div>
        </div>
      </div>


    </div>
    </div>
  )
}

export default NormalFooter