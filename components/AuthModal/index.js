import React, { useContext, useState } from 'react'
import { Modal, Input, Label, PrimaryButton } from '..'

import AuthContext from "../../store"

function AuthModal(props) {
    const contextData = useContext(AuthContext)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const closeModal = () => {
        setUsername("")
        setPassword("")
        contextData.toggleAuthModal(false)
    }

    return (
        <Modal
            title="Oturum Açın"
            isOpen={contextData.isAuthModalOpen}
            closeModal={closeModal.bind(this)}
        >
            <form>
                <div className="input__control">
                    <Label>Kullanıcı Adı</Label>
                    <Input
                        placeholder="Geçerli bir kullanıcı adı girin"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                    />
                </div>
                <div className="input__control">
                    <Label>Şifre</Label>
                    <Input
                        placeholder="Şifreinizi girin"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                    />
                </div>
                <div>
                    <PrimaryButton>Giriş yap</PrimaryButton>
                </div>
            </form>
        </Modal>
    )
}

export default AuthModal