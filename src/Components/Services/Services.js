import React from 'react';
import "./Services.css"
import icon1 from '../../images/delivery_services_icons/fast_icon.png'
import icon2 from '../../images/delivery_services_icons/location.png'
import icon3 from '../../images/delivery_services_icons/delivery.png'

const Services = () => {
    return (
        <div className="services_section">
            <div className="delivery_card">
                <div>
                    <img src={icon1} alt="" />
                    <h4>Fast Delivery</h4>
                    <p>Know where your order is at all times, from the
                        restaurant to your doorstep</p>
                </div>
            </div>
            <div className="delivery_card">
                <div>
                    <img src={icon2} alt="" />
                    <h4>Live Tracking</h4>
                    <p>Know where your order is at all times, from the
                        restaurant to your doorstep</p>
                </div>
            </div>
            <div className="delivery_card">
                <div>
                    <img src={icon3} alt="" />
                    <h4>Special Offers</h4>
                    <p>Know where your order is at all times, from the
                        restaurant to your doorstep</p>
                </div>
            </div>
        </div>
    );
};

export default Services;