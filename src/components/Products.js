import React from 'react';

import product1 from "../images/Statistics.jpg";
import product2 from "../images/Devices.jpg";
import product3 from "../images/mobile-app.jpg";

const Products = () =>  {
    return (
        <section id="stack" className="section product-section">
            <h1 className="section-title"> Products </h1>
            <div className="product-content-container">
                <div className="product-row">
                    <div>
                        <img src={product1} className="product-image" alt="inventory-app"/>
                    </div>
                    <div className="product-description">
                    <h3 className="product-title left"> Lorem Ipsum </h3>
                        <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                         commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                         fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                         officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div className="product-row">
                    <div>
                        <img src={product2} className="product-image" alt="inventory-app"/>
                    </div>
                    <div className="product-description">
                    <h3 className="product-title left"> Lorem Ipsum </h3>
                        <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                         commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                         fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                         officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div className="product-row">
                    <div>
                        <img src={product3} className="product-image" alt="inventory-app"/>
                    </div>
                    <div className="product-description left">
                    <h3 className="product-title"> Lorem Ipsum </h3>
                        <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                         commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                         fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                         officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Products;