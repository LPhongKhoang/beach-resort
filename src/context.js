import React from "react";
import { getMaxValue, getMinValue } from "./utils/helper";

import items from "./data";

const RoomContext = React.createContext();

class RoomProvider extends React.Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,

        type: "all",
        capacity: 0,
        price: 0,
        minSize: 0,
        maxSize: 0,
        pets: false,
        breakfast: false
    };

    // Function call Api to get data
    callApi = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(items);
            }, 2000);
        });
    };

    componentDidMount() {
        this.callApi().then(items => {
            // Format item data
            const rooms = this.formatData(items);
            const featuredRooms = rooms.filter(room => room.featured);
            // Get max, min
            const minSize = getMinValue(rooms, "size");
            const maxSize = getMaxValue(rooms, "size");
            const maxPrice = getMaxValue(rooms, "price");

            this.setState({
                rooms,
                sortedRooms: rooms,
                featuredRooms,
                loading: false,

                minSize,
                maxSize,
                price: maxPrice
            });
        });
    }

    filterRoom = () => {
        const {
            rooms,
            type,
            capacity,
            price,
            minSize,
            maxSize,
            pets,
            breakfast
        } = this.state;

        let tempRooms = [...rooms];
        // Filter by types
        if (type !== "all") tempRooms = tempRooms.filter(r => r.type === type);
        // Filter by capacity
        tempRooms = tempRooms.filter(r => r.capacity >= parseInt(capacity));

        // Filter by price
        tempRooms = tempRooms.filter(r => r.price <= parseInt(price));

        // Filter by size
        tempRooms = tempRooms.filter(
            r => r.size >= parseInt(minSize) && r.size <= parseInt(maxSize)
        );

        // Filter pets and breakfast
        if (pets) {
            tempRooms = tempRooms.filter(r => r.pets);
        }
        if (breakfast) {
            tempRooms = tempRooms.filter(r => r.breakfast);
        }

        this.setState({
            sortedRooms: tempRooms
        });
    };

    handleChange = event => {
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState(
            {
                [name]: value
            },
            this.filterRoom
        );
    };

    getRoomBySlug = slug => {
        const rooms = [...this.state.rooms];
        const room = rooms.find(r => r.slug === slug);
        return room;
    };

    formatData = items => {
        let id, images;
        const temItems = items.map(item => {
            id = item.sys.id;
            images = item.fields.images.map(img => img.fields.file.url);

            return { ...item.fields, images, id };
        });

        return temItems;
    };

    render() {
        const store = {
            ...this.state,
            getRoomBySlug: this.getRoomBySlug,
            handleChange: this.handleChange
        };

        return (
            <RoomContext.Provider value={store}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

const withRoomConsumer = Component => {
    return props => (
        <RoomConsumer>
            {value => <Component {...props} context={value} />}
        </RoomConsumer>
    );
};

export { RoomProvider, RoomConsumer, RoomContext, withRoomConsumer };
