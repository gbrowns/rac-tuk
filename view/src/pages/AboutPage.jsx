// import React, {useEffect, useState} from 'react'
// import { Link } from 'react-router-dom';
import { Layout } from '../Layouts/Layout';
import Img1 from '../assets/rac-image-1.jpg';
import Img2 from '../assets/rac-image-2.jpg';
import Img3 from '../assets/rac-image-3.jpg'

export const AboutPage = () => {


  return (
   <Layout>
    
      <h1 className='text-4xl font-bold text-center mb-4'>ABOUT US</h1>
      {
            <container>
<section className='flex flex-col md:flex-row justify-center items-center'>
  <div className='flex justify-center flex-col max-w-md ml-5'>
    <h1 className='font-bold text-4xl' >Who are we?</h1>
    <p className=''>Rotaract club bring together people of ages 18 and older to exchange ideas
    with leaders in the community to develop leadership and professional skills, and have fun through service 
    In communities, worldwide Rotary and Rotaract members work side by side to take action through service. </p>
  </div>
  <picture className=''>
    <img src={Img1} className='flex flex-1 h-auto max-w-md rounded-md' alt="people"/>
  </picture>
</section>

<section className='flex flex-col md:flex-row justify-center items-center mt-5'>
  <div className='flex justify-center flex-col max-w-md ml-5'>
    <h1 className='font-bold text-4xl' >Our Vision</h1>
    <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> 
      Dolore natus dolor odit aspernatur magni explicabo,  quae rem possimus itaque minima!</p>
  </div>
  <picture className='md:order-first'>
    <img src={Img2} className='flex flex-1 h-auto max-w-md rounded-md ' alt="people"/>
  </picture>
</section>

<section className='flex flex-col md:flex-row justify-center items-center mt-5'>
  <div className='flex justify-center flex-col max-w-md ml-5'>
    <h1 className='font-bold text-4xl' >Our Misson</h1>
    <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> 
      Dolore natus dolor odit aspernatur magni explicabo,  quae rem possimus itaque minima!</p>
  </div>
  <picture className=''>
    <img src={Img3} className='flex flex-1 h-auto max-w-md rounded-md' alt="people"/>
  </picture>
</section>
</container>
}
         <section className='what we do px-20 mt-5 mb-3'>
<h2 className='font-semibold text-center text-3xl mb-3'>What we do</h2>
<section className=' flex flex-col gap-5 md:flex-row md:justify-between '>

<div className='card w-36 rounded-t-3xl bg-[#d91b5c]'>
  <div className="card-body">
    <p className="card-text font-semibold text-white text-center">Professional Development.</p>
  </div>
  </div>

  <div className='card w-36 rounded-t-3xl bg-[#eea7c1]'>
  <div className="card-body">
    <p className="card-text font-semibold text-center">Leadership Development.</p>
  </div>
  </div>

  <div className='card w-36 rounded-t-3xl bg-[#d91b5c]'>
  <div className="card-body">
    <p className="card-text font-semibold text-white text-center">Community Service.</p>
  </div>
</div>
</section>
         </section>
   </Layout>
  )
}