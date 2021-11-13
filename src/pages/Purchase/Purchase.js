import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Purchase = () => {
    const {user} = useAuth()
    const [product, setProduct] = useState({})
    const {productId} = useParams()
    const [order, SetOrder] = useState({})
    useEffect(()=> {
        fetch(`http://localhost:5000/products/${productId}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data)
        })
    }, [])


    
    const {title, price, color, size, description, img1, img2, img3} = product;

    const handleOnBlur = e => {
        const feild = e.target.name;
        const value = e.target.value;
        const newOrder = {...order, product_title: title, price: price, img: img1, name: user?.displayName, email: user?.email, status: 'Pending'};
        newOrder[feild] = value;
        SetOrder(newOrder)
    }

    const handleOrderSubmit = e => {
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                toast.success('Your order succussful', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }
        })
        console.log(order)
        e.target.reset()
        e.preventDefault()
    }
    
    return (
        <div>
            <Header></Header>

            <div className="container my-5">
                <div className="row">
                    <div className="col-md-4">
                        <div id="carouselExampleIndicators" className="carousel slide carousel-dark carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={img1} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src={img2} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src={img3} className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <h5 className="text-center fw-bold mb-4">Product Details</h5>
                        <h4>{title}</h4>
                        <p className="paragrap my-3">{description}</p>
                        <p><b>Price: ${price}</b></p>
                        <p className="my-3"><b>Color: {color}</b></p>
                        <p><b>Size: {size}</b></p>
                    </div>

                    <div className="col-md-4">
                        <h5 className="text-center fw-bold mb-4">Your Details</h5>
                        <form onSubmit={handleOrderSubmit}>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="name">Your Name</label>
                                <input disabled defaultValue={user?.displayName} name="name" onBlur={handleOnBlur} className="form-control" type="text" id="name" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="email">Your Email</label>
                                <input disabled defaultValue={user?.email}  name="email" onBlur={handleOnBlur} className="form-control" type="email" id="email" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="phone">Phone Number</label>
                                <input required name="phone" onBlur={handleOnBlur} className="form-control" type="text" id="phone" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="address">Shipping Address</label>
                                <textarea required  name="address" onBlur={handleOnBlur} className="form-control" id="address" cols="30" rows="3"></textarea>
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary rounded-pill">Purchase Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer></Footer>
            <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
        </div>
    );
};

export default Purchase;