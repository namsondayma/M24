import React, { Component } from 'react'
interface Date {
    date: string,
}
export default class Bai3 extends Component<any, Date> {
    constructor(props: Date) {
        super(props);
        this.state = {
            date: ''
        }
    }
    handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ date: e.target.value });
    }
    render() {
        const { date } = this.state;
        return (
            <div>
                <p>Thời gian:{date}</p>
                <input type="date" value={date} onChange={this.handleClick} />
            </div>
        )
    }
}