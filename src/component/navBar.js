import React, { useState } from 'react'
import logo from "../images/img2.JPG"
import Button from './button'
import PageModal from './modal';

export default function NavBar() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top">
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
                        buttonClass="btn-primary"
                        textColor="light" />

                    <Button
                        text="GET STARTED"
                        style={{ backgroundColor: "#7FFFD4" }}
                        textColor="dark"
                        mod={() => setModalShow(true)}
                    />
                </div>
            </div>
            <PageModal show={modalShow}
                onHide={() => setModalShow(false)} />
        </nav>

    )
}
