import React from 'react';
import s from "./advantagesItem.module.scss";
import arrow1 from "../../assets/images/arrow1.png";
import  {Fade} from "react-awesome-reveal";

type AdvantagesItemPropsType = {
    title: string
    descriptions: string
    direction: "bottom-left" | "bottom-right" | "down" | "left" | "right" | "top-left" | "top-right" | "up"
}

export const AdvantagesItem: React.FC<AdvantagesItemPropsType> = ({title, direction,descriptions}) => {
    return (
        <div>
            <Fade direction={direction}>
                <div className={s.item}>
                    <img src={arrow1}/>
                    <div className={s.info}>
                        <h5>{title}</h5>
                        <span>{descriptions}</span>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

