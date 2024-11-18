import React from 'react'
import {polybelay, polytach, uat} from '../../assets'

function Explore({onClickButton}){
  const handleClick = () => {
    onClickButton('scroll');
  };

  return (
    <div className=''>

       <div className='flex items-center justify-center '>
            
            
            <button className='w-[166px] md:w-[288px] h-[28px] md:h-[64px] rounded-md bg-gradient-to-r from-[#c23fcd] to-[#966ded]  hover:opacity-80 transition-opacity duration-300 text-white hover:text-black'onClick={handleClick}>
            <p className='font-mulish  text-[16px] md:text-[24px]'>Explore Study Tool</p> 
            </button>
        </div> 
        <div className='pt-10 flex  items-center justify-center '>

            <p className='text-[18px] md:text-[48px] text-mulish font-semibold ml-[-10px]'>
            Sign up for practice exams
            </p>
          

        </div>

       
    </div>
  )
}

export default Explore