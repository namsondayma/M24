import React from 'react';

interface Bai6State {
    isHidden: boolean;
}
class Bai6 extends React.Component<{}, Bai6State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isHidden: false
        };
    }
    toggleButton() {
        this.setState((prevState) => ({
            isHidden: !prevState.isHidden
        }));
    }
    render() {
        const buttonContent = this.state.isHidden ? 'Hiển' : 'Ẩn';
        return (
            <div>
                <button onClick={() => this.toggleButton()}>{buttonContent}</button>
            </div>
        );
    }
}
export default Bai6;