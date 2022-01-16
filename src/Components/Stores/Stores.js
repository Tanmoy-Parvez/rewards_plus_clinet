import React from 'react';
import "./Stores.css"
import logo from '../../images/logo.png'
import storeImg from '../../images/store.png'
import location_icon from '../../images/location.png'

const fakeData = [
    {
        id: 101,
        name: "Home Fresh Mart",
        star: 4.2,
        distance: "1.2 km",
        location: "540, PNB Building, Chandan Hulla, New Delhi 110074"
    },
    {
        id: 102,
        name: "Home Fresh Mart",
        star: 4.2,
        distance: "1.2 km",
        location: "540, PNB Building, Chandan Hulla, New Delhi 110074"
    },
    {
        id: 103,
        name: "Home Fresh Mart",
        star: 4.2,
        distance: "1.2 km",
        location: "540, PNB Building, Chandan Hulla, New Delhi 110074"
    },
    {
        id: 104,
        name: "Home Fresh Mart",
        star: 4.2,
        distance: "1.2 km",
        location: "540, PNB Building, Chandan Hulla, New Delhi 110074"
    },
    {
        id: 105,
        name: "Home Fresh Mart",
        star: 4.2,
        distance: "1.2 km",
        location: "540, PNB Building, Chandan Hulla, New Delhi 110074"
    }
]

const Stores = () => {
    return (
        <div className="container">
            <div className="store_section">
                <div className="store_header">
                    <img src={logo} alt="" width="150px" height="50px" />

                    <div className="search_box" id="location_search_box">
                        <div className="icon">
                            <img src={location_icon} alt="" />
                        </div>
                        <div className="input_field">
                            <input type="text" placeholder='Enter your delivery location' value="110092" />
                        </div>
                        <button className="search_btn">FIND STORE</button>
                    </div>

                    <div>
                        <button className="btn">
                            Sign In
                        </button>
                        <button className="btn">
                            Sign In
                        </button>
                    </div>
                </div>
                <div className="stores">
                    <p>All stores nearby <b>110092</b></p>
                    <div className="stores_card">
                        {
                            fakeData.map(store =>
                                <div className="cards">
                                    <div className="card_img">
                                        <img src={storeImg} alt="" />
                                    </div>
                                    <div className="card_body">
                                        <h3>{store?.name} <span>{store?.distance}</span></h3>
                                        <h3 className="ratings">{store?.star} <i className="fas fa-star"></i></h3>
                                        <h4>{store?.location}</h4>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stores;