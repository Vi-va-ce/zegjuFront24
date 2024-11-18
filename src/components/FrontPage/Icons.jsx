import React from 'react'
import {airline, cape, fresh,  ielts,  sat,  tofel,  uat} from '../../assets'

function Icons() {
  return (
    <div className='pt-4 md:pt-8 '>
            <div className='flex items-center justify-center md:space-x-8'>
                <div className='flex'>
                    <div className='pl-[]'>
                        <img src={airline} className='w-[20px] md:w-[24px] h-[37px] md:h-[24px]'></img>
                    </div>
                    <div className='pt-[12px] md:pt-[2px] pl-1'>
                    <p className='text-[13px] md:text-[16px] text-blue-400'>EAA</p>
                    </div>
                </div>
                <div className='flex pl-8'>
                    <div className=''>
                        <img src={cape} className='w-[20px] md:w-[24px] h-[37px] md:h-[24px]'></img>
                    </div>
                    <div className='pt-[11px] md:pt-[1px] pl-1'>
                    <p className='text-[13px] md:text-[16px] text-blue-400'>GAT</p>
                    </div>
                    
                </div>

                <div className='flex pl-8'>
                    <div className=''>
                        <img src={uat} className='w-[20px] md:w-[24px] h-[37px] md:h-[24px]'></img>
                    </div>
                    <div className='pt-[11px]  md:pt-[1px] pl-1'>
                    <p className='text-[13px] md:text-[16px] text-blue-400'>UAT</p>
                    </div>
                    
                </div>

                <div className='flex pl-8'>
                    <div className=''>
                        <img src={fresh} className='w-[20px] md:w-[24px] h-[37px] md:h-[24px]'></img>
                    </div>
                    <div className='pt-[11px]  md:pt-[1px] pl-1'>
                    <p className='text-[13px] md:text-[16px] text-blue-400'>FRESHMAN</p>
                    </div>
                    
                </div>
            </div>
                <div className='flex items-center justify-center mt-4 md:mt-10  md:space-x-8'>
                        <div className='flex'>
                            <div className='pl-[]'>
                                <img src={sat} className='w-[20px] md:w-[24px] h-[37px] md:h-[24px]'></img>
                            </div>
                            <div className='pt-[12px]  md:pt-[1px] pl-1'>
                            <p className='text-[13px] md:text-[16px] text-blue-400'>SAT</p>
                            </div>
                        </div>
                        <div className='flex pl-8'>
                            <div className=''>
                                <img src={tofel} className='w-[20px] md:w-[24px] h-[37px] md:h-[24px]'></img>
                            </div>
                            <div className='pt-[11px]  md:pt-[1px] pl-1'>
                            <p className='text-[13px] md:text-[16px] text-blue-400'>TOFEL</p>
                            </div>
                    </div>     

                    <div className='flex pl-8'>
                            <div className=''>
                                <img src={ielts} className='w-[20px] md:w-[24px] h-[37px] md:h-[24px]'></img>
                            </div>
                            <div className='pt-[11px]  md:pt-[1px] pl-1'>
                            <p className='text-[13px] md:text-[16px] text-blue-400'>IELTS</p>
                            </div>
                    </div>  
                </div>
                <div className=' flex items-center justify-center pt-4 md:pt-12'>
            <p className='text-[12px] md:text-[24px] text-[#444444] font-mulish text-center'>
            ZEGJU is specifically designed for Ethiopian <br className='md:hidden'/> students. <br className='hidden md:block'/>
            Ensuring students have the best possible <br className='md:hidden'/> preparation for your exams. </p>
        </div>
        </div>
  )
}

export default Icons