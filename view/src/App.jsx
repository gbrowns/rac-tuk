//import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className="container mx-16 mt-4 px-0">
        <h1 className="text-4xl font-bold mb-4">Rotaract Club TUK</h1>
        <button className="btn btn-primary">Contribute</button>
      </div>
      <div className="card w-1/6 mx-16 mt-4" >
        <img src="" class="card-img-top" alt=""/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div class="dropdown mx-16 mt-4 px-0">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown link
        </a>

        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </>
  )
}

export default App
