import React from 'react'
import { Banner } from '../'
import Link from "next/link"


function AuthBanner(props) {
    return (
        <Banner>
            <div className="banner__title">
                Oku, üret, paylaş
            </div>
            <div className="banner__description">
                Özgün içerikler üretmek için çalışan bu komuniteye katıl.
            </div>
            <footer className="banner__footer">
                <div className="btn-group">
                    <Link href="/">
                        <a className="btn btn--default">Kayıt ol</a>
                    </Link>
                    <Link href="/">
                        <a className="btn">Giriş yap</a>
                    </Link>
                </div>
            </footer>
        </Banner>
    )
}

export default AuthBanner