import React from 'react'

import { Footer, Navbar } from '../components'

export const Layout = ({children}) => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <main className=''>
        {children}
      </main>

      <Footer/>

    </div>
  )
}
