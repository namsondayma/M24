import React from 'react';

class Bai1 extends React.Component {
    handleClick() {
    console.log("clicked")
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
}
export default Bai1;