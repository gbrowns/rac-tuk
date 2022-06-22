import React from 'react';
import "./About.css";
import img3 from './images/photo1.avif';
import img4 from './images/president.avif'
import img5 from './images/member.avif';
import img6 from './images/onelove.png';
import { FaGithub} from "react-icons/fa";
export default function(){
    return(
        <div className="container-fluid">
            <h1>
                About us
            </h1>
            <div class="row">
            <div class="col-md-6">
                <h1>
                    Our history
                </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua ut enim ad. <br />  
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua ut enim ad.  <br />  
                Lorem ipsum dolor sit amet, cons Lorem ipsum dolor sit amet, cons
                                </p>
            </div>
            
            <div class="col-md-6">
            <img src={img3}  className="img-responsive" width="700px"/>
            </div>
            </div>
            <div class="container">
            <h1>Our Guiding Principle</h1>
            <div class="row principle">
                <div class="col-md-4">
                    
                <div class="card">
                    <div class="card-title">
                    <FaGithub  className="icon"/> 
                    <h2>Our Vision</h2>
                    </div>
                    <div class="card-body">
                    <p>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod</p>
                    </div>
                    </div>
                                    </div>
                <div class="col-md-4">
                <div class="card">
                    <div class="card-title">  
                    
                    <FaGithub  className="icon"/>  
                    <h2>Our Mission</h2>
                    </div>
                    <div class="card-body">
                    <p>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod</p>
                    </div>
                    </div>
                </div>
                <div class="col-md-4">
                <div class="card">
                    <div class="card-title">
                    <FaGithub className="icon"/> 
                    <h2>Our Goals</h2>
                    </div>
                    <div class="card-body">
                    <p>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod</p>
                    </div>
                    </div>
                </div>
            </div>
            <br />
            <div class="row ">
               <div class="col-md-3">
               
               </div>
                <div class="col-md-6">
                <div class="card">
                    <div class="card-title">  
                    
                    <FaGithub  className="icon"/>  
                    <h2>O f a ll th e thi ng s w e thi nk, s a y or d o</h2>
                    </div>
                    <div class="card-body">
                    <p>
                        1.Is it the TRUTH <br/>
                        2.Is it FAIR to all concerned<br/>
                        3.Will it build GOOD WILL and BETTER
                        FRIENDSHI P<br/>
                        4.Will it be BENEFICIAL to all
                        concerned ?</p>
                    </div>
                    </div>
                </div>
                <div class="col-md-3">
               
                </div>
              </div>

            </div> <br />

            <div class="row board">
                <div class="col-md-6">
                    <div class="row">
                    <div class="col-md-3">
                       
                    </div>
                    <div class="col-md-6">
                        <img src={img4} width="150"/>
                        <h5>President</h5>
                        <h5>John Doe</h5>
                    </div>
                    <div class="col-md-3">
                       
                    </div>
                    </div> <br />
                    <div class="row">
                    <div class="col-md-2">
                    
                    </div>
                    <div class="col-md-3">
                        <img src={img5} width="150" height="150"/>
                        <p>President</p>
                    </div>
                    <div class="col-md-3">
                    <img src={img5} width="150" height="150"/>
                    <p>President</p>
                    </div>
                    <div class="col-md-3">
                    <img src={img5} width="150" height="150"/>
                    <p>President</p>
                    </div>
                    <div class="col-md-1">
                    
                    </div>
                    </div> <br />
                    <div class="row">
                    
                    <div class="col-md-3">
                        <img src={img5} width="150" height="150"/>
                        <p>President</p>
                    </div>
                    <div class="col-md-3">
                    <img src={img5} width="150" height="150"/>
                    <p>President</p>
                    </div>
                    <div class="col-md-3">
                    <img src={img5} width="150" height="150"/>
                    <p>President</p>
                    </div>
                    <div class="col-md-3">
                    <img src={img5} width="150" height="150"/>
                    <p>President</p>
                    </div>
                    </div> <br />
                    <div class="row">
                    
                    <div class="col-md-3">
                       
                    </div>
                    <div class="col-md-3">
                    <img src={img5} width="150" height="150"/>
                    <p>President</p>
                    </div>
                    <div class="col-md-3">
                    <img src={img5} width="150" height="150"/>
                    <p>President</p>
                    </div>
                    <div class="col-md-3">
                   
                    </div>
                    <a href="/" >View Members</a>
                    </div>
                </div>
                <div class="col-md-6 description">
                <p>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmodLorem ipsum dolor sit amet,
                    consectetur adipiscing elit, <br />
                    sed do eiusmodLorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmodLorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmodLorem ipsum dolor sit amet,
                    consectetur adipiscing elit, <br />
                    sed do eiusmodLorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod sed do eiusmodLorem ipsum dolor sit amet,
                    consectetur adipiscing elit</p>
                   
                </div>

                
            </div>
           
            <h1>Committees</h1>
            <div class="row">
                <div class="col-6">
                    <h2> <span>1</span> Professional development</h2>
                    <p>sed do eiusmodLorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod sed do eiusmodLorem ipsum dolor sit amet,</p>
                </div>
                <div class="col-6">
                    <h2> <span>2</span> Professional development</h2>
                    <p>sed do eiusmodLorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod sed do eiusmodLorem ipsum dolor sit amet,</p>
                </div>
            </div><br />
            <div class="row">
                <div class="col-6">
                    <h2> <span>3</span> Professional development</h2>
                    <p>sed do eiusmodLorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod sed do eiusmodLorem ipsum dolor sit amet,</p>
                </div>
                <div class="col-6">
                    <h2> <span>5</span> Professional development</h2>
                    <p>sed do eiusmodLorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod sed do eiusmodLorem ipsum dolor sit amet,</p>
                </div>
            </div><br />
            <div class="row">
                <div class="col-6">
                    <h2> <span>1</span> Professional development</h2>
                    <p>sed do eiusmodLorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod sed do eiusmodLorem ipsum dolor sit amet,</p>
                </div>
                <div class="col-6">
                    <h2> <span>6</span> Professional development</h2>
                    <p>sed do eiusmodLorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod sed do eiusmodLorem ipsum dolor sit amet,</p>
                </div>
            </div><br />
            <div class="row">
                <div class="col-6">
                    <h2> <span>7</span> Professional development</h2>
                    <p>sed do eiusmodLorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod sed do eiusmodLorem ipsum dolor sit amet,</p>
                </div>
                <div class="col-6">
                    
                </div>
            
            </div>

            <button>Contact Director </button>
          <div>
          <img src={img6} className="love" alt="onelove" width="700px" />
          </div>
        </div>
        
        
    )
   
}