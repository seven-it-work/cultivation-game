import React, {useState} from "react";
import {Col, Row} from "antd";
import "./mapTable.css"
import JDemo01 from "../demos/JDemo01";
import MapEditor from "../demos/MapEditor";

function Home() {
    const [count, setCount] = useState(0)
    return (
        <>
            <Row>
                {/*地图组件*/}
                <Col span={12}>
                    <table className={'mapTable'} cellSpacing={20}>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                        </tr>
                        </tbody>
                    </table>
                </Col>
                <Col span={12}>
                    <JDemo01/>
                    <MapEditor></MapEditor>
                </Col>
            </Row>
        </>
    )
}

export default Home

