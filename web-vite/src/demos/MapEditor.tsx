import React, {useState} from 'react'
import {InputNumber} from 'antd';

function getTable(x, y) {
    const trList = []
    for (let i = 0; i < x; i++) {
        const tbList=[]
        for (let j = 0; j < y; j++) {
            tbList.push(<td key={j}>{j}</td>)
        }
        trList.push(
            <tr key={i}>
                {tbList}
            </tr>
        )
    }
    return (
        <>
            <table>
                <tbody>
                {trList}
                </tbody>
            </table>
        </>
    )
}

class MapEditor extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {mapXLen: 10, mapYLen: 10};
    }

    onChangeX = (value: number) => {
        console.log('changed', this);
        this.setState({mapXLen:value})
    };
    onChangeY = (value: number) => {
        console.log('changed', value);
        this.setState({mapYLen:value})
    };


    render() {
        const table = getTable(this.state.mapXLen, this.state.mapYLen);
        return (
            <>
                <InputNumber min={1} max={100} defaultValue={10} onChange={this.onChangeX}/>
                <InputNumber min={1} max={100} defaultValue={10} onChange={this.onChangeY}/>
                {table}
            </>
        )
    }
}

export default MapEditor
