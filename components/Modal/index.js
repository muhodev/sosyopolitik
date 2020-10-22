import React from 'react'
import { Close } from "../Icons"

function Modal(props) {
    if (props.isOpen) {
        return (
            <div className="modal">
                <div className="modal__container">
                    <header className="modal__header">
                        <div className="banner__title">
                            {props.title}
                        </div>
                        <div className="modal__close" onClick={props.closeModal}>
                            <div className="modal__close--icon">
                                <Close />
                            </div>
                        </div>
                    </header>
                    {
                        props.children
                    }
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default Modal