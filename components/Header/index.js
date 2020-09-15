import React from 'react'
import Link from 'next/link'
import { Logo } from '..'
import { headerItems } from '../../api'
import { Container } from '../'

function Header(props) {
    return (
        <header className="header">
            <Container flex spaceBetween>
                {
                    headerItems.map((items, index) => (
                        <HeaderItems items={items} key={index} />
                    ))
                }
            </Container>
        </header>
    )
}

function HeaderItems({ items }) {
    return (
        <div className="header__items">
            {
                items.map((item, index) => (
                    <HeaderItem title={item.title} slug={item.slug} key={index} />
                ))
            }
        </div>
    )
}

function HeaderItem(props) {
    { console.log(props) }
    return (
        <div className="header__item">
            {
                (
                    <Link href={"/" + props.slug}>
                        <a>
                            {props.title}
                        </a>
                    </Link>
                )
            }
        </div>
    )
}

export default Header