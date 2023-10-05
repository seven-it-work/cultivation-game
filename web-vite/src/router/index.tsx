import {Route, Routes} from "react-router-dom";
import {NavRouter} from "./NavRouter";
export default function Router() {
    return (
        <div>
            <Routes>
                {
                    NavRouter.map((item, index) => (
                        <Route key={index} path={item.path} element={<item.element/>}/>
                    ))
                }
            </Routes>
        </div>
    )
}
