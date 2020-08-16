import React from 'react'
import { Logo } from '..'
import { headerItems } from '../../api'

function Header(props) {
    return (
        <header className="header">
            <div className="header__container">

                <div>
                    <Logo />
                </div>
                <nav>

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
                </nav>
            </div>
        </header>
    )
}

export default Header