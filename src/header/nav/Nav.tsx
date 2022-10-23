import React from 'react';
import s from './nav.module.scss'
import logo from '../../assets/images/LogoTTK.jpg'
import search from '../../assets/images/search.svg'
import {NavLink} from "react-router-dom";

export const Nav = () => {
    return (
        <div className={s.block}>
            <div className={s.container}>
                <div className={s.blockNav}>
                    <div className={s.logo}>
                        <NavLink to={'/'}><img src={logo} alt={'logo'}/></NavLink>
                    </div>
                    <div className={s.nav}>
                        <NavLink to={'/catalog'} className={({isActive}) =>
                            isActive ? s.activeLink : undefined}
                        >КАТАЛОГ</NavLink>
                        <NavLink to={'/delivery'} className={({isActive}) => isActive ? s.activeLink : undefined }
                        >ДОСТАВКА</NavLink>
                        <NavLink to={'/about'} className={({ isActive }) => isActive ? s.activeLink : undefined}
                        >О НАС</NavLink>
                        <NavLink to={'/contacts'} className={({ isActive }) => isActive ? s.activeLink : undefined}
                        >КОНТАКТЫ</NavLink>
                    </div>
                </div>
                <div className={s.searchBlock}>
                    <div className={s.search}>
                        <input placeholder={'Что будем искать'}/>
                        <button>
                            <img src={search}/>
                        </button>
                    </div>
                    <div className={s.ans}>
                        <a>УЗНАТЬ ЦЕНУ</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

