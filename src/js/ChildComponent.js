import React, { Component } from 'react';

class Child extends Component {
    state = { typeOfComponent: 'Child Component!' };
    render() {
        return (
            <div className="child">
                <h1>I am a {this.state.typeOfComponent}</h1>
            </div>
        );
    }
}

export default Child;
