import React, { Component } from 'react';

class Bai1 extends Component {
    state = {
        userName: ''
    };
    componentDidMount() {
        this.setState({ userName: 'Nam Sơn' });
    }
    render() {
        const { userName } = this.state;
        return (
            <div>
                <h1>Hello, {userName}!</h1>
            </div>
        );
    }
}
export default Bai1;    