import React from 'react'

import { Footer, Navbar } from '../components'

export const Layout = ({children}) => {
  return (
    //layout to be modified base on screen size
    <div className='flex flex-col'>
      <Navbar />
      <main className='relative top-28'>
        {children}
      </main>
      <Footer/>
    </div>
  )
}
