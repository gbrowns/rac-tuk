import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

import { Layout } from '../Layouts/Layout';

import BannerImg from '../assets/rac-image.jpg';
import Image1 from '../assets/rac-image-1.jpg';
import Image2 from '../assets/rac-image-2.jpg';
import Image3 from '../assets/rac-image-3.jpg'
import RotaractLogo from '../assets/rotaract-logo-bg.png'

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
                  <h1 className='text-[6rem] font-semibold leading-[1.3] w-[60%] text-white sm:text[2rem]'>Rotaract Club of Technical University of Kenya</h1>
                  <button className='btn btn-primary text-lg bg-transparent font-medium border-2 border-[#edc6c6cc] rounded-sm px-16 py-3 my-4 '>
                        <Link className='font-semibold' to="/donate">Join Us</Link>
                  </button>
            </div>
      </div>

      <section className='py-8 px-[12rem]'>
            <div className='flex items-center justify-center py-14'>
                  <h1 className='text-4xl text-center font-semibold w-1/3'>Get To Know More About Our Club</h1>
            </div>
      
            <div className=' grid grid-cols-2 bg-slate-100'>
                  <div>
                        <h1 className='text-2xl font-semibold'>About Us</h1>
                        <p className='text-lg'>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque odio vel ratione amet magni sit accusamus voluptate alias cum iste voluptatibus dolore molestias, nesciunt quidem exercitationem aliquam impedit labore consectetur harum aspernatur debitis optio. Rem consectetur, eligendi debitis a quis consequuntur minima vero delectus eveniet voluptatibus veritatis. Architecto, fugit perferendis.
                        </p>
                        <button className="btn btn-primary">
                              Read More
                        </button>
                  </div>
                  <img src={Image1} alt="image" />
            </div>
            <div className=''>
                  <div className='flex flex-col items-center justify-center py-12'>
                        <h1 className='text-center text-2xl font-semibold'>Our pillars</h1>
                        <p className='text-center text-lg'>some text here about the pillars</p>

                  </div>
                  <div className='grid grid-cols-4 gap-4'>
                        <div className='flex flex-col items-center bg-slate-200 p-5 cursor-pointer rounded-md'>
                              <span>icon</span>
                              <h1>Community Service</h1>
                              <p>
                                    some text here about the pillars
                                    some text here about the pillars
                                    some text here about the pillars
                                    some text here about the pillars
                              </p>
                        </div>

                        <div className='flex flex-col items-center bg-slate-200 p-5 cursor-pointer rounded-md'>
                              <span>icon</span>
                              <h1>Community Service</h1>
                              <p>
                                    some text here about the pillars
                                    some text here about the pillars
                                    some text here about the pillars
                                    some text here about the pillars
                              </p>
                        </div>

                        <div className='flex flex-col items-center bg-slate-200 p-5 cursor-pointer rounded-md'>
                              <span>icon</span>
                              <h1>Community Service</h1>
                              <p>
                                    some text here about the pillars
                                    some text here about the pillars
                                    some text here about the pillars
                                    some text here about the pillars
                              </p>
                        </div>

                        <div className='flex flex-col items-center bg-slate-200 p-5 cursor-pointer rounded-md'>
                              <span>icon</span>
                              <h1>Community Service</h1>
                              <p>
                                    some text here about the pillars
                                    some text here about the pillars
                                    some text here about the pillars
                                    some text here about the pillars
                              </p>
                        </div>
                  </div>

                  <div>
                        <div className='flex flex-col items-center justify-center py-12'>
                              <h1 className='text-center text-2xl font-semibold'>Our Partners</h1>
                        </div>
                      
                        <div className='flex flex-row items-center justify-evenly'>
                              <img className='object-cover w-1/12' src={RotaractLogo} alt="logo" />
                              <img className='object-cover w-1/12' src={RotaractLogo} alt="logo" />
                              <img className='object-cover w-1/12' src={RotaractLogo} alt="logo" />
                        </div>

                  </div>
            </div>
      </section>

      <section className=' px-[12rem] py-14'>

            <div className='grid grid-cols-[500px,1fr] gap-x-10'>
                  <div className='bg-slate-200 flex flex-col justify-center items-center'>
                        <h1 className='text-center text-2xl font-semibold'>Pixel Perfect Moments</h1>
                        <p className='text-center text-lg'>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <button className='btn btn-primary'>
                              View Gallery
                        </button>
                  </div>

                  <div className='grid grid-cols-3 gap-3'>
                        <img className='object-cover h-[20vw]' src={Image1} alt="logo" />
                        <img className='object-cover h-[20vw]' src={Image1} alt="logo" />
                        <img className='object-cover h-[20vw]' src={Image1} alt="logo" />
                        <img className='object-cover h-[20vw]' src={Image1} alt="logo" />
                        <img className='object-cover h-[20vw]' src={Image1} alt="logo" />
                        <img className='object-cover h-[20vw]' src={Image1} alt="logo" />

                  </div>
            </div>
      </section>
      <section className='py-8 px-[12rem]'>
            <h1 className='text-center text-2xl font-semibold'>Our Team</h1>
            <p className='text-center text-lg'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className='flex flex-row items-center justify-center flex-wrap gap-3' >
                  <div className='flex flex-col items-center w-1/12'>
                        <img className='object-cover w-auto' src={Image1} alt="logo" />
                        <h1 className='text-xl font-semibold'>John Doe</h1>
                        <p className='text-lg'>President</p>
                  </div>
                  <div className='flex flex-col items-center  w-1/12'>
                        <img className='object-cover w-auto ' src={Image1} alt="logo" />
                        <h1 className='text-xl font-semibold'>John Doe</h1>
                        <p className='text-lg'>President</p>
                  </div>
                  <div className='flex flex-col items-center w-1/12'>
                        <img className='object-cover w-auto' src={Image1} alt="logo" />
                        <h1 className='text-xl font-semibold'>John Doe</h1>
                        <p className='text-lg'>President</p>
                  </div>
                  <div className='flex flex-col items-center w-1/12'>
                        <img className='object-cover w-auto' src={Image1} alt="logo" />
                        <h1 className='text-xl font-semibold'>John Doe</h1>
                        <p className='text-lg'>President</p>
                  </div>
            </div>

            <div className='flex items-center justify-center'>
                  <button className='btn btn-primary'>
                        Get Involved
                  </button>
            </div>
,      </section>
   </Layout>
  )
}
