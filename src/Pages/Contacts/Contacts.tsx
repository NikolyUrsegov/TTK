import React from 'react';
import {Title} from "../../components/title/main/Title";
import s from './Contacts.module.scss'
import {YandexMap} from "../../components/yandexMap/YandexMap";
import img from '../../assets/images/bg-contact.png'

export const Contacts = () => {

    return (
        <div className={s.block}>
            <div className={s.container}>
                <Title title={'контакты'}/>
                <div className={s.contacts}>
                    <div className={s.item}>
                        <div className={s.contact}>
                            <div className={s.infoBlock} style={{marginBottom: 24}}>
                                <h3>телефон:</h3>
                                <a href="tel:+79773361819">8(977) 336-18-19</a>
                                <a href="tel:+79031517271">8(903) 151-72-71</a>
                            </div>
                            <div className={s.infoBlock}>
                                <h3>почта:</h3>
                                <a href="mailto:info@gammavector.ru">info@gammavector.ru</a>
                            </div>
                        </div>
                    </div>
                    <YandexMap/>
                    <div className={s.blockContact}>
                        <img src={img}/>
                        <button className={s.btn}>написать нам</button>
                    </div>
                    <div className={s.item}>
                        <div className={s.contact}>
                            <div className={s.infoBlock}>
                                <h3>нас можно найти:</h3>
                                <span>Компания ООО «ТТК»</span>
                                <span>БЦ Эталон, Москва, ул.Большая Черкизовская 24а стр.1</span>
                                <button className={s.btn}>реквизиты</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

