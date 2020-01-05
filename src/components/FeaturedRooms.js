import React, { Component } from 'react';
import { RoomContext } from "../context";
import Title from "../components/Title";
import Room from '../components/Room'
import Loading from '../components/Loading'

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;

    render() {
        const { featuredRooms: rooms, loading } = this.context;

        const roomsJsx = rooms.map(room => (
            <Room key={room.id} room={room} />
        ))

        return (
            <section className="featured-rooms">
                <Title title="Featured rooms" />
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : roomsJsx}
                </div>
            </section>
        )
    }
}
