import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Contact.css';
const Contact = () => {
    return (
        <div>
            <Header></Header>
            <div id="contact">
                <div className="contact-text">
                    <h1>Contact Us</h1>
                </div>
            </div>
            <div className="container my-5">
                <div className="row ">
                    <div className="col-md-6">
                        <div className="d-flex align-items-center contact-icon-container shadow-lg rounded m-4">
                            <div className="contact-icon">
                                <i class="fas fa-phone fs-1"></i>
                            </div>
                            <div>
                                <h4>Phone</h4>
                                <p>01859650251</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center contact-icon-container shadow-lg rounded m-4">
                            <div className="contact-icon">
                                <i class="fas fa-phone fs-1"></i>
                            </div>
                            <div>
                                <h4>Email</h4>
                                <p>bhairabbari330@gmail.com</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center contact-icon-container shadow-lg rounded m-4">
                            <div className="contact-icon">
                                <i class="fas fa-phone fs-1"></i>
                            </div>
                            <div>
                                <h4>Phone</h4>
                                <p>01859650251</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <h4 className="text-center">Get in touch</h4>
                            <input type="text" placeholder="Name" className="form-control mb-3"/>
                            <input type="email" placeholder="Email" className="form-control mb-3"/>
                            <textarea className="form-control mb-3" cols="30" rows="5"></textarea>
                            <div className="d-grid"><button className="btn btn-primary rounded-pill">Submit</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;