import React from 'react'
import { ig, tg, tw, yt } from '../../../assets'
import { Link } from 'react-router-dom'

function Links() {
  return (
<div className='flex space-x-2 md:space-x-8 mr-3'>
    <div>
    <a href="https://www.instagram.com/zegjuexamprep?igsh=NDJ5YWw1aWV0eWdl">
      <img src={ig} className='w-[17px] md:w-[24px] h-[17px] md:h-[24px]' />
      </a>
    </div>
    <div>
      <a href='https://t.me/ZegjuExamPrep'>
      <img src={tg} className='w-[17px] md:w-[24px] h-[17px] md:h-[24px]' />
      </a>
    </div>
    <div>
    <Link to="/HuPromo">
      <img src={tw} className='w-[17px] md:w-[24px] h-[17px] md:h-[24px]' />
      </Link>
    </div>
    <div>

    <a href="https://www.youtube.com/channel/UCbUpUOUD82ATNLltD9jyXJg">
      <img src={yt} className='w-[17px] md:w-[24px] h-[17px] md:h-[24px]' />
    </a>
    </div>
</div>
  )
}

export default Links