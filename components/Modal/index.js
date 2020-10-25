import styled from "styled-components"
import { Overlay } from ".."
import { Close } from "../Icons"

const ModalContainer = styled.div`
    border-radius: 4px;
    width: 33%;
    min-height: 80%;
    background-color: #fff;
`

const ModalHeader = styled.header`
    padding: 12px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: var(--border-100);
`

const ModalContent = styled.div`
    padding: 24px 20px;
`

function Modal({ children, isOpen, title, closeModal }) {
    if (isOpen) {
        return (
            <Overlay>
                <ModalContainer>
                    <ModalHeader>
                        <div className="banner__title">
                            {title}
                        </div>
                        <div className="modal__close" onClick={closeModal}>
                            <div className="modal__close--icon">
                                <Close />
                            </div>
                        </div>
                    </ModalHeader>
                    <ModalContent>
                        {children}
                    </ModalContent>
                </ModalContainer>
            </Overlay>
        )
    } else {
        return null
    }
}

export default Modal