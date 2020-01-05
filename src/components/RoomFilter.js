import React, { useContext } from "react";
import { RoomContext } from "../context";
import { getUniqueValues, getMaxValue } from "../utils/helper";

const RoomFilter = () => {
    const context = useContext(RoomContext);
    const {
        rooms,
        type,
        capacity,
        price,
        minSize,
        maxSize,
        pets,
        breakfast,

        handleChange
    } = context;

    let typesList = getUniqueValues(rooms, "type");
    typesList.unshift("all");

    // Map typesList to Jsx
    typesList = typesList.map((t, index) => (
        <option key={index} value={t}>
            {t}
        </option>
    ));
    let capacitiesList = getUniqueValues(rooms, "capacity");

    // Map capacitiesList to Jsx
    capacitiesList = capacitiesList.map((t, index) => (
        <option key={index} value={t}>
            {t}
        </option>
    ));

    // Get max price in list rooms
    const maxPrice = getMaxValue(rooms, "price");

    return (
        <section className="filter-container">
            <form className="filter-form">
                {/* select types  */}
                <div className="form-group">
                    <label htmlFor="type">Room type</label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {typesList}
                    </select>
                </div>
                {/* end select types */}

                {/* select capacity  */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {capacitiesList}
                    </select>
                </div>
                {/* end select capacity */}

                {/* input range price  */}
                <div className="form-group">
                    <label htmlFor="price">Room price ${price}</label>
                    <input
                        type="range"
                        name="price"
                        id="price"
                        className="form-control"
                        min={0}
                        max={maxPrice}
                        value={price}
                        onChange={handleChange}
                    />
                </div>
                {/* end input range price */}

                {/* input size  */}
                <div className="form-group">
                    <label htmlFor="size">Room size</label>
                    <div className="size-inputs">
                        <input
                            type="number"
                            className="size-input"
                            name="minSize"
                            id="size"
                            value={minSize}
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            className="size-input"
                            name="maxSize"
                            id="size"
                            value={maxSize}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                {/* end input size*/}

                {/* checkbox pets and breakfast  */}
                <div className="form-group">
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="pets"
                            id="pets"
                            value={pets}
                            onChange={handleChange}
                        />
                        <label htmlFor="pets">Pets</label>
                    </div>
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="breakfast"
                            id="breakfast"
                            value={breakfast}
                            onChange={handleChange}
                        />
                        <label htmlFor="breakfast">Breakfast</label>
                    </div>
                </div>
                {/* end input size*/}
            </form>
        </section>
    );
};

export default RoomFilter;
