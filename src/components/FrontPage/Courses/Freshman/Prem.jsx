import React from 'react'
import { prem } from '../../../../assets'

function Prem({ onClickButton, PremiumButtonStatus }) {
  const handleClick = () => {
    onClickButton('scroll');
  };

  return (
    <div className='bg-[#eadfff] w-[166px] md:w-[264px] h-[250px] md:h-[398px] rounded-md'>
      <div className='flex items-center justify-center pt-4'>
        <div className=''>
          <p className='text-[18px] md:text-[24px] font-semibold font-mulish text-[#8e3a95]'>
            Premium
          </p>
        </div>
      </div>

      <div className='flex items-center justify-center pt-2 md:pt-2'>
        <img src={prem} className='w-[13px] h-[17px] md:w-[32px] md:h-[32px]'></img>
      </div>

      <ul className='pl-8 md:pl-16 pt-1 md:pt-6'>
        <li className='list-disc font-mulish text-[12px] md:text-[16px]'>Short notes</li>
        <li className='list-disc font-mulish text-[12px] md:text-[16px]'>Amharic Explanation</li>
        <li className='list-disc font-mulish text-[12px] md:text-[16px]'>Practice test</li>
        <li className='list-disc font-mulish text-[12px] md:text-[16px]'>Mid and Final Exams</li>
      </ul>

      <div className='flex pl-4 md:pl-8 mt-1 md:mt-1'>
        <p className='text-[#966ded] text-[16px] md:text-[24px] font-bold'>350.00 ETB</p>
        <p className='text-[#966ded] text-[10px] md:text-[16px] font-medium pt-2'> / 4 Months </p>
      </div>

      <div className='flex justify-center items-center pt-1 md:pt-6'>
        <div className=''>
          <div>
            <button onClick={handleClick} className='bg-gradient-to-r from-[#c23fcd] to-[#966ded] hover:opacity-80 transition-opacity duration-300 text-white hover:text-black w-[141px] md:w-[224px] h-[24px] md:h-[38px] rounded-md'>
              <p className=' text-[16px] md:text-[17.5px]'>{PremiumButtonStatus || 'Enroll'}</p>
            </button>
          </div>

          {PremiumButtonStatus !== 'Continue Preparing' && (
            <div className='pt-3'>
              <button className='w-[141px] md:w-[224px] h-[24px] md:h-[38px] border-solid border-2 border-fuchsia-500 rounded-md hover:bg-fuchsia-600 text-[#c23fcd] hover:text-white rounded-md'>
                <p className='text-[16px] md:text-[17.5px] font-bold mb-2 md:mb-0'>
                  Free Trial
                </p>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Prem