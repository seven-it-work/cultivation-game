import {Route, Routes} from "react-router-dom";
import Home from "../views/Home";
import App1 from "../apps/App1";

// 定义路由
const routeList = [
    {path: '/', title: '/', element: Home},
    {path: '/view1', title: 'page2', element: App1},
]

export default function Router() {
    return (
        <div>
            <Routes>
                {
                    routeList.map((item, index) => (
                        <Route key={index} path={item.path} element={<item.element/>}/>
                    ))
                }
            </Routes>
        </div>
    )
}
