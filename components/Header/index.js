import React, { useState, useContext } from 'react'
import Link from 'next/link'
import { headerItems } from '../../api'
import { Container, Logo, HamburgerMenu } from '../'
import LayoutContext from "../../store"

function Header(props) {
    const [isOpenHeader, setOpenHeader] = useState(false)
    const contextData = useContext(LayoutContext)
    return (
        <header className="header">
            <Container flex spaceBetween>
                <div className="header__items">
                    <HeaderItem title={<Logo />} slug="/" />
                </div>

                <div className="header__items">
                    {
                        headerItems.map((item, index) => (
                            <HeaderItem title={item.title} slug={item.slug} key={index} />
                        ))
                    }
                    <div className="header__item" onClick={() => contextData.toggleAuthModal(true)}>
                        Giriş yap
                                </div>
                    <div className="header__item">
                        <HamburgerMenu isOpen={isOpenHeader} toggleHeader={() => setOpenHeader(!isOpenHeader)} />
                    </div>
                </div>
            </Container>
            <div className={`s-header__big ${isOpenHeader && "open"}`}>

            </div>
        </header>
    )
}

function HeaderItem(props) {
    return (
        <div className="header__item">
            {
                props.slug ? (
                    <Link href={props.slug}>
                        <a>
                            {props.title}
                        </a>
                    </Link>
                ) : props.title
            }
        </div>
    )
}

export default Header