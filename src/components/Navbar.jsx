import React from 'react'
import RotaractLogo from '../assets/rotaract-logo.png'

function Navbar() {
  return (
    <div className='Navbar flex center '>
      <img src={RotaractLogo} alt="Rotaract Logo" width="200px"/>
      <a href="#">Home</a>
      <a href="#">About Us</a>
      <a href="#">Our Causes</a>
      <a href="#">Club News</a>
      <a href="#">Gallary</a>
    </div>
  )
}

export default Navbar