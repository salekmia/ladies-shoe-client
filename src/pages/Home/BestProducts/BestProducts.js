import React, { useEffect, useState } from 'react';
import BestProduct from '../BestProduct/BestProduct';

const BestProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    
    return (
        <div className="container">
            <div className="text-center my-5">
                <h3 className="my-3">Our best <span className="text-primary">Shoe</span></h3>
                <p className="paragrap">Quality in a product or service is not what the supplier puts in. it is what the <br /> customer gets out and is willing to pay for.</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-5">
                {
                    products.slice(0, 6).map(product => <BestProduct product={product} key={product._id}></BestProduct>)
                }
            </div>
        </div>
    );
};

export default BestProducts;