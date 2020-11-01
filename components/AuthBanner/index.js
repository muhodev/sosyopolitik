import React, { useContext } from 'react'
import { Banner } from '../'
import { Title } from "../Typography"
import Link from "next/link"
import LayoutContext from "../../store"


function AuthBanner(props) {
    const contextData = useContext(LayoutContext)
    return (
        <Banner>
            <Title>
                Oku, üret, paylaş
            </Title>
            <div className="banner__description">
                Özgün içerikler üretmek için çalışan bu komuniteye katıl.
            </div>
            <footer className="banner__footer">
                <div className="btn-group">
                    <Link href="/">
                        <a className="btn btn--default">Kayıt ol</a>
                    </Link>
                    <div
                        onClick={() => contextData.toggleAuthModal(true)}
                    >
                        <div className="btn">Giriş yap</div>
                    </div>
                </div>
            </footer>
        </Banner>
    )
}

export default AuthBanner