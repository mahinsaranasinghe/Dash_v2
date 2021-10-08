import React from 'react';
import * as icons from 'react-icons/ai';
import * as w_icons from 'react-icons/wi';
import * as f_icons from 'react-icons/fa';

export const sideBarData = [
    {
        tab_name: 'Home',
        redirect_path: '/',
        icon: <icons.AiFillHome/>,
        cName : 'nav-text'
    },
    {
        tab_name: 'Temperature',
        redirect_path: '/Temperature',
        icon: <f_icons.FaTemperatureHigh/>,
        cName : 'nav-text'
    },
    {
        tab_name: 'Humidity',
        redirect_path: '/Humidity',
        icon: <w_icons.WiHumidity/>,
        cName : 'nav-text'
    }
]

export default sideBarData;