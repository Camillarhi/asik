import React from 'react'
import logo from "../images/img2.JPG"
import Button from './button'

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container d-flex justify-content-between">
                <div className='d-flex align-items-center'>
                    <img src={logo} className="image-fluid me-3" width="100px" />
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a to="/home" className="nav-link active fw-bolder mx-2" aria-current="page" >PRODUCT</a>
                            </li>
                            <li className="nav-item">
                                <a to="/home" className="nav-link active fw-bolder mx-2" aria-current="page" >WHO WE SERVE</a>
                            </li>
                            <li className="nav-item">
                                <a to="/home" className="nav-link active fw-bolder mx-2" aria-current="page" >PRICING</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <Button
                     text="LOG IN" 
                     buttonColor="primary"
                     textColor="light" />

                    <Button 
                    text="GET STARTED"
                     buttonColor="success" 
                     textColor="dark" />
                </div>
            </div>
        </nav>

    )
}
