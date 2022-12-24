
import React from 'react';
import "../css/appoint.css";
export default function Appointment() {
  return (

    <div className="row m-md-5 m-3 ">
      <div className="col-lg-4 bg-blue py-5 px-5">
        <h4 className="text-center text-white mb-4">Contact Details</h4>
        <div className="row">
          <div className=" col-lg-4 col-md-5 offset-lg-0 offset-md-2 col-4 ">
            <p className="fw-bold">Call Us:</p>
          </div>
          <div className=" col-lg-8 col-md-5 col-8">
            <p>+91 8633203580</p>
          </div>
          <div className=" col-lg-4 col-md-5 offset-lg-0 offset-md-2 col-4">
            <p className="fw-bold">Location:</p>
          </div>
          <div className=" col-lg-8 col-md-5 col-8">
            <p>Fortis Banglore Karnataka  India</p>
          </div>
          <div className=" col-lg-4 col-md-5 offset-lg-0 offset-md-2 col-4">
            <p className="fw-bold">Work hours:</p>
          </div>
          <div className=" col-lg-8 col-md-5 col-8">
            <p className>Monday-Friday 8:00AM-8:00PM Sunday-closed</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 bg-red py-5 px-5">
        <form action="mailto:akshatha.mk.12.04@gmail.com" method="post" enctype="text/plain">
          <h4 className="text-center text-white mb-4">Make An Appointment</h4>
          <div className="row" >
          
            <div className="col-md-6 col-12 my-md-0 my-2">
              <input type="text" className="form-control bg-darkred" placeholder="Your Full Name" />
            </div>
            <div className="col-md-6 col-12 my-md-0 my-2 ">
              <input type="email" className="form-control bg-darkred" placeholder="Your Email" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-12 my-2">
              <input type="text" className="form-control bg-darkred" placeholder="Your Phone Number" />
            </div>
            <div className="col-md-6 col-12 my-2">
              <select name id="dropDown" className="form-control bg-darkred shadow-none">
                <option value hidden selected>Services</option>
                <option value="service 1">General</option>
                <option value="service 1">Emergency</option>
                <option value="service 1">Ambulance</option>
              </select>
              
            </div>
            
            <div className>
              <textarea cols={10} rows={3} className="form-control bg-darkred shadow-none" placeholder="Message" defaultValue={""} />
            </div>
            <div className=" my-2" > <button className="btn w-100 shadow-none text-uppercase msg-btn">Send email</button> </div>
          </div>
        </form>
      </div>
      <div className="col-lg-4 bg-blue py-5 px-5">
        <h4 className="text-center text-white mb-4">Maintenance Services</h4>
        <div className="col">
          <p className>Fortis Healthcare Limited is an Indian multinational chain of private hospitals headquartered in India. Fortis started its health care operations from Mohali, Punjab, where the first Fortis hospital was started.</p>
        </div>
      </div>
    </div>
  );
}