import React from 'react';
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import defaultRoomImg from "../images/room-1.jpeg";

export default function Room({room}) {

    const { name, slug, price, images} = room;

    return (
        <article  className="room">
            <div className="img-container">
                <img src={images[0] || defaultRoomImg} alt={name} />

                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>

                <Link
                    to={`/rooms/${slug}`} 
                    className="btn-primary room-link"
                >
                    Features
                </Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    )
}


Room.prototype = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired
    })
}