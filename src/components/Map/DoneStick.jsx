import React from 'react'
import {done} from '../../assets'

function DoneStick() {
  return (
    <div className='flex'>
    <div className='w-[75.2px] md:w-[165px] h-[7.89px] md:h-[12px] bg-stick rounded-2xl'></div>
    <img className="w-[9px] md:w-[17px] h-[8px] md:h-[14px] ml-1" src={done} alt="done" />
    </div>
  )
}

export default DoneStick