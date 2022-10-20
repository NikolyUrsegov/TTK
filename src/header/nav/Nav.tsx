import React from 'react';
import s from './nav.module.scss'
import logo from '../../assets/images/LogoTTK.jpg'
import search from '../../assets/images/search.svg'

export const Nav = () => {
    return (
        <div className={s.block}>
            <div className={s.container}>
                <div className={s.blockNav}>
                    <div className={s.logo}>
                        <img src={logo} alt={'logo'}/>
                    </div>
                    <div className={s.nav}>
                        <a>КАТАЛОГ</a>
                        <a>ДОСТАВКА</a>
                        <a>О НАС</a>
                        <a>КОНТАКТЫ</a>
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

