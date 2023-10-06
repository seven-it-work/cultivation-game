import React, {useState} from "react";
import {Col, Row} from "antd";
import "./mapTable.css"

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
                </Col>
            </Row>
        </>
    )
}

export default Home

