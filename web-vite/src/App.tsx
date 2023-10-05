import React, {useState} from 'react'
import './App.css'
import {Link} from "react-router-dom";
import Router from "./router/index";


function App() {
    return (
        <>
            <Link to="/"><h4>Home</h4></Link>
            <Link to="/view1"><h4>View1</h4></Link>
            <Router/>
        </>
    )
}

export default App
