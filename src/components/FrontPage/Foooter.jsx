import React from 'react'

import Footerlogo from './Footers/Footerlogo'
import Links from './Footers/Links'
import Black from './Footers/Black'


function Foooter() {
  return (
    <div className='pt-[30px] md:pt-[150px]'>
    <div className='flex justify-between items-center'>
      <Footerlogo />

      <div className='flex justify-center items-center space-x-4 md:space-x-12 pt-1 md:pl-12 '>
        <div>
          <p className='font-mulish text-[11px] md:text-[16px] text-slate-600'>About</p>
        </div>

        <div>
          <p className='font-mulish text-[11px] md:text-[16px] text-slate-600'>FAQ</p>
        </div>

        <div>
          <p className='font-mulish text-[11px] md:text-[16px] text-slate-600'>Pricing</p>
        </div>

        <div>
          <p className='font-mulish text-[11px] md:text-[16px] text-slate-600'>Support</p>
        </div>
      </div>

    <Links/>
    </div>
    
    </div>
  )
}

export default Foooter