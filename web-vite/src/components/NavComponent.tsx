import React, {useState} from 'react';
import {AppstoreOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Menu} from 'antd';
import {useNavigate} from "react-router-dom";

// 进入router去定义与key相同的路由
const items: MenuProps['items'] = [
    {
        label: '世界',
        key: '/',
        icon: <MailOutlined/>,
    },
    {
        label: '地图',
        key: '/mail',
        icon: <AppstoreOutlined/>,
    },
    {
        label: '个人信息',
        key: 'SubMenu',
        icon: <SettingOutlined/>,
        children: [
            {
                label: '属性',
                key: 'setting:1',
            },
            {
                label: '背包',
                key: 'setting:2',
            },
            {
                label: '关系',
                key: 'setting:2',
            },
            {
                label: '宗门',
                key: 'setting:2',
            },
        ],
    },
];

const NavComponent: React.FC = () => {
    const [current, setCurrent] = useState('mail');
    const navigate = useNavigate();

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        navigate(e.key)
        setCurrent(e.key);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}/>;
};

export default NavComponent;