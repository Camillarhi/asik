import React, { useState } from 'react';
import { BiChevronsDown } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import { IoNavigateCircleSharp } from "react-icons/io5";
import banner from "../images/img.JPG";
import Button from './button';
import PageModal from './modal';

export default function Banner() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            {/* start section */}
            <section className="d-md-flex justify-content-between container mt-5 pt-4">
                <div className='w-50-md me-2 pt-2 text-center-sm'>
                    <div className='d-flex justify-content-center mb-2'>
                        <BsPersonCircle className='text-primary fs-2' />
                    </div>
                    <div className='py-1'>
                        <h1 className='fw-bolder'>Track Your Employees'</h1>
                        <h1 className='fw-bolder'> Time And Automate</h1>
                        <h1 className='fw-bolder'> Your Timesheets.</h1>
                    </div>
                    <div className='d-flex'>
                        <hr className='w-25 me-2' />
                        <hr className='w-25 ms-2' />
                    </div>
                    <p>Asiiko helps youtrack your employees' time and automate</p>
                    <p> timesheets. Every day, real-time updates that let you keep on</p>
                    <p> top of your team's job activities.</p>
                    <div className='py-2 d-sm-flex align-items-center'>
                        <Button
                            text="GET STARTED TODAY"
                            buttonClass="btn-primary mb-2"
                            textColor="light"
                            mod={() => setModalShow(true)}
                        />
                        <Button
                            text="LEARN MORE mb-2"
                            style={{ backgroundColor: "#7FFFD4" }}
                            textColor="dark"
                            icon={<BiChevronsDown className='fs-4 ms-3' />} />
                    </div>
                    <div className='d-flex justify-content-end me-5 mt-2'>
                        <IoNavigateCircleSharp className='text-dark fs-2' />
                    </div>
                </div>
                <div className='w-50 ms-2'>
                    <img src={banner} alt="banner" width="500px" className='img-fluid' />
                </div>
            </section>
            {/* end section */}

            {/* start modal */}
            <PageModal show={modalShow}
                onHide={() => setModalShow(false)} />

            {/* end model */}
        </>
    )
}
