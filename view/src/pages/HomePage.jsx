import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

import { Layout } from '../Layouts/Layout';

import BannerImg from '../assets/rac-image.jpg';
import Image1 from '../assets/rac-image-1.jpg';
import Image2 from '../assets/rac-image-2.jpg';
import Image3 from '../assets/rac-image-3.jpg'

export const HomePage = () => {
      const [currentImage, setCurrentImage] = useState(0);

      const images = [BannerImg, Image1, Image2, Image3];

      useEffect(() => {
            const interval = setInterval(() => {
                  setCurrentImage(prevImage => (prevImage + 1) % images.length);
            }, 8000);

            return () => {
                  clearInterval(interval);
            }
      }, []);

  return (
   <Layout>
      <div className='h-[90vh] flex items-center'>
            <img src={images[currentImage]} alt="banner-img" className=' absolute object-cover h-[90vh] w-screen transition-all ease-in-out' />
            <div className='absolute h-[90vh] w-full bg-[#030b1220]'></div>
            <div className='z-10 relative px-[8rem]'>
                  <h1 className='text-[6rem] font-semibold leading-[1.3] w-[60%] text-white'>Rotaract Club of Technical University of Kenya</h1>
                  <button className='btn btn-primary text-lg bg-transparent font-medium border-2 border-[#edc6c6cc] rounded-sm px-16 py-3 my-4 '>
                        <Link className='font-semibold' to="/donate">Join Us</Link>
                  </button>
            </div>
      </div>

      <section className='py-8'>
            <h1 className='text-4xl text-center font-semibold'>About Us</h1>

            <div>

            </div>
      </section>
   </Layout>
  )
}
