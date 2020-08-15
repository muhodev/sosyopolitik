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
                <Header />
                <main>
                    {
                        props.children
                    }
                </main>
                <aside></aside>
            </div>
        </Fragment>
    )
}

export default Layout