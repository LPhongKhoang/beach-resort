import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";


export default class NavBar extends Component {
    state = {
        isOpen: false
    }

    handleToggleNavBar = () => {
        this.setState((state) => ({
            isOpen: !state.isOpen
        }))
    }

    render() {
        const { isOpen } = this.state;
        return (
            <>
                <nav className="navbar">
                    <div className="nav-center">
                        <div className="nav-header">
                            <Link to="/">
                                <img src={logo} alt="Beach resort" />
                            </Link>
                            <button type="button" className="nav-btn"
                                onClick={this.handleToggleNavBar}>
                                <FaAlignRight className="nav-icon"/>
                            </button>
                        </div>
                        <ul className={isOpen? "nav-links show-nav" : "nav-links"}>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/rooms">Rooms</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}
