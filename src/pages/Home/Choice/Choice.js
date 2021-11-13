import React from 'react';
import { Link } from 'react-router-dom';

const Choice = () => {
    return (
        <div className="container my-5">
            <div className="row d-flex align-items-center">
                <div className="col-md-6 p-3">
                    <div id="carouselExampleControls" className="carousel slide carousel-dark" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src="https://i.ibb.co/GxLKjWh/project-6-02-23-09-37-37.jpg" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src="https://i.ibb.co/kS8MNXW/project-4-02-23-03-49-45.jpg" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src="https://i.ibb.co/M6LvkRd/Project-3-02-23-10-46-05.jpg" className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
                <div className="col-md-6 ps-5">
                    <h1>Awesome Choice</h1>
                    <p className="my-4">A product is not quality because it is hard to make and costs a lot of money, as manufacturers typically believe.</p>
                    <button className="btn btn-primary px-5 rounded-pill"><Link to="/allProducts"><i className="fas fa-shopping-cart"></i> Purchase Now</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Choice;