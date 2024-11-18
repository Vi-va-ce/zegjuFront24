import React from 'react'
import MiniBarBlue from './MiniBarBlue'
import MiniBarRed from './MiniBarRed'
import firstgradient from "./firstgradient.png";
import total from "./total.png";
import elipse from "./elipse.png";
import expression from "./expression.png";



function Mboard({ questionData }) {
  return (
   <div className='flex'>
   <div className='md:p-4 '>
        <div className="static w-[77.61px] h-[110.31px] md:w-[200px] md:h-[280px] bg-white md:rounded-[20px] rounded-md mt-4" >
            <div className=" absolute w-[70px] h-[42.61px] md:w-[180px] md:h-[100px] bg-teal-600  md:rounded-[20px] rounded-md md:ml-2 md:mt-2 mt-1 ml-1" >
            <img src={firstgradient} alt="firstgradient" className="absolute md:w-[130px] md:h-[90px] w-[46px]  h-[34px] md:mt-4 md:mr-3 mt-2  " />
            <div className="absolute text-white md:text-[23px] text-[10px]   font-['Inter'] md:ml-12 md:mt-8 ml-1.5 mt-1">Algebra</div>

           </div>
           <div className="text-black md:text-2xl text-[10px] font-normal font-['Inter'] flex md:pt-28 md:pl-6 pt-11 pl-2">
            <p className='md:pr-3 md:pt-2 pr-1  pt-1'>Questions</p>
            <p className="text-black md:text-5xl text-[17px] font-bold font-['Inter']"> {questionData?.first_section?.heart_of_algebra?.out_of}</p>
            </div>
            <div className='flex'>
                <div className="text-cyan-400 md:text-[32px] text-[14px] font-medium font-['Inter']"><p className=' md:pl-8 md:pt-2 pl-2'>+ {questionData?.first_section?.heart_of_algebra?.right_answer} </p></div>
                <div class="text-red-600  md:text-[32px] text-[14px]  font-medium font-['Inter']"><p className='md:pl-12 md:pt-2 pl-3'>- {questionData?.first_section?.heart_of_algebra?.wrong_answer} </p></div>
            </div>
            <div className='flex'>
                <div className='md:ml-3 ml-2'><MiniBarBlue data={questionData?.second_section?.heart_of_algebra?.right_answer}/></div>
                <div className='md:ml-3 ml-2'><MiniBarRed data={questionData?.second_section?.heart_of_algebra?.wrong_answer}/></div>
                
            </div>
        </div>
    </div>
    <div style={{ marginRight:6 }} className=' md:p-4 pl-2 '>
        <div className="static w-[77.61px] h-[110.31px] md:w-[200px] md:h-[280px] bg-white md:rounded-[20px] rounded-md mt-4" >
            <div className=" absolute w-[70px] h-[42.61px] md:w-[180px] md:h-[100px]  bg-green-500 md:rounded-[20px] rounded-md md:ml-2 md:mt-2 mt-1 ml-1 " >
            <img src={elipse} alt="elipse" className="absolute md:w-[130px] md:h-[90px] w-[46px]  h-[34px] md:mt-4 md:mr-3 mt-2  " />
            <div className="absolute text-white md:text-[23px] text-[10px]   font-['Inter'] md:ml-3 md:mt-8 ml-1.5 mt-1">problem solving</div>
         </div>
         <div className="text-black md:text-2xl text-[10px] font-normal font-['Inter'] flex md:pt-28 md:pl-6 pt-11 pl-2">
            <p className='md:pr-3 md:pt-2 pr-1  pt-1'>Questions</p>
            <p className="text-black md:text-5xl text-[17px] font-bold font-['Inter']">{questionData?.first_section?.problem_solving_analysis?.out_of}</p>
            </div>
           <div className='flex'>
                <div className="text-cyan-400 md:text-[32px] text-[14px] font-medium font-['Inter"><p className=' md:pl-8 md:pt-2 pl-2 '>+ {questionData?.first_section?.problem_solving_analysis?.right_answer} </p></div>
                <div class="text-red-600  md:text-[32px] text-[14px]  font-medium font-['Inter']"><p className='md:pl-12 md:pt-2 pl-3'>- {questionData?.first_section?.problem_solving_analysis?.wrong_answer}</p></div>
                </div>
            <div className='flex'>
            <div className='md:ml-3 ml-2'><MiniBarBlue data={questionData?.second_section?.problem_solving_analysis?.right_answer}/></div>
            <div className='md:ml-3 ml-2'><MiniBarRed data={questionData?.second_section?.problem_solving_analysis?.wrong_answer}/></div>
                
            </div>
         
        </div>
    </div>
    <div style={{ marginRight:6 }} className=' md:p-4 pl-2 '>
        <div className="static w-[77.61px] h-[110.31px] md:w-[200px] md:h-[280px] bg-white md:rounded-[20px] rounded-md mt-4" >
            <div className=" absolute w-[70px] h-[42.61px] md:w-[180px] md:h-[100px] bg-violet-900 md:rounded-[20px] rounded-md md:ml-2 md:mt-2 mt-1 ml-1 " >
            <img src={expression} alt="expression" className="absolute md:w-[130px] md:h-[90px] w-[46px]  h-[34px] md:mt-4 md:mr-3 mt-2  " />
            <div className="absolute text-white md:text-[23px] text-[10px]   font-['Inter'] md:ml-12 md:mt-3 ml-1.5 mt-1">passport advanced</div>
         </div>
         <div className="text-black md:text-2xl text-[10px] font-normal font-['Inter'] flex md:pt-28 md:pl-6 pt-11 pl-2">
            <p className='md:pr-3 md:pt-2 pr-1  pt-1'>Questions</p>
            <p className="text-black md:text-5xl text-[17px] font-bold font-['Inter']">{questionData?.first_section?.passport_advanced_math?.out_of}</p>
            </div>
           <div className='flex'>
                <div className="text-cyan-400 md:text-[32px] text-[14px] font-medium font-['Inter"><p className=' md:pl-8 md:pt-2 pl-2 '>+ {questionData?.first_section?.passport_advanced_math?.right_answer}</p></div>
                <div class="text-red-600  md:text-[32px] text-[14px]  font-medium font-['Inter']"><p className='md:pl-12 md:pt-2 pl-3'>- {questionData?.first_section?.passport_advanced_math?.wrong_answer}</p></div>
                </div>
            <div className='flex'>
            <div className='md:ml-3 ml-2'><MiniBarBlue data={questionData?.second_section?.passport_advanced_math?.right_answer}/></div>
            <div className='md:ml-3 ml-2'><MiniBarRed data={questionData?.second_section?.passport_advanced_math?.wrong_answer}/></div>
                
            </div>
        </div>
    </div>
    <div style={{ marginRight:6 }} className=' md:p-4 pl-2 '>
        <div className="static w-[77.61px] h-[110.31px] md:w-[200px] md:h-[280px] bg-white md:rounded-[20px] rounded-md mt-4" >
            <div className=" absolute w-[70px] h-[42.61px] md:w-[180px] md:h-[100px] bg-teal-800 md:rounded-[20px] rounded-md md:ml-2 md:mt-2 mt-1 ml-1 " >
            <img src={total} alt="total" className="absolute md:w-[130px] md:h-[90px] w-[46px]  h-[34px] md:mt-4 md:mr-3 mt-2  " />
            <div className="absolute text-white md:text-2xl text-[10px]  font-semibold font-['Inter'] md:ml-14 md:mt-8 ml-4 mt-3">Total</div>
         </div>
         <div className="text-black md:text-2xl text-[10px] font-normal font-['Inter'] flex md:pt-28 md:pl-6 pt-11 pl-2">
            <p className='md:pr-3 md:pt-2 pr-1  pt-1'>Questions</p>
            <p className="text-black md:text-5xl text-[17px] font-bold font-['Inter']">{questionData?.first_section?.average?.out_of}</p>
            </div>
           <div className='flex'>
                <div className="text-cyan-400 md:text-[32px] text-[14px] font-medium font-['Inter"><p className=' md:pl-8 md:pt-2 pl-2 '>+ {questionData?.first_section?.average?.right_answer}</p></div>
                <div class="text-red-600  md:text-[32px] text-[14px]  font-medium font-['Inter']"><p className='md:pl-12 md:pt-2 pl-3'>- {questionData?.first_section?.average?.wrong_answer}</p></div>
                </div>
            <div className='flex'>
            <div className='md:ml-3 ml-2'><MiniBarBlue data={questionData?.second_section?.average?.right_score}/></div>
            <div className='md:ml-3 ml-2'><MiniBarRed data={questionData?.second_section?.average?.wrong_answer}/></div>
            </div>
        </div>
    </div>
  </div> 
  )
}

export default Mboard