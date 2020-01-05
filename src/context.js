import React from 'react';
import items from "./data";


const RoomContext = React.createContext();

class RoomProvider extends React.Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true
    }

    // Function call Api to get data
    callApi = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(items);
            }, 2000)
        });
    }
    
    componentDidMount() {
        this.callApi()
            .then(items => {
                // Format item data
                const rooms = this.formatData(items);
                const featuredRooms = rooms.filter(room => room.featured);
        
                this.setState({
                    rooms, sortedRooms: rooms, featuredRooms, loading: false
                })
            })

    }

    getRoomBySlug = (slug) => {
        const rooms = [...this.state.rooms];
        const room = rooms.find(r => r.slug === slug);
        return room;
    }

    formatData = (items) => {
        let id, images;
        const temItems = items.map(item => {
            id = item.sys.id;
            images = item.fields.images.map(img => img.fields.file.url);

            return {...item.fields, images, id}
        });

        return temItems;
    }

    render() {
        const store = {
            ...this.state,
            getRoomBySlug: this.getRoomBySlug
        }

        return (
            <RoomContext.Provider value={store}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export {
    RoomProvider,
    RoomConsumer,
    RoomContext
}