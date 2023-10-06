import React, {useState} from "react";
import {Col, Row} from "antd";

function Home() {
    const [count, setCount] = useState(0)
    return (
        <>
            <Row>
                {/*地图组件*/}
                <Col span={12}>
                    <table className='mapTable'>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                        </tr>
                    </table>
                </Col>
                <Col span={12}>col-12</Col>
            </Row>
        </>
    )
}

export default Home

