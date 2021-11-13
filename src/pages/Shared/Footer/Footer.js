import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-2">
                        <h4>Product</h4>
                        <div className="d-flex flex-column">
                            <a href="/">Websites</a>
                            <a href="/">Online Stores</a>
                            <a href="/">E-commerce</a>
                            <a href="/">Galleries</a>
                            <a href="/">Client Galleries</a>
                            <a href="/">Features</a>
                            <a href="/">Templates</a>
                            <a href="/">Pricing</a>
                            <a href="/">Customer Stories</a>
                            <a href="/">Product Updates</a>
                            <a href="/">Integrations</a>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2">
                        <h4>TOUR</h4>
                        <div className="d-flex flex-column">
                            <a href="/">Online Portfolio</a>
                            <a href="/">Photography</a>
                            <a href="/">Design</a>
                            <a href="/">Art</a>
                            <a href="/">Fashion Design</a>
                            <a href="/">Models</a>
                            <a href="/">Weddings</a>
                            <a href="/">Architecture</a>
                            <a href="/">Online Stores</a>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2">
                        <h4>EXAMPLES</h4>
                        <div className="d-flex flex-column">
                            <a href="/">Featured</a>
                            <a href="/">Photography</a>
                            <a href="/">Design</a>
                            <a href="/">Art</a>
                            <a href="/">Fashion</a>
                            <a href="/">Weddings</a>
                            <a href="/">Online Stores</a>
                            <a href="/">Architecture</a>
                            <a href="/">Client Galleries</a>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2">
                        <h4>ABOUT</h4>
                        <div className="d-flex flex-column">
                            <a href="/">About</a>
                            <a href="/">Pixpa Blog</a>
                            <a href="/">Contact</a>
                            <a href="/">Become an Affiliate</a>
                            <a href="/">Students-Educators</a>
                            <a href="/">Terms of Use</a>
                            <a href="/">Privacy Policy</a>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-4">
                        <h4>Ladies Shoe</h4>
                        <p>Product text includes any content that is used to describe a product. Product descriptions are the most common example, but there are other forms of this kind of text that include advertorials, blog posts, and reviews.</p>
                        <ul className="d-flex">
                            <li><a target="_blank" href="https://www.facebook.com/salekalways" rel="noreferrer"><i className="fab fa-facebook-square"></i></a></li>
                            <li><a target="_blank" href="https://twitter.com/codersalek" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
                            <li><a target="_blank" href="https://www.instagram.com/salekalways/" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                        <p>Get our emails on inspiration and tips to grow your creative business.</p>
                        <div className="input-group my-3">
                            <input type="text" className="form-control bg-transparent" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <button className="btn btn-primary" type="button" id="button-addon2">Button</button>
                        </div>
                    </div>
                </div>
                <p className="text-center mt-3"><small>Copyright &copy; 2021</small></p>
            </div>
        </div>
    );
};

export default Footer;
