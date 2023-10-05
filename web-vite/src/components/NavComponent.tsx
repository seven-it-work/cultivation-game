import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import {NavItem,NavRouter,} from "../router/NavRouter";
import {useNavigate} from "react-router-dom";


const items: MenuProps['items'] =NavRouter;

const NavComponent: React.FC = () => {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e.keyPath);
        // useNavigate(e.path, { state: { object: object}})
        setCurrent(e.key);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default NavComponent;
