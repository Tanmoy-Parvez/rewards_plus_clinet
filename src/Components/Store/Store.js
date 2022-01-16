import React from 'react';
import storeImg from '../../images/store.png'

const Store = ({ store }) => {
    return (
        <div className="cards">
            <div className="card_img">
                <img src={storeImg} alt="" />
            </div>
            <div className="card_body">
                <h3>{store?.name} <span className="blue_text">{store?.distance}</span></h3>
                <h3 className="ratings">{store?.star} <i className="fas fa-star"></i></h3>
                <h4 className="location_details">{store?.location}</h4>
            </div>
        </div>
    );
};

export default Store;