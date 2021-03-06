import React from 'react';
import {styles} from './common_style.model.css'
import Mult from "../mult";
import {NavLink, Route, Routes} from "react-router-dom";
import NewMults from "../new_mults";
import TopMults from "../top_mults";
const MainPage = () => {
    return (
        <div className='main_content'>
            <NavLink to='/main/new' className="title_main">Новые мультфильмы</NavLink>
            <NavLink to='/main/top' className="title_main">Топ мультфильмов</NavLink>
            <Routes>

                <Route path="/new" element={<NewMults/>}/>
                <Route path="/top" element={<TopMults/>}/>
            </Routes>
        </div>
    );
};

export default MainPage;