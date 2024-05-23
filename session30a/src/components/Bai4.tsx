import React, { Component, ChangeEvent } from 'react';

interface Area {
    area: string;
}

export default class Ex04 extends Component<any, Area> {
    constructor(props: any) {
        super(props);
        this.state = {
            area: '',
        };
    }

    handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        this.setState({ area: e.target.value });
    };

    render() {
        const { area } = this.state;
        return (
            <div>
                <p>Tỉnh/Thành phố: {area}</p>
                <select onChange={this.handleChange} value={area}>
                    <option value="">--Chọn Tỉnh/Thành phố--</option>
                    <option value="Hà Nội">Hà Nội</option>
                    <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                    <option value="Hải Phòng">Hải Phòng</option>
                </select>
            </div>
        );
    }
}