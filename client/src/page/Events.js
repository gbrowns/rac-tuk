import React from "react"
import "./Events.css"
import "bootstrap/js/src/collapse.js"
import img5 from "../images/bg.png"

 

export default function Events(){

    return (
        <div className="Events">
            <header className="header">
            
                <h1>EVENTS</h1>

                </header>
                <h5><b>Upcoming</b> | Previous Events</h5>
                <hr/>
            <div className="container-fluid">
                        <div className="row">
                    <div className="col-md-6">
                        <img src={img5}
                        alt="pattern-bg"
                        className="img-responsive"
                        width="140px"
                        />
                        </div>
                        <div className="col-md-6">
                            <p className="pt-5">
                                Lorem13
                            </p>
                            <hr/>
                            <button>
                                <a href="/">View Event Details </a>
                            </button>
                        </div>
                    
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-md-6">
                            <img src={img5}
                        alt="pattern-bg"
                        className="img-responsive"
                        width="140px"
                        />
                        </div>
                        <div className="col-md-6">
                            <p className="pt-5">lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
            ad.</p>
            <hr/>
            <button>
                                <a href="/">View Event Details </a>
                            </button>
                        </div>
                                
                                </div>
                                <hr/>
                                <div className="row">
                            <div className="col-md-6">
                            <img src={img5}
                        alt="pattern-bg"
                        className="img-responsive"
                        width="140px"
                        />
                        </div>
                        <div className="col-md-6">
                            <p className="pt-5">lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
            ad.</p>
            <hr/>
            <button>
                                <a href="/">View Event Details </a>
                            </button>
                        </div>
                                
                                </div>
                            <hr/>
                            <h6 className="pt-4">
                                <a href="/">3 available events</a>
                                </h6>

            </div>
        </div>
    )
}