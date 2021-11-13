import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './About.css';
const About = () => {
    return (
        <div>
            <Header></Header>
            <div className="services">
                <div className="container d-flex justify-content-between flex-wrap">
                    <div className="custom-box">
                        <h2>01</h2>
                        <h3>Profesional support</h3>
                        <p>Occupations that assist people involved in education and training systems with personal and family needs, mental health assistance, educational goals, and career decision making.</p>
                    </div>
                    <div className="custom-box">
                        <h2>02</h2>
                        <h3>Easy return</h3>
                        <p>Today, an “easy” return means an item can be returned if it's in good condition and has been sent or brought back within a reasonable timeframe. While it's obviously in the best interest of retailers to do what they can to minimize returns,</p>
                    </div>
                    <div className="custom-box">
                        <h2>03</h2>
                        <h3>Huge saving</h3>
                        <p>That's because there are huge cost savings in building vehicles with identical parts. Times, Sunday Times (2012)The document says there are also huge potential savings by using electronic purchasing.</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;