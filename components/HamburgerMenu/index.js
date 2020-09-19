import React from 'react'

function HamburgerMenu(props) {
    return (
        <div
            className="s-hamburger-menu"
            onClick={props.toggleHeader}
        >
            <div
                className={`s-hamburger-menu__icon ${props.isOpen ? "open" : ""}`}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
export default HamburgerMenu