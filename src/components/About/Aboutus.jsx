import React from 'react'
import HomeNavbar from '../Homepage/HomeNavbar'
import Decoration from './Decoration'
import Writing from './Writing'

function Aboutus() {
  return (
    <>
    <div className='homepage-background md:pb-12 pb-4'>
        <HomeNavbar/>
        <div className='md:mt-[60px] mt-[20px]'>
        <Decoration/>
        </div>
    </div>

    <div className='bg-gray-900 h-screen'>
        <Writing/>

    </div>
    </>
  )
}

export default Aboutus