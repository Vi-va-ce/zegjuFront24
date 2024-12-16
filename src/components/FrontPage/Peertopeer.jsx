import React from 'react';
import { useNavigate } from 'react-router-dom';

function Peertopeer() {
    const navigate = useNavigate();
    const handleClick= () => {
          navigate('/PrLogin');
    }
  return (
    <div className='flex justify-center items-center pt-8 '>
      <div>
        <div className='flex justify-center items-center'>
          <p className='text-[28px] md:text-[34px] font-semibold text-purple-500 font-mulish pb-8'>
            Peer To Peer Program
          </p>
        </div>

        <div className='bg-[#eadfff] md:w-[1078px] w-[390px] md:h-[333px] h-[270px] md:p-8 p-4'>
          <div className='md:flex justify-center items-center'>
            <div className='md:w-[936px] md:h-[198px]'>
              <p className='md:text-[24px] text-[15px] md:pt-12 pt-4'>
                Peer - To - Peer Program በዝግጁ የሚቀርቡ አጋዥ የጥናት መሳሪያዎች ላይ የዋጋ ቅናሽ በማድረግ 
                ለማበረታታት ተማሪዎች እንዲጠቀሙ የተቀረፀ ፕሮግራም ነው። <br />
              <p className='md:pt-4 pt-2'> የዚህ ፕሮግራም አባል ስትሆኑ አብረዋችሁ የሚማሩ ተማሪዎች  
                ዝግጁን እንዲጠቀሙ በመጋበዝ የሚገዙት ጥቅል ላይ ቅናሽ እንዲያገኙ ታረጋልችሁ። በተጨማሪም የዚህ ፕሮግራም አባላት የግቢ 
                ቆይታቸውን የሚያግዝ የገቢ ምንጭ ያገኛሉ።</p> 
              </p>
              </div>
              <div onClick={handleClick} className='flex justify-center mt-4 md:pt-8'>
                <button className="md:w-[304px] w-[160px] md:h-[64px] h-[30px] bg-gradient-to-r from-[#c23fcd] to-[#966ded] text-white hover:text-black rounded-md hover:opacity-80 transition-opacity duration-300">
                  <p className='md:text-[34px] text-[20px]'>Enter</p>
                </button>
                
              </div>
            </div>
          </div>
       
      </div> 
    </div>
  );
}

export default Peertopeer;