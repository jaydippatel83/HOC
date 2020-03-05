import React, { Component } from 'react';
import army from './hoc';

class CompA extends Component {
    
    render() {
        return (
            <div>
                <h1 onMouseOver={this.props.handlechange}>
                    CompA {this.props.hocgunname} Gunshots: {this.props.gunshot}</h1>
            </div>
        )
    }
}
export default army(CompA);