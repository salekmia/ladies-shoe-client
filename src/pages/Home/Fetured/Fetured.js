import React from 'react';
import './Fetered.css';
const Fetured = () => {
    return (
        <div className="container-bg py-4">
            <div className="container">
                <div className="row g-4">
                    <div className="col-md-6 col-lg-3">
                        <div className="d-flex justify-content-between align-items-center item-bg text-white">
                            <div className="icon-container">
                                <i className="fas fa-truck fs-2"></i>
                            </div>
                            <div>
                                <h4>Free Shipping</h4>
                                <p>Above 1000 ৳</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="d-flex justify-content-between align-items-center item-bg text-white">
                            <div className="icon-container">
                                <i className="fas fa-question fs-2"></i>
                            </div>
                            <div>
                                <h4>24/7 support</h4>
                                <p>Without Friday</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="d-flex justify-content-between align-items-center item-bg text-white">
                            <div className="icon-container">
                                <i className="fas fa-exchange-alt fs-2"></i>
                            </div>
                            <div>
                                <h4>Easy Return</h4>
                                <p>On Some Condition</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="d-flex justify-content-between align-items-center item-bg text-white">
                            <div className="icon-container">
                                <i className="far fa-credit-card fs-2"></i>
                            </div>
                            <div>
                                <h4>Huge Saving</h4>
                                <p>At The Lowest Price</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fetured;