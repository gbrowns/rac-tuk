import React from 'react';
import "./Navbar.css"
import img1 from './images/rotaract.png'
import img2 from './images/tuk.png'
import "bootstrap/js/src/collapse.js";




export default function portfolio(){
    return (
        <div className="container-fluid">
        <div className="portfolio">
            <nav class="navbar navbar-expand-lg navbar-light bg-white ">

        <div class="container-fluid"  >
        <img src={img1} alt="rotaract logo" className="img-responsive logo1" width="140px" />
        <img src={img2} alt="rotaract logo" className="img-responsive logo" width="60px" />
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul class="navbar-nav me-auto socials mb-2 mb-lg-0">
         <li class="nav-item">
          <a class="nav-link active" href="https://github.com/Saitore973">Home  </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="https://twitter.com/SaitoreCodes">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="https://www.linkedin.com/in/virginia-saitore-7a6b90191/">News and Updates</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="https://www.linkedin.com/in/virginia-saitore-7a6b90191/">Gallery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="https://www.linkedin.com/in/virginia-saitore-7a6b90191/">Events</a>
        </li>
      </ul>
      <a href="">
       <button class="resume">
      Contribute
  </button></a>
      
    </div>
    
  </div>
  
</nav>
        </div>
        </div>
    )
}