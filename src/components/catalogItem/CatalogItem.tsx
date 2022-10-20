import React from 'react';
import s from './catalogItem.module.scss'
import img from '../../assets/images/catalog/gidravlika.png'

type CatalogItemPropsType = {
    title: string
    img: string
}

export const CatalogItem: React.FC<CatalogItemPropsType> = ({title, img}) => {
    return (
        <div className={s.block}>
            <div className={s.content}>
                <div className={s.title}>
                    <span>{title}</span>
                </div>
                <img src={img}/>
            </div>
        </div>
    );
};

