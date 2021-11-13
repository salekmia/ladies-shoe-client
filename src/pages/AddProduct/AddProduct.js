import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
    const [product, setProduct] = useState({})
    const handleOnBlur = e => {
        const feild = e.target.name;
        const value = e.target.value;
        const newProduct = {...product};
        newProduct[feild] = value;
        setProduct(newProduct)
    }
    const handleProductSubmit = e => {
        fetch('https://vast-mesa-86582.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                toast.success('Product add successful', {
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
        e.target.reset()
        e.preventDefault()
    }
    return (
        <div className="container">
            <div className="border rounded p-4">
                <h4 className="fw-bold text-center">Add a new products</h4>
                <form onSubmit={handleProductSubmit}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="title">Product title</label>
                        <input name="title" onBlur={handleOnBlur} className="form-control" type="text" id="title" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="price">Product price</label>
                        <input  name="price" onBlur={handleOnBlur} className="form-control" type="number" id="price" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="description">Product Description</label>
                        <textarea  name="description" onBlur={handleOnBlur} className="form-control" id="description" cols="30" rows="5"></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="image1">Product image url 1</label>
                        <input  name="img1" onBlur={handleOnBlur} className="form-control" type="text" id="image1" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="image2">Product image url 2</label>
                        <input  name="img2" onBlur={handleOnBlur} className="form-control" type="text" id="image2" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="image3">Product image url 3</label>
                        <input  name="img3" onBlur={handleOnBlur} className="form-control" type="text" id="image3" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="color">Product color</label>
                        <select  name="color" onBlur={handleOnBlur} id="color" className="form-select">
                            <option value="Red">Red</option>
                            <option value="Yellow">Yellow</option>
                            <option value="Brown">Brown</option>
                            <option value="Orange">Orange</option>
                            <option value="Green">Green</option>
                            <option value="Black">Black</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="size">Product size</label>
                        <select  name="size" onBlur={handleOnBlur} id="size" className="form-select">
                            <option value="35.5 EUR">35.5 EUR</option>
                            <option value="36 EUR">36 EUR</option>
                            <option value="36.5 EUR">36.5 EUR</option>
                            <option value="37 EUR">37 EUR</option>
                            <option value="37.5 EUR">37.5 EUR</option>
                            <option value="38 EUR">38 EUR</option>
                        </select>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary rounded-pill">Add Product</button>
                    </div>

                </form>
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

export default AddProduct;