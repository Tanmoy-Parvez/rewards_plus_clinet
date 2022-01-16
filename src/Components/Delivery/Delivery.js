import React from 'react';
import "./Delivery.css"
import logo from '../../images/logo.png'
import location_icon from '../../images/location.png'
import Services from '../Services/Services';

const Delivery = () => {
    return (
        <div className="container">
            <div className="banner">
                <div className="search_section">
                    <div className="text_box">
                        <header>
                            <img src={logo} alt="" />
                            <div>
                                <button className="btn">
                                    Sign In
                                </button>
                                <button className="btn">
                                    Sign In
                                </button>
                            </div>
                        </header>
                        <h2>Get your groceries in 30 minutes</h2>
                        <p>Order grocery from your nearby stores</p>
                        <div className="search_box">
                            <div className="icon">
                                <img src={location_icon} alt="" />
                            </div>
                            <div className="input_field">
                                <input type="text" placeholder='Enter your delivery location' />
                            </div>
                            <button className="search_btn">FIND STORE</button>
                        </div>
                    </div>
                </div>
                <div className="carousel_section">

                </div>

            </div>
            <Services />
        </div>
    );
};

export default Delivery;