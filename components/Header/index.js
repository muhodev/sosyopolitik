import React from 'react'
import { Logo } from '..'
import { headerItems } from '../../api'

function Header(props) {
    return (
        <header className="header">
            <div className="header__container">

                <div className="header__items">
                    <div className="header__item">
                        <Logo />
                    </div>
                </div>
                <div className="header__items">
                    {
                        headerItems.map((item, index) => (
                            <div className={`header__item ${index === 0 && "header__item--active"}`} key={index}>
                                <div className="header__item--icon">
                                    {item.icon}
                                </div>
                                <div className="header__item--text">
                                    {item.title}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </header>
    )
}

export default Header