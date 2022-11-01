import React from 'react';
import s from './info.module.scss'

export const Info = () => {
    return (
        <div className={s.block}>
            <div className={s.container}>
                <div className={s.loc}>
                    <span>БЦ Эталон, Москва, ул.Большая Черкизовская 24а стр.1</span>
                </div>
                <div className={s.info}>
                    <a href="mailto:info@gammavector.ru">info@gammavector.ru</a>
                    <a href="tel:+79031517271">8(903) 151-72-71</a>
                </div>
            </div>
        </div>
    );
};

