import React, {useState} from 'react'
import './App.css'
import {Route, Router, Routes, useRoutes} from "react-router-dom";
import NavComponent from "./components/NavComponent";
import {routes} from "./router/index";

function App() {
    const element = useRoutes(routes);
    return (
        <>
            <NavComponent/>
            {element}
        </>
    )
}

export default App
