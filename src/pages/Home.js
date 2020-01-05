import React from 'react';
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";


const Home = (props) => {
    
    return (
        <>
            <Hero>
                <Banner title="Luxurious Rooms" subtitle="Start from $244.99">
                    <Link to="/rooms" className="btn-primary">
                        Our Rooms
                    </Link>
                </Banner>
            </Hero>

            <Services />

            <FeaturedRooms />

        </>
    )
}

export default Home
