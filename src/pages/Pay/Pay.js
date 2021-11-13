import React from 'react';
import { Link } from 'react-router-dom';

const Pay = () => {
    return (
        <div style={{height: '80vh'}} className="d-flex justify-content-center align-items-center text-center">
            <div>
            <h1>Our payment system coming soon.</h1>
            <p>To know more info please contact us.</p>
            <button className="btn btn-primary px-4 rounded-pill"><Link to="/contact">Contact us</Link></button>
            </div>
        </div>
    );
};

export default Pay;