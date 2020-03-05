import React, { Component } from 'react';


const army = Men => {
    class NewMan extends Component {
        state = {
            gunshots: 0
        }
        handlechange = () => {
            this.setState({ gunshots: this.state.gunshots + 1 })
        }
        render() {
            return (
                <Men hocgunname="AWM" handlechange={this.handlechange} gunshot={this.state.gunshots}/>
            )
        }
    }
    return NewMan;
};
export default army;