import React from 'react'

function MainNoteBar({subjectName}) {
  const handleRefreshClick = () => {
    window.location.reload();
  };

  return (
    <div className='flex'>
      <div className='ml-[155px]'>
      <div className=' md:w-[420px] md:h-[40px] md:rounded-xl '>

        <p className='md:text-[18px] font-mulish font-bold text-green-500 md:ml-2 md:pt-2'></p>
        
      </div>
      </div>

      <div className='md:ml-[90px] md:pt-2'>
        <p className='md:text-[18px] font-semibold cursor-pointer' onClick={handleRefreshClick}> Courses</p>
       
      </div>

      <div className='md:ml-[100px] md:pt-2'>
      <p className='md:text-[18px] font-semibold cursor-pointer'> Logout</p>
      </div>
    </div>
  )
}

export default MainNoteBar