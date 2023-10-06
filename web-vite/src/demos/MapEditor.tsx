import React, {useState} from 'react'
import {Button, InputNumber, Modal} from 'antd';


// class MapEditor extends React.Component<any, any> {
//
//
//     constructor(props) {
//         super(props);
//         this.state = {mapXLen: 10, mapYLen: 10,isDoConnection:false};
//     }
//
//     onChangeX = (value: number) => {
//         console.log('changed', this);
//         this.setState({mapXLen:value})
//     };
//     onChangeY = (value: number) => {
//         console.log('changed', value);
//         this.setState({mapYLen:value})
//     };
//
//
//     render() {
//         const table = getTable(this.state.mapXLen, this.state.mapYLen);
//         return (
//             <>
//                 <InputNumber min={1} max={100} defaultValue={10} onChange={this.onChangeX}/>
//                 <InputNumber min={1} max={100} defaultValue={10} onChange={this.onChangeY}/>
//
//                 {table}
//             </>
//         )
//     }
// }

const MapEditor: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isWired, setIsWired] = useState(false);
    const [mapXLen, setMapXLen] = useState(10);
    const [mapYLen, setMapYLen] = useState(10);

    const showModal = () => {
        if (isWired){

        } else {
            setIsModalOpen(true);
        }
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onChangeX = (value: number) => {
        setMapXLen(value)
    };
    const onChangeY = (value: number) => {
        setMapYLen(value)
    };
    const onConnection=()=>{
        setIsModalOpen(false);
        setIsWired(true);
    }

    function getTable(x, y) {
        const trList = []
        for (let i = 0; i < x; i++) {
            const tbList = []
            for (let j = 0; j < y; j++) {
                tbList.push(<td onClick={showModal} key={j}>{j}</td>)
            }
            trList.push(
                <tr key={i}>
                    {tbList}
                </tr>
            )
        }
        return (
            <>
                <table cellSpacing={20}>
                    <tbody>
                    {trList}
                    </tbody>
                </table>
            </>
        )
    }

    return (
        <>
            <InputNumber min={1} max={100} defaultValue={10} onChange={onChangeX}/>
            <InputNumber min={1} max={100} defaultValue={10} onChange={onChangeY}/>
            {getTable(mapXLen, mapYLen)}
            <Modal title="编辑节点" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            {/*    连线，先显示出以当前节点为中心的中心节点，创建当前中心与周围的连线，并记录连线信息*/}
            </Modal>
        </>
    );
};

export default MapEditor
