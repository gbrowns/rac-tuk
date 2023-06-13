import React from 'react'
import { Link } from 'react-router-dom'

import RotaractLogo from '../assets/rotaract-logo-bg.png'

//icons
import { BsInstagram, BsTwitter } from 'react-icons/bs';

export const Navbar = () => {
  return (
      <nav className='flex flex-row items-center h-[10vh] px-[8rem] bg-white shadow-sm fixed top-0 z-50 w-full'>
            <img src={RotaractLogo} alt='rotaract-logo' className='w-[160px] flex-initial mr-auto object-cover'/>

            <Link className='text-lg font-medium mx-4' to="/">Home</Link>
            <Link className='text-lg font-medium mx-4' to="/about-us">About Us</Link>
            <Link className='text-lg font-medium mx-4' to="/gallery">Gallery</Link>
            <Link className='text-lg font-medium mx-4' to="/get-involved">Get Involved</Link>
            <Link className='text-lg font-medium mx-4' to="/events">Events</Link>
            <BsInstagram className='text-xl mx-4 cursor-pointer' />
            <BsTwitter className='text-xl mx-2 cursor-pointer' />
            <button className='btn btn-danger text-lg font-medium mx-4 border-none'>
                  <Link className='' to="/donate">Join Us</Link>
            </button>
      </nav>
  )
}