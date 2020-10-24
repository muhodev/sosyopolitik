import React from 'react'
import styles from "./style.module.scss"

function Input(props) {
    return (
        <input
            id={props.id}
            type={props.type}
            className={styles.input}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
        />
    )
}

export default Input