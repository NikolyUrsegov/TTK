import React from 'react';
import s from './parallaxBanner.module.scss'
import banner from '../../assets/images/parallaxBaner.jpeg'
import {ParallaxBanner} from 'react-scroll-parallax';
import {ParallaxProvider} from 'react-scroll-parallax';
import {Fade} from "react-awesome-reveal";
import {Title} from "../title/main/Title";
import arrow1 from '../../assets/images/arrow1.png'
import arrow2 from '../../assets/images/arrow2.png'
import arrow3 from '../../assets/images/arrow3.png'
import {AdvantagesItem} from "../advantagesItemBanner/AdvantagesItem";

export const Banner = () => {
    return (
        <div className={s.block}>
            <ParallaxProvider>
                <ParallaxBanner
                    layers={[{image: banner, speed: -15}]}
                    style={{height: 420}}
                >
                    <div className={s.container}>
                        <Title title={'работать с нами'}/>
                        <div className={s.block}>
                            <AdvantagesItem
                                title={'ВЫГОДНО'}
                                descriptions={'Минимальные сроки поставки, выгодные и гибкие условия оплаты'}
                                direction={'left'}
                            />
                            <AdvantagesItem
                                title={'ПРОСТО'}
                                descriptions={'Вы делаете заказ на поставку продукции, мы разрабатываем оптимальное для Вас решение'}
                                direction={'up'}
                            />
                            <AdvantagesItem
                                title={'ЭФФЕКТИВНО'}
                                descriptions={'Вы получаете широкий спектр продукции от одного поставщика'}
                                direction={'right'}
                            />
                        </div>
                    </div>
                </ParallaxBanner>
            </ParallaxProvider>
        </div>
    );
};

