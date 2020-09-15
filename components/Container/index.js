import React from 'react'

function Container(props) {
    let className = "s-container "
    if (props.flex) {
        className += "flex ";
    }
    if (props.spaceBetween) {
        className += "space-between "
    }
    return (
        <div className={className}>
            {props.children}
        </div>
    )
}

export default Container