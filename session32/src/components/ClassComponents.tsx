import React, { Component } from 'react'
interface Props {
}
interface State {
    count: number;
}
export default class Classcomponent extends Component {
    constructor(props: Props) {
        super(props)
        this.state = {
            count: 0,
        }
    }
    componentDidMount(): void {
        const interval = setInterval(() => {
            console.log("Hehe");
        }, 100000)
    }
    handleClick = () => {

    }
    render() {
        return (
            <div>Classcomponent
                <button >Stop</button>
            </div>
        )
    }
}