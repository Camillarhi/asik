import React from 'react';
import banner from "../images/img.JPG";
import { BsPersonCircle } from "react-icons/bs";
import { IoNavigateCircleSharp } from "react-icons/io5"
import { BiChevronsDown } from "react-icons/bi"
import Button from './button';

export default function Banner() {
    return (
        <section className="d-flex justify-content-between container mt-5 pt-4">
            <div className='w-50 me-2 pt-3'>
                <div className='d-flex justify-content-center mb-5'>
                    <BsPersonCircle className='text-primary fs-2' />
                </div>
                <div className='py-2'>
                    <h1 className='fw-bolder'>Track Your Employees'</h1>
                    <h1 className='fw-bolder'> Time And Automate</h1>
                    <h1 className='fw-bolder'> Your Timesheets.</h1>
                </div>
                <hr />
                <p>Asiiko helps youtrack your employees' time and automate</p>
                <p> timesheets. Every day, real-time updates that let you keep on</p>
                <p> top of your team's job activities.</p>
                <div className='py-5'>
                    <Button
                        text="GET STARTED TODAY"
                        buttonColor="primary"
                        textColor="light" />

                    <Button
                        text="LEARN MORE"
                        buttonColor="success"
                        textColor="dark"
                        icon={<BiChevronsDown className='fs-4 ms-3' />} />
                </div>
                <div className='d-flex justify-content-end'>
                    <IoNavigateCircleSharp className='text-dark fs-2' />
                </div>
            </div>
            <div className='w-50 ms-2'>
                <img src={banner} alt="banner" />
            </div>
        </section>
    )
}
