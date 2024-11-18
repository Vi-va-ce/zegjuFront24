import React from 'react'
import MiniBarBlue from './MiniBarBlue'
import MiniBarRed from './MiniBarRed'
import firstgradient from "./firstgradient.png";
import total from "./total.png";
import elipse from "./elipse.png";
import expression from "./expression.png";



function Questionoboard({ questionData }) {
  return (
   <div className='flex'>
    <div className='md:p-4 '>
        <div className="static w-[77.61px] h-[110.31px] md:w-[200px] md:h-[280px] bg-white md:rounded-[20px] rounded-md mt-4" >
            <div className=" absolute w-[70px] h-[42.61px] md:w-[180px] md:h-[100px] bg-slate-900 md:rounded-[20px] rounded-md md:ml-2 md:mt-2 mt-1 ml-1" >
            <img src={firstgradient} alt="firstgradient" className="absolute md:w-[130px] md:h-[90px] w-[46px]  h-[34px] md:mt-4 md:mr-3 mt-2  " />
            <div className="absolute text-white md:text-[23px] text-[10px]   font-['Inter'] md:ml-6 md:mt-4 ml-1.5 mt-1">Command of<br/>evidence</div>

           </div>
           <div className="text-black md:text-xl text-[10px] font-normal font-['Inter'] flex md:pt-28 md:pl-6 pt-11 pl-2">
            <p className='md:pr-3 md:pt-[-30px] pr-1  pt-1'>Questions</p>
            <p className="text-black md:text-3xl text-[17px] font-bold font-['Inter']"> {questionData?.first_section?.command_of_evidence?.out_of}</p>
           </div>
            <div className='flex'>
                <div className="text-cyan-400 md:text-[32px] text-[14px] font-medium font-['Inter']"><p className=' md:pl-8 md:pt-2 pl-2  '>+ {questionData?.first_section?.command_of_evidence?.right_answer} </p></div>
                <div class="text-red-600  md:text-[32px] text-[14px]  font-medium font-['Inter']"><p className='md:pl-12 md:pt-2 pl-3'>- {questionData?.first_section?.command_of_evidence?.wrong_answer} </p></div>
            </div>
            <div className='flex'>
                <div className='md:ml-3 ml-2'><MiniBarBlue data={questionData?.second_section?.command_of_evidence?.right_answer}/></div>
                <div className='md:ml-3 ml-2'><MiniBarRed data={questionData?.second_section?.command_of_evidence?.wrong_answer}/></div>
                
            </div>
        </div>
    </div>
     <div style={{ marginRight:6 }} className=' md:p-4 pl-2 '>
        <div className="static w-[77.61px] h-[110.31px] md:w-[200px] md:h-[280px] bg-white md:rounded-[20px] rounded-md mt-4" >
            <div className=" absolute w-[70px] h-[42.61px] md:w-[180px] md:h-[100px] bg-fuchsia-600 md:rounded-[20px] rounded-md md:ml-2 md:mt-2 mt-1 ml-1 " >
            <img src={elipse} alt="elipse" className="absolute md:w-[130px] md:h-[90px] w-[46px]  h-[34px] md:mt-4 md:mr-3 mt-2  " />
            <div className="absolute text-white md:text-[23px] text-[10px]   font-['Inter'] md:ml-6 md:mt-4 ml-1.5 mt-1">words in<br/>context</div>
         </div>
         <div className="text-black md:text-xl text-[10px] font-normal font-['Inter'] flex md:pt-28 md:pl-6 pt-11 pl-2">
         <p className='md:pr-3 md:pt-[-30px] pr-1  pt-1'>Questions</p>
            <p className="text-black md:text-3xl text-[17px] font-bold font-['Inter']"> {questionData?.first_section?.words_in_context?.out_of}</p>
           </div>
           <div className='flex'>
                <div className="text-cyan-400 md:text-[32px] text-[14px] font-medium font-['Inter"><p className=' md:pl-8 md:pt-2 pl-2 '>+ {questionData?.first_section?.words_in_context?.right_answer} </p></div>
                <div class="text-red-600  md:text-[32px] text-[14px]  font-medium font-['Inter']"><p className='md:pl-12 md:pt-2 pl-3'>- {questionData?.first_section?.words_in_context?.wrong_answer}</p></div>
            </div>
            <div className='flex'>
            <div className='md:ml-3 ml-2'><MiniBarBlue data={questionData?.second_section?.words_in_context?.right_answer}/></div>
                <div className='md:ml-3 ml-2'><MiniBarRed data={questionData?.second_section?.words_in_context?.wrong_answer}/></div>
                
            </div>
         
        </div>
    </div>
    <div style={{ marginRight:6 }} className=' md:p-4 pl-2 '>
        <div className="static w-[77.61px] h-[110.31px] md:w-[200px] md:h-[280px] bg-white md:rounded-[20px] rounded-md mt-4" >
            <div className=" absolute w-[70px] h-[42.61px] md:w-[180px] md:h-[100px] bg-emerald-500 md:rounded-[20px] rounded-md md:ml-2 md:mt-2 mt-1 ml-1 " >
            <img src={expression} alt="expression" className="absolute md:w-[130px] md:h-[90px] w-[46px]  h-[34px] md:mt-4 md:mr-3 mt-2  " />
            <div className="absolute text-white md:text-[23px] text-[10px]   font-['Inter'] md:ml-6 md:mt-4 ml-1.5 mt-1">expression of<br/>Ideas</div>
         </div>
         <div className="text-black md:text-xl text-[10px] font-normal font-['Inter'] flex md:pt-28 md:pl-6 pt-11 pl-2">
         <p className='md:pr-3 md:pt-[-30px] pr-1  pt-1'>Questions</p>
            <p className="text-black md:text-3xl text-[17px] font-bold font-['Inter']">{questionData?.first_section?.expression_of_Ideas?.out_of}</p>
           </div>
           <div className='flex'>
                <div className="text-cyan-400 md:text-[32px] text-[14px] font-medium font-['Inter"><p className=' md:pl-8 md:pt-2 pl-2 '>+ {questionData?.first_section?.expression_of_Ideas?.right_answer} </p></div>
                <div class="text-red-600  md:text-[32px] text-[14px]  font-medium font-['Inter']"><p className='md:pl-12 md:pt-2 pl-3'>- {questionData?.first_section?.expression_of_Ideas?.wrong_answer}</p></div>
            </div>
            <div className='flex'>
            <div className='md:ml-3 ml-2'><MiniBarBlue data={questionData?.second_section?.expression_of_Ideas?.right_answer}/></div>
                <div className='md:ml-3 ml-2'><MiniBarRed data={questionData?.second_section?.expression_of_Ideas?.wrong_answer}/></div>
                
            </div>
         
        </div>
    </div>
    <div style={{ marginRight:6 }} className=' md:p-4 pl-2 '>
        <div className="static w-[77.61px] h-[110.31px] md:w-[200px] md:h-[280px] bg-white md:rounded-[20px] rounded-md mt-4" >
            <div className=" absolute w-[70px] h-[42.61px] md:w-[180px] md:h-[100px] bg-teal-800 md:rounded-[20px] rounded-md md:ml-2 md:mt-2 mt-1 ml-1 " >
            <img src={total} alt="total" className="absolute md:w-[130px] md:h-[90px] w-[46px]  h-[34px] md:mt-4 md:mr-3 mt-2  " />
            <div className="absolute text-white md:text-2xl text-[10px]  font-semibold font-['Inter'] md:ml-14 md:mt-8 ml-4 mt-3">Total</div>
         </div>
         <div className="text-black md:text-xl text-[10px] font-normal font-['Inter'] flex md:pt-28 md:pl-6 pt-11 pl-2">
         <p className='md:pr-3 md:pt-[-30px] pr-1  pt-1'>Questions</p>
            <p className="text-black md:text-3xl text-[17px] font-bold font-['Inter']">{questionData?.first_section?.average?.out_of}</p>
           </div>
           <div className='flex'>
                <div className="text-cyan-400 md:text-[32px] text-[14px] font-medium font-['Inter"><p className=' md:pl-8 md:pt-2 pl-2 '>+ {questionData?.first_section?.average?.right_answer} </p></div>
                <div class="text-red-600  md:text-[32px] text-[14px]  font-medium font-['Inter']"><p className='md:pl-12 md:pt-2 pl-3'>- {questionData?.first_section?.average?.wrong_answer}</p></div>
            </div>
            <div className='flex'>
            <div className='md:ml-3 ml-2'><MiniBarBlue data={questionData?.second_section?.average?.right_answer}/></div>
                <div className='md:ml-3 ml-2'><MiniBarRed data={questionData?.second_section?.average?.wrong_answer}/></div>
                
            </div>
         
        </div>
    </div>
  </div> 
  )
}

export default Questionoboard