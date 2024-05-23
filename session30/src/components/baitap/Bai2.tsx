import React, { ChangeEvent, Component } from 'react';

interface Input {
    inputValue: string;
}
export default class Bai2 extends Component<any, Input> {
    constructor(props: Input) {
        super(props);
        this.state = {
            inputValue: '',
        };
    }
    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ inputValue: event.target.value });
    };
    render() {
        const { inputValue } = this.state;

        return (
            <div>
                <p>Giá trị đã nhập: {inputValue}</p>
                <input type="text" value={inputValue} onChange={this.handleChange} />
            </div>
        );
    }
}