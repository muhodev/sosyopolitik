import React from 'react'
import { Logo } from '..'
import { headerItems } from '../../api'

function Header(props) {
    return (
        <header className="header">
            <div className="layout__container header__container">
                <div className="logo">
                    Sosyopolitik
                </div>
                <div className="header__items">
                    <div className="header__item">
                        Dünya
                    </div>
                    <div className="header__item">
                        Kültür
                    </div>
                    <div className="header__item">
                        Girişim
                    </div>
                    <div className="header__item">
                        Tarih
                    </div>
                    <div className="header__item">
                        Manifesto
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header