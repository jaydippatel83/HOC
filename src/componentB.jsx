import React, { Component } from 'react';
import army from './hoc';

class CompB extends Component {
    render() {
        return (
            <div>
                <h1 onMouseOver={this.props.handlechange}>CompB {this.props.hocgunname} Gunshots: {this.props.gunshot}</h1>
            </div>
        )
    }
}
export default army(CompB);