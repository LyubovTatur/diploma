import React from 'react';
import {styles} from "./header.model.css";
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <header>
            <NavLink className="site_name" to={'/main/new'}>Аниматор</NavLink>
            <NavLink to={'/reg'}>регистрация</NavLink>
            <NavLink to={'/log'}>вход</NavLink>
            <NavLink to={'/animation_creation'}>нарисовать мульт</NavLink>
        </header>
    );
};

export default Header;