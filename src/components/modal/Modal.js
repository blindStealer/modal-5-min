import React from 'react';
import './Modal.css'
const Modal = ({children, modalActive, modalActiveHandler}) => {


    return (
        <div className={modalActive ? 'modal active' : 'modal'}>
            <div className="modal__content">
                {children}
            </div>
        </div>
    );
};

export default Modal;