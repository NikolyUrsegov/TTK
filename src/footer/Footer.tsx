import React from 'react';
import s from './footer.module.scss'
import {TitleFooter} from "../components/title/footer/TitleFooter";
import {Link} from "react-router-dom";

export const Footer = () => {
    return (
        <footer>
            <div className={s.block}>
                <div className={s.container}>
                    <div className={s.contactsBlock}>
                        <TitleFooter title={'КОНТАКТЫ'}/>
                        <a href="mailto:info@gammavector.ru">info@gammavector.ru</a>
                        <a href="tel:+79773361819">8(977) 336-18-19</a>
                        <span>ПН - ПТ 8-19</span>
                    </div>
                    <div className={s.requisitesBlock}>
                        <TitleFooter title={'РЕКВИЗИТЫ'}/>
                        <span>Компания ООО «ТТК»</span>
                        <span> 127106, город Москва, Алтуфьевское шоссе, дом 27, офис 216</span>
                        <span>ИНН: 9715365020</span>
                        <span>КПП: 771501001</span>
                    </div>
                    <div className={s.catalogBlock}>
                        <TitleFooter title={'КАТАЛОГ'}/>
                        <div className={s.nav}>
                            <div className={s.linkItem}><a>Гидравлика</a></div>
                            <div className={s.linkItem}><a>Датчики</a></div>
                            <div className={s.linkItem}><a>Кабельная продукция</a></div>
                            <div className={s.linkItem}><a>Механика</a></div>
                            <div className={s.linkItem}><a>Муфты</a></div>
                            <div className={s.linkItem}><a>Пневматика</a></div>
                            <div className={s.linkItem}><a>Подшипники</a></div>
                            <div className={s.linkItem}><a>Фильтры</a></div>
                            <div className={s.linkItem}><a>Шпиндели</a></div>
                            <div className={s.linkItem}><a>Электродвигатели</a></div>
                            <div className={s.linkItem}><a>Электротехника</a></div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

