import React from 'react';
import s from "./searchBlock.module.scss";
import {ModalContainer} from "../../../components/modal/ModalContainer";
import {Input} from "../../../components/input/input";
import {SuperInput} from "../../../components/superInput/SuperInput";


type SearchBlockPropsType = {
    search: string
    onChange: (value: string) => void
    onSearchClick: () => void
}

export const SearchBlock: React.FC<SearchBlockPropsType> = ({search, onChange, onSearchClick}) => {
    return (
        <div className={s.searchBlock}>
            <SuperInput search={search} onChange={onChange} onSearchClick={onSearchClick}/>
            <ModalContainer>
                <div className={s.block}>

                </div>
                <div className={s.ans}>
                    <a>УЗНАТЬ ЦЕНУ</a>
                </div>
            </ModalContainer>
        </div>
    );
};

