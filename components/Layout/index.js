import React, { Fragment } from 'react'
import Head from "next/head"
import { Header } from '..'

function Layout(props) {
    return (
        <Fragment>
            <Head>
                <title>Sosyopolitik</title>
            </Head>
            <div className="layout">
                <div className="layout__container">
                    <Header />
                    {
                        props.children
                    }

                </div>
            </div>
        </Fragment>
    )
}

export default Layout