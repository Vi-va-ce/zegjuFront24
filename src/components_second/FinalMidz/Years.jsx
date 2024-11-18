import React, { useState } from 'react';
import { pages } from '../../assets';

function Years() {
  const exams = ['Exam 1', 'Exam 2', 'Exam 4', '2016', '2019','Exam 1', 'Exam 2', 'Exam 4', '2016', '2019'];
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const sendToAPI = () => {
    if (selectedItem) {
      // Replace this with your actual API call
      console.log('Sending item to API:', selectedItem);
    }
  };

  return (
    <div>
    <div className="w-[361px] md:w-[828px] h-[381px] md:h-[414px] bg-white shadow-[4px_-5px_9.34px_0px_rgba(146,146,146,0.16)] rounded-lg pt-[30px] flex flex-col items-center gap-4">

    <div className='flex items-center justify-center'>
          <p className='text-[#966DED] font-mulish text-[24px] md:text-[32px] font-semibold'>select Exam</p>
        </div>
      <div className="w-full flex flex-col items-center gap-4 overflow-y-auto ">
        {exams.map((item, index) => (
          <button
            key={index}
            className={`w-[290px] h-[70px] p-4 flex items-center justify-between text-black hover:text-white ${
              selectedItem === item ? 'bg-stone-400' : 'bg-stone-200'
            } rounded-md hover:bg-stone-400`}
            onClick={() => handleItemClick(item)}
          >
            <img src={pages} className="w-[40px] h-[40px]" alt="icon" />
            <p>{item}</p>
          </button>
        ))}
      </div>
     
    </div>
     <button
     className="mt-4 w-[361px] md:w-[828px] h-[50px] md:h-[64px] bg-blue-500 text-white rounded-md hover:bg-blue-700"
     onClick={sendToAPI}
     disabled={!selectedItem}
   >
     Continue
   </button>

   </div>
  );
}

export default Years;