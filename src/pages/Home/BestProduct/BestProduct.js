import React from 'react';
import { Link } from 'react-router-dom';

const BestProduct = ({product}) => {
    const {title, price, description, img1, _id} = product
    return (
    <div className="col">
        <div className="card h-100 border-0 shadow-lg">
            <img src={img1} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text my-3 paragrap">{description.split(' ').slice(0, 20).toString().replace(/,/g, ' ')}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <p><b>Price: ${price}</b></p>
                    <button className="btn-sm btn-primary px-4 rounded-pill"><Link to={`purchase/${_id}`}><i className="fas fa-shopping-cart"></i> Purchase</Link></button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default BestProduct;