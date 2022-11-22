import React from 'react'
import './navbar.css'
//navbar LOGO
import logo from '../../assets/img/homePage/logo.jpg';
import {FaHeart} from 'react-icons/fa'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30  flex items-center justify-between bg-[#E7ECEE] px-4 ">
    <div className="flex items-center justify-center md:w-1/5">
      
        <div className="headerLink h-5 -mt-16 ">
        <img className='md:h-32 h-24' src={logo} />
        </div>
     
    </div>
    <div className=" hidden flex-1 items-center justify-center space-x-8 md:flex ">
      <a className="headerLink">Home</a>
      <a className="headerLink">About</a>
      <a className="headerLink">Work</a>
      <a className="headerLink">Contact</a>
    </div>
    <div className="flex items-center  justify-center sm:gap-x-4  md:w-1/5">
     <div className='bg-rose-500 flex justify-center items-center space-x-1 text-white px-6 py-6'>
     <span>
      DONATE
      </span>
      <span>
    <FaHeart className='text-2xl animate-bounce' />
      </span>
     </div>
    </div>
  </header>
  )
}

export default Navbar