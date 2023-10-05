import React, {useState} from 'react'
import './App.css'
import {Link} from "react-router-dom";
import Router from "./router/index";
import NavComponent from "./components/NavComponent";


function App() {
    return (
        <>
            <NavComponent/>
            <Router/>
        </>
    )
}

export default App
