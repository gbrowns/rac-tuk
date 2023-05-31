//import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

function App() {

  return (
    <>
      <div className="container mx-16 mt-4 px-0">
        <h1 className="text-4xl font-bold mb-4">Hello, React with Bootstrap and Tailwind!</h1>
        <button className="btn btn-primary">Bootstrap Button</button>
      </div>
      <div className="card w-1/6 mx-16 mt-4" >
        <img src="" class="card-img-top" alt=""/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </>
  )
}

export default App
