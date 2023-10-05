// 导航router
import Home from "../views/Home";
import {ItemType, MenuDividerType, MenuItemGroupType, MenuItemType, SubMenuType} from "antd/es/menu/hooks/useItems";
import React from "react";
import {MenuProps} from "antd";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import PersonalInformation from "../views/PersonalInformation";


export type NavItem = ItemType & {
    path: string,
    element: () => JSX.Element
}



export const NavRouter: NavItem[] = [{
    path: '/',
    label: '标签1',
    key: 'mail',
    icon: <MailOutlined/>,
    element: Home
},{
    path: '/PersonalInformation',
    label: '个人信息',
    key: 'personalInformation',
    icon: <AppstoreOutlined/>,
    element: PersonalInformation
},]
