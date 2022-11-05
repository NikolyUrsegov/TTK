import React, {useState} from 'react';
import Modal from "./Modal";
import s from "./formModal.module.scss";
import modalImg from "../../assets/images/modal.jpeg";

type RequisitesModalPropsType = {
    children?: React.ReactNode
}

export const RequisitesModal: React.FC<RequisitesModalPropsType> = ({children}) => {
    const [show, setShow] = useState(false);
    const closeModal = () => {
        setShow(false)
    }

    return (
        <>
            <div onClick={() => setShow(true)}>{children}</div>
            <Modal
                backgroundOnClick={closeModal}
                show={show}
            >
                <div className={s.container}>
                    <div className={s.head}>
                        <h5>Реквизиты</h5>
                        <button onClick={closeModal} className={s.closeBtn}>x</button>
                    </div>
                    <div className={s.block}>

                    </div>
                </div>
            </Modal>
        </>
    );
};

