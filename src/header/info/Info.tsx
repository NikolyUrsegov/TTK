import React from 'react';
import s from './info.module.scss'

export const Info = () => {
    return (
        <div className={s.block}>
            <div className={s.container}>
                <div className={s.loc}>
                    <span>Москва, ш. Алтуфьевское, д. 27, офис 216</span>
                </div>
                <div className={s.info}>
                    <a href="mailto:info@gammavector.ru">info@gammavector.ru</a>
                    <a href="tel:+79773361819">8(977) 336-18-19</a>
                </div>
            </div>
        </div>
    );
};

