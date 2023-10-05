import Home from "../views/Home";
import PersonalInformation from "../views/PersonalInformation";
import React from "react";

export const routes = [
    {
        path: '/',
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: 'mail',
                element: <PersonalInformation/>,
            },
        ]
    },
]