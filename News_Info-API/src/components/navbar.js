import React from 'react'

import {
    Link
  } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <div className="container-fluid"><h5 style={{color:'whitesmoke'}}>NewsInfo</h5>
                    {/* <img className="navbar-brand" src='cover.png' alt='' style={{width:"100px", height:"60px"}}/> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/technology">Technology</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/science">Science</Link>
                            </li>
                            
                        
                        </ul>
                    </div>
                </div>
        </nav>
    </div>
  )
}


