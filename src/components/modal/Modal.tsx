import React from 'react';
import s from './modal.module.scss'

interface IModal {
    backgroundOnClick?: () => void;
    modalOnClick?: () => void;
    children: React.ReactNode
    show: boolean
}

const Modal: React.FC<IModal> = (
    {
        backgroundOnClick = () => {},
        show,
        children,
    }
) => {
    const top = `calc(50vh - ${600 / 2}px)`;
    const left = `calc(50vw - ${500 / 2}px)`;

    if (!show) return null;

    console.log('render Modal');
    return (
        <>
            <div className={s.container} onClick={backgroundOnClick}/>
            <div
                className={s.modal}
                style={{
                    top,
                    left,
                }}
            >
                {children}
            </div>
        </>
    );
};

export default Modal;
