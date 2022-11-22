import React, { useState } from 'react'
import logo from "../images/img2.JPG"
import Button from './button'
import PageModal from './modal';

export default function NavBar() {
    const [modalShow, setModalShow] = useState(false);

    const openNav = () => {
        var navCollapse = document.querySelector("#navbarToggler");
        if (
            navCollapse.classList.contains("show")
        ) {
            navCollapse.classList.remove("show");
        } else {
            navCollapse.classList.add("show");
        }
    };

    return (
        <>
            {/* start nav */}
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    {/* <a className="" href="#">Navbar</a> */}
                    <img src={logo} className="navbar-brand image-fluid me-3 navbar-brand" width="100px" alt='logo' />
                    <button className="navbar-toggler" type="button" onClick={() => openNav()}>
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a href='/' className="nav-link active fw-bolder mx-2" aria-current="page" >PRODUCT</a>
                            </li>
                            <li className="nav-item">
                                <a href='/' className="nav-link active fw-bolder mx-2" aria-current="page" >WHO WE SERVE</a>
                            </li>
                            <li className="nav-item">
                                <a href='/' className="nav-link active fw-bolder mx-2" aria-current="page" >PRICING</a>
                            </li>
                        </ul>
                        <div className="d-flex">
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
                </div>
                {/* start modal */}
                <PageModal show={modalShow}
                    onHide={() => setModalShow(false)} />

                {/* end modal */}
            </nav>
            {/* end nav */}


        </>
    )
}
