import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
const Banner = () => {
    return (
        <div className="hero-image">
            <div className="hero-text">
                <h1 style={{fontSize: '45px'}}>Welcome to Ladies Shoe</h1>
                <p className="my-4">Quality in a product or service is not what the supplier puts in. <br /> it is what the customer gets out and is willing to pay for.</p>
                <button className="btn btn-primary px-5 rounded-pill"><Link to="/allProducts"><i className="fas fa-shopping-cart"></i> Purchase Now</Link></button>
            </div>
        </div>
    );
};

export default Banner;