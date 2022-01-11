import React from 'react';
import {styles} from './common_style.model.css'

const RegisterPage = () => {
    return (
        <form>
            <div className="page_name">Регистрация</div>
            <label htmlFor="text">Логин</label>
            <input id='text' type='text'/>
            <label htmlFor="pass1">Пароль</label>
            <input id='pass1' type='password'/>
            <label htmlFor="pass2">Подтвердите пароль</label>
            <input id='pass2' type='password'/>
            <input id='btn' type="submit" value='Далее'/>
        </form>
    );
};

export default RegisterPage;