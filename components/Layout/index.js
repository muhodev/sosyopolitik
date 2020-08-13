import React, { Fragment } from 'react'
import Head from "next/head"

function Layout(props) {
    return (
        <Fragment>
            <Head>
                <title>Sosyopolitik</title>
            </Head>
            {
                props.children
            }
        </Fragment>
    )
}

export default Layout