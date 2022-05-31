import React from "react";
import './ContactUs.css'

const map = new URL("../../images/map.png", import.meta.url)
const phone = new URL("../../images/phone.png", import.meta.url)
const email = new URL("../../images/email.png", import.meta.url)

function ContactUs() {
    return (

        <div >
            <div className="ContactUs-body">
                <h1> Let's build something classy together.</h1>
                <h4> Drop us a message if you wish to convey something. We will be glad to hear from you.</h4>
                <div className="card  sign-in-form">
                    <div className="card-body">
                        <form>
                            <div class="row g-2">
                                <div class="col-auto">
                                    <input type="name" className="form-control" id="fname" placeholder="First Name" />
                                </div>
                                <div class="col-auto">
                                    <input type="name" className="form-control" id="lname" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="mb-2 pt-2">
                                <input type="mobile" className="form-control" id="number" placeholder="Mobile Number" />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div class="d-grid gap-2 col-6 mx-auto">
                                <button class="btn btn-primary" type="button">Send</button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
            <div>
                <h2>Get In Touch</h2>
                <div className="cards">
                    <div className="card getTouch text-white bg-secondary mb-3">
                        <div className="card-header"><img src={map} className = "center" height="38px" width="38px" /></div>
                        <div className="card-body">
                            <h4 className="card-title">Address</h4>
                            <h6>Amritsar, Punjab</h6>
                            <p className="card-text">Building No. 454, Ranjeet Avenue, D block.</p>
                            <h6>Indore, Madhya Pradesh</h6>
                            <p className="card-text">Building No. 214, Greaves Enclave, H block.</p>
                        </div>
                    </div>
                    <div className="card getTouch text-white bg-secondary mb-3">
                        <div className="card-header"><img src={phone} className = "center" height="38px" width="38px" /></div>
                        <div className="card-body">
                            <h4 className="card-title">Phone</h4>
                            <h6>Amritsar, Punjab</h6>
                            <p className="card-text">9845678456</p>
                            <h6>Indore, Madhya Pradesh</h6>
                            <p className="card-text">9865214587</p>
                        </div>
                    </div>
                    <div className="card getTouch  text-white bg-secondary mb-3">
                        <div className="card-header"><img src={email} className = "center" height="38px" width="38px" /></div>
                        <div className="card-body">
                            <h4 className="card-title">Email</h4>
                            <h6>Amritsar, Punjab</h6>
                            <p className="card-text">arpansharma43@gmail.com</p>
                            <h6>Indore, Madhya Pradesh</h6>
                            <p className="card-text">abhijeetchinaglwar21@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ContactUs;