import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../src/images/logo.png';
import useAuth from '../../../hooks/useAuth';
import './Header.css';
const Header = () => {
    const {user, logOut} = useAuth()
    return (
        <>
            <div className="container">
                <div id="top-header" className="d-none d-md-flex justify-content-between align-items-center">
                    <p>Welcome to Ladies Shoe- 24/7 Support | Fast Delivery!</p>
                    <p><i className="fas fa-phone"></i> +880 1859650251</p>
                    <p><i className="far fa-envelope"></i> support@ladiesshoe.com</p>
                    <p><a target="_blank" href="https://www.facebook.com/salekalways" rel="noreferrer">FB Page</a> | <a target="_blank" href="https://www.facebook.com/salekalways" rel="noreferrer">FB Group</a></p>
                </div>
            </div>
            <hr className="d-none d-md-block mb-0" />

            <div id="main-header" className="sticky-top w-100">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container px-0">
                    <Link className="navbar-brand" to="/"><img width="140px" src={logo} alt="Ladies Shoe" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                        <Link className="nav-link" to="/allProducts">All Products</Link>
                        </li>

                        <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                        </li>

                        <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                        </li>

                        {user?.email && <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>}

                    </ul>
                    
                    <p className="fw-bold">{user?.displayName}</p>

                    {user?.email ? 
                    <button onClick={logOut} className="btn btn-primary rounded-pill ms-2 px-4" type="submit"><i className="fas fa-sign-out-alt"></i> Logout</button> 
                    :
                    <div>
                    <button className="btn btn-primary rounded-pill ms-2 px-4" type="submit"><Link to="/login">Login</Link></button>
                    
                    <button className="btn btn-primary rounded-pill ms-2 px-4" type="submit"><Link to="/register">Register</Link></button>    
                    </div>}
                    </div>
                </div>
                </nav>
            </div>
        </>
    );
};

export default Header;