import React, {useState} from 'react';
import s from './nav.module.scss'
import logo from '../../assets/images/logoTTK.svg'
import searchIcn from '../../assets/images/search.svg'
import {NavLink, useNavigate} from "react-router-dom";

export const Nav = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState('')
    const onSearchClick = () => {
        navigate(`/search/${search}`)
        setSearch('')
    }

    return (
        <div className={s.block}>
            <div className={s.container}>
                <div className={s.blockNav}>
                    <div className={s.logo}>
                        <NavLink to={'/'}><img src={logo} alt={'logo'} className={s.lg}/></NavLink>
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
                        <input placeholder={'Что будем искать'}
                               onChange={(e) => setSearch(e.currentTarget.value)}
                               value={search}
                        />
                        <button  onClick={onSearchClick} disabled={!search}>
                            <img src={searchIcn}/>
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

