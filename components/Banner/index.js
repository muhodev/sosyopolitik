import React from 'react'

function Banner(props) {
    return (
        <div className={`banner banner--${props.color || "default"}`}>
            <div className="banner__container">
                {
                    props.children
                }
            </div>
        </div>
    )
}

export default Banner