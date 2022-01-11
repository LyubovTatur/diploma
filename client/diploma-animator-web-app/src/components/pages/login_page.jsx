import React from 'react';
import {styles} from './common_style.model.css'
const LoginPage = () => {
    return (
        <form>
            <div className="page_name">Вход</div>
            <label htmlFor="text">Логин</label>
            <input id='text' type='text'/>
            <label htmlFor="pass1">Пароль</label>
            <input id='pass1' type='password'/>
            <input id='btn' type="submit" value='Далее'/>

        </form>
    );
};

export default LoginPage;