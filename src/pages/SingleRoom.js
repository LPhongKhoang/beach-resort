import React, { Component } from 'react'

export default class SingleRoom extends Component {
    
    componentDidMount() {
        console.log(this.props, "Props");
    }

    render() {
        return (
            <div>
                Single room page
            </div>
        )
    }
}
