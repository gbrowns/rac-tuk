import React from 'react'
import { Link } from 'react-router-dom'
import RotaractLogo from '../assets/rotaract-logo-bg.png'

import {MdOutlineDeveloperMode, MdOutlineSchool} from 'react-icons/md'

export const Footer = () => {
      const year = new Date().getFullYear()
  return (
      <footer className='px-[8rem] bg-[#f6fafd8d] relative'>
            <div className='grid grid-cols-[1fr,0.3fr,0.3fr,0.3fr] py-5'>
                  <div>
                        <img src={RotaractLogo} alt='rotaract-logo' className='w-[160px] flex-initial mr-auto mb-2 object-cover'/>
                        <p className='w-[650px] leading-8 text-lg'>
                              Rotary Club of TUK was Chartered 10 years ago and continues to grow its membership. Our main goal being to execute Rotary International’s objectives in our world’s most persistent issues.
                        </p>

                        <div>
                        </div>
                  </div>
                  <div className='flex flex-col'>
                        <h3 className='font-bold text-lg mb-2'>Site map</h3>
                        <Link className='text-lg font-regular my-2' to="/">Home</Link>
                        <Link className='text-lg font-regular my-2' to="/about-us">About Us</Link>
                        <Link className='text-lg font-regular my-2' to="/get-involved">Get Involved</Link>
                        <Link className='text-lg font-regular my-2' to="/events">Events</Link>
                        <Link className='text-lg font-regular my-2' to="/projects">Projects</Link>
                        <Link className='text-lg font-regular my-2' to="/donate">Donate</Link>

                  </div>
                  <div className='flex flex-col'>
                        <h3 className='font-bold text-lg mb-2'>Committees</h3>
                        <Link className='text-lg font-regular my-2' to="/">Public Relations</Link>
                        <Link className='text-lg font-regular my-2' to="/">Proffessional development</Link>
                        <Link className='text-lg font-regular my-2' to="/">Community service</Link>
                        <Link className='text-lg font-regular my-2' to="/">Club Service</Link>
                        <Link className='text-lg font-regular my-2' to="/">Finance & Fundraising</Link>
                        <Link className='text-lg font-regular my-2' to="/">International Service</Link>

                  </div>
                  <div className='flex flex-col'>
                        <h3 className='font-bold text-lg mb-2'>Resourses</h3>
                        <Link className='text-lg font-regular my-2' to="/">Rotary Grace</Link>
                        <Link className='text-lg font-regular my-2' to="/">Four way test</Link>
                        <Link className='text-lg font-regular my-2' to="/">Objectives</Link>
                        <Link className='text-lg font-regular my-2' to="/">Rotary handbook</Link>

                  </div>
            </div>
            <div className='flex flex-row justify-between items-center border-t border-ccc py-4'>
                  <span>&copy; {year} Rotaract </span>
                  <span className='flex flex-row'>
                        <MdOutlineSchool  className='text-xl mr-1'/>
                        The Technical University of Kenya
                  </span>
                  <span className='flex flex-row'>
                        <MdOutlineDeveloperMode className='text-xl mr-1'/>
                        Developers
                  </span>
            </div>
      </footer>
  )
}
