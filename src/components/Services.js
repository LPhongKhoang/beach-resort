import React from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends React.Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Fee cocktails",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula scelerisque metus vitae condimentum. Sed sagittis erat sit amet ipsum vehicula aliquam",
            },
            {
                icon: <FaHiking />,
                title: "Endless hiking",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula scelerisque metus vitae condimentum. Sed sagittis erat sit amet ipsum vehicula aliquam",
            },
            {
                icon: <FaShuttleVan />,
                title: "Fee Shuttle",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula scelerisque metus vitae condimentum. Sed sagittis erat sit amet ipsum vehicula aliquam",
            },
            {
                icon: <FaBeer />,
                title: "Strongest beer",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula scelerisque metus vitae condimentum. Sed sagittis erat sit amet ipsum vehicula aliquam",
            }
        ]
    }

    render() {

        
        return (
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => (
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    ))}
                </div>
            </section>
        );
    }
}
