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
                        </div>
                    
                        </div>
            </div>
        </div>
    )
}