import jsPlumb from "jsplumb";
import React, {useEffect} from "react";

export default function JDemo01(props: any) {
    let timer: any;
    const instance = jsPlumb.jsPlumb.getInstance();//创建一个jsplumb对象
    const resize = () => {
        instance.repaintEverything();
    };
    const clear = () => {
        if (timer) {
            clearInterval(timer);
        }
        instance.deleteEveryConnection();
    };

    const init = () => {
        let m = 0.01;
        timer = setInterval(() => {
            m += 0.002;
            if (m > 0.98) {
                m = 0.012;
            }
            instance.deleteEveryConnection();

            //连接图一和图二
            instance.connect({
                source: "flowChart1",//图一的id
                target: "flowChart2",//图二的id
                endpoint: ["Dot", {radius: 3}], //端点的形状设置为空
                connector: "Straight",
                anchor: ["Right", "Left"],//连接端点的位置，起始节点的右侧和结束节点的左侧
            });
            // //连接图一和图四
            instance.connect({
                source: "flowChart1",
                target: "flowChart4",
                endpoint: ["Dot", {radius: 3}], //端点的形状设置为空
                connector: "Straight",
                anchor: ["BottomRight", "TopLeft"],
            });
        }, 20);
    };
    /**
     * 连线对象有：
     * sourceId:'',
     * targetId:'',
     * anchor:'',
     * anchor 取值如下
     TopLeft      Top      TopRight
     Left        当前节点   Right
     BottomLeft  Bottom   BottomRight
     */
    useEffect(() => {
        init();
        window.addEventListener("resize", resize);
        return () => {
            clear();
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <div>
            <table className={'mapTable'} cellSpacing={20}>
                <tbody>
                <tr>
                    <td id={'flowChart1'}>1</td>
                    <td id={'flowChart2'}>2</td>
                </tr>
                <tr>
                    <td id={'flowChart3'}>3</td>
                    <td id={'flowChart4'}>99994</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};