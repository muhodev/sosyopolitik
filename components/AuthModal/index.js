import React, { useContext } from 'react'
import { Modal } from '../'

import AuthContext from "../../store/"

function AuthModal(props) {
    const contextData = useContext(AuthContext)
    return (
        <Modal title="Oturum Açın" isOpen={contextData.isAuthModalOpen} closeModal={() => contextData.toggleAuthModal(false)}>
            <form>
                <div className="input__control">
                    <label>
                        Kullanıcı adı
                    </label>
                    <input placeholder="Geçerli kullanıcı adınızı girin" />
                </div>
                <div className="input__control">
                    <label>
                        Şifre
                    </label>
                    <input placeholder="Şifreinizi girin" />
                </div>
                <div>
                    <div className="btn btn--primary">Giriş yap</div>
                </div>
            </form>
        </Modal>
    )
}

export default AuthModal