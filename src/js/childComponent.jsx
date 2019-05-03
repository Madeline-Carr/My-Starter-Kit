import React, { Component } from 'react';
import GrandChild from './grandChild';

class Child extends Component {
    state = { typeOfComponent: 'Child Component!' };
    render() {
        return (
            <div className="child">
                <h1>I am a {this.state.typeOfComponent}</h1>
                <p>This is a paragraph!</p>
                <GrandChild Title={'I am the grandchild!'} />
            </div>
        );
    }
}

export default Child;
