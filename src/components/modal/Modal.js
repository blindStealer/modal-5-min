import React from 'react';
import './Modal.css'
const Modal = ({children, modalActive, modalActiveHandler,propagationHandler}) => {


    return (
        <div onClick={ modalActiveHandler} className={modalActive ? 'modal active' : 'modal'}>
            <div onClick={propagationHandler} className="modal__content">
                {children}
            </div>
        </div>
    );
};

export default Modal;