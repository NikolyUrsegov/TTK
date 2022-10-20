import React from 'react';
import s from './main.module.scss'
import banner from '../assets/images/banner.png'
import {backgroundImg} from "../assets/utilits/utilitBg";
import {CatalogItem} from "../components/catalogItem/CatalogItem";
import gidravlika from '../assets/images/catalog/gidravlika.png'
import sensor from '../assets/images/catalog/sensor.png'
import kabels from '../assets/images/catalog/kabeln.jpeg'
import mechanics from '../assets/images/catalog/mechanics.png'
import spindle from '../assets/images/catalog/spindle.png'
import bearings from '../assets/images/catalog/bearings.png'
import couplings from '../assets/images/catalog/couplings.png'
import electricalEngineering from '../assets/images/catalog/electricalengineering.png'
import electroMotors from '../assets/images/catalog/electromotors.png'
import filters from '../assets/images/catalog/filters.png'
import pneumatics from '../assets/images/catalog/pneumatics.png'

export const Main = () => {
    return (
        <div className={s.block}>
            <div className={s.banner} style={backgroundImg(banner)}></div>
            <div className={s.container}>
                <div className={s.infoBlock}>
                    <h3>КОМПЛЕКТУЮЩИЕ</h3>
                    <span>На сегодняшний день наша компания является быстро развивающейся и работающей на формирование
                        положительного и добросовестного статуса поставщика комплектующих и запасных частей для
                        промышленного оборудования.</span>
                </div>
                <div className={s.content}>
                    <CatalogItem title={"гидравлика"} img={gidravlika}/>
                    <CatalogItem title={"датчики"} img={sensor}/>
                    <CatalogItem title={"кабельная продукция"} img={kabels}/>
                    <CatalogItem title={"механика"} img={mechanics}/>
                    <CatalogItem title={"муфты"} img={couplings}/>
                    <CatalogItem title={"пневматика"} img={pneumatics}/>
                    <CatalogItem title={"подшипники"} img={bearings}/>
                    <CatalogItem title={"фильтры"} img={filters}/>
                    <CatalogItem title={"шпиндели"} img={spindle}/>
                    <CatalogItem title={"электродвигатели"} img={electroMotors}/>
                    <CatalogItem title={"электротехника"} img={electricalEngineering}/>
                </div>

            </div>
        </div>
    );
};

