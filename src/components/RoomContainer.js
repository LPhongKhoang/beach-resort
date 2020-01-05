import React from "react";
import { withRoomConsumer } from "../context";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";

const RoomContainer = ({ context }) => {
    const { sortedRooms, loading } = context;

    return (
        <div>
            <RoomFilter />
            <RoomList rooms={sortedRooms} loading={loading} />
        </div>
    );
};

export default withRoomConsumer(RoomContainer);
