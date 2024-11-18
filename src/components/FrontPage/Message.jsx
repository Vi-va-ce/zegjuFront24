import React from 'react'
import {rocket} from '../../assets'

function Message() {
  return (
  <div>
    <div className='flex justify-between items-center pl-[16px] md:pl-24'>
        <div className='mt-[-30px] md:mt-[-10px]'>
        <div className='w-[204px] md:w-[576px] h-[80px] md:h-[160px]'>
        <p className=' text-[32px] md:text-[64px] font-mulish font-semibold leading-[40.16px] md:leading-[70px]'>
        Ready to Ace Your Exams?
        </p>

        </div>

        <div className='pt-[10px] md:pt-[0px]'>
            <p className='font-mulish text-[16px] md:text-[32px] font-semibold'>
            Comprehensive <span className='text-fuchsia-500'> Exam <br className='md:hidden'/> Preparation </span> Tools for <br/>Ethiopian Students 
            </p>
        </div>
        <div className='hidden md:block '>
          <div className='  pt-[8px]'>
              <p className='text-[12px] md:text-[20px] font-mulish text-center md:text-left '>
              ZEGJU provides top-notch resources to help you excel in <br className='md:hidden'/> your <br className='hidden md:block'/> Freshman Courses, SAT, UAT, GAT, TOEFL, IELTS, <br className='md:hidden'/> 
              and Ethiopian <br className='hidden md:block'/>  Aviation Academy entrance exams. 
              Our  <br className='md:hidden'/>  platform is designed <br className='hidden md:block'/> specifically for Ethiopian students <br className='md:hidden'/>  to make your test preparation <br className='hidden md:block'/> efficient and effective.
              </p>
          </div>
        </div>
    

    </div>

    
   <div className='md:mr-20'>
    <div className='ml-[-100px]'>
        <img src={rocket} className='w-[149px] md:w-[300px] h-[175px] md:h-[300px]'></img>
        </div>
        </div>

        </div>

        <div className='md:hidden'>
          <div className=' flex items-center justify-center pt-2'>
              <p className='text-[12px] md:text-[20px] font-mulish text-center md:text-left '>
              ZEGJU provides top-notch resources to help you excel in <br className='md:hidden'/> your <br className='hidden md:block'/> Freshman Courses, SAT, UAT, GAT, TOEFL, IELTS, <br className='md:hidden'/> 
              and Ethiopian <br className='hidden md:block'/>  Aviation Academy entrance exams. 
              Our  <br className='md:hidden'/>  platform is designed <br className='hidden md:block'/> specifically for Ethiopian students <br className='md:hidden'/>  to make your test preparation <br className='hidden md:block'/> efficient and effective.
              </p>
          </div>
        </div>
</div>
  )
}

export default Message