import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

import ErrorImage   from '../assets/error-image.png'

import { Layout } from '../Layouts/Layout';

export const ErrorPage = () => {


  return (
   <Layout>
      <div className='flex flex-col items-center justify-center py-5'>
            <img src={ErrorImage} alt="Error-img" className='object-cover w-1/4' />
      </div>
      {
            //add your code in between this tags
      }
   </Layout>
  )
}