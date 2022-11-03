import React from 'react';
import s from "../nav.module.scss";
import {ModalContainer} from "../../../components/modal/ModalContainer";
import searchIcn from '../../../assets/images/search.svg'


type SearchBlockPropsType = {
    search: string
    onChange: (value: string) => void
    onSearchClick: () => void
}

export const SearchBlock: React.FC<SearchBlockPropsType> = ({search, onChange, onSearchClick}) => {
    return (
        <div className={s.searchBlock}>
            <div className={s.search}>
                <input placeholder={'Что будем искать'}
                       onChange={(e) => onChange(e.currentTarget.value)}
                       value={search}
                />
                <button onClick={onSearchClick} disabled={!search}>
                    <img src={searchIcn}/>
                </button>
            </div>
            <ModalContainer>
                <div className={s.ans}>
                    <a>УЗНАТЬ ЦЕНУ</a>
                </div>
            </ModalContainer>
        </div>
    );
};

