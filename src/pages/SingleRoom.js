import React, { Component } from "react";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";
import Banner from "../components/Banner";
import Loading from "../components/Loading";
import defaultBcg from "../images/room-1.jpeg";

export default class SingleRoom extends Component {
    static contextType = RoomContext;

    constructor(props) {
        super(props);
        this.state = {
            slug: props.match.params.slug,
            defaultBgc: defaultBcg
        };
    }

    render() {
        const loading = this.context.loading;
        const room = this.context.getRoomBySlug(this.state.slug);

        if (loading) return <Loading />;

        if (!room)
            return (
                <div className="error">
                    <h3>No such room could be found...</h3>
                    <Link to="/rooms" className="btn-primary">
                        Back to Rooms
                    </Link>
                </div>
            );

        const {
            name,
            description,
            capacity,
            size,
            price,
            extras,
            breakfast,
            pets,
            images
        } = room;

        const [mainImg, ...subImgs] = images;

        return (
            <>
                <StyledHero img={mainImg || defaultBcg}>
                    <Banner title={`${name} room`}></Banner>
                </StyledHero>

                <section className="single-room">
                    <div className="single-room-images">
                        {subImgs.map((url, index) => (
                            <img key={index} src={url} alt={url} />
                        ))}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price : ${price}</h6>
                            <h6>size : {size} SQFT</h6>
                            <h6>
                                max capacity :{" "}
                                {capacity > 1
                                    ? `${capacity} people`
                                    : `${capacity} person`}
                            </h6>
                            <h6>{pets ? "Pets allowed" : "No pets allowed"}</h6>
                            <h6>{breakfast && "Fee breakfast"}</h6>
                        </article>
                    </div>
                </section>

                <section className="room-extras">
                    <h6>Extras</h6>
                    <ul className="extras">
                        {extras.map((item, index) => (
                            <li key={index}>- {item}</li>
                        ))}
                    </ul>
                </section>
            </>
        );
    }
}
