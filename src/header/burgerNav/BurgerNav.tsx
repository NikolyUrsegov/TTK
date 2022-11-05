import React, {useState} from 'react';
import s from "./BurgerNav.module.scss";
import {NavLink} from "react-router-dom";
import logo from "../../assets/images/logoTTK.svg";
import {SearchBlock} from "../nav/searchBlock/SearchBlock";
import {Input} from "../../components/input/input";
import {ModalContainer} from "../../components/modal/ModalContainer";

type BurgerNavPropsType = {
    scroll: boolean
}

export const BurgerNav = () => {
    const [isOpenClose, setOpenClose] = useState(false)


    return (
        <>
            <div className={s.BurgerNav}>
                <div className={s.container}>
                    <div className={s.logo}>
                        <NavLink to={'/'}><img src={logo} alt={'logo'} className={s.lg}/></NavLink>
                    </div>
                    <div className={isOpenClose ? s.nav : `${s.nav} ${s.show}`}>
                        <div className={s.links}>
                            <NavLink to={'/catalog'}
                                     className={({isActive}) => isActive ? s.activeLink : undefined}
                                     onClick={() => setOpenClose(!isOpenClose)}
                            >КАТАЛОГ</NavLink>
                            <NavLink to={'/delivery'}
                                     onClick={() => setOpenClose(!isOpenClose)}
                                     className={({isActive}) => isActive ? s.activeLink : undefined}
                            >ДОСТАВКА</NavLink>
                            <NavLink to={'/about'}
                                     onClick={() => setOpenClose(!isOpenClose)}
                                     className={({isActive}) => isActive ? s.activeLink : undefined}
                            >О НАС</NavLink>
                            <NavLink to={'/contacts'}
                                     onClick={() => setOpenClose(!isOpenClose)}
                                     className={({isActive}) => isActive ? s.activeLink : undefined}
                            >КОНТАКТЫ</NavLink>
                        </div>
                        <div className={s.search}>
                            <Input search={''} onChange={() => {
                            }} onSearchClick={() => {
                            }}/>
                        </div>
                        <div className={s.info}>
                            <a href="tel:+79031517271">8(903) 151-72-71</a>
                            <a href="mailto:info@gammavector.ru">info@gammavector.ru</a>
                            <span>БЦ Эталон, Москва, ул.Большая Черкизовская 24а стр.1</span>
                        </div>
                        <ModalContainer>
                            <div className={s.ans}>
                                <a>УЗНАТЬ ЦЕНУ</a>
                            </div>
                        </ModalContainer>
                    </div>
                    <div className={s.toggleBtn}>
                        <span>меню</span>
                        <div className={s.smallNav} onClick={() => setOpenClose(!isOpenClose)}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

