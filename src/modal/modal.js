import React from 'react';
import './style.css';

const Modal = (props) => {
    return (
        <>
            <div className='modalContainer'>
                <div className='modalBackDrop' onClick={() => props.closeModal(false)}></div>
                <div className='modalContent'>
                    <div className='modalHeader'>
                        <span onClick={() => props.closeModal(false)}>&#x274C;</span>
                    </div>
                    <div className='modalTitle'>
                        <h2>{props.title}</h2>
                    </div>
                    <div className='modalBody'>
                        <p>{props.description}</p>
                    </div>
                    <div className='modalFooter'>
                        <button className='modalCancel' onClick={() => props.closeModal(false)}>{props.cancle}</button>
                        <button className='modalCont'>{props.continue}</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Modal;