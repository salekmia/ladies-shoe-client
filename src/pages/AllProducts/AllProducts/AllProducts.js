import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import AllProduct from '../AllProduct/AllProduct';

const AllProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    }, [])
    return (
        <div>
            <Header></Header>
            <div className="container my-5">
                <div className="text-center my-5">
                    <h3 className="my-3">Our all <span className="text-primary">Shoes</span></h3>
                    <p className="paragrap">Quality in a product or service is not what the supplier puts in. it is what the <br /> customer gets out and is willing to pay for.</p>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-5">
                    {
                        products.map(product => <AllProduct product={product} key={product._id}></AllProduct>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllProducts;