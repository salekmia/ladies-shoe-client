import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageProducts = () => {
    const [products, setProducts] = useState([])
    const [deleteProduct, setDeleteProduct] = useState(false)
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    }, [deleteProduct])

    const handleDeleteProduct = id => {
        const procced = window.confirm('Are you sure? You want to delete.')
        if(procced) {
           fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount) {
                setDeleteProduct(true)
                toast.success('Product delete successful', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }
        }) 
        }
        setDeleteProduct(false)

    }

    return (
        <div>
            <div className="text-center">
                <h3 className="my-3">Manage all <span className="text-primary">Shoes</span></h3>
            </div>
            <div className="row row-cols-1 row-cols-lg-2 gx-2 gy-4">
                {
                    products.map(product => <div className="col" product={product} key={product._id}>
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={product?.img1} className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title"><b>{product?.title}</b></h5>
                                        <p className="paragrap my-2">{product?.description.split(' ').slice(0, 9).toString().replace(/,/g, ' ')}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <button className="btn btn-primary px-3 rounded-pill">Update</button>

                                            <button onClick={() => handleDeleteProduct(product?._id)} className="btn btn-primary px-3 rounded-pill">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
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

export default ManageProducts;